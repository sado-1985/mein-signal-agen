# MindSignal Architecture Documentation

## Overview

MindSignal ist ein modulares Prompt-Engineering Toolkit für KI-Video-Generierung mit Veo 3.1 und LtX Pro. Die Architektur folgt einem klaren Trennung-der-Anliegen-Prinzip mit data-driven Design.

## System Architecture

```
mein-signal-agen/
├── data/           # Core data structures & templates
├── library/        # Prompt collections & exports
├── prompts/        # Generated prompt files
├── tools/          # Node.js production scripts
├── web/            # Frontend application
└── docs/           # Documentation
```

## Core Components

### 1. Data Layer (`/data`)

**Purpose:** Zentrale Datenstrukturen und Template-System

**Files:**
- `camera_terms.js` - Cinematography lexicon (28 terms)
- `prompt_templates.js` - Veo 3.1 & LtX Pro template system
- `scene_index.json` - Genre registry & metadata

**Design Pattern:** ES6 modules mit export/import

```javascript
// camera_terms.js structure
export const cameraTerms = [
  {
    id: "dolly_zoom",
    name: "Dolly Zoom (Vertigo Effect)",
    desc: "Description...",
    promptSnippet: "Prompt snippet...",
    category: "movement",
    useCases: "Use cases..."
  }
];
```

**Key Features:**
- Immutable data structures
- Categorized organization (movement, framing, lens, special)
- Prompt snippet system for easy composition

### 2. Library Layer (`/library`)

**Purpose:** Prompt collections mit mehreren Export-Formaten

**Files:**
- `prompt_library.json` - 100 prompts across 10 genres (primary source)
- `prompt_library.md` - Markdown reference version
- `shotlist_*.csv` - Production shotlists (generated)
- `prompt_sheet.html` - Interactive reference sheet (generated)

**Prompt Structure:**
```json
{
  "id": "ACTION_001",
  "genre": "action",
  "title": "Urban Chase Scene",
  "setting": "Night-time city street...",
  "action": "Character runs through...",
  "cameraStyle": "Tracking shot, handheld...",
  "output": "4K, cinematic color grade...",
  "fullPrompt": "[Setting]\n...\n\n[Action]\n..."
}
```

**Genre Coverage:**
- action (10)
- thriller (10)
- scifi (10)
- commercial (10)
- city (10)
- drama (10)
- documentary (10)
- mma_sport (10)
- fantasy (10)
- horror (10)

### 3. Prompts Layer (`/prompts`)

**Purpose:** Individual prompt files für Batch-Processing

**Structure:**
```
prompts/
├── veo3_1/
│   ├── ACTION_001.json
│   ├── THRILLER_001.json
│   └── ...
├── ltx/
│   ├── ACTION_001.json
│   ├── THRILLER_001.json
│   └── ...
└── index_*.json (generated indices)
```

**Generation:** Via `tools/generate_prompts.js`

### 4. Tools Layer (`/tools`)

**Purpose:** Node.js production utilities für Workflow-Automation

#### 4.1 `generate_prompts.js`
- **Function:** Generiert individuelle Prompt-Dateien aus Library
- **Input:** `library/prompt_library.json`
- **Output:** `prompts/veo3_1/*.json`, `prompts/ltx/*.json`
- **Usage:** `node tools/generate_prompts.js`

#### 4.2 `normalize_prompts.js`
- **Function:** Konvertiert raw text → strukturierte Veo 3.1 Prompts
- **Modes:** Interactive CLI oder file processing
- **Input:** Text file oder stdin
- **Output:** Normalized JSON + TXT
- **Usage:** `node tools/normalize_prompts.js <file>` oder interactive

#### 4.3 `scene_to_prompt.js`
- **Function:** Markdown scene descriptions → Veo/LtX prompts
- **Input:** Scene file (.md oder .txt)
- **Output:** JSON + TXT für beide Formate
- **Usage:** `node tools/scene_to_prompt.js scene.md`

#### 4.4 `export_prompt_sheet.js`
- **Function:** Generiert HTML & Markdown Reference Sheets
- **Output:** `prompt_sheet.html`, `prompt_quickref.md`
- **Features:** Copy buttons, table of contents, genre navigation
- **Usage:** `node tools/export_prompt_sheet.js`

