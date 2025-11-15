# MindSignal Workflow Documentation

## Overview

Dieses Dokument beschreibt die vollständigen Workflows für die Arbeit mit dem MindSignal Toolkit - von der Prompt-Erstellung bis zur Produktion.

## Workflow 1: Prompt-Erstellung (Neu)

### Schritt 1: Idee & Genre-Auswahl

**Ziel:** Konzept entwickeln und passendes Genre wählen

1. **Genre bestimmen:**
   - action - Actionszenen, Kampf, Verfolgungsjagden
   - thriller - Spannung, Suspense, psychologische Momente
   - scifi - Sci-Fi, Zukunft, Technologie
   - commercial - Werbung, Produkt-Showcases
   - city - Urbane Szenen, Stadtleben
   - drama - Emotionale Momente, Charakterfokus
   - documentary - Dokumentarisch, real, informativ
   - mma_sport - Sport, Kampfsport, dynamisch
   - fantasy - Fantasy, Magie, surreal
   - horror - Horror, gruselig, bedrohlich

2. **Scene Index konsultieren:**
```bash
cat data/scene_index.json
```
Zeigt Genre-Beschreibungen, Keywords und Beispiele.

### Schritt 2: Prompt strukturieren

**Option A: Interaktiv mit normalize_prompts.js**

```bash
node tools/normalize_prompts.js
# Prompt-Text eingeben
# Tool strukturiert automatisch
```

**Input Beispiel:**
```
A dimly lit warehouse at night. Rain pours through broken skylights.
A lone figure moves through the shadows, searching for something.
Tracking shot following the character, handheld camera for tension.
```

**Output:**
```
[Setting]
A dimly lit warehouse at night. Rain pours through broken skylights.

[Action]
A lone figure moves through the shadows, searching for something.

[Camera & Style]
Tracking shot following the character, handheld camera for tension.

[Output]
4K, cinematic color grade, professional quality, 24fps
```

**Option B: Markdown Scene File**

1. **Scene File erstellen:**
```markdown
# Warehouse Search Scene
Genre: thriller

## Setting
A dimly lit warehouse at night. Rain pours through broken skylights.

## Action
A lone figure moves through the shadows, searching for something.

## Camera
Tracking shot following the character, handheld camera for tension, low angle
```

2. **Konvertieren:**
```bash
node tools/scene_to_prompt.js scenes/warehouse.md
```

**Generiert:**
- `warehouse_veo31.json`
- `warehouse_ltx.json`
- `warehouse_veo31.txt`
- `warehouse_ltx.txt`

### Schritt 3: Camera Terms integrieren

1. **Lexikon durchsuchen:**
```javascript
// In web interface: Camera Lexicon Tab
// Oder:
cat data/camera_terms.js | grep "tracking"
```

2. **Snippet kopieren:**
```
"langsame Tracking-Aufnahme auf Schienen, gleichmäßige Bewegung"
```

3. **In Prompt einfügen:**
```
[Camera & Style]
Tracking shot following the character, langsame Tracking-Aufnahme auf Schienen, gleichmäßige Bewegung, handheld camera for tension, low angle
```

### Schritt 4: Validierung & Export

1. **In Library hinzufügen:**
```json
// library/prompt_library.json
{
  "id": "THRILLER_011",
  "genre": "thriller",
  "title": "Warehouse Search Scene",
  "setting": "A dimly lit warehouse at night...",
  "action": "A lone figure moves through shadows...",
  "cameraStyle": "Tracking shot, handheld...",
  "output": "4K, cinematic color grade...",
  "fullPrompt": "[Setting]\n..."
}
```

2. **Prompts generieren:**
```bash
node tools/generate_prompts.js
```

Erstellt:
- `prompts/veo3_1/THRILLER_011.json`
- `prompts/ltx/THRILLER_011.json`

## Workflow 2: Bestehende Prompts nutzen

### Web Interface (Empfohlen)

1. **Dashboard öffnen:**
```bash
cd web
python3 -m http.server 8000
# Browser: http://localhost:8000
```

