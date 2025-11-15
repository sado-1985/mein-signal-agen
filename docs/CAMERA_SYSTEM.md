# MindSignal Camera System Documentation

## Overview

Das MindSignal Camera System ist ein umfassendes Lexikon professioneller Kinematographie-Techniken, optimiert für AI Video Generation. 28 sorgfältig kuratierte Terms mit Prompt Snippets, Beschreibungen und Use Cases.

## Camera Lexicon Structure

```javascript
{
  id: "unique_identifier",
  name: "Technical Name (German/English)",
  desc: "Detailed description of technique",
  promptSnippet: "Ready-to-use prompt text",
  category: "movement|framing|lens|special",
  useCases: "When to use this technique"
}
```

## Categories

### 1. Movement (Kamerabewegung)
**9 Terms** - Techniken für dynamische Kameraführung

### 2. Framing (Bildausschnitt)
**8 Terms** - Komposition und Perspektive

### 3. Lens (Objektiv-Effekte)
**7 Terms** - Spezielle Objektiv-Charakteristiken

### 4. Special (Spezialeffekte)
**4 Terms** - Fortgeschrittene cinematische Techniken

---

## Movement Terms (Kamerabewegung)

### 1. Dolly Zoom (Vertigo Effect)

**ID:** `dolly_zoom`

**Description:**
Kamera fährt rückwärts während die Brennweite gleichzeitig reingezoomt wird (oder umgekehrt). Erzeugt einen surrealen Effekt, bei dem der Vordergrund gleich groß bleibt, aber der Hintergrund sich dramatisch verändert.

**Prompt Snippet:**
```
langsamer Dolly-Zoom rückwärts, dramatische Tiefenverzerrung, Hintergrund komprimiert sich während Subjekt konstant bleibt
```

**Use Cases:**
- Spannung & Realisation
- Psychologischer Schock
- Thriller-Momente
- Charakterentdeckungen

**Example in Prompt:**
```
[Camera & Style]
Dolly-Zoom rückwärts, dramatische Tiefenverzerrung, Hintergrund komprimiert sich
während Subjekt konstant bleibt, close-up auf Gesicht, psychologischer Impact
```

**Best For:** Thriller, Drama, Horror

---

### 2. Tracking Shot (Verfolgungsaufnahme)

**ID:** `tracking_shot`

**Description:**
Kamera folgt einem bewegten Subjekt, meist auf Schienen oder mit Steadicam. Sehr smooth und professionell.

**Prompt Snippet:**
```
langsame Tracking-Aufnahme auf Schienen, gleichmäßige Bewegung folgt Subjekt, cinematische Verfolgung
```

**Use Cases:**
- Charakterbegleitung
- Dynamische Szenen
- Professioneller Look
- Narrative Continuity

**Example in Prompt:**
```
[Camera & Style]
Smooth tracking shot auf Dolly-Schienen folgt Charakter von links nach rechts,
gleichmäßige Geschwindigkeit, Steadicam-Aufnahme, professionelle Kinematographie
```

**Best For:** Action, Drama, Commercial, alle Genres

---

### 3. Crane Shot (Kranaufnahme)

**ID:** `crane_shot`

**Description:**
Kamera bewegt sich vertikal nach oben oder unten, oft kombiniert mit horizontaler Bewegung. Episch und majestätisch.

**Prompt Snippet:**
```
majestätische Crane-Aufnahme steigt nach oben, enthüllt die volle Szenerie, sweeping Kamerabewegung
```

**Use Cases:**
- Establishing Shots
- Epische Momente
- Reveal-Szenen
- Scale & Grandeur

**Example in Prompt:**
```
[Camera & Style]
Sweeping crane shot beginnt niedrig und steigt majestätisch nach oben,
enthüllt volle Landschaft, wide-angle Perspektive, epischer cinematischer Moment
```

**Best For:** Sci-Fi, Fantasy, Action, Commercial

---

### 4. Orbit Shot (Kreisfahrt)

**ID:** `orbit_shot`

**Description:**
Kamera kreist um das Subjekt herum, während der Fokus konstant bleibt. Dramatic reveal from all angles.

**Prompt Snippet:**
```
kreisende Orbit-Aufnahme um Subjekt, 360-Grad-Rotation, dynamische Umkreisung
```

**Use Cases:**
- Produktpräsentation
- Helden-Einführung
- 360° Perspektive
- Dramatic Impact

