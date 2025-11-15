/**
 * MindSignal Camera Lexicon Component
 * Displays cinematography techniques with filtering and search
 */

export class CameraLexicon {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.cameraTerms = [];
    this.filteredTerms = [];
    this.currentCategory = 'all';
    this.searchQuery = '';

    this.config = {
      showFilters: options.showFilters !== false,
      showSearch: options.showSearch !== false,
      enableCopy: options.enableCopy !== false,
      layout: options.layout || 'grid' // 'grid' or 'list'
    };

    this.categories = ['all', 'movement', 'framing', 'lens', 'special'];
  }

  // Load camera terms data
  async loadTerms(termsData) {
    this.cameraTerms = termsData;
    this.filteredTerms = [...this.cameraTerms];
    this.render();
  }

  // Set category filter
  setCategoryFilter(category) {
    this.currentCategory = category;
    this.applyFilters();
  }

  // Set search query
  setSearchQuery(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  // Apply all filters
  applyFilters() {
    let filtered = [...this.cameraTerms];

    // Category filter
    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(term => term.category === this.currentCategory);
    }

    // Search filter
    if (this.searchQuery) {
      filtered = filtered.filter(term =>
        term.name.toLowerCase().includes(this.searchQuery) ||
        term.desc.toLowerCase().includes(this.searchQuery) ||
        term.promptSnippet.toLowerCase().includes(this.searchQuery) ||
        term.useCases.toLowerCase().includes(this.searchQuery)
      );
    }

    this.filteredTerms = filtered;
    this.render();
  }

  // Render category badge
  getCategoryBadge(category) {
    const badges = {
      movement: '🎥',
      framing: '📐',
      lens: '🔍',
      special: '✨'
    };
    return badges[category] || '📹';
  }

  // Render single term card
  renderTermCard(term) {
    return `
      <div class="camera-term-card" data-category="${term.category}">
        <div class="term-header">
          <div class="term-name">
            <span class="category-badge">${this.getCategoryBadge(term.category)}</span>
            ${term.name}
          </div>
          <div class="term-category">${term.category}</div>
        </div>

        <div class="term-desc">${term.desc}</div>

        <div class="term-snippet">
          <strong style="color: var(--primary);">Prompt Snippet:</strong><br>
          <code style="background: var(--bg-dark); padding: 0.5rem; border-radius: 4px; display: block; margin-top: 0.5rem; color: var(--text-primary);">"${term.promptSnippet}"</code>
        </div>

        <div class="term-use-cases">
          <strong>Use Cases:</strong> ${term.useCases}
        </div>

        ${this.config.enableCopy ? `
          <div class="prompt-actions" style="margin-top: 1rem;">
            <button class="btn btn-secondary copy-btn" data-text="${this.escapeHtml(term.promptSnippet)}">
              Copy Snippet
            </button>
            <button class="btn btn-outline copy-full-btn" data-text="${this.escapeHtml(term.name + ': ' + term.desc)}">
              Copy Info
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Render category filter buttons
  renderCategoryFilters() {
    if (!this.config.showFilters) return '';

    return `
      <div class="camera-filters" style="margin-bottom: 2rem;">
        <div class="filter-buttons">
          ${this.categories.map(cat => `
            <button
              class="filter-btn ${cat === this.currentCategory ? 'active' : ''}"
              data-category="${cat}"
              onclick="window.cameraLexicon.setCategoryFilter('${cat}')"
            >
              ${cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              ${cat !== 'all' ? `(${this.cameraTerms.filter(t => t.category === cat).length})` : ''}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Render all terms
  render() {
    if (!this.container) return;

    let html = '';

    // Add filters
    html += this.renderCategoryFilters();

    // Check if filtered results exist
    if (this.filteredTerms.length === 0) {
      html += '<p class="text-center" style="color: var(--text-dim); padding: 2rem;">No camera terms found</p>';
      this.container.innerHTML = html;
      return;
    }

    // Add terms grid/list
    const layoutClass = this.config.layout === 'list' ? 'camera-lexicon-list' : 'camera-lexicon-grid';
    html += `<div class="${layoutClass}">`;
    html += this.filteredTerms.map(term => this.renderTermCard(term)).join('');
    html += '</div>';

    this.container.innerHTML = html;

    // Setup copy buttons
    if (this.config.enableCopy) {
      this.setupCopyButtons();
    }
  }

  // Setup copy to clipboard
  setupCopyButtons() {
    this.container.querySelectorAll('.copy-btn, .copy-full-btn').forEach(button => {
      button.addEventListener('click', async () => {
        const text = button.dataset.text;

        try {
          await navigator.clipboard.writeText(text);

          // Visual feedback
          const originalText = button.textContent;
          button.textContent = '✓ Copied!';
          const originalBg = button.style.background;
          button.style.background = 'var(--primary-dark)';

          setTimeout(() => {
            button.textContent = originalText;
            button.style.background = originalBg;
          }, 2000);

        } catch (err) {
          console.error('Failed to copy:', err);
          button.textContent = '❌ Failed';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        }
      });
    });
  }

  // Utility: Escape HTML
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Get stats by category
  getStats() {
    const stats = {
      total: this.cameraTerms.length,
      filtered: this.filteredTerms.length,
      byCategory: {}
    };

    this.categories.forEach(cat => {
      if (cat !== 'all') {
        stats.byCategory[cat] = this.cameraTerms.filter(t => t.category === cat).length;
      }
    });

    return stats;
  }

  // Get random term (useful for inspiration)
  getRandomTerm(category = null) {
    const terms = category
      ? this.cameraTerms.filter(t => t.category === category)
      : this.cameraTerms;

    return terms[Math.floor(Math.random() * terms.length)];
  }

  // Find terms by keyword
  findByKeyword(keyword) {
    const query = keyword.toLowerCase();
    return this.cameraTerms.filter(term =>
      term.name.toLowerCase().includes(query) ||
      term.desc.toLowerCase().includes(query) ||
      term.promptSnippet.toLowerCase().includes(query)
    );
  }
}

// Export as module
export default CameraLexicon;
