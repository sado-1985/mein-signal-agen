#!/usr/bin/env node

/**
 * MindSignal Export Prompt Sheet Tool
 * Generates HTML and Markdown prompt sheets from the library
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  libraryPath: path.join(__dirname, '../library/prompt_library.json'),
  outputDir: path.join(__dirname, '../library'),
  cameraTermsPath: path.join(__dirname, '../data/camera_terms.json')
};

console.log('📊 MindSignal Prompt Sheet Exporter\n');

// Load data
console.log('📚 Loading data...');
const prompts = JSON.parse(fs.readFileSync(CONFIG.libraryPath, 'utf8'));
console.log(`✅ Loaded ${prompts.length} prompts\n`);

// Load camera terms if available
let cameraTerms = [];
try {
  const cameraData = require(CONFIG.cameraTermsPath);
  cameraTerms = cameraData.terms || [];
  console.log(`✅ Loaded ${cameraTerms.length} camera terms\n`);
} catch (e) {
  console.log('ℹ️  Camera terms not loaded\n');
}

// Group prompts by genre
const byGenre = {};
prompts.forEach(p => {
  if (!byGenre[p.genre]) byGenre[p.genre] = [];
  byGenre[p.genre].push(p);
});

// Generate HTML Prompt Sheet
function generateHTML() {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MindSignal Prompt Library - Reference Sheet</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Monaco', 'Courier New', monospace;
      background: #0a0a0a;
      color: #e0e0e0;
      line-height: 1.6;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      padding: 40px 20px;
      border-bottom: 2px solid #00ff88;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 2.5em;
      color: #00ff88;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .subtitle {
      color: #888;
      font-size: 1.1em;
    }
    .stats {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    .stat {
      text-align: center;
    }
    .stat-value {
      font-size: 2em;
      color: #00ff88;
      font-weight: bold;
    }
    .stat-label {
      color: #666;
      font-size: 0.9em;
      text-transform: uppercase;
    }
    .genre-section {
      margin-bottom: 60px;
    }
    .genre-header {
      font-size: 2em;
      color: #00ff88;
      text-transform: uppercase;
      letter-spacing: 3px;
      padding: 20px 0;
      border-bottom: 1px solid #333;
      margin-bottom: 30px;
    }
    .prompt-card {
      background: #1a1a1a;
      border: 1px solid #333;
      border-left: 4px solid #00ff88;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 4px;
      page-break-inside: avoid;
    }
    .prompt-title {
      font-size: 1.3em;
      color: #00ff88;
      margin-bottom: 10px;
    }
    .prompt-id {
      color: #666;
      font-size: 0.9em;
    }
    .prompt-section {
      margin-top: 15px;
    }
    .section-label {
      color: #00ff88;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.85em;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    .section-content {
      color: #ccc;
      padding-left: 10px;
      border-left: 2px solid #333;
    }
    .copy-button {
      background: #00ff88;
      color: #0a0a0a;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.9em;
      border-radius: 4px;
      margin-top: 10px;
      transition: all 0.3s;
    }
    .copy-button:hover {
      background: #00cc6a;
      transform: translateY(-2px);
    }
    .toc {
      background: #1a1a1a;
      border: 1px solid #333;
      padding: 20px;
      margin-bottom: 40px;
      border-radius: 4px;
    }
    .toc h2 {
      color: #00ff88;
      margin-bottom: 15px;
    }
    .toc ul {
      list-style: none;
    }
    .toc li {
      padding: 5px 0;
    }
    .toc a {
      color: #888;
      text-decoration: none;
      transition: color 0.3s;
    }
    .toc a:hover {
      color: #00ff88;
    }
    @media print {
      body { background: white; color: black; }
      .prompt-card { border-color: #333; background: #f9f9f9; }
      .copy-button { display: none; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>MindSignal Prompt Library</h1>
      <p class="subtitle">Professional Video Prompts for Veo 3.1 & LtX Pro</p>
      <div class="stats">
        <div class="stat">
          <div class="stat-value">${prompts.length}</div>
          <div class="stat-label">Total Prompts</div>
        </div>
        <div class="stat">
          <div class="stat-value">${Object.keys(byGenre).length}</div>
          <div class="stat-label">Genres</div>
        </div>
        <div class="stat">
          <div class="stat-value">${cameraTerms.length}</div>
          <div class="stat-label">Camera Terms</div>
        </div>
      </div>
    </header>

    <div class="toc">
      <h2>Table of Contents</h2>
      <ul>
${Object.keys(byGenre).sort().map(genre =>
  `        <li><a href="#${genre}">${genre.toUpperCase()}</a> (${byGenre[genre].length} prompts)</li>`
).join('\n')}
      </ul>
    </div>
`;

  // Generate sections for each genre
  Object.keys(byGenre).sort().forEach(genre => {
    html += `
    <div class="genre-section" id="${genre}">
      <h2 class="genre-header">${genre.toUpperCase()}</h2>
`;

    byGenre[genre].forEach(prompt => {
      html += `
      <div class="prompt-card">
        <div class="prompt-title">${prompt.title}</div>
        <div class="prompt-id">${prompt.id}</div>

        <div class="prompt-section">
          <div class="section-label">Setting</div>
          <div class="section-content">${prompt.setting}</div>
        </div>

        <div class="prompt-section">
          <div class="section-label">Action</div>
          <div class="section-content">${prompt.action}</div>
        </div>

        <div class="prompt-section">
          <div class="section-label">Camera & Style</div>
          <div class="section-content">${prompt.cameraStyle}</div>
        </div>

        <div class="prompt-section">
          <div class="section-label">Output</div>
          <div class="section-content">${prompt.output}</div>
        </div>

        <button class="copy-button" onclick="navigator.clipboard.writeText(\`${prompt.fullPrompt.replace(/`/g, '\\`')}\`)">
          Copy Full Prompt
        </button>
      </div>
`;
    });

    html += `    </div>\n`;
  });

  html += `
  </div>

  <script>
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  </script>
</body>
</html>`;

  return html;
}

// Generate Markdown Quick Reference
function generateMarkdownQuickRef() {
  let md = '# MindSignal Prompt Library - Quick Reference\n\n';
  md += `**Total Prompts:** ${prompts.length} | **Genres:** ${Object.keys(byGenre).length}\n\n`;
  md += '---\n\n';

  Object.keys(byGenre).sort().forEach(genre => {
    md += `## ${genre.toUpperCase()} (${byGenre[genre].length} prompts)\n\n`;

    byGenre[genre].forEach(prompt => {
      md += `### ${prompt.id}\n`;
      md += `**${prompt.title}**\n\n`;
      md += `- **Setting:** ${prompt.setting}\n`;
      md += `- **Camera:** ${prompt.cameraStyle}\n\n`;
    });
  });

  return md;
}

// Export files
console.log('📄 Generating HTML prompt sheet...');
const html = generateHTML();
const htmlPath = path.join(CONFIG.outputDir, 'prompt_sheet.html');
fs.writeFileSync(htmlPath, html);
console.log(`✅ HTML sheet: ${htmlPath}`);

console.log('\n📄 Generating Markdown quick reference...');
const mdQuickRef = generateMarkdownQuickRef();
const mdPath = path.join(CONFIG.outputDir, 'prompt_quickref.md');
fs.writeFileSync(mdPath, mdQuickRef);
console.log(`✅ Quick ref: ${mdPath}`);

console.log('\n🎉 Export complete!\n');
console.log('📊 Generated files:');
console.log(`   - ${htmlPath} (${(fs.statSync(htmlPath).size / 1024).toFixed(1)} KB)`);
console.log(`   - ${mdPath} (${(fs.statSync(mdPath).size / 1024).toFixed(1)} KB)\n`);
