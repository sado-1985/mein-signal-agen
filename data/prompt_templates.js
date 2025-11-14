/**
 * MindSignal Prompt Templates
 * Structured prompt models for Veo 3.1 and LtX Pro
 */

/**
 * Veo 3.1 Prompt Template
 * Structure: [Setting] → [Action] → [Camera & Style] → [Output]
 */
export const Veo31Template = {
  setting: "",
  action: "",
  cameraStyle: "",
  output: "",

  /**
   * Build complete Veo 3.1 prompt from template
   * @param {Object} t - Template data
   * @returns {string} Formatted prompt
   */
  buildPrompt: function(t) {
    const parts = [];

    if (t.setting) parts.push(`[Setting]\n${t.setting}`);
    if (t.action) parts.push(`[Action]\n${t.action}`);
    if (t.cameraStyle) parts.push(`[Camera & Style]\n${t.cameraStyle}`);
    if (t.output) parts.push(`[Output]\n${t.output}`);

    return parts.join('\n\n');
  },

  /**
   * Parse existing prompt into structured template
   * @param {string} prompt - Raw prompt text
   * @returns {Object} Structured template
   */
  parsePrompt: function(prompt) {
    const template = {
      setting: "",
      action: "",
      cameraStyle: "",
      output: ""
    };

    const settingMatch = prompt.match(/\[Setting\]\s*([\s\S]*?)(?=\n\[|$)/);
    const actionMatch = prompt.match(/\[Action\]\s*([\s\S]*?)(?=\n\[|$)/);
    const cameraMatch = prompt.match(/\[Camera & Style\]\s*([\s\S]*?)(?=\n\[|$)/);
    const outputMatch = prompt.match(/\[Output\]\s*([\s\S]*?)(?=\n\[|$)/);

    if (settingMatch) template.setting = settingMatch[1].trim();
    if (actionMatch) template.action = actionMatch[1].trim();
    if (cameraMatch) template.cameraStyle = cameraMatch[1].trim();
    if (outputMatch) template.output = outputMatch[1].trim();

    return template;
  }
};

/**
 * LtX Pro Prompt Template
 * Structure: [Description] → [Motion] → [Framing] → [Cinematic Style]
 */
export const LtxTemplate = {
  description: "",
  motion: "",
  framing: "",
  style: "",

  /**
   * Build complete LtX Pro prompt from template
   * @param {Object} t - Template data
   * @returns {string} Formatted prompt
   */
  buildPrompt: function(t) {
    const parts = [];

    if (t.description) parts.push(`[Description]\n${t.description}`);
    if (t.motion) parts.push(`[Motion]\n${t.motion}`);
    if (t.framing) parts.push(`[Framing]\n${t.framing}`);
    if (t.style) parts.push(`[Cinematic Style]\n${t.style}`);

    return parts.join('\n\n');
  },

  /**
   * Parse existing prompt into structured template
   * @param {string} prompt - Raw prompt text
   * @returns {Object} Structured template
   */
  parsePrompt: function(prompt) {
    const template = {
      description: "",
      motion: "",
      framing: "",
      style: ""
    };

    const descMatch = prompt.match(/\[Description\]\s*([\s\S]*?)(?=\n\[|$)/);
    const motionMatch = prompt.match(/\[Motion\]\s*([\s\S]*?)(?=\n\[|$)/);
    const framingMatch = prompt.match(/\[Framing\]\s*([\s\S]*?)(?=\n\[|$)/);
    const styleMatch = prompt.match(/\[Cinematic Style\]\s*([\s\S]*?)(?=\n\[|$)/);

    if (descMatch) template.description = descMatch[1].trim();
    if (motionMatch) template.motion = motionMatch[1].trim();
    if (framingMatch) template.framing = framingMatch[1].trim();
    if (styleMatch) template.style = styleMatch[1].trim();

    return template;
  }
};

/**
 * Convert Veo 3.1 template to LtX Pro template
 * @param {Object} veo - Veo 3.1 template
 * @returns {Object} LtX Pro template
 */
export function convertVeoToLtx(veo) {
  return {
    description: veo.setting,
    motion: veo.action,
    framing: extractFraming(veo.cameraStyle),
    style: extractStyle(veo.cameraStyle)
  };
}

/**
 * Convert LtX Pro template to Veo 3.1 template
 * @param {Object} ltx - LtX Pro template
 * @returns {Object} Veo 3.1 template
 */
export function convertLtxToVeo(ltx) {
  return {
    setting: ltx.description,
    action: ltx.motion,
    cameraStyle: `${ltx.framing}\n${ltx.style}`,
    output: "cinematic video, 4K, professional color grading"
  };
}

/**
 * Helper: Extract framing information from camera style
 */
function extractFraming(cameraStyle) {
  const framingTerms = ['close-up', 'wide shot', 'medium shot', 'extreme close-up',
                        'full shot', 'bird\'s eye', 'low angle', 'high angle'];

  for (const term of framingTerms) {
    if (cameraStyle.toLowerCase().includes(term)) {
      return cameraStyle.split('\n')[0];
    }
  }
  return "medium shot";
}

/**
 * Helper: Extract style information from camera style
 */
function extractStyle(cameraStyle) {
  const lines = cameraStyle.split('\n');
  return lines.length > 1 ? lines.slice(1).join(' ') : cameraStyle;
}

/**
 * Validate Veo 3.1 prompt structure
 * @param {Object} template - Template to validate
 * @returns {Object} Validation result
 */
export function validateVeo31(template) {
  const errors = [];
  const warnings = [];

  if (!template.setting) errors.push("Setting is required");
  if (!template.action) errors.push("Action is required");
  if (!template.cameraStyle) warnings.push("Camera style recommended for best results");
  if (!template.output) warnings.push("Output specification recommended");

  if (template.setting && template.setting.length < 20) {
    warnings.push("Setting description might be too brief");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validate LtX Pro prompt structure
 * @param {Object} template - Template to validate
 * @returns {Object} Validation result
 */
export function validateLtx(template) {
  const errors = [];
  const warnings = [];

  if (!template.description) errors.push("Description is required");
  if (!template.motion) errors.push("Motion is required");
  if (!template.framing) warnings.push("Framing recommended for better control");
  if (!template.style) warnings.push("Cinematic style recommended");

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

export default {
  Veo31Template,
  LtxTemplate,
  convertVeoToLtx,
  convertLtxToVeo,
  validateVeo31,
  validateLtx
};
