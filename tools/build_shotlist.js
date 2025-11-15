#!/usr/bin/env node

/**
 * MindSignal Build Shotlist Tool
 * Creates CSV shotlists from prompt library for production planning
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  libraryPath: path.join(__dirname, '../library/prompt_library.json'),
  outputDir: path.join(__dirname, '../library')
};

console.log('🎬 MindSignal Shotlist Builder\n');

// Load prompts
console.log('📚 Loading prompt library...');
const prompts = JSON.parse(fs.readFileSync(CONFIG.libraryPath, 'utf8'));
console.log(`✅ Loaded ${prompts.length} prompts\n`);

// Extract shot information from prompt
function extractShotInfo(prompt) {
  const shot = {
    shot_id: prompt.id,
    scene: prompt.id.split('_')[0],
    title: prompt.title,
    genre: prompt.genre,
    description: prompt.setting.substring(0, 100) + '...',
    camera: '',
    movement: '',
    framing: '',
    lens: '',
    style: prompt.cameraStyle,
    duration: 'TBD',
    notes: prompt.action.substring(0, 100) + '...'
  };

  // Parse camera style to extract specific elements
  const cameraLower = prompt.cameraStyle.toLowerCase();

  // Extract camera movements
  const movements = [
    'tracking', 'dolly', 'crane', 'pan', 'tilt', 'zoom', 'orbit',
    'steadicam', 'handheld', 'static', 'push', 'pull', 'whip'
  ];
  movements.forEach(movement => {
    if (cameraLower.includes(movement)) {
      shot.movement = shot.movement ? `${shot.movement}, ${movement}` : movement;
    }
  });

  // Extract framing
  const framings = [
    'extreme close-up', 'close-up', 'medium shot', 'full shot', 'wide shot',
    'establishing shot', 'over-shoulder', 'bird\'s eye', 'low angle', 'high angle'
  ];
  framings.forEach(framing => {
    if (cameraLower.includes(framing)) {
      shot.framing = shot.framing ? `${shot.framing}, ${framing}` : framing;
    }
  });

  // Extract lens info
  const lensKeywords = ['fisheye', 'wide angle', 'telephoto', 'macro', 'mm', 'f/'];
  lensKeywords.forEach(lens => {
    if (cameraLower.includes(lens)) {
      shot.lens = shot.lens ? `${shot.lens}, ${lens}` : lens;
    }
  });

  return shot;
}

// Build shotlist data
console.log('⚙️  Building shotlist...\n');
const shotlist = prompts.map(extractShotInfo);

// Generate CSV
function generateCSV() {
  const headers = [
    'Shot ID',
    'Scene',
    'Title',
    'Genre',
    'Description',
    'Camera Movement',
    'Framing',
    'Lens',
    'Style',
    'Duration',
    'Notes'
  ];

  let csv = headers.join(',') + '\n';

  shotlist.forEach(shot => {
    const row = [
      shot.shot_id,
      shot.scene,
      `"${shot.title}"`,
      shot.genre,
      `"${shot.description.replace(/"/g, '""')}"`,
      `"${shot.movement}"`,
      `"${shot.framing}"`,
      `"${shot.lens}"`,
      `"${shot.style.replace(/"/g, '""')}"`,
      shot.duration,
      `"${shot.notes.replace(/"/g, '""')}"`
    ];
    csv += row.join(',') + '\n';
  });

  return csv;
}

// Generate detailed CSV with full prompts
function generateDetailedCSV() {
  const headers = [
    'Shot ID',
    'Scene',
    'Title',
    'Genre',
    'Setting',
    'Action',
    'Camera & Style',
    'Output Specs',
    'Full Veo 3.1 Prompt'
  ];

  let csv = headers.join(',') + '\n';

  prompts.forEach(prompt => {
    const row = [
      prompt.id,
      prompt.id.split('_')[0],
      `"${prompt.title}"`,
      prompt.genre,
      `"${prompt.setting.replace(/"/g, '""')}"`,
      `"${prompt.action.replace(/"/g, '""')}"`,
      `"${prompt.cameraStyle.replace(/"/g, '""')}"`,
      `"${prompt.output.replace(/"/g, '""')}"`,
      `"${prompt.fullPrompt.replace(/"/g, '""')}"`
    ];
    csv += row.join(',') + '\n';
  });

  return csv;
}

// Generate genre-specific shotlists
function generateByGenre() {
  const byGenre = {};
  prompts.forEach(p => {
    if (!byGenre[p.genre]) byGenre[p.genre] = [];
    byGenre[p.genre].push(p);
  });

  Object.keys(byGenre).forEach(genre => {
    const genreShots = byGenre[genre].map(extractShotInfo);
    const headers = ['Shot ID', 'Title', 'Camera Movement', 'Framing', 'Style', 'Notes'];

    let csv = headers.join(',') + '\n';
    genreShots.forEach(shot => {
      const row = [
        shot.shot_id,
        `"${shot.title}"`,
        `"${shot.movement}"`,
        `"${shot.framing}"`,
        `"${shot.style.replace(/"/g, '""')}"`,
        `"${shot.notes.replace(/"/g, '""')}"`
      ];
      csv += row.join(',') + '\n';
    });

    const filePath = path.join(CONFIG.outputDir, `shotlist_${genre}.csv`);
    fs.writeFileSync(filePath, csv);
    console.log(`   ✅ ${genre}: ${filePath}`);
  });
}

// Save main shotlist
const csvMain = generateCSV();
const csvMainPath = path.join(CONFIG.outputDir, 'shotlist_main.csv');
fs.writeFileSync(csvMainPath, csvMain);
console.log(`✅ Main shotlist: ${csvMainPath}`);

// Save detailed shotlist
const csvDetailed = generateDetailedCSV();
const csvDetailedPath = path.join(CONFIG.outputDir, 'shotlist_detailed.csv');
fs.writeFileSync(csvDetailedPath, csvDetailed);
console.log(`✅ Detailed shotlist: ${csvDetailedPath}`);

// Generate genre-specific shotlists
console.log('\n📊 Generating genre-specific shotlists:');
generateByGenre();

// Generate summary
const summary = {
  totalShots: shotlist.length,
  byGenre: {},
  generatedAt: new Date().toISOString(),
  files: [
    'shotlist_main.csv',
    'shotlist_detailed.csv'
  ]
};

prompts.forEach(p => {
  summary.byGenre[p.genre] = (summary.byGenre[p.genre] || 0) + 1;
});

Object.keys(summary.byGenre).forEach(genre => {
  summary.files.push(`shotlist_${genre}.csv`);
});

const summaryPath = path.join(CONFIG.outputDir, 'shotlist_summary.json');
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

console.log('\n📋 Summary:');
console.log(`   Total shots: ${summary.totalShots}`);
console.log(`   Genres: ${Object.keys(summary.byGenre).length}`);
console.log(`   Files generated: ${summary.files.length}\n`);

console.log('🎉 Shotlist build complete!\n');
console.log('💡 Tip: Import CSV files into:');
console.log('   - Google Sheets');
console.log('   - Microsoft Excel');
console.log('   - Production software (Shot Lister, StudioBinder, etc.)\n');