#### 4.5 `build_shotlist.js`
- **Function:** CSV shotlists für Produktionsplanung
- **Output:**
  - `shotlist_main.csv` - Overview
  - `shotlist_detailed.csv` - Full prompts
  - `shotlist_<genre>.csv` - Genre-specific
  - `shotlist_summary.json` - Metadata
- **Usage:** `node tools/build_shotlist.js`

### 5. Web Layer (`/web`)

**Purpose:** Browser-basiertes Dashboard für Prompt-Management

#### 5.1 Application Structure

```
web/
├── index.html      # Main SPA structure
├── styles.css      # Dark theme styling
├── app.js          # State management & rendering
└── components/     # Modular UI components
    ├── prompt_viewer.js
    ├── camera_lexicon.js
    └── scene_viewer.js
```

#### 5.2 State Management (`app.js`)

```javascript
const state = {
  prompts: [],        // Loaded from library/prompt_library.json
  cameraTerms: [],    // Loaded from data/camera_terms.js
  currentTab: 'overview',
  currentGenre: 'all',
  searchQuery: ''
};
```

**Data Flow:**
1. `loadData()` → Fetch JSON files
2. User interaction → Update state
3. State change → Re-render UI
4. No external state management library (vanilla JS)

#### 5.3 Component System

**PromptViewer Component:**
```javascript
import { PromptViewer } from './components/prompt_viewer.js';

const viewer = new PromptViewer('container-id', {
  format: 'veo31',      // 'veo31' or 'ltx'
  showFilters: true,
  enableCopy: true
});

await viewer.loadPrompts(promptsData);
viewer.setGenreFilter('action');
```

**CameraLexicon Component:**
```javascript
import { CameraLexicon } from './components/camera_lexicon.js';

const lexicon = new CameraLexicon('container-id', {
  layout: 'grid',       // 'grid' or 'list'
  showFilters: true
});

await lexicon.loadTerms(cameraTermsData);
lexicon.setCategoryFilter('movement');
```

**SceneViewer Component:**
```javascript
import { SceneViewer } from './components/scene_viewer.js';

const viewer = new SceneViewer('container-id', {
  showStats: true,
  enableNavigation: true
});

await viewer.loadSceneIndex(sceneIndexData);
viewer.setActiveGenre('action');
```

#### 5.4 UI Architecture

**Tab System:**
- Overview - Welcome & stats
- Prompt Library - Browsable Veo 3.1 prompts
- Veo 3.1 - Format-specific view
- LtX Pro - Converted format view
- Camera Lexicon - Cinematography techniques
- Tools - CLI tools documentation

