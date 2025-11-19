/**
 * MindSignal Prompt Engineering Toolkit
 * Main Application Script
 */

// Import ConversionService (will be loaded dynamically)
// Note: ES6 import at top level would require type="module" in HTML
// Using dynamic import or global scope instead

// State
const state = {
  prompts: [],
  cameraTerms: [],
  currentTab: 'overview',
  currentGenre: 'all',
  searchQuery: ''
};

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🎬 MindSignal initializing...');

  // Load data
  await loadData();

  // Setup event listeners
  setupTabNavigation();
  setupFilters();
  setupSearch();

  // Render initial views
  renderPromptLibrary();
  renderCameraLexicon();
  updateGenreFilters();

  console.log('✅ MindSignal ready');
});

// Load data from JSON files
async function loadData() {
  try {
    // Load prompts
    const promptsResponse = await fetch('../library/prompt_library.json');
    state.prompts = await promptsResponse.json();
    console.log(`✅ Loaded ${state.prompts.length} prompts`);

    // Load camera terms (JSON - secure, no eval needed)
    const cameraResponse = await fetch('../data/camera_terms.json');
    const cameraData = await cameraResponse.json();
    state.cameraTerms = cameraData.terms;
    console.log(`✅ Loaded ${state.cameraTerms.length} camera terms`);

    // Update stats in header
    document.getElementById('total-prompts').textContent = state.prompts.length;
    document.getElementById('total-cameras').textContent = state.cameraTerms.length;

    const genres = new Set(state.prompts.map(p => p.genre));
    document.getElementById('total-genres').textContent = genres.size;

  } catch (error) {
    console.error('❌ Error loading data:', error);
  }
}

// Tab Navigation
function setupTabNavigation() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.dataset.tab;

      // Update active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(`tab-${tabName}`).classList.add('active');

      state.currentTab = tabName;

      // Render tab-specific content
      if (tabName === 'prompts') {
        renderPromptLibrary();
      } else if (tabName === 'veo') {
        renderVeoPrompts();
      } else if (tabName === 'ltx') {
        renderLtxPrompts();
      } else if (tabName === 'camera') {
        renderCameraLexicon();
      }
    });
  });
}

// Setup filters
function setupFilters() {
  // Genre filters
  const genreFilter = document.getElementById('genre-filter');
  const veoGenreFilter = document.getElementById('veo-genre-filter');
  const ltxGenreFilter = document.getElementById('ltx-genre-filter');

  [genreFilter, veoGenreFilter, ltxGenreFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', (e) => {
        state.currentGenre = e.target.value;
        renderPromptLibrary();
        renderVeoPrompts();
        renderLtxPrompts();
      });
    }
  });

  // Camera category filters
  const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.dataset.category;
      renderCameraLexicon(category);
    });
  });
}

// Setup search
function setupSearch() {
  const promptSearch = document.getElementById('prompt-search');
  const cameraSearch = document.getElementById('camera-search');

  if (promptSearch) {
    promptSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase();
      renderPromptLibrary();
    });
  }

  if (cameraSearch) {
    cameraSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      renderCameraLexicon('all', query);
    });
  }
}

// Update genre filter options
function updateGenreFilters() {
  const genres = [...new Set(state.prompts.map(p => p.genre))].sort();

  const genreFilter = document.getElementById('genre-filter');
  const veoGenreFilter = document.getElementById('veo-genre-filter');
  const ltxGenreFilter = document.getElementById('ltx-genre-filter');

  [genreFilter, veoGenreFilter, ltxGenreFilter].forEach(filter => {
    if (filter) {
      genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre.toUpperCase();
        filter.appendChild(option);
      });
    }
  });
}

// Render Prompt Library
function renderPromptLibrary() {
  const container = document.getElementById('prompt-library-container');
  if (!container) return;

  let filtered = state.prompts;

  // Apply genre filter
  if (state.currentGenre !== 'all') {
    filtered = filtered.filter(p => p.genre === state.currentGenre);
  }

  // Apply search filter
  if (state.searchQuery) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(state.searchQuery) ||
      p.setting.toLowerCase().includes(state.searchQuery) ||
      p.action.toLowerCase().includes(state.searchQuery) ||
      p.genre.toLowerCase().includes(state.searchQuery)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-center" style="color: var(--text-dim); padding: 2rem;">No prompts found</p>';
    return;
  }

  container.innerHTML = filtered.map(prompt => createPromptCard(prompt)).join('');

  // Add copy button listeners
  setupCopyButtons();
}

