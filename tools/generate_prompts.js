#!/usr/bin/env node

/**
 * MindSignal Generate Prompts Tool
 * Generates individual prompt files for Veo 3.1 and LtX Pro from the prompt library
 */

const fs = require('fs');
const path = require('path');
const conversionService = require('../src/core/services/conversionService');

// Configuration
const CONFIG = {
  libraryPath: path.join(__dirname, '../library/prompt_library.json'),
  veoOutputDir: path.join(__dirname, '../prompts/veo3_1'),
  ltxOutputDir: path.join(__dirname, '../prompts/ltx'),
  templatesPath: path.join(__dirname, '../data/prompt_templates.js')
};

console.log('🎬 MindSignal Prompt Generator\n');

// Load prompt library
console.log('📚 Loading prompt library...');
let prompts;
try {
  prompts = JSON.parse(fs.readFileSync(CONFIG.libraryPath, 'utf8'));
  console.log(`✅ Loaded ${prompts.length} prompts\n`);
} catch (error) {
  console.error('❌ Error loading prompt library:', error.message);
  process.exit(1);
}

// Ensure output directories exist
[CONFIG.veoOutputDir, CONFIG.ltxOutputDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate prompt files
console.log('⚙️  Generating prompt files...\n');

let veoCount = 0;
let ltxCount = 0;

prompts.forEach((prompt, index) => {
  // Generate Veo 3.1 file
  const veoFilePath = path.join(CONFIG.veoOutputDir, `${prompt.id}.json`);
  const veoData = {
    id: prompt.id,
    genre: prompt.genre,
    title: prompt.title,
    format: 'Veo 3.1',
    template: {
      setting: prompt.setting,
      action: prompt.action,
      cameraStyle: prompt.cameraStyle,
      output: prompt.output
    },
    fullPrompt: prompt.fullPrompt,
    metadata: {
      generated: new Date().toISOString(),
      source: 'prompt_library.json'
    }
  };

  fs.writeFileSync(veoFilePath, JSON.stringify(veoData, null, 2));
  veoCount++;

  // Generate LtX Pro file using ConversionService
  const ltxPrompt = conversionService.convertVeoToLtx(prompt);
  // Preserve ID, genre, title
  ltxPrompt.id = prompt.id;
  ltxPrompt.genre = prompt.genre;
  ltxPrompt.title = prompt.title;
  const ltxFilePath = path.join(CONFIG.ltxOutputDir, `${prompt.id}.json`);
  const ltxData = {
    id: ltxPrompt.id,
    genre: ltxPrompt.genre,
    title: ltxPrompt.title,
    format: 'LtX Pro',
    template: {
      description: ltxPrompt.description,
      motion: ltxPrompt.motion,
      framing: ltxPrompt.framing,
      style: ltxPrompt.style
    },
    fullPrompt: ltxPrompt.fullPrompt,
    metadata: {
      generated: new Date().toISOString(),
      source: 'prompt_library.json',
      convertedFrom: 'Veo 3.1'
    }
  };

  fs.writeFileSync(ltxFilePath, JSON.stringify(ltxData, null, 2));
  ltxCount++;

  // Progress indicator
  if ((index + 1) % 10 === 0) {
    console.log(`   Generated ${index + 1}/${prompts.length} prompts...`);
  }
});

console.log('\n✅ Generation complete!\n');
console.log('📊 Summary:');
console.log(`   Veo 3.1 prompts: ${veoCount} files in ${CONFIG.veoOutputDir}`);
console.log(`   LtX Pro prompts: ${ltxCount} files in ${CONFIG.ltxOutputDir}`);
console.log(`   Total files generated: ${veoCount + ltxCount}\n`);

// Generate index files
const veoIndex = {
  format: 'Veo 3.1',
  totalPrompts: veoCount,
  generated: new Date().toISOString(),
  prompts: prompts.map(p => ({
    id: p.id,
    genre: p.genre,
    title: p.title,
    file: `${p.id}.json`
  }))
};

const ltxIndex = {
  format: 'LtX Pro',
  totalPrompts: ltxCount,
  generated: new Date().toISOString(),
  prompts: prompts.map(p => ({
    id: p.id,
    genre: p.genre,
    title: p.title,
    file: `${p.id}.json`
  }))
};

fs.writeFileSync(path.join(CONFIG.veoOutputDir, '_index.json'), JSON.stringify(veoIndex, null, 2));
fs.writeFileSync(path.join(CONFIG.ltxOutputDir, '_index.json'), JSON.stringify(ltxIndex, null, 2));

console.log('📑 Index files created');
console.log('   - prompts/veo3_1/_index.json');
console.log('   - prompts/ltx/_index.json\n');

console.log('🎉 Done!\n');