2. **Prompt suchen:**
   - **Genre Filter:** Action, Thriller, etc.
   - **Suchfeld:** Keywords eingeben
   - **Browse:** Durch Library scrollen

3. **Prompt kopieren:**
   - "Copy Full Prompt" → Veo 3.1 Format
   - "Copy Setting" → Nur Setting-Teil
   - Tab wechseln zu "LtX Pro" für anderes Format

### CLI-basiert

1. **Library durchsuchen:**
```bash
cat library/prompt_library.json | grep -A 10 "action"
```

2. **Specific prompt laden:**
```bash
cat prompts/veo3_1/ACTION_001.json
```

3. **Quick Reference:**
```bash
cat library/prompt_library.md | grep -A 5 "Urban Chase"
```

## Workflow 3: Batch-Verarbeitung

### Szenario: Multiple Szenen für ein Projekt

1. **Szenen vorbereiten:**
```
scenes/
├── scene_01_intro.md
├── scene_02_chase.md
├── scene_03_climax.md
└── scene_04_outro.md
```

2. **Batch-Konvertierung:**
```bash
for file in scenes/*.md; do
  node tools/scene_to_prompt.js "$file"
done
```

3. **Alle Prompts sammeln:**
```bash
# Veo 3.1 Prompts
cat scenes/*_veo31.txt > project_prompts_veo.txt

# LtX Pro Prompts
cat scenes/*_ltx.txt > project_prompts_ltx.txt
```

4. **Shotlist erstellen:**
```bash
# Prompts in library/prompt_library.json hinzufügen
# Dann:
node tools/build_shotlist.js
```

Ergebnis:
- `library/shotlist_main.csv` - Kompakte Übersicht
- `library/shotlist_detailed.csv` - Mit vollen Prompts
- `library/shotlist_summary.json` - Metadata

## Workflow 4: Produktion (Shotlist)

### Schritt 1: Shotlist generieren

```bash
node tools/build_shotlist.js
```

**Generiert:**
- Main shotlist (alle Shots)
- Detailed shotlist (volle Prompts)
- Genre-spezifische Shotlists
- Summary JSON

### Schritt 2: Import in Production Tools

**Google Sheets:**
1. File → Import
2. Upload `shotlist_main.csv`
3. Columns: Shot ID, Scene, Title, Genre, Description, Camera Movement, Framing, Lens, Style, Duration, Notes

**StudioBinder / Shot Lister:**
1. Import CSV
2. Map columns to fields
3. Use for production scheduling

**Excel:**
1. Data → From Text/CSV
2. Load `shotlist_detailed.csv`
3. Format & share with team

### Schritt 3: Auf Set

**Verwendung:**
- **Shot ID:** Referenz für Kommunikation
- **Camera Movement:** Instruktionen für DoP
- **Framing:** Shot composition guide
- **Duration:** Timing für Schnitt
- **Notes:** Action details

**Quick Access:**
```bash
# On mobile/tablet via web interface
# Filter by genre/scene
# Copy prompts on-demand
```

## Workflow 5: Prompt Engineering & Iteration

### Iteration Cycle

1. **Baseline erstellen:**
```
[Setting]
A busy city street during rush hour. People walking, cars honking.

[Action]
Camera captures the chaos and energy.

[Camera & Style]
Wide shot, handheld.

[Output]
4K, cinematic color grade.
```

2. **Camera Lexikon konsultieren:**
   - Web Interface → Camera Lexicon
   - Filter: "movement"
   - Find: "Steadicam", "Dutch Angle"

3. **Erweitern:**
```
[Camera & Style]
Wide establishing shot, Steadicam-Aufnahme durch Menschenmenge,
gleichmäßige Glide-Bewegung, Dutch Angle für Unruhe,
natural lighting with urban glow
```

4. **Testen & Vergleichen:**
   - Generate mit Veo 3.1
   - Generate mit LtX Pro (konvertiert)
   - Results evaluieren
   - Best practices dokumentieren

### A/B Testing Workflow