**Example in Prompt:**
```
[Camera & Style]
Slow orbit shot kreist um Subjekt in konstantem Radius, 360-Grad-Rotation,
Subjekt bleibt center-frame, smooth circular movement, dramatic presentation
```

**Best For:** Commercial, Action, Character Introduction

---

### 5. Push In / Pull Out

**ID:** `push_pull`

**Description:**
Kamera bewegt sich direkt auf das Subjekt zu (Push In) oder davon weg (Pull Out). Fokus shift oder emotionale Änderung.

**Prompt Snippet:**
```
langsamer Push-In auf Subjekt, Kamera nähert sich graduell, intimere Perspektive
```

**Use Cases:**
- Emotionale Intensivierung
- Fokus-Transition
- Intimität aufbauen
- Establishing → Detail

**Example in Prompt:**
```
[Camera & Style]
Smooth dolly push-in von wide shot zu close-up, Kamera nähert sich graduell
dem Subjekt, shallow depth of field verstärkt sich, emotionale Intensität steigt
```

**Best For:** Drama, Thriller, Documentary

---

### 6. Whip Pan

**ID:** `whip_pan`

**Description:**
Extrem schnelle horizontale Kameraschwenkung, erzeugt Motion Blur. Dynamischer Übergang oder Action-Emphasis.

**Prompt Snippet:**
```
schneller Whip-Pan nach rechts mit Motion Blur, dynamischer Schwenk, energetische Kamerabewegung
```

**Use Cases:**
- Action-Übergänge
- Energetische Momente
- Schnelle Richtungswechsel
- Dynamische Edits

**Example in Prompt:**
```
[Camera & Style]
Rapid whip pan von links nach rechts, extreme motion blur während Schwenk,
landet auf neuem Subjekt, energetic action cinematography
```

**Best For:** Action, MMA Sport, Music Videos

---

### 7. Steadicam Shot

**ID:** `steadicam`

**Description:**
Stabilisierte Handheld-Aufnahme, kombiniert Flexibilität mit Smoothness. Professioneller Standard für Follow-Shots.

**Prompt Snippet:**
```
Steadicam-Aufnahme folgt Subjekt durch Umgebung, smooth trotz komplexer Bewegung, professionelle Stabilisierung
```

**Use Cases:**
- Character Following
- Durch Menschenmengen
- Komplexe Bewegungen
- Dokumentarischer Look mit Production Value

**Example in Prompt:**
```
[Camera & Style]
Steadicam shot folgt Charakter durch belebte Straße, smooth gliding movement
trotz Hindernissen, eye-level perspective, immersive following shot
```

**Best For:** Action, Documentary, Drama, Commercial

---

### 8. Handheld (Handkamera)

**ID:** `handheld`

**Description:**
Bewusst instabile Handkamera, natürlicher Wackel-Effekt. Dokumentarisch, realistisch, intim.

**Prompt Snippet:**
```
Handheld-Aufnahme mit natürlichem Wackel-Effekt, dokumentarischer Stil, unmittelbare Präsenz
```

**Use Cases:**
- Dokumentarisch
- Realistisch/Gritty
- Action-Intensität
- Intimität & Immediacy

**Example in Prompt:**
```
[Camera & Style]
Handheld camera mit intentionalem Wackel-Effekt, raw documentary feel,
close to action, realistic instability, gritty authentic aesthetic
```

**Best For:** Documentary, Action, Thriller, Horror

---

### 9. Gimbal Smooth Glide

**ID:** `gimbal_glide`

**Description:**
Elektronisch stabilisierte Glide-Bewegungen, smooth wie Dolly aber flexibler. Modern und elegant.

**Prompt Snippet:**
```
smooth Gimbal-Glide durch Szene, elektronisch stabilisierte Bewegung, fluide Kameraführung
```

**Use Cases:**
- Moderne Production
- Flexible Smooth Shots
- Durch enge Räume
- Contemporary Aesthetic

**Example in Prompt:**
```
[Camera & Style]
Gimbal-stabilized smooth glide folgt Subjekt mit elektronischer Stabilisierung,
fluid motion durch komplexe Umgebung, modern cinematic aesthetic
```

**Best For:** Commercial, Music Videos, Modern Drama

---

## Framing Terms (Bildausschnitt)

### 10. Dutch Angle (Schräge Kamera)

**ID:** `dutch_angle`

