#!/usr/bin/env node

/**
 * MindSignal Scene to Prompt Tool
 * Converts scene descriptions (from Markdown or text) into Veo 3.1 and LtX Pro prompts
 */

const fs = require('fs');
const path = require('path');

console.log('🎬 MindSignal Scene to Prompt Converter\n');

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node scene_to_prompt.js <scene-file.md>');
  console.log('   or: node scene_to_prompt.js <scene-file.txt>\n');
  console.log('Example scene file format:');
  console.log('---');
  console.log('# Scene Title');
  console.log('Genre: action');
  console.log('');
  console.log('## Setting');
  console.log('Description of the location and environment...');
  console.log('');
  console.log('## Action');
  console.log('What happens in the scene...');
  console.log('');
  console.log('## Camera');
  console.log('Camera movements and angles...');
  console.log('---\n');
  process.exit(1);
}

const sceneFile = args[0];

if (!fs.existsSync(sceneFile)) {
  console.error(`❌ File not found: ${sceneFile}`);
  process.exit(1);
}

// Load camera terms for suggestions
let cameraTerms = [];
const cameraTermsPath = path.join(__dirname, '../data/camera_terms.js');
if (fs.existsSync(cameraTermsPath)) {
  try {
    const cameraModule = require(cameraTermsPath);
    cameraTerms = cameraModule.cameraTerms || cameraModule.default || [];
  } catch (e) {
    console.log('ℹ️  Could not load camera terms for suggestions');
  }
}

function parseSceneFile(content) {
  const scene = {
    title: '',
    genre: 'general',
    setting: '',
    action: '',
    camera: '',
    output: '4K, cinematic color grade, professional quality, 24fps'
  };

  // Parse markdown-style headers
  const lines = content.split('\n');
  let currentSection = null;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Parse title (# Title)
    if (trimmed.startsWith('# ')) {
      scene.title = trimmed.substring(2).trim();
    }
    // Parse genre
    else if (trimmed.toLowerCase().startsWith('genre:')) {
      scene.genre = trimmed.substring(6).trim();
    }
    // Parse sections
    else if (trimmed.startsWith('## ')) {
      const sectionName = trimmed.substring(3).trim().toLowerCase();
      if (sectionName.includes('setting') || sectionName.includes('location')) {
        currentSection = 'setting';
      } else if (sectionName.includes('action') || sectionName.includes('what happens')) {
        currentSection = 'action';
      } else if (sectionName.includes('camera') || sectionName.includes('shot')) {
        currentSection = 'camera';
      } else if (sectionName.includes('output') || sectionName.includes('technical')) {
        currentSection = 'output';
      }
    }
    // Add content to current section
    else if (currentSection && trimmed && !trimmed.startsWith('---')) {
      scene[currentSection] += (scene[currentSection] ? ' ' : '') + trimmed;
    }
  });

  return scene;
}

function enhanceCameraWithTerms(cameraText) {
  if (!cameraTerms.length) return cameraText;

  // Find matching camera terms
  const matches = cameraTerms.filter(term => {
    const textLower = cameraText.toLowerCase();
    return textLower.includes(term.name.toLowerCase()) ||
           textLower.includes(term.id);
  });

  if (matches.length > 0) {
    // Add prompt snippets from matched terms
    const snippets = matches.map(m => m.promptSnippet).join(', ');
    return `${cameraText}, ${snippets}`;
  }

  return cameraText;
}

function sceneToVeo31(scene) {
  const cameraStyle = enhanceCameraWithTerms(scene.camera || 'Medium shot, natural lighting');

  return {
    id: scene.title.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
    genre: scene.genre,
    title: scene.title,
    format: 'Veo 3.1',
    template: {
      setting: scene.setting,
      action: scene.action,
      cameraStyle: cameraStyle,
      output: scene.output
    },
    fullPrompt: `[Setting]\n${scene.setting}\n\n[Action]\n${scene.action}\n\n[Camera & Style]\n${cameraStyle}\n\n[Output]\n${scene.output}`,
    metadata: {
      converted: new Date().toISOString(),
      source: path.basename(sceneFile)
    }
  };
}

function sceneToLtx(scene) {
  const framing = scene.camera.split(',')[0].trim() || 'medium shot';
  const style = scene.camera.split(',').slice(1).join(',').trim() + ', ' + scene.output;

  return {
    id: scene.title.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
    genre: scene.genre,
    title: scene.title,
    format: 'LtX Pro',
    template: {
      description: scene.setting,
      motion: scene.action,
      framing: framing,
      style: style
    },
    fullPrompt: `[Description]\n${scene.setting}\n\n[Motion]\n${scene.action}\n\n[Framing]\n${framing}\n\n[Cinematic Style]\n${style}`,
    metadata: {
      converted: new Date().toISOString(),
      source: path.basename(sceneFile)
    }
  };
}

// Process file
console.log(`📄 Reading scene file: ${sceneFile}\n`);

const content = fs.readFileSync(sceneFile, 'utf8');
const scene = parseSceneFile(content);

console.log('📋 Parsed Scene:');
console.log(`   Title: ${scene.title || '(untitled)'}`);
console.log(`   Genre: ${scene.genre}`);
console.log(`   Setting: ${scene.setting.substring(0, 50)}...`);
console.log(`   Action: ${scene.action.substring(0, 50)}...\n`);

// Generate Veo 3.1 prompt
const veo31 = sceneToVeo31(scene);
const veo31File = sceneFile.replace(/\.[^.]+$/, '_veo31.json');
fs.writeFileSync(veo31File, JSON.stringify(veo31, null, 2));
console.log(`✅ Veo 3.1 prompt saved: ${veo31File}`);

// Generate LtX Pro prompt
const ltx = sceneToLtx(scene);
const ltxFile = sceneFile.replace(/\.[^.]+$/, '_ltx.json');
fs.writeFileSync(ltxFile, JSON.stringify(ltx, null, 2));
console.log(`✅ LtX Pro prompt saved: ${ltxFile}`);

// Generate text versions
const veo31Text = veo31.fullPrompt;
const veo31TextFile = sceneFile.replace(/\.[^.]+$/, '_veo31.txt');
fs.writeFileSync(veo31TextFile, veo31Text);
console.log(`📝 Veo 3.1 text saved: ${veo31TextFile}`);

const ltxText = ltx.fullPrompt;
const ltxTextFile = sceneFile.replace(/\.[^.]+$/, '_ltx.txt');
fs.writeFileSync(ltxTextFile, ltxText);
console.log(`📝 LtX Pro text saved: ${ltxTextFile}\n`);

console.log('🎉 Conversion complete!\n');
