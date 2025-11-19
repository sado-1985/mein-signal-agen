# MindSignal Core Services

Central service layer for MindSignal Toolkit. Eliminates code duplication and provides reusable business logic.

## ConversionService

**Location:** `src/core/services/conversionService.js` (Node.js) / `web/services/conversionService.js` (Browser)

### Purpose

Central service for converting prompts between different AI video generation engines (Veo 3.1, LtX Pro, etc.). Eliminates code duplication across tools and components.

### API

#### Node.js (CommonJS)

```javascript
const conversionService = require('./src/core/services/conversionService');

// Veo → LtX
const ltxPrompt = conversionService.convertVeoToLtx(veoPrompt);

// LtX → Veo
const veoPrompt = conversionService.convertLtxToVeo(ltxPrompt);

// Generic conversion
const result = conversionService.convert({
  prompt: myPrompt,
  from: 'veo31',
  to: 'ltx',
  format: 'string' // or 'object'
});

// Batch conversion
const converted = conversionService.convertBatch(prompts, 'veo31', 'ltx');
```

#### Browser (ES6)

```javascript
import { convertVeoToLtx, convertLtxToVeo } from './web/services/conversionService.js';

const ltxPrompt = convertVeoToLtx(veoPrompt);
const veoPrompt = convertLtxToVeo(ltxPrompt);
```

### Functions

#### `convertVeoToLtx(veoPrompt)`

Converts Veo 3.1 prompt to LtX Pro format.

**Parameters:**
- `veoPrompt` (Object): Veo 3.1 prompt with `setting`, `action`, `cameraStyle`, `output`

**Returns:**
- (Object): LtX prompt with `description`, `motion`, `framing`, `style`, `fullPrompt`

**Example:**
```javascript
const veoPrompt = {
  setting: "Night city street, neon lights",
  action: "Character runs through crowd",
  cameraStyle: "Tracking shot, handheld, cinematic",
  output: "4K, 24fps"
};

const ltxPrompt = convertVeoToLtx(veoPrompt);
// {
//   description: "Night city street, neon lights",
//   motion: "Character runs through crowd",
//   framing: "Tracking shot",
//   style: "handheld, cinematic, 4K, 24fps",
//   fullPrompt: "[Description]\n..."
// }
```

#### `convertVeoToLtxString(veoPrompt)`

Same as `convertVeoToLtx` but returns formatted string instead of object.

**Returns:**
- (String): Formatted LtX Pro prompt

#### `convertLtxToVeo(ltxPrompt)`

Converts LtX Pro prompt to Veo 3.1 format.

**Parameters:**
- `ltxPrompt` (Object): LtX prompt with `description`, `motion`, `framing`, `style`

**Returns:**
- (Object): Veo 3.1 prompt with `setting`, `action`, `cameraStyle`, `output`, `fullPrompt`

#### `convert({ prompt, from, to, format })`

Generic conversion function with engine detection.

**Parameters:**
- `prompt` (Object): Prompt object to convert
- `from` (String): Source engine (`'veo31'` or `'ltx'`)
- `to` (String): Target engine (`'veo31'` or `'ltx'`)
- `format` (String, optional): Return format (`'object'` or `'string'`), defaults to `'object'`

**Returns:**
- (Object|String): Converted prompt

**Example:**
```javascript
const result = convert({
  prompt: myPrompt,
  from: 'veo31',
  to: 'ltx',
  format: 'string'
});
```

#### `convertBatch(prompts, from, to, format)`

Batch convert multiple prompts.

**Parameters:**
- `prompts` (Array): Array of prompt objects
- `from` (String): Source engine
- `to` (String): Target engine
- `format` (String, optional): Return format, defaults to `'object'`

**Returns:**
- (Array): Array of converted prompts

### Implementation Details

#### Conversion Logic

**Veo 3.1 → LtX Pro:**
1. Extract framing from `cameraStyle` (first comma-separated element)
2. Combine remaining camera style + output as LtX `style`
3. Map `setting` → `description`, `action` → `motion`

**LtX Pro → Veo 3.1:**
1. Combine `framing` + `style` into Veo `cameraStyle`
2. Map `description` → `setting`, `motion` → `action`
3. Add default output: "4K, cinematic color grade, professional quality, 24fps"

#### Dual Implementation

Two versions exist for compatibility:
- **`src/core/services/conversionService.js`**: CommonJS for Node.js tools
- **`web/services/conversionService.js`**: ES6 modules for browser

Both have **identical logic**, only export syntax differs. This avoids requiring a build system while maintaining code quality.

### Usage Locations

ConversionService is used by:

1. **`tools/generate_prompts.js`** - Generates LtX files from Veo library
2. **`web/app.js`** - Converts prompts for display (inline version)
3. **`web/components/prompt_viewer.js`** - Component-level conversion (inline version)

**Note:** Browser files currently use inline implementations due to lack of module bundler. Logic is kept consistent with ConversionService. Future: Consider adding bundler to import service directly.

### Testing

```javascript
// Test Veo → LtX
const veo = {
  setting: "Test setting",
  action: "Test action",
  cameraStyle: "Wide shot, handheld, dramatic",
  output: "4K, 24fps"
};

const ltx = convertVeoToLtx(veo);
console.assert(ltx.framing === "Wide shot");
console.assert(ltx.motion === "Test action");
console.assert(ltx.style.includes("handheld"));

// Test LtX → Veo
const ltx2 = {
  description: "Test desc",
  motion: "Test motion",
  framing: "Close-up",
  style: "cinematic, 4K"
};

const veo2 = convertLtxToVeo(ltx2);
console.assert(veo2.setting === "Test desc");
console.assert(veo2.cameraStyle.includes("Close-up"));
```

### Future Enhancements

- Add support for more engines (Sora, Framia, etc.)
- Add validation (JSON Schema)
- Add prompt enhancement (AI-assisted)
- Add prompt optimization
- Add format auto-detection
- Browser module bundling for direct import

### Related

- **Prompt Templates:** `data/prompt_templates.js` (legacy, now superseded by ConversionService)
- **Architecture:** See `ARCHITECTURE_ANALYSIS.md` for full system design

---

**Version:** 1.0.0
**Status:** Production
**Author:** MindSignal Team
**Last Updated:** 2025-11-19