**Description:**
Kamera ist um 10-45° geneigt, Horizont schräg. Erzeugt Unbehagen, Desorientierung, psychologische Spannung.

**Prompt Snippet:**
```
Dutch Angle mit 15-20° Neigung, schräger Horizont erzeugt Unruhe, psychologische Spannung
```

**Use Cases:**
- Psychologische Thriller
- Desorientierung
- Villain-Perspektiven
- Surreale Momente

**Example in Prompt:**
```
[Framing]
Dutch angle mit 20° Neigung nach rechts, schräger Horizont creates visual tension,
tight framing, psychological unease through tilted perspective
```

**Best For:** Thriller, Horror, Psychological Drama

---

### 11. Over-Shoulder Shot

**ID:** `over_shoulder`

**Description:**
Kamera über die Schulter einer Person, zeigt was/wen sie ansieht. Standard für Dialoge und POV-Establishing.

**Prompt Snippet:**
```
Over-Shoulder-Perspektive, Schulter im Vordergrund leicht unscharf, Gegenüber im Fokus
```

**Use Cases:**
- Dialog-Szenen
- Conversational Framing
- Räumliche Beziehungen
- POV Establishing

**Example in Prompt:**
```
[Framing]
Over-shoulder shot, foreground character's shoulder and back of head slightly
out of focus, subject in sharp focus, conversational framing, eye-level
```

**Best For:** Drama, Dialogue Scenes, Documentary Interviews

---

### 12. Bird's Eye View (Vogelperspektive)

**ID:** `birds_eye`

**Description:**
Kamera direkt von oben, 90° nach unten. God's-eye perspective, pattern emphasis, Übersicht.

**Prompt Snippet:**
```
Bird's Eye Perspektive direkt von oben, Gott-ähnliche Übersicht, Muster und Symmetrie betont
```

**Use Cases:**
- Establishing Geography
- Pattern/Symmetrie
- Isolierung/Verletzlichkeit
- Choreographie zeigen

**Example in Prompt:**
```
[Framing]
Bird's eye view direkt von oben, subject klein in frame, symmetrical composition,
patterns emphasized, detached observational perspective
```

**Best For:** Action Choreography, Abstract, Establishing

---

### 13. Worm's Eye View (Froschperspektive)

**ID:** `worms_eye`

**Description:**
Kamera auf Bodenniveau oder darunter, schaut nach oben. Macht Subjekte imposant, mächtig, bedrohlich.

**Prompt Snippet:**
```
Worm's Eye Perspektive von unten, Subjekt ragt imposant auf, kraftvolle Darstellung
```

**Use Cases:**
- Macht/Autorität zeigen
- Heroische Momente
- Architek tur-Dramatik
- Größenverhältnis betonen

**Example in Prompt:**
```
[Framing]
Worm's eye view from ground level looking up, subject towers imposingly,
low angle emphasizes power and scale, dramatic perspective
```

**Best For:** Action Heroes, Architecture, Power Dynamics

---

### 14. POV (Point of View)

**ID:** `pov_shot`

**Description:**
Kamera nimmt die exakte Perspektive eines Charakters ein. Immersiv, subjektiv, Zuschauer sieht durch Charakteraugen.

**Prompt Snippet:**
```
POV-Aufnahme aus Charakter-Perspektive, subjektive Kamera, immersive First-Person-View
```

**Use Cases:**
- Immersion
- Subjektive Momente
- Horror (victim POV)
- Video Game aesthetic

**Example in Prompt:**
```
[Framing]
First-person POV shot, camera is character's eyes, hands visible in foreground
if relevant, immersive subjective perspective, direct engagement
```

**Best For:** Horror, Action, Immersive Storytelling

---

### 15. Center Framing (Symmetrische Zentrierung)

**ID:** `center_framing`

**Description:**
Subjekt perfekt mittig im Frame, oft symmetrisch. Wes Anderson Style, formal, deliberate composition.

**Prompt Snippet:**
```
perfekte Center-Framing, Subjekt mittig zentriert, symmetrische Komposition
```

**Use Cases:**
- Formale Ästhetik
- Symmetrie emphasis
- Stilisierte Looks
- Product Placement

**Example in Prompt:**
```
[Framing]
Perfect center framing, subject precisely centered in frame, symmetrical composition,
balanced visual weight, formal aesthetic, Wes Anderson style
```

