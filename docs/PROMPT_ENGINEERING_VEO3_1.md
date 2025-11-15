# Prompt Engineering für Veo 3.1

## Overview

Google Veo 3.1 ist ein state-of-the-art Text-to-Video AI Model. Dieses Dokument beschreibt Best Practices für professionelle Prompt-Erstellung mit dem MindSignal Toolkit.

## Veo 3.1 Prompt Structure

### Core Template

```
[Setting]
Beschreibung der Umgebung, Lichtverhältnisse, Atmosphäre

[Action]
Was passiert in der Szene, Bewegungen, Ereignisse

[Camera & Style]
Kameraführung, Perspektive, cinematische Stilelemente

[Output]
Technische Spezifikationen, Qualität, Format
```

### Warum diese Struktur?

1. **Separation of Concerns:** Jede Section hat einen klaren Fokus
2. **AI Comprehension:** Strukturierte Inputs = konsistentere Outputs
3. **Iterative Refinement:** Einzelne Sections können isoliert optimiert werden
4. **Team Communication:** Clear sections für verschiedene Departments

## Section 1: Setting

### Purpose
Etabliert die **räumliche und atmosphärische Basis** der Szene.

### Best Practices

**✅ DO:**
```
A dimly lit underground parking garage, concrete pillars cast long shadows,
flickering fluorescent lights create an eerie atmosphere, puddles reflect the
cold artificial glow, late at night
```

**❌ DON'T:**
```
A parking garage
```

### Key Elements

1. **Location Type:** Specific environment (warehouse, forest, apartment)
2. **Lighting:** Time of day, light sources, quality (harsh, soft, dramatic)
3. **Atmosphere:** Mood, feeling, ambiance
4. **Environmental Details:** Weather, temperature cues, props
5. **Time Context:** Day/night, season, era (modern, vintage, futuristic)

### Examples by Genre

**Action:**
```
[Setting]
An abandoned industrial complex at sunset, rusted metal structures tower overhead,
broken windows catch the orange light, dust particles float in the air,
graffiti-covered walls, urban decay aesthetic
```

**Thriller:**
```
[Setting]
A pristine corporate office after hours, fluorescent lights hum quietly,
empty desks stretch into darkness, rain streaks down floor-to-ceiling windows,
city lights blur in the background, unsettling silence
```

**Sci-Fi:**
```
[Setting]
A sleek spaceship corridor, blue bioluminescent lighting pulses along the walls,
holographic displays flicker with data, metallic surfaces gleam,
low gravity environment, futuristic minimalist design
```

**Commercial:**
```
[Setting]
A modern minimalist kitchen bathed in morning sunlight, white marble countertops,
stainless steel appliances gleam, fresh flowers in a vase,
natural light streams through large windows, clean and inviting
```

**Documentary:**
```
[Setting]
A traditional Japanese tea house in Kyoto, soft natural light filters through
paper screens, tatami mats cover the floor, sliding doors partially open to
reveal a zen garden, authentic cultural setting
```

## Section 2: Action

### Purpose
Definiert **was passiert** in der Szene - Movement, Events, Narrative Beats.

### Best Practices

**✅ DO:**
```
A lone figure emerges from the shadows, moves cautiously between pillars,
pauses to listen, then suddenly breaks into a sprint toward the exit,
their footsteps echoing off concrete walls
```

**❌ DON'T:**
```
Someone runs
```

### Key Elements

1. **Subject:** Who/what is moving
2. **Movement Type:** Walk, run, float, glide, etc.
3. **Pace:** Slow, measured, frantic, graceful
4. **Sequence:** Order of events (A happens, then B, then C)
5. **Emotional Quality:** Hesitant, confident, desperate, calm

### Action Verbs by Category

**Physical Movement:**
- walks, runs, sprints, strides, shuffles
- climbs, descends, jumps, leaps
- crawls, slides, rolls

**Gestures:**
- reaches, grasps, points, waves
- touches, caresses, strikes
- opens, closes, reveals

**Camera Subject:**
- approaches, retreats, circles
- enters frame, exits frame, crosses frame
- stops, pauses, continues

**Environmental:**
- wind blows, rain falls, lights flicker
- door opens, object falls, explosion erupts

### Examples by Genre

**Action:**
```
[Action]
A figure in tactical gear bursts through a door, rolls to cover behind a metal crate,
weapon drawn, scans the area with precision, then advances in controlled movements
toward the next position, debris falling around them
```

