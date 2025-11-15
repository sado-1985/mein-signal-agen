#!/usr/bin/env node

/**
 * MindSignal Normalize Prompts Tool
 * Converts raw text prompts into structured Veo 3.1 format
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

console.log('🔄 MindSignal Prompt Normalizer\n');

// Prompt user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parseRawPrompt(rawText) {
  // Try to identify sections in raw text
  const sections = {
    setting: '',
    action: '',
    cameraStyle: '',
    output: ''
  };

  // Split by common delimiters
  const lines = rawText.split(/\n+/);

  // Look for keywords to identify sections
  const settingKeywords = ['setting', 'location', 'scene', 'environment', 'place'];
  const actionKeywords = ['action', 'movement', 'happening', 'occurs', 'does'];
  const cameraKeywords = ['camera', 'shot', 'angle', 'lens', 'framing'];
  const outputKeywords = ['output', 'format', 'quality', '4k', 'resolution'];

  let currentSection = 'setting'; // Default to setting

  lines.forEach(line => {
    const lineLower = line.toLowerCase();

    // Detect section changes
    if (settingKeywords.some(kw => lineLower.includes(kw + ':'))) {
      currentSection = 'setting';
      line = line.replace(/^.*?:\s*/, '');
    } else if (actionKeywords.some(kw => lineLower.includes(kw + ':'))) {
      currentSection = 'action';
      line = line.replace(/^.*?:\s*/, '');
    } else if (cameraKeywords.some(kw => lineLower.includes(kw + ':'))) {
      currentSection = 'cameraStyle';
      line = line.replace(/^.*?:\s*/, '');
    } else if (outputKeywords.some(kw => lineLower.includes(kw + ':'))) {
      currentSection = 'output';
      line = line.replace(/^.*?:\s*/, '');
    }

    // Add line to current section
    if (line.trim()) {
      sections[currentSection] += (sections[currentSection] ? ' ' : '') + line.trim();
    }
  });

  // If no explicit sections found, try to infer
  if (!sections.action && !sections.cameraStyle) {
    const allText = rawText.trim();
    const sentences = allText.split(/\.\s+/);

    if (sentences.length >= 2) {
      sections.setting = sentences[0] + '.';
      sections.action = sentences.slice(1).join('. ');
    } else {
      sections.setting = allText;
    }

    // Default camera and output
    sections.cameraStyle = sections.cameraStyle || 'Cinematic wide shot, natural lighting, smooth camera movement';
    sections.output = sections.output || '4K, cinematic color grade, professional quality, 24fps';
  }

  return sections;
}

function buildVeo31Prompt(sections) {
  const parts = [];

  if (sections.setting) parts.push(`[Setting]\n${sections.setting}`);
  if (sections.action) parts.push(`[Action]\n${sections.action}`);
  if (sections.cameraStyle) parts.push(`[Camera & Style]\n${sections.cameraStyle}`);
  if (sections.output) parts.push(`[Output]\n${sections.output}`);

  return parts.join('\n\n');
}

function normalizeFromFile(inputFile) {
  console.log(`📄 Reading input file: ${inputFile}\n`);

  try {
    const rawText = fs.readFileSync(inputFile, 'utf8');
    const sections = parseRawPrompt(rawText);
    const veo31Prompt = buildVeo31Prompt(sections);

    console.log('✅ Normalized Veo 3.1 Prompt:\n');
    console.log('─'.repeat(60));
    console.log(veo31Prompt);
    console.log('─'.repeat(60));

    // Save output
    const outputFile = inputFile.replace(/\.[^.]+$/, '_normalized.txt');
    fs.writeFileSync(outputFile, veo31Prompt);

    console.log(`\n💾 Saved to: ${outputFile}\n`);

    // Also save as JSON
    const jsonOutput = {
      format: 'Veo 3.1',
      template: sections,
      fullPrompt: veo31Prompt,
      metadata: {
        normalized: new Date().toISOString(),
        source: path.basename(inputFile)
      }
    };

    const jsonFile = inputFile.replace(/\.[^.]+$/, '_normalized.json');
    fs.writeFileSync(jsonFile, JSON.stringify(jsonOutput, null, 2));
    console.log(`📦 JSON version: ${jsonFile}\n`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

function normalizeFromText(rawText) {
  const sections = parseRawPrompt(rawText);
  const veo31Prompt = buildVeo31Prompt(sections);

  console.log('\n✅ Normalized Veo 3.1 Prompt:\n');
  console.log('─'.repeat(60));
  console.log(veo31Prompt);
  console.log('─'.repeat(60));

  return { sections, fullPrompt: veo31Prompt };
}

// CLI Interface
const args = process.argv.slice(2);

if (args.length > 0) {
  // File mode
  const inputFile = args[0];
  if (fs.existsSync(inputFile)) {
    normalizeFromFile(inputFile);
    process.exit(0);
  } else {
    console.error(`❌ File not found: ${inputFile}`);
    process.exit(1);
  }
}

// Interactive mode
console.log('📝 Enter your raw prompt text (type END on a new line when done):\n');

let inputLines = [];

rl.on('line', (line) => {
  if (line.trim().toUpperCase() === 'END') {
    const rawText = inputLines.join('\n');
    const result = normalizeFromText(rawText);

    console.log('\n💾 Save this prompt? (y/n): ');
    rl.once('line', (answer) => {
      if (answer.toLowerCase() === 'y') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `prompt_${timestamp}.txt`;
        fs.writeFileSync(filename, result.fullPrompt);
        console.log(`\n✅ Saved to: ${filename}\n`);
      }
      rl.close();
    });
  } else {
    inputLines.push(line);
  }
});

rl.on('close', () => {
  console.log('\n👋 Goodbye!\n');
  process.exit(0);
});