**Best For:** Commercial, Stylized Film, Product Shots

---

### 16. Rule of Thirds

**ID:** `rule_of_thirds`

**Description:**
Subjekt auf den Schnittpunkten der gedachten Drittel-Linien positioniert. Klassische Kompositionsregel, dynamisch und ausgewogen.

**Prompt Snippet:**
```
Rule of Thirds Komposition, Subjekt im rechten Drittel, dynamische Balance
```

**Use Cases:**
- Natural Composition
- Visual Balance
- Professional Standard
- Alle Genres

**Example in Prompt:**
```
[Framing]
Rule of thirds composition, subject positioned at right intersection point,
visual interest distributed across frame, balanced dynamic framing
```

**Best For:** Alle Genres, Professional Standard

---

### 17. Extreme Close-Up (ECU)

**ID:** `extreme_closeup`

**Description:**
Extrem nah an Detail - Auge, Hand, Objekt. Intensität, emotion, Detail-Focus.

**Prompt Snippet:**
```
Extreme Close-Up auf Detail, intensive Nähe, emotionale oder objektive Detailbetonung
```

**Use Cases:**
- Emotionale Intensität
- Produkt-Detail
- Suspense Building
- Micro-Storytelling

**Example in Prompt:**
```
[Framing]
Extreme close-up on subject's eyes, detail fills frame, intense intimacy,
shallow depth of field, emotional intensity maximized
```

**Best For:** Drama, Commercial, Thriller

---

## Lens Terms (Objektiv-Effekte)

### 18. Fisheye Lens

**ID:** `fisheye`

**Description:**
Extrem weitwinkliges Objektiv (180° oder mehr), erzeugt charakteristische sphärische Verzerrung an den Rändern.

**Prompt Snippet:**
```
Fisheye-Objektiv mit extremer Weitwinkel-Verzerrung, 180° FOV, sphärische Krümmung
```

**Use Cases:**
- Action Sports (Skateboarding, etc.)
- Immersive Perspektiven
- Kreative Verzerrung
- Music Videos

**Example in Prompt:**
```
[Camera & Style]
Fisheye lens with 180° field of view, curved distortion at edges,
immersive wide perspective, dynamic spatial warping, creative effect
```

**Best For:** Action Sports, Music Videos, Creative Projects

---

### 19. Anamorphic Lens

**ID:** `anamorphic`

**Description:**
Erzeugt charakteristische horizontale Lens Flares, ovales Bokeh, 2.39:1 Widescreen Look. Premium cinematic aesthetic.

**Prompt Snippet:**
```
Anamorphic-Objektiv mit horizontalen Lens Flares, ovales Bokeh, cinematic Widescreen-Ästhetik
```

**Use Cases:**
- Kinofil m-Look
- Premium Production
- Science Fiction
- Blockbuster Aesthetic

**Example in Prompt:**
```
[Camera & Style]
Anamorphic lens creates horizontal blue lens flares from light sources,
oval bokeh, 2.39:1 cinematic aspect feel, premium film aesthetic
```

**Best For:** Sci-Fi, Blockbusters, Premium Commercial

---

### 20. Tilt-Shift (Miniature Effect)

**ID:** `tilt_shift`

**Description:**
Selektive Schärfeebene erzeugt Miniatur-Effekt, als wären echte Szenen Spielzeugmodelle.

**Prompt Snippet:**
```
Tilt-Shift-Objektiv erzeugt Miniatur-Effekt, selektive Schärfeebene, Spielzeug-Ästhetik
```

**Use Cases:**
- Miniature Look
- Creative Perspective
- Architektur
- Surreal Aesthetic

**Example in Prompt:**
```
[Camera & Style]
Tilt-shift lens creates selective focus plane, miniature effect makes real scene
appear toy-like, narrow depth of field, dreamy surreal quality
```

**Best For:** Creative Projects, Architecture, Stylized Commercial

---

### 21. Macro Lens

**ID:** `macro`

**Description:**
Extreme Nahaufnahme für kleinste Details - Insekten, Texturen, Produktdetails. 1:1 Reproduction ratio oder höher.

**Prompt Snippet:**
```
Macro-Objektiv für extreme Nahaufnahme, feinste Details sichtbar, 1:1 Vergrößerung
```

**Use Cases:**
- Produkt-Detail
- Natur/Insekten
- Texture Showcase
- Scientific