**Thriller:**
```
[Action]
A woman slowly walks down the corridor, heels clicking on polished floor,
she glances over her shoulder nervously, pauses at a corner, takes a deep breath,
then continues with forced composure, hand trembling as she reaches for a door handle
```

**Drama:**
```
[Action]
An elderly man sits at a piano, fingers hover over the keys, hesitates,
then begins to play a melancholic melody, eyes close as memories wash over him,
a single tear rolls down his cheek
```

**MMA Sport:**
```
[Action]
Two fighters circle each other in the octagon, feinting and testing distance,
the first throws a sharp jab followed by a leg kick, the second counters with
a swift combination, then clinches, muscles tensed in athletic display
```

## Section 3: Camera & Style

### Purpose
Definiert **wie die Szene visuell präsentiert wird** - cinematische Sprache.

### MindSignal Camera Lexicon Integration

**Nutze das Camera Lexicon:**
```bash
# Web Interface → Camera Lexicon Tab
# Oder:
cat data/camera_terms.js
```

**28 Professional Terms verfügbar:**
- Movement: Dolly Zoom, Tracking Shot, Crane Shot, Orbit Shot, etc.
- Framing: Dutch Angle, Over-Shoulder, Bird's Eye, Worm's Eye, etc.
- Lens: Fisheye, Anamorphic, Tilt-Shift, Macro, etc.
- Special: Bullet Time, Whip Pan, Rack Focus, etc.

### Best Practices

**✅ DO:**
```
Tracking shot following the character from behind, Steadicam-Aufnahme für
gleichmäßige Bewegung, gradual push-in to close-up, shallow depth of field,
anamorphic lens flares, cinematic color grading with teal and orange tones,
film grain texture
```

**❌ DON'T:**
```
Camera follows the person
```

### Key Elements

1. **Shot Type:** Wide, medium, close-up, extreme close-up
2. **Camera Movement:** Static, tracking, dolly, crane, handheld
3. **Angle:** Eye-level, low, high, Dutch, bird's eye
4. **Lens Choice:** Wide-angle, telephoto, fisheye, macro
5. **Depth of Field:** Shallow (f/1.4), deep (f/16)
6. **Lighting Style:** Natural, dramatic, high-key, low-key
7. **Color Grade:** Teal/orange, desaturated, vintage, vibrant
8. **Texture:** Film grain, clean digital, vintage film look

### Camera Movement Examples

**Tracking Shot:**
```
[Camera & Style]
Smooth tracking shot on Dolly-Schienen, following character from medium distance,
gleichmäßige Geschwindigkeit maintains tension, camera slightly lower than eye level,
35mm lens for natural perspective
```

**Dolly Zoom (Vertigo Effect):**
```
[Camera & Style]
Dolly Zoom rückwärts while zooming in, dramatische Tiefenverzerrung creates
psychological unease, focused on character's face in close-up, background compresses,
suspenseful moment emphasis
```

**Crane Shot:**
```
[Camera & Style]
Sweeping crane shot starts low and rises majestically, reveals the full scope of
the environment, smooth ascending movement, wide-angle lens captures epic scale,
golden hour lighting, cinematic establishing shot
```

**Handheld:**
```
[Camera & Style]
Handheld camera with intentional Wackel-Effekt, raw documentary feel,
close to the action, intimate perspective, slight instability adds realism,
natural lighting, gritty aesthetic
```

### Framing Examples

**Dutch Angle:**
```
[Camera & Style]
Dutch Angle mit 15-20° Neigung, creates visual unease and disorientation,
tight framing on subject, horizon line tilted, psychological tension,
dramatic lighting from below
```

**Over-Shoulder:**
```
[Camera & Style]
Over-Shoulder shot establishing spatial relationship, foreground character
slightly out of focus, subject in sharp focus, conversational framing,
eye-level camera height, natural dialogue perspective
```

**Bird's Eye View:**
```
[Camera & Style]
Bird's Eye perspective direkt von oben, character appears small and vulnerable,
symmetrical composition, pattern emphasis, wide-angle lens,
detached observational perspective
```

### Lens Characteristics

**Anamorphic:**
```
[Camera & Style]
Anamorphic lens with characteristic horizontal lens flares, 2.39:1 aspect ratio feel,
oval bokeh, shallow depth of field, cinematic blue/teal flares from light sources,
premium film aesthetic
```

**Fisheye:**
```
[Camera & Style]
Fisheye lens with extreme 180° FOV, curved distortion at edges,
immersive perspective, close to subject, dynamic spatial warping,
creative artistic effect
```

**Tilt-Shift:**
```
[Camera & Style]
Tilt-Shift lens creates selective Schärfeebene, miniature effect,
narrow focus plane, artistic bokeh, architectural perspective control,
dreamy surreal quality
```

