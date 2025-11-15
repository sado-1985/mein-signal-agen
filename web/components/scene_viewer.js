/**
 * MindSignal Scene Viewer Component
 * Displays and manages scene index with genre navigation
 */

export class SceneViewer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.sceneIndex = null;
    this.currentGenre = null;
    this.prompts = [];

    this.config = {
      showStats: options.showStats !== false,
      showGenreCards: options.showGenreCards !== false,
      enableNavigation: options.enableNavigation !== false
    };
  }

  // Load scene index data
  async loadSceneIndex(sceneIndexData) {
    this.sceneIndex = sceneIndexData;
    this.render();
  }

  // Load prompts for scene details
  async loadPrompts(promptsData) {
    this.prompts = promptsData;
    if (this.currentGenre) {
      this.renderGenreDetails(this.currentGenre);
    }
  }

  // Set active genre
  setActiveGenre(genreName) {
    this.currentGenre = genreName;
    this.renderGenreDetails(genreName);
  }

  // Get genre data
  getGenre(genreName) {
    if (!this.sceneIndex || !this.sceneIndex.genres) return null;
    return this.sceneIndex.genres[genreName];
  }

  // Render genre overview card
  renderGenreCard(genreName, genreData) {
    const promptCount = this.prompts.filter(p => p.genre === genreName).length;

    return `
      <div class="genre-card" data-genre="${genreName}" onclick="window.sceneViewer.setActiveGenre('${genreName}')">
        <div class="genre-card-header">
          <h3>${genreName.toUpperCase()}</h3>
          <span class="genre-count">${promptCount} prompts</span>
        </div>

        <p class="genre-description">${genreData.description}</p>

        <div class="genre-keywords">
          ${genreData.keywords.slice(0, 5).map(kw => `<span class="keyword-tag">${kw}</span>`).join('')}
        </div>

        ${this.config.enableNavigation ? `
          <button class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
            Explore ${genreName}
          </button>
        ` : ''}
      </div>
    `;
  }

  // Render stats overview
  renderStats() {
    if (!this.config.showStats || !this.sceneIndex) return '';

    const totalGenres = Object.keys(this.sceneIndex.genres || {}).length;
    const totalPrompts = this.prompts.length;
    const avgPerGenre = totalPrompts > 0 ? Math.round(totalPrompts / totalGenres) : 0;

    return `
      <div class="scene-stats">
        <div class="stat-card">
          <div class="stat-value">${totalGenres}</div>
          <div class="stat-label">Genres</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalPrompts}</div>
          <div class="stat-label">Total Prompts</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${avgPerGenre}</div>
          <div class="stat-label">Avg per Genre</div>
        </div>
      </div>
    `;
  }

  // Render genre overview (all genres)
  renderGenreOverview() {
    if (!this.sceneIndex || !this.sceneIndex.genres) {
      return '<p>Loading scene index...</p>';
    }

    let html = '';

    // Stats
    html += this.renderStats();

    // Genre cards
    if (this.config.showGenreCards) {
      html += '<div class="genres-grid">';
      Object.entries(this.sceneIndex.genres).forEach(([name, data]) => {
        html += this.renderGenreCard(name, data);
      });
      html += '</div>';
    }

    return html;
  }

  // Render genre details (specific genre)
  renderGenreDetails(genreName) {
    const genre = this.getGenre(genreName);
    if (!genre) {
      this.container.innerHTML = '<p>Genre not found</p>';
      return;
    }

    const genrePrompts = this.prompts.filter(p => p.genre === genreName);

    let html = `
      <div class="genre-details">
        <div class="genre-details-header">
          ${this.config.enableNavigation ? `
            <button class="btn btn-outline" onclick="window.sceneViewer.showOverview()">
              ← Back to Genres
            </button>
          ` : ''}
          <h2>${genreName.toUpperCase()}</h2>
        </div>

        <div class="genre-meta">
          <p class="genre-description">${genre.description}</p>

          <div class="genre-info-grid">
            <div class="info-item">
              <strong>Keywords:</strong>
              <div class="genre-keywords">
                ${genre.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join('')}
              </div>
            </div>

            <div class="info-item">
              <strong>Prompts:</strong> ${genrePrompts.length}
            </div>

            <div class="info-item">
              <strong>Last Updated:</strong> ${genre.lastUpdated || 'N/A'}
            </div>
          </div>
        </div>

        <div class="genre-prompts-section">
          <h3>Prompts in this Genre</h3>
          <div class="prompts-list">
            ${genrePrompts.map(prompt => this.renderPromptPreview(prompt)).join('')}
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  // Render prompt preview (compact)
  renderPromptPreview(prompt) {
    return `
      <div class="prompt-preview" data-id="${prompt.id}">
        <div class="prompt-preview-header">
          <strong>${prompt.title}</strong>
          <span class="prompt-id">${prompt.id}</span>
        </div>
        <p class="prompt-preview-text">${prompt.setting.substring(0, 100)}...</p>
      </div>
    `;
  }

  // Show overview
  showOverview() {
    this.currentGenre = null;
    this.render();
  }

  // Main render
  render() {
    if (!this.container) return;

    if (this.currentGenre) {
      this.renderGenreDetails(this.currentGenre);
    } else {
      this.container.innerHTML = this.renderGenreOverview();
    }
  }

  // Get genre stats
  getGenreStats(genreName) {
    const genrePrompts = this.prompts.filter(p => p.genre === genreName);

    return {
      totalPrompts: genrePrompts.length,
      avgSettingLength: genrePrompts.reduce((sum, p) => sum + p.setting.length, 0) / genrePrompts.length,
      cameraStyles: [...new Set(genrePrompts.map(p => p.cameraStyle.split(',')[0].trim()))],
      keywords: this.getGenre(genreName)?.keywords || []
    };
  }

  // Search across all genres
  searchScenes(query) {
    const queryLower = query.toLowerCase();
    const results = [];

    Object.entries(this.sceneIndex.genres || {}).forEach(([genreName, genreData]) => {
      // Check if genre matches
      if (
        genreName.toLowerCase().includes(queryLower) ||
        genreData.description.toLowerCase().includes(queryLower) ||
        genreData.keywords.some(kw => kw.toLowerCase().includes(queryLower))
      ) {
        results.push({
          type: 'genre',
          name: genreName,
          data: genreData
        });
      }
    });

    return results;
  }
}

// Export as module
export default SceneViewer;