**Example in Prompt:**
```
[Camera & Style]
Macro lens extreme close-up, finest details visible, 1:1 magnification ratio,
shallow depth of field, texture emphasis, scientific precision
```

**Best For:** Product Commercial, Nature Documentary, Detail Shots

---

### 22. Wide-Angle Lens

**ID:** `wide_angle`

**Description:**
Breites Field of View (24mm-35mm), exaggerated perspective, mehr von der Umgebung sichtbar.

**Prompt Snippet:**
```
Wide-Angle-Objektiv mit breitem FOV, weite Perspektive, Umgebung betont
```

**Use Cases:**
- Landschaften
- Architekt ur
- Enge Räume größer wirken lassen
- Establishing Shots

**Example in Prompt:**
```
[Camera & Style]
Wide-angle lens with broad field of view, exaggerated perspective depth,
environment emphasized, spatial context clear, 24mm focal length
```

**Best For:** Landscapes, Architecture, Establishing Shots

---

### 23. Telephoto Lens

**ID:** `telephoto`

**Description:**
Lange Brennweite (85mm+), komprimiert Perspektive, isoliert Subjekt, shallow DOF.

**Prompt Snippet:**
```
Telephoto-Objektiv komprimiert Hintergrund, isoliert Subjekt, shallow Depth of Field
```

**Use Cases:**
- Portraits
- Hintergrund-Kompression
- Subject Isolation
- Intimität trotz Distanz

**Example in Prompt:**
```
[Camera & Style]
Telephoto lens at 85mm compresses background, subject isolated with shallow
depth of field, compressed perspective, portrait aesthetic
```

**Best For:** Portraits, Drama, Wildlife

---

### 24. Vintage Lens Character

**ID:** `vintage_lens`

**Description:**
Ältere Objektive mit character: Soft focus, vignetting, chromatic aberration, organisches Bokeh.

**Prompt Snippet:**
```
Vintage-Objektiv mit weichem organischem Look, leichte Vignettierung, nostalgischer Character
```

**Use Cases:**
- Period Pieces
- Nostalgische Ästhetik
- Organic Look
- Character über Clinical Sharpness

**Example in Prompt:**
```
[Camera & Style]
Vintage lens character with soft organic rendering, subtle vignetting,
warm nostalgic aesthetic, less clinical than modern glass, period film look
```

**Best For:** Period Dramas, Nostalgic Content, Artistic Projects

---

## Special Effects (Spezialeffekte)

### 25. Bullet Time / Time Slice

**ID:** `bullet_time`

**Description:**
Frozen-motion effect mit Kamera-Rotation um eingefrorenes Subjekt. Matrix-Style, multiple cameras simuliert.

**Prompt Snippet:**
```
Bullet-Time-Effekt, Subjekt eingefroren während Kamera rotiert, Matrix-Style slow-motion
```

**Use Cases:**
- Action Highlights
- Superhero Moments
- Time Manipulation
- Iconic Shots

**Example in Prompt:**
```
[Camera & Style]
Bullet time effect, subject frozen in mid-action while camera rotates around,
Matrix-style time manipulation, slow-motion with dynamic perspective change
```

**Best For:** Action, Sci-Fi, Music Videos

---

### 26. Rack Focus

**ID:** `rack_focus`

**Description:**
Fokus wechselt während des Shots von einem Objekt zum anderen. Attention shift, narrative emphasis.

**Prompt Snippet:**
```
Rack Focus wechselt von Vordergrund zu Hintergrund, Aufmerksamkeit shiftet, selektiver Fokus
```

**Use Cases:**
- Narrative Transitions
- Reveal Moments
- Attention Direction
- Dialogue Shifts

**Example in Prompt:**
```
[Camera & Style]
Rack focus shifts from foreground subject to background object, selective focus
guides attention, smooth focus pull, cinematic narrative technique
```

**Best For:** Drama, Thriller, Narrative Films

---

### 27. Slow Motion (High Frame Rate)

**ID:** `slow_motion`

**Description:**
Aufnahme mit hoher Framerate (120fps+), Wiedergabe in slow motion. Dramatisiert Bewegung, zeigt Details.

**Prompt Snippet:**
```
Slow Motion mit 120fps+, Bewegung dramatisch verlangsamt, Details sichtbar
```

**Use Cases:**
- Action Highlights
- Emotional Beats
- Sports Analysis
- Beauty/Product Shots