## Section 4: Output

### Purpose
Definiert **technische Spezifikationen** für das generierte Video.

### Standard Template

```
[Output]
4K resolution, cinematic color grade, professional quality, 24fps,
16:9 aspect ratio, clean digital quality
```

### Key Parameters

**Resolution:**
- 4K (3840×2160) - Standard professional
- 1080p (1920×1080) - HD quality
- 2K (2048×1080) - Cinema standard

**Frame Rate:**
- 24fps - Cinematic film look
- 30fps - Broadcast standard
- 60fps - Smooth motion (sports, action)
- 120fps+ - Slow motion capture

**Aspect Ratio:**
- 16:9 - Standard widescreen
- 2.39:1 - Anamorphic cinema
- 1:1 - Square (social media)
- 9:16 - Vertical (mobile)

**Quality Descriptors:**
- Professional quality
- Cinematic color grade
- Film grain texture
- Clean digital output
- Vintage film aesthetic
- HDR tone mapping

### Examples by Use Case

**Premium Cinematic:**
```
[Output]
4K resolution, anamorphic 2.39:1 aspect ratio, 24fps for film look,
cinematic color grade with teal and orange tones, subtle film grain,
professional quality with high dynamic range
```

**Commercial/Advertising:**
```
[Output]
4K resolution, vibrant color grade, 30fps, 16:9 standard format,
clean sharp digital quality, bright and inviting tone,
broadcast-ready professional output
```

**Documentary:**
```
[Output]
1080p, natural color grading, 24fps, 16:9 format,
realistic lighting and texture, authentic feel,
professional documentary quality
```

**Social Media:**
```
[Output]
1080p vertical 9:16 format, vibrant punchy colors, 30fps,
optimized for mobile viewing, high contrast, engaging visual style
```

**Slow Motion:**
```
[Output]
4K 120fps for slow motion playback, sharp detail capture,
clean digital quality, high shutter speed for clarity,
professional sports broadcast quality
```

## Complete Veo 3.1 Prompt Examples

### Example 1: Action - Urban Chase

```
[Setting]
Night-time city street, neon signs reflect off wet pavement, rain creates
a gritty urban atmosphere, steam rises from subway grates,
alleyways disappear into darkness, contemporary metropolitan setting

[Action]
A figure in dark clothing sprints through the street, weaving between
parked cars, glances over shoulder while running, leaps over a barrier,
lands and continues at full speed, determination in every movement

[Camera & Style]
Dynamic tracking shot following from behind, Steadicam für gleichmäßige
Verfolgung despite speed, gradual push-in as chase intensifies,
handheld-style subtle shake for urgency, anamorphic lens with blue lens flares
from neon lights, teal and orange color grade, high contrast

[Output]
4K resolution, cinematic color grade, 24fps, 2.39:1 aspect ratio,
film grain texture, professional action cinematography
```

### Example 2: Commercial - Product Showcase

```
[Setting]
Modern minimalist studio with soft white background, professional lighting
creates clean shadows, subtle gradient from white to light gray,
pristine and professional environment, contemporary aesthetic

[Action]
A sleek smartphone rotates slowly on a turntable, screen illuminates with
vibrant display, camera captures every angle, light dances across the
metallic edge, product presented with premium elegance

[Camera & Style]
Slow orbital rotation around product, macro lens for exquisite detail,
shallow depth of field isolates subject, soft diffused lighting creates
subtle highlights, smooth automated movement, clean commercial aesthetic,
bright and aspirational

[Output]
4K resolution, vibrant color grade emphasizing product colors, 30fps,
16:9 format, crystal clear digital quality, professional commercial production value
```

### Example 3: Thriller - Psychological Tension

```
[Setting]
Empty office building corridor at night, flickering fluorescent lights create
inconsistent illumination, long hallway stretches into darkness,
reflective floor shows distorted ceiling, unsettling corporate environment

[Action]
A woman walks slowly down the corridor, heels clicking echo in silence,
she pauses at every door, listens intently, continues with growing anxiety,
keeps checking behind her, hand trembles reaching for the final door

[Camera & Style]
Long tracking shot following from behind at increasing distance,
subject becomes smaller creating isolation, Dutch Angle mit leichter Neigung
increases unease, slow dolly-in maintains tension, low-key dramatic lighting
with strong shadows, desaturated color palette, cold blue tones

[Output]
4K resolution, moody thriller color grade, 24fps, 16:9 format,
atmospheric lighting, professional suspense cinematography
```