1. **Varianten erstellen:**
```json
{
  "id": "CITY_001_V1",
  "cameraStyle": "Wide shot, static"
},
{
  "id": "CITY_001_V2",
  "cameraStyle": "Wide shot, Steadicam through crowd"
}
```

2. **Beide generieren:**
```bash
# Add both to library
node tools/generate_prompts.js
```

3. **Ergebnisse vergleichen:**
   - Visual quality
   - Camera movement accuracy
   - Mood & atmosphere
   - Technical execution

4. **Winner dokumentieren:**
```markdown
# Best Practices Log

## CITY_001 Test
- **V1 (static):** Clean but boring
- **V2 (Steadicam):** ✅ Better energy, preferred
- **Learning:** Steadicam adds production value for city scenes
```

## Workflow 6: Team Collaboration

### Setup

1. **Repository klonen:**
```bash
git clone <repo-url>
cd mein-signal-agen
```

2. **Web Interface starten:**
```bash
cd web
python3 -m http.server 8000
```

3. **Team onboarding:**
   - Director: Prompt Library browsen
   - DoP: Camera Lexicon studieren
   - Producer: Shotlists exportieren
   - Editor: Genre-basierte Organisation

### Workflow für Teams

**Creative Lead:**
1. Browse existing prompts
2. Create new scene files (.md)
3. Add to library
4. Push to git

**Production:**
1. Pull latest library
2. Generate shotlists: `node tools/build_shotlist.js`
3. Export CSVs to production tools
4. Share with crew

**Post-Production:**
1. Reference original prompts for grade/VFX
2. Use `prompt_sheet.html` for offline reference
3. Match output to intended style

## Workflow 7: Format-Konvertierung

### Veo 3.1 → LtX Pro

**Automatisch (via Web):**
1. Web Interface → Tab "LtX Pro"
2. Auto-konvertiert alle Prompts
3. Copy individuell

**Programmatisch:**
```javascript
// In tools/custom_converter.js
const { convertVeoToLtx } = require('../data/prompt_templates.js');

const veoPrompt = {
  setting: "...",
  action: "...",
  cameraStyle: "Wide shot, tracking, cinematic",
  output: "4K, color grade"
};

const ltxPrompt = convertVeoToLtx(veoPrompt);
console.log(ltxPrompt.fullPrompt);
```

**Output:**
```
[Description]
...

[Motion]
...

[Framing]
Wide shot

[Cinematic Style]
tracking, cinematic, 4K, color grade
```

### LtX Pro → Veo 3.1

```javascript
const { convertLtxToVeo } = require('../data/prompt_templates.js');

const ltxPrompt = {
  description: "...",
  motion: "...",
  framing: "Close-up",
  style: "dramatic lighting, shallow DOF"
};

const veoPrompt = convertLtxToVeo(ltxPrompt);
```

## Workflow 8: Export & Sharing

### HTML Reference Sheet

**Generieren:**
```bash
node tools/export_prompt_sheet.js
```

**Ergebnis:**
- `library/prompt_sheet.html` - Standalone HTML mit allen Prompts
- `library/prompt_quickref.md` - Markdown quick reference

**Verwendung:**
- Email an Team
- Print für on-set reference
- Offline browsing
- Client presentations

### Markdown Export

**Quick Reference:**
```bash
cat library/prompt_library.md
```

**Für Confluence/Notion:**
1. Copy content from `prompt_library.md`
2. Paste into wiki
3. Auto-formatted

### CSV für Excel/Sheets

```bash
# Nach shotlist generation:
library/shotlist_main.csv
library/shotlist_detailed.csv
library/shotlist_<genre>.csv
```

**Share via:**
- Google Drive
- Dropbox
- Email attachment
- Import in project management tools

## Workflow 9: Raw Prompt Normalisierung

### Szenario: Unstrukturierte Prompts erhalten

**Input (raw.txt):**
```
City at night, neon lights everywhere, rain on the streets.
Person walking alone. Feeling isolated.
Camera should follow from behind, then reveal face.
Make it look cinematic, 4K quality.
```