**Example in Prompt:**
```
[Camera & Style]
High frame rate slow motion, 120fps captures motion in dramatic slow-mo,
every detail visible, time elongated for emphasis, professional sports cinematography
```

**Best For:** Action, Sports, Emotional Drama, Commercial

---

### 28. Time Lapse

**ID:** `time_lapse`

**Description:**
Lange Zeitperiode komprimiert in kurzen Shot. Clouds racing, Stadt bei Nacht, etc.

**Prompt Snippet:**
```
Time-Lapse-Effekt komprimiert Zeit, Wolken rasen vorbei, beschleunigte Bewegung
```

**Use Cases:**
- Passage of Time
- Natural Phenomena
- Urban Energy
- Transitions

**Example in Prompt:**
```
[Camera & Style]
Time-lapse effect compresses hours into seconds, clouds race across sky,
stars rotate, traffic flows in streams of light, temporal compression
```

**Best For:** Establishing, Transitions, Nature, Urban

---

## Usage in Prompts

### Single Term Integration

```
[Camera & Style]
Smooth tracking shot auf Dolly-Schienen folgt Charakter durch Szene,
natural lighting, cinematic color grade, 4K
```

### Multiple Terms Combination

```
[Camera & Style]
Begins with bird's eye view establishing geography, cranes down to eye level,
transitions to tracking shot following subject, anamorphic lens creates horizontal
flares, teal and orange color grade, film grain texture, professional cinematography
```

### Genre-Specific Stacks

**Action:**
```
Handheld camera with Wackel-Effekt, whip pan transitions between angles,
slow motion at 120fps for impact moments, high contrast, desaturated color
```

**Commercial:**
```
Slow orbit shot around product, macro lens for detail, center framing,
soft diffused lighting, vibrant color grade, 4K pristine quality
```

**Thriller:**
```
Dutch angle mit 15° Neigung, slow dolly push-in, rack focus reveals background threat,
low-key dramatic lighting, desaturated cold tones
```

## Camera System in MindSignal Toolkit

### Access via Web Interface

1. **Dashboard öffnen:**
   ```bash
   cd web && python3 -m http.server 8000
   ```

2. **Tab "Camera Lexicon" öffnen**

3. **Features:**
   - Filter by Category (Movement, Framing, Lens, Special)
   - Search by keyword
   - Copy prompt snippets
   - Browse all 28 terms

### Access via Command Line

```bash
# View all terms
cat data/camera_terms.js

# Search for specific technique
grep -i "tracking" data/camera_terms.js

# Get specific category
grep -A 5 "category: 'movement'" data/camera_terms.js
```

### Integration with Tools

**scene_to_prompt.js automatically enhances:**
```bash
node tools/scene_to_prompt.js scene.md
# Automatically adds relevant camera terms to prompts
```

**Prompt Library includes camera terms:**
All 100 prompts use terms from lexicon for professional quality.

## Best Practices

### 1. Match Technique to Genre
- **Action:** Handheld, Tracking, Slow Motion
- **Commercial:** Orbit, Macro, Center Framing
- **Thriller:** Dutch Angle, Dolly Zoom, Rack Focus
- **Documentary:** Handheld, Natural Framing, Steadicam

### 2. Layer Techniques
Don't just use one term - combine for richness:
```
Tracking shot + Anamorphic lens + Slow push-in + Teal/orange grade
```

### 3. Technical Precision
Use exact terminology from lexicon rather than vague descriptions.

### 4. Context Appropriate
Not every shot needs complex camera work - static shots have power too.

## Reference Quick List

**Movement:** Dolly Zoom, Tracking, Crane, Orbit, Push/Pull, Whip Pan, Steadicam, Handheld, Gimbal

**Framing:** Dutch Angle, Over-Shoulder, Bird's Eye, Worm's Eye, POV, Center, Rule of Thirds, ECU

**Lens:** Fisheye, Anamorphic, Tilt-Shift, Macro, Wide-Angle, Telephoto, Vintage

**Special:** Bullet Time, Rack Focus, Slow Motion, Time Lapse

## Resources

**Full Lexicon:** `/data/camera_terms.js`
**Web Interface:** Camera Lexicon Tab
**Prompt Examples:** `/library/prompt_library.json` (all use camera terms)
**Scene Converter:** `node tools/scene_to_prompt.js` (auto-enhances with terms)