### Example 4: Documentary - Cultural Scene

```
[Setting]
Traditional Moroccan marketplace, vibrant colored fabrics hang overhead,
sunlight filters through creating dappled patterns, spice vendors arrange
colorful mounds, authentic cultural atmosphere, midday warmth

[Action]
Camera moves through the bustling souk, locals negotiate prices,
children run between stalls, vendor gestures animatedly,
life unfolds naturally, authentic cultural moments captured

[Camera & Style]
Handheld camera with naturalistic movement, eye-level perspective
for immersive experience, documentary-style observational approach,
natural lighting preserved, warm color palette emphasizing earth tones
and vibrant fabrics, authentic real-world texture

[Output]
1080p resolution, natural color grading, 24fps, 16:9 format,
realistic documentary quality, authentic cultural documentation
```

## Advanced Techniques

### Layering Details

**Basic:**
```
[Camera & Style]
Tracking shot, cinematic
```

**Intermediate:**
```
[Camera & Style]
Smooth tracking shot following character, cinematic color grade with
teal and orange tones
```

**Advanced:**
```
[Camera & Style]
Smooth tracking shot on Dolly-Schienen following character from medium distance,
Steadicam-Aufnahme für perfekte Stabilität, gradual push-in from wide to medium,
shallow depth of field with f/2.8, anamorphic lens creates horizontal flares
from street lights, cinematic color grade with teal shadows and warm highlights,
subtle film grain texture, professional cinematography
```

### Combining Camera Terms

```
[Camera & Style]
Starts with establishing crane shot descending from above,
transitions to tracking shot following character at eye level,
ends with dolly zoom for dramatic emphasis,
anamorphic lens throughout, cinematic lighting
```

### Genre-Specific Styles

**Action: High Energy**
- Fast camera movements
- Handheld instability
- High contrast lighting
- Desaturated with color pops
- Wide lenses for scale

**Thriller: Psychological**
- Slow deliberate movements
- Dutch angles
- Low-key lighting
- Desaturated cold tones
- Tight framing for claustrophobia

**Commercial: Aspirational**
- Smooth controlled movements
- Perfect lighting
- Vibrant colors
- Shallow depth of field
- Clean composition

**Documentary: Authentic**
- Natural handheld
- Available lighting
- Neutral color grade
- Observational framing
- Real-world texture

## Common Mistakes & Fixes

### Mistake 1: Vague Setting
**❌ Bad:**
```
[Setting]
A forest
```

**✅ Good:**
```
[Setting]
A dense Pacific Northwest forest, moss-covered trees tower overhead,
filtered sunlight creates ethereal rays through morning mist,
forest floor carpeted with ferns, damp earthy atmosphere,
tranquil natural environment
```

### Mistake 2: Unclear Action
**❌ Bad:**
```
[Action]
Person does something interesting
```

**✅ Good:**
```
[Action]
A hiker pauses on the trail, removes their backpack slowly,
kneels to examine wildflowers, gently touches petals,
smiles with quiet appreciation, then stands and continues journey
```

### Mistake 3: Generic Camera Direction
**❌ Bad:**
```
[Camera & Style]
Camera moves, looks good
```

**✅ Good:**
```
[Camera & Style]
Slow push-in on Dolly-Schienen from wide to medium shot,
camera height at subject's eye level, shallow depth of field with f/2.8,
natural lighting with warm golden hour glow, cinematic color grade,
gentle film grain, professional narrative cinematography
```

## Veo 3.1 Prompt Checklist

- [ ] **Setting:** Specific location with atmospheric details
- [ ] **Setting:** Lighting described (time, quality, sources)
- [ ] **Setting:** Mood/atmosphere established
- [ ] **Action:** Clear subject identified
- [ ] **Action:** Specific movements described
- [ ] **Action:** Sequence of events defined
- [ ] **Camera:** Shot type specified (wide, medium, close)
- [ ] **Camera:** Movement described (static, tracking, etc.)
- [ ] **Camera:** Angle/perspective indicated
- [ ] **Camera:** Lens characteristics included
- [ ] **Camera:** Lighting style referenced
- [ ] **Camera:** Color grade specified
- [ ] **Output:** Resolution stated
- [ ] **Output:** Frame rate included
- [ ] **Output:** Aspect ratio defined
- [ ] **Output:** Quality descriptors added

## Resources

**Camera Lexicon:** `/data/camera_terms.js`
**Templates:** `/data/prompt_templates.js`
**Example Library:** `/library/prompt_library.json`
**Tools:** `node tools/normalize_prompts.js`