**Features:**
- Real-time search & filtering
- Genre-based navigation
- Copy-to-clipboard (Clipboard API)
- Format conversion (Veo ↔ LtX)
- Responsive grid layout
- Dark theme (#00ff88 accent)

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Data Sources                       │
├─────────────────────────────────────────────────────┤
│  camera_terms.js  │  prompt_templates.js  │         │
│  scene_index.json │  prompt_library.json  │         │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│                 Processing Layer                     │
├─────────────────────────────────────────────────────┤
│  Node.js Tools:                                      │
│  • generate_prompts.js    → Individual files        │
│  • normalize_prompts.js   → Structure raw text      │
│  • scene_to_prompt.js     → Convert scenes          │
│  • export_prompt_sheet.js → HTML/MD export          │
│  • build_shotlist.js      → CSV production files    │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│                   Output Layer                       │
├─────────────────────────────────────────────────────┤
│  • prompts/veo3_1/*.json                            │
│  • prompts/ltx/*.json                               │
│  • library/shotlist_*.csv                           │
│  • library/prompt_sheet.html                        │
│  • Web dashboard (real-time)                        │
└─────────────────────────────────────────────────────┘
```

## Template System Architecture

### Veo 3.1 Template

```javascript
const Veo31Template = {
  setting: "",
  action: "",
  cameraStyle: "",
  output: "",

  buildPrompt(template) {
    return `[Setting]\n${template.setting}\n\n[Action]\n${template.action}\n\n[Camera & Style]\n${template.cameraStyle}\n\n[Output]\n${template.output}`;
  },

  parsePrompt(promptText) {
    // Extract sections from formatted prompt
    // Returns { setting, action, cameraStyle, output }
  }
};
```

### LtX Pro Template

```javascript
const LtxTemplate = {
  description: "",
  motion: "",
  framing: "",
  style: "",

  buildPrompt(template) {
    return `[Description]\n${template.description}\n\n[Motion]\n${template.motion}\n\n[Framing]\n${template.framing}\n\n[Cinematic Style]\n${template.style}`;
  }
};
```

### Conversion Functions

```javascript
// Veo 3.1 → LtX Pro
convertVeoToLtx(veoPrompt) {
  const framing = veoPrompt.cameraStyle.split(',')[0];
  const style = veoPrompt.cameraStyle.split(',').slice(1).join(', ');

  return {
    description: veoPrompt.setting,
    motion: veoPrompt.action,
    framing: framing,
    style: style + ', ' + veoPrompt.output
  };
}

// LtX Pro → Veo 3.1
convertLtxToVeo(ltxPrompt) {
  return {
    setting: ltxPrompt.description,
    action: ltxPrompt.motion,
    cameraStyle: ltxPrompt.framing + ', ' + ltxPrompt.style,
    output: '4K, cinematic color grade, professional quality'
  };
}
```

## Design Patterns

### 1. Module Pattern (ES6)
```javascript
// Export
export const cameraTerms = [...];
export function buildPrompt(template) {...}

// Import
import { cameraTerms } from '../data/camera_terms.js';
```

### 2. Factory Pattern (Components)
```javascript
class PromptViewer {
  constructor(containerId, options = {}) {
    this.config = {
      format: options.format || 'veo31',
      showFilters: options.showFilters !== false
    };
  }
}
```

### 3. Template Method Pattern (Prompts)
```javascript
const template = Veo31Template;
template.setting = "...";
template.action = "...";
const fullPrompt = template.buildPrompt(template);
```

### 4. Observer Pattern (State Management)
```javascript
function applyFilters() {
  // Filter data
  // Trigger re-render
  render();
}
```

## Performance Considerations

### Data Loading
- JSON files loaded async (`fetch()`)
- Camera terms parsed from ES6 module with `eval()` (safe context)
- Progressive rendering (no virtual DOM)

### Rendering Strategy
- Direct DOM manipulation (no framework overhead)
- Event delegation for copy buttons
- Lazy loading for large lists (via `cardsPerPage` config)

### File Size Optimization
- Minified CSS/JS in production (manual)
- No external dependencies (vanilla JS)
- Modular components (tree-shakeable)

## Security Considerations

### XSS Prevention
```javascript
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
```

### Clipboard API
```javascript
await navigator.clipboard.writeText(text);
// Graceful fallback for older browsers
```

### No Eval in Production
- Only used for parsing camera_terms.js module
- Safe context (known data source)

## Extension Points

### Adding New Genres
1. Add genre to `data/scene_index.json`
2. Create prompts in `library/prompt_library.json`
3. Run `node tools/generate_prompts.js`
4. Web interface auto-updates

### Adding Camera Terms
1. Add to `data/camera_terms.js`
2. Web interface auto-updates
3. Tools can reference new terms

### Custom Export Formats
1. Create new tool in `/tools`
2. Import templates from `data/prompt_templates.js`
3. Use conversion functions
4. Export to desired format

## Technology Stack

**Backend:**
- Node.js (ES6+ modules)
- File system operations (`fs`)
- No external npm dependencies

**Frontend:**
- Vanilla JavaScript (ES6+ modules)
- CSS Grid & Flexbox
- No frameworks/libraries
- Modern browser APIs (Fetch, Clipboard)

**Data Formats:**
- JSON (primary data format)
- Markdown (documentation & exports)
- CSV (production shotlists)
- HTML (reference sheets)

## Deployment

### Local Development
```bash
# Run web interface
cd web
python3 -m http.server 8000
# Open http://localhost:8000

# Run tools
node tools/generate_prompts.js
node tools/build_shotlist.js
```

### Production
- Static file hosting (any web server)
- No build step required
- All processing client-side or via Node.js CLI

## Future Architecture Considerations

### Scalability
- Add IndexedDB for offline storage
- Implement service worker for PWA
- Add pagination for 1000+ prompts

### Integration
- REST API wrapper for tools
- GraphQL schema for data queries
- Webhook support for external tools

### Enhancement
- Real-time collaboration (WebSocket)
- Version control for prompts (git-like)
- AI-assisted prompt generation