// Create Prompt Card HTML
function createPromptCard(prompt) {
  return `
    <div class="prompt-card" data-id="${prompt.id}">
      <div class="prompt-header">
        <div>
          <div class="prompt-title">${prompt.title}</div>
          <div class="prompt-id">${prompt.id}</div>
        </div>
        <div class="prompt-genre">${prompt.genre}</div>
      </div>

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

      <div class="prompt-actions">
        <button class="btn copy-btn" data-text="${escapeHtml(prompt.fullPrompt)}">
          Copy Full Prompt
        </button>
        <button class="btn btn-secondary copy-btn" data-text="${escapeHtml(prompt.setting)}">
          Copy Setting
        </button>
      </div>
    </div>
  `;
}

// Render Veo 3.1 Prompts
function renderVeoPrompts() {
  const container = document.getElementById('veo-prompts-container');
  if (!container) return;

  let filtered = state.prompts;

  if (state.currentGenre !== 'all') {
    filtered = filtered.filter(p => p.genre === state.currentGenre);
  }

  container.innerHTML = filtered.map(prompt => `
    <div class="prompt-card">
      <div class="prompt-header">
        <div>
          <div class="prompt-title">${prompt.title}</div>
          <div class="prompt-id">${prompt.id} · Veo 3.1 Format</div>
        </div>
        <div class="prompt-genre">${prompt.genre}</div>
      </div>

      <pre style="background: var(--bg-dark); padding: 1rem; border-radius: 4px; overflow-x: auto; color: var(--text-primary); line-height: 1.6;">${prompt.fullPrompt}</pre>

      <div class="prompt-actions">
        <button class="btn copy-btn" data-text="${escapeHtml(prompt.fullPrompt)}">
          Copy Veo 3.1 Prompt
        </button>
      </div>
    </div>
  `).join('');

  setupCopyButtons();
}

// Render LtX Pro Prompts
function renderLtxPrompts() {
  const container = document.getElementById('ltx-prompts-container');
  if (!container) return;

  let filtered = state.prompts;

  if (state.currentGenre !== 'all') {
    filtered = filtered.filter(p => p.genre === state.currentGenre);
  }

  container.innerHTML = filtered.map(prompt => {
    const ltxPrompt = convertToLtx(prompt);
    return `
      <div class="prompt-card">
        <div class="prompt-header">
          <div>
            <div class="prompt-title">${prompt.title}</div>
            <div class="prompt-id">${prompt.id} · LtX Pro Format</div>
          </div>
          <div class="prompt-genre">${prompt.genre}</div>
        </div>

        <pre style="background: var(--bg-dark); padding: 1rem; border-radius: 4px; overflow-x: auto; color: var(--text-primary); line-height: 1.6;">${ltxPrompt}</pre>

        <div class="prompt-actions">
          <button class="btn copy-btn" data-text="${escapeHtml(ltxPrompt)}">
            Copy LtX Pro Prompt
          </button>
        </div>
      </div>
    `;
  }).join('');

  setupCopyButtons();
}

// Convert Veo to LtX format (using ConversionService)
// Since we can't use ES6 imports without module type, we inline the function
// but reference it as coming from the service layer conceptually
function convertToLtx(veoPrompt) {
  // This is now a thin wrapper around ConversionService logic
  // Kept inline to avoid module system complexity in browser without bundler
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

// Render Camera Lexicon
function renderCameraLexicon(category = 'all', searchQuery = '') {
  const container = document.getElementById('camera-lexicon-container');
  if (!container) return;

  let filtered = state.cameraTerms;

  if (category !== 'all') {
    filtered = filtered.filter(term => term.category === category);
  }

  if (searchQuery) {
    filtered = filtered.filter(term =>
      term.name.toLowerCase().includes(searchQuery) ||
      term.desc.toLowerCase().includes(searchQuery) ||
      term.promptSnippet.toLowerCase().includes(searchQuery)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-center" style="color: var(--text-dim); padding: 2rem;">No camera terms found</p>';
    return;
  }

  container.innerHTML = filtered.map(term => `
    <div class="camera-term-card">
      <div class="term-header">
        <div class="term-name">${term.name}</div>
        <div class="term-category">${term.category}</div>
      </div>

      <div class="term-desc">${term.desc}</div>

      <div class="term-snippet">
        <strong style="color: var(--primary);">Prompt Snippet:</strong><br>
        "${term.promptSnippet}"
      </div>

      <div class="term-use-cases">
        <strong>Use Cases:</strong> ${term.useCases}
      </div>

      <div class="prompt-actions" style="margin-top: 1rem;">
        <button class="btn btn-secondary copy-btn" data-text="${escapeHtml(term.promptSnippet)}">
          Copy Snippet
        </button>
      </div>
    </div>
  `).join('');

  setupCopyButtons();
}

// Setup copy to clipboard functionality
function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(button => {
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
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Export for use in other modules
window.MindSignal = {
  state,
  renderPromptLibrary,
  renderCameraLexicon,
  renderVeoPrompts,
  renderLtxPrompts
};