**Normalisieren:**
```bash
node tools/normalize_prompts.js raw.txt
```

**Output (raw_normalized.txt):**
```
[Setting]
City at night, neon lights everywhere, rain on the streets.

[Action]
Person walking alone. Feeling isolated. Camera should follow from behind, then reveal face.

[Camera & Style]
Cinematic wide shot, natural lighting, smooth camera movement

[Output]
Make it look cinematic, 4K quality.
```

**Output (raw_normalized.json):**
```json
{
  "format": "Veo 3.1",
  "template": {
    "setting": "City at night...",
    "action": "Person walking...",
    "cameraStyle": "Cinematic wide shot...",
    "output": "Make it look cinematic, 4K quality."
  },
  "fullPrompt": "[Setting]\n...",
  "metadata": {
    "normalized": "2025-01-15T10:30:00Z",
    "source": "raw.txt"
  }
}
```

## Workflow 10: Continuous Integration

### Git Workflow

```bash
# 1. Feature branch
git checkout -b feature/new-genre-urban

# 2. Add prompts
# Edit library/prompt_library.json

# 3. Generate outputs
node tools/generate_prompts.js
node tools/build_shotlist.js
node tools/export_prompt_sheet.js

# 4. Commit
git add .
git commit -m "Add urban genre prompts (10 new)"

# 5. Push
git push origin feature/new-genre-urban

# 6. Merge to main
```

### Automation Scripts

**auto_build.sh:**
```bash
#!/bin/bash
# Run after library changes

echo "Generating prompts..."
node tools/generate_prompts.js

echo "Building shotlists..."
node tools/build_shotlist.js

echo "Exporting sheets..."
node tools/export_prompt_sheet.js

echo "✅ Build complete!"
```

**Usage:**
```bash
chmod +x auto_build.sh
./auto_build.sh
```

## Best Practices

### Prompt-Erstellung

1. **Be Specific:** Vage Beschreibungen = unvorhersehbare Results
2. **Layer Details:** Setting → Action → Camera → Output
3. **Use Camera Lexicon:** Professional terminology = bessere AI-Interpretation
4. **Test & Iterate:** A/B testing für optimale Prompts
5. **Document Learnings:** Was funktioniert, was nicht

### Organisation

1. **Consistent IDs:** `GENRE_###` Format beibehalten
2. **Genre Accuracy:** Prompts korrekt kategorisieren
3. **Version Control:** Git für alle Änderungen
4. **Backup:** Library regelmäßig sichern

### Collaboration

1. **Clear Naming:** Descriptive titles für Prompts
2. **Comments:** Metadata in JSON für Kontext
3. **Changelog:** Dokumentiere größere Updates
4. **Review Process:** Peer review für neue Prompts

## Troubleshooting

### "No prompts found"
- Check `library/prompt_library.json` exists
- Verify JSON syntax (use JSON validator)
- Run `node tools/generate_prompts.js`

### Camera terms not loading
- Check `data/camera_terms.js` syntax
- Ensure ES6 export format
- Test: `node -e "console.log(require('./data/camera_terms.js'))"`

### CSV encoding issues
- UTF-8 encoding required
- Check quotes in descriptions
- Use `"` escaping: `"text with ""quotes"" inside"`

### Web interface not loading data
- Check browser console for errors
- Verify file paths in `app.js`
- Test JSON files individually: `fetch('../library/prompt_library.json')`

## Quick Reference Commands

```bash
# Generate all formats
node tools/generate_prompts.js

# Normalize raw prompt
node tools/normalize_prompts.js prompt.txt

# Convert scene to prompts
node tools/scene_to_prompt.js scene.md

# Build shotlists
node tools/build_shotlist.js

# Export reference sheets
node tools/export_prompt_sheet.js

# Start web interface
cd web && python3 -m http.server 8000

# Validate JSON
cat library/prompt_library.json | python3 -m json.tool

# Search prompts
grep -i "tracking" library/prompt_library.json

# Count prompts by genre
cat library/prompt_library.json | grep '"genre"' | sort | uniq -c
```
