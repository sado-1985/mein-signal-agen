/**
 * MindSignal Prompt Viewer Component
 * Displays and manages prompt cards with filtering and search
 */

export class PromptViewer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.prompts = [];
    this.filteredPrompts = [];
    this.currentGenre = 'all';
    this.searchQuery = '';
    this.format = options.format || 'veo31'; // 'veo31' or 'ltx'

    this.config = {
      showFilters: options.showFilters !== false,
      showSearch: options.showSearch !== false,
      cardsPerPage: options.cardsPerPage || 20,
      enableCopy: options.enableCopy !== false
    };
  }

  // Load prompts data
  async loadPrompts(promptsData) {
    this.prompts = promptsData;
    this.filteredPrompts = [...this.prompts];
    this.render();
  }

  // Set genre filter
  setGenreFilter(genre) {
    this.currentGenre = genre;
    this.applyFilters();
  }

  // Set search query
  setSearchQuery(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  // Apply all filters
  applyFilters() {
    let filtered = [...this.prompts];

    // Genre filter
    if (this.currentGenre !== 'all') {
      filtered = filtered.filter(p => p.genre === this.currentGenre);
    }

    // Search filter
    if (this.searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(this.searchQuery) ||
        p.setting.toLowerCase().includes(this.searchQuery) ||
        p.action.toLowerCase().includes(this.searchQuery) ||
        p.genre.toLowerCase().includes(this.searchQuery)
      );
    }

    this.filteredPrompts = filtered;
    this.render();
  }

  // Convert Veo to LtX format
  // Note: Uses same logic as ConversionService for consistency
  // Kept as method to maintain component encapsulation
  convertToLtx(veoPrompt) {
    const cameraStyleParts = veoPrompt.cameraStyle.split(',').map(s => s.trim());
    const framing = cameraStyleParts[0] || 'medium shot';
    const styleParts = cameraStyleParts.slice(1);
    const outputParts = veoPrompt.output.split(',').map(s => s.trim());
    const style = [...styleParts, ...outputParts].join(', ');

    return `[Description]
${veoPrompt.setting}

[Motion]
${veoPrompt.action}

[Framing]
${framing}

[Cinematic Style]
${style}`;
  }

  // Render prompt card
  renderPromptCard(prompt) {
    const displayPrompt = this.format === 'ltx' ? this.convertToLtx(prompt) : prompt.fullPrompt;
    const formatLabel = this.format === 'ltx' ? 'LtX Pro' : 'Veo 3.1';

    return `
      <div class="prompt-card" data-id="${prompt.id}">
        <div class="prompt-header">
          <div>
            <div class="prompt-title">${prompt.title}</div>
            <div class="prompt-id">${prompt.id} · ${formatLabel}</div>
          </div>
          <div class="prompt-genre">${prompt.genre}</div>
        </div>

        ${this.format === 'veo31' ? `
          <div class="prompt-section">
            <span class="section-label">Setting</span>
            <div class="section-content">${prompt.setting}</div>
          </div>

          <div class="prompt-section">
            <span class="section-label">Action</span>
            <div class="section-content">${prompt.action}</div>
          </div>

          <div class="prompt-section">
            <span class="section-label">Camera & Style</span>
            <div class="section-content">${prompt.cameraStyle}</div>
          </div>

          <div class="prompt-section">
            <span class="section-label">Output</span>
            <div class="section-content">${prompt.output}</div>
          </div>
        ` : `
          <pre style="background: var(--bg-dark); padding: 1rem; border-radius: 4px; overflow-x: auto; color: var(--text-primary); line-height: 1.6; white-space: pre-wrap;">${this.escapeHtml(displayPrompt)}</pre>
        `}

        ${this.config.enableCopy ? `
          <div class="prompt-actions">
            <button class="btn copy-btn" data-text="${this.escapeHtml(displayPrompt)}">
              Copy ${formatLabel} Prompt
            </button>
            ${this.format === 'veo31' ? `
              <button class="btn btn-secondary copy-btn" data-text="${this.escapeHtml(prompt.setting)}">
                Copy Setting
              </button>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }

  // Render all prompts
  render() {
    if (!this.container) return;

    if (this.filteredPrompts.length === 0) {
      this.container.innerHTML = '<p class="text-center" style="color: var(--text-dim); padding: 2rem;">No prompts found</p>';
      return;
    }

    const html = this.filteredPrompts.map(prompt => this.renderPromptCard(prompt)).join('');
    this.container.innerHTML = html;

    // Setup copy buttons
    if (this.config.enableCopy) {
      this.setupCopyButtons();
    }
  }

  // Setup copy to clipboard
  setupCopyButtons() {
    this.container.querySelectorAll('.copy-btn').forEach(button => {
      button.addEventListener('click', async () => {
        const text = button.dataset.text;

        try {
          await navigator.clipboard.writeText(text);

          // Visual feedback
          const originalText = button.textContent;
          button.textContent = '✓ Copied!';
          button.style.background = 'var(--primary-dark)';

          setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
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

  // Get current stats
  getStats() {
    return {
      total: this.prompts.length,
      filtered: this.filteredPrompts.length,
      genres: [...new Set(this.prompts.map(p => p.genre))].length
    };
  }
}

// Export as module
export default PromptViewer;
