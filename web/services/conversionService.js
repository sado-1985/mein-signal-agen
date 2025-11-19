/**
 * MindSignal Conversion Service (Browser / ES6 version)
 *
 * Central service for converting prompts between different AI video generation engines.
 * Eliminates code duplication across web components.
 *
 * Supported engines:
 * - Veo 3.1 (Google)
 * - LtX Pro (LightricksX)
 *
 * @module ConversionService
 */

/**
 * Convert Veo 3.1 prompt to LtX Pro format
 *
 * @param {Object} veoPrompt - Veo 3.1 prompt object
 * @param {string} veoPrompt.setting - Scene setting/environment
 * @param {string} veoPrompt.action - Action/motion description
 * @param {string} veoPrompt.cameraStyle - Camera and style directives
 * @param {string} veoPrompt.output - Output specifications
 * @returns {Object} LtX Pro formatted prompt
 */
export function convertVeoToLtx(veoPrompt) {
  // Extract framing from camera style (first element)
  const cameraStyleParts = veoPrompt.cameraStyle.split(',').map(s => s.trim());
  const framing = cameraStyleParts[0] || 'medium shot';

  // Extract style elements (remaining camera style + output)
  const styleParts = cameraStyleParts.slice(1);
  const outputParts = veoPrompt.output.split(',').map(s => s.trim());
  const style = [...styleParts, ...outputParts].join(', ');

  // Build LtX prompt structure
  return {
    description: veoPrompt.setting,
    motion: veoPrompt.action,
    framing: framing,
    style: style,
    fullPrompt: buildLtxFullPrompt({
      description: veoPrompt.setting,
      motion: veoPrompt.action,
      framing: framing,
      style: style
    })
  };
}

/**
 * Convert Veo 3.1 prompt to LtX Pro format (returns formatted string)
 *
 * @param {Object} veoPrompt - Veo 3.1 prompt object
 * @returns {string} Formatted LtX Pro prompt
 */
export function convertVeoToLtxString(veoPrompt) {
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

/**
 * Convert LtX Pro prompt to Veo 3.1 format
 *
 * @param {Object} ltxPrompt - LtX Pro prompt object
 * @param {string} ltxPrompt.description - Scene description
 * @param {string} ltxPrompt.motion - Motion description
 * @param {string} ltxPrompt.framing - Framing/shot type
 * @param {string} ltxPrompt.style - Cinematic style
 * @returns {Object} Veo 3.1 formatted prompt
 */
export function convertLtxToVeo(ltxPrompt) {
  // Combine framing and style for Veo's cameraStyle field
  const cameraStyle = [ltxPrompt.framing, ltxPrompt.style]
    .filter(Boolean)
    .join(', ');

  // Build Veo prompt structure
  return {
    setting: ltxPrompt.description,
    action: ltxPrompt.motion,
    cameraStyle: cameraStyle,
    output: '4K, cinematic color grade, professional quality, 24fps',
    fullPrompt: buildVeoFullPrompt({
      setting: ltxPrompt.description,
      action: ltxPrompt.motion,
      cameraStyle: cameraStyle,
      output: '4K, cinematic color grade, professional quality, 24fps'
    })
  };
}

/**
 * Build full Veo 3.1 formatted prompt string
 *
 * @param {Object} sections - Veo prompt sections
 * @returns {string} Formatted Veo 3.1 prompt
 */
export function buildVeoFullPrompt(sections) {
  const parts = [];

  if (sections.setting) parts.push(`[Setting]\n${sections.setting}`);
  if (sections.action) parts.push(`[Action]\n${sections.action}`);
  if (sections.cameraStyle) parts.push(`[Camera & Style]\n${sections.cameraStyle}`);
  if (sections.output) parts.push(`[Output]\n${sections.output}`);

  return parts.join('\n\n');
}

/**
 * Build full LtX Pro formatted prompt string
 *
 * @param {Object} sections - LtX prompt sections
 * @returns {string} Formatted LtX Pro prompt
 */
export function buildLtxFullPrompt(sections) {
  const parts = [];

  if (sections.description) parts.push(`[Description]\n${sections.description}`);
  if (sections.motion) parts.push(`[Motion]\n${sections.motion}`);
  if (sections.framing) parts.push(`[Framing]\n${sections.framing}`);
  if (sections.style) parts.push(`[Cinematic Style]\n${sections.style}`);

  return parts.join('\n\n');
}

/**
 * Generic conversion function with engine detection
 *
 * @param {Object} options - Conversion options
 * @param {Object} options.prompt - Prompt object to convert
 * @param {string} options.from - Source engine ('veo31' or 'ltx')
 * @param {string} options.to - Target engine ('veo31' or 'ltx')
 * @param {string} [options.format='object'] - Return format ('object' or 'string')
 * @returns {Object|string} Converted prompt
 */
export function convert({ prompt, from, to, format = 'object' }) {
  // Validate engines
  const supportedEngines = ['veo31', 'ltx'];
  if (!supportedEngines.includes(from) || !supportedEngines.includes(to)) {
    throw new Error(`Unsupported engine. Supported: ${supportedEngines.join(', ')}`);
  }

  // Same engine - return as-is
  if (from === to) {
    return format === 'string' && prompt.fullPrompt
      ? prompt.fullPrompt
      : prompt;
  }

  // Convert based on direction
  if (from === 'veo31' && to === 'ltx') {
    return format === 'string'
      ? convertVeoToLtxString(prompt)
      : convertVeoToLtx(prompt);
  }

  if (from === 'ltx' && to === 'veo31') {
    return convertLtxToVeo(prompt);
  }

  throw new Error(`Conversion from ${from} to ${to} not implemented`);
}

/**
 * Batch convert multiple prompts
 *
 * @param {Array} prompts - Array of prompt objects
 * @param {string} from - Source engine
 * @param {string} to - Target engine
 * @param {string} [format='object'] - Return format
 * @returns {Array} Array of converted prompts
 */
export function convertBatch(prompts, from, to, format = 'object') {
  return prompts.map(prompt => convert({ prompt, from, to, format }));
}

// Default export with all functions
export default {
  convertVeoToLtx,
  convertVeoToLtxString,
  convertLtxToVeo,
  buildVeoFullPrompt,
  buildLtxFullPrompt,
  convert,
  convertBatch
};
