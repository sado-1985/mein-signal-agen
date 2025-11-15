# Prompt Engineering für LtX Pro

## Overview

LightricksX (LtX) Pro ist ein hochperformantes Video-AI-Model optimiert für schnelle, qualitativ hochwertige Videogenerierung. Dieses Dokument beschreibt Best Practices für LtX Pro Prompts mit dem MindSignal Toolkit.

## LtX Pro Prompt Structure

### Core Template

```
[Description]
Was in der Szene zu sehen ist - Setting und visuelle Elemente

[Motion]
Bewegungen und Dynamik in der Szene

[Framing]
Kamera-Framing und Perspektive

[Cinematic Style]
Visueller Stil, Lighting, Color, Technik
```

### Unterschiede zu Veo 3.1

| Aspekt | Veo 3.1 | LtX Pro |
|--------|---------|---------|
| **Setting** | Eigene Section | Teil von [Description] |
| **Action** | Eigene Section | Teil von [Motion] |
| **Camera** | Mit Style kombiniert | Aufgeteilt: [Framing] + [Style] |
| **Focus** | Narrative Flow | Visual Composition |
| **Length** | Ausführlich | Kompakt, fokussiert |

### Philosophie

**Veo 3.1:** Storytelling-orientiert, narrative Struktur
**LtX Pro:** Visuell-orientiert, technische Präzision

## Section 1: Description

### Purpose
Beschreibt **was visuell in der Szene präsent ist** - Objekte, Personen, Umgebung, visuelle Elemente.

### Best Practices

**✅ DO:**
```
[Description]
A cyberpunk street market at night, neon signs in Japanese and English illuminate
wet pavement, street vendors with glowing displays, crowds of people in futuristic
clothing, holographic advertisements float above stalls, rain creates reflective surfaces
```

**❌ DON'T:**
```
[Description]
A market scene
```

### Key Elements

1. **Visual Inventory:** What objects/people are visible
2. **Environment:** Location characteristics
3. **Lighting Sources:** Practical lights, ambient, special
4. **Color Palette:** Dominant colors, contrasts
5. **Atmospheric Elements:** Rain, fog, particles, smoke

### Description vs. Veo Setting

**Veo 3.1 Setting:**
```
A dimly lit warehouse at sunset, dust particles float in orange light,
broken windows, abandoned industrial space, eerie atmosphere
```

**LtX Description:**
```
Abandoned warehouse interior, concrete floor with debris, metal shelving
units casting long shadows, orange sunset light streams through broken windows,
dust particles visible in light beams, industrial decay aesthetic
```

**Difference:** LtX focuses on **visual composition**, Veo on **atmospheric narrative**.

### Examples by Genre

**Sci-Fi:**
```
[Description]
Futuristic space station observation deck, curved transparent walls reveal
Earth below, sleek metallic surfaces with blue accent lighting, floating
holographic displays show orbital data, minimalist high-tech design
```

**Commercial:**
```
[Description]
Premium watch resting on marble surface, soft diffused lighting creates
elegant reflections, rose gold metal catches light, black leather strap
with visible texture, white background gradients to light gray, luxury aesthetic
```

**Documentary:**
```
[Description]
Traditional blacksmith workshop, anvil in center with glowing hot metal,
tools hanging on weathered walls, forge fire illuminates the space,
craftsman in leather apron, authentic industrial heritage setting
```

**Horror:**
```
[Description]
Decrepit hospital corridor, peeling paint reveals water-damaged walls,
flickering fluorescent lights create inconsistent illumination, overturned
wheelchair casts ominous shadow, medical equipment abandoned, decay atmosphere
```

## Section 2: Motion

### Purpose
Definiert **alle Bewegung** in der Szene - Subject motion, Camera motion, Environmental motion.

### Best Practices

**✅ DO:**
```
[Motion]
Camera slowly pushes forward through the crowd, people move naturally around frame,
vendor gestures to display items, holographic ads cycle through animations,
rain falls steadily creating ripples in puddles
```

**❌ DON'T:**
```
[Motion]
Things move
```

### Motion Types

**1. Camera Motion:**
- Push in / Pull out
- Lateral tracking
- Orbiting / Circling
- Rising / Descending
- Static (no movement)

**2. Subject Motion:**
- Walking, running, dancing
- Gestures, expressions
- Interactions with objects

**3. Environmental Motion:**
- Weather (rain, wind, snow)
- Mechanical (rotation, sliding)
- Natural (water flow, leaves falling)

### LtX Motion Specificity

LtX Pro responds well to **precise motion descriptions**:

**Generic:**
```
[Motion]
Person walks through the scene
```

**Specific:**
```
[Motion]
Figure walks steadily left to right across frame, camera tracks alongside
maintaining constant distance, subject's pace measured and deliberate,
background elements pass at consistent speed
```

### Examples by Category

**Camera-Primary Motion:**
```
[Motion]
Slow dolly push-in from wide to medium shot, camera advances smoothly toward
subject, maintaining center framing, focus remains sharp throughout,
gentle constant speed creates contemplative mood
```

**Subject-Primary Motion:**
```
[Motion]
Athlete performs deadlift in smooth controlled motion, bar rises from floor
to hip level over 2 seconds, muscles engage visibly, exhales at top of lift,
returns bar to floor with control, athletic power displayed
```

**Environmental Motion:**
```
[Motion]
Wind sweeps through field of wheat, stalks wave in synchronized patterns,
clouds move slowly across sky, shadows shift across landscape,
natural rhythm of environment emphasized
```

**Combined Motion:**
```
[Motion]
Camera orbits slowly around product at constant radius, product rotates
on turntable in opposite direction creating dynamic reveal, light
reflections dance across surface, smooth coordinated movement
```

## Section 3: Framing

### Purpose
Definiert **Kamera-Framing** - Shot size, Angle, Composition.

### Core Framing Types

**Shot Sizes:**
- Extreme Wide Shot (EWS) / Establishing Shot
- Wide Shot (WS) / Full Shot
- Medium Shot (MS)
- Close-Up (CU)
- Extreme Close-Up (ECU)

**Angles:**
- Eye Level
- Low Angle (looking up)
- High Angle (looking down)
- Bird's Eye View (directly overhead)
- Worm's Eye View (directly below)
- Dutch Angle (tilted horizon)

**Composition:**
- Center framing
- Rule of thirds
- Leading lines
- Symmetrical
- Over-shoulder

### Best Practices

**✅ DO:**
```
[Framing]
Medium shot, eye-level angle, subject center frame with headroom,
rule of thirds composition with visual interest in left third
```

**❌ DON'T:**
```
[Framing]
Normal shot
```

### Examples

**Establishing Shot:**
```
[Framing]
Extreme wide shot from elevated position, landscape fills frame,
horizon line in upper third, expansive sense of scale,
symmetrical composition emphasizes vastness
```

**Portrait:**
```
[Framing]
Close-up, eye-level angle, subject fills frame with minimal headroom,
shallow focus isolates from background, intimate framing
```

**Product Shot:**
```
[Framing]
Medium close-up, slightly elevated angle looking down 15 degrees,
product centered in frame, negative space surrounding,
clean commercial composition
```

**Action:**
```
[Framing]
Wide shot, low angle looking up at subject, dynamic composition
with diagonal lines, subject positioned in right third of frame,
emphasizes power and scale
```

**Documentary:**
```
[Framing]
Medium shot, eye-level, slightly off-center framing leaves
interview space, natural conversational composition,
authentic documentary style
```

### Framing for Different Genres

**Commercial - Clean & Centered:**
```
[Framing]
Medium shot, product perfectly centered, symmetrical composition,
elevated angle at 30 degrees, minimal distractions, premium framing
```

**Thriller - Unsettling:**
```
[Framing]
Close-up, Dutch angle tilted 20 degrees, tight framing creates
claustrophobia, off-center composition, psychological tension
```

**Documentary - Authentic:**
```
[Framing]
Medium shot, eye-level, rule of thirds with subject in left,
environmental context visible, natural observational framing
```

**Fantasy - Epic:**
```
[Framing]
Wide shot from low angle, subject small against vast environment,
dramatic sky fills upper two-thirds, sense of scale and wonder
```

## Section 4: Cinematic Style

### Purpose
Definiert **visuellen Stil** - Lighting, Color, Texture, Technical Quality.

### Key Components

**1. Lighting Style:**
- Natural / Available light
- Dramatic / High contrast
- Soft / Diffused
- Hard / Sharp shadows
- Low-key / High-key
- Motivated (from visible sources)

**2. Color Grade:**
- Vibrant / Saturated
- Desaturated / Muted
- Monochromatic
- Teal and Orange
- Warm / Cool tones
- High contrast / Low contrast

**3. Texture & Quality:**
- Clean digital
- Film grain
- Vintage film look
- Sharp / Soft focus
- HDR / Standard dynamic range

**4. Technical Specs:**
- Resolution (4K, 1080p)
- Frame rate (24fps, 30fps, 60fps)
- Aspect ratio (16:9, 2.39:1)
- Lens characteristics

### Best Practices

**✅ DO:**
```
[Cinematic Style]
Dramatic low-key lighting with strong side light, teal and orange color grade,
film grain texture, shallow depth of field, anamorphic lens bokeh,
4K resolution, 24fps cinematic feel
```

**❌ DON'T:**
```
[Cinematic Style]
Looks good
```

### Style Templates by Genre

**Action - High Impact:**
```
[Cinematic Style]
High contrast lighting, desaturated color with selective color pops,
fast shutter speed for sharp motion, gritty texture, handheld-style energy,
4K 60fps for smooth action, professional action cinematography
```

**Commercial - Premium:**
```
[Cinematic Style]
Soft diffused lighting creates gentle shadows, vibrant saturated colors
emphasize product appeal, shallow depth of field at f/2.8, clean sharp digital,
polished commercial aesthetic, 4K 30fps, broadcast quality
```

**Thriller - Moody:**
```
[Cinematic Style]
Low-key dramatic lighting with deep shadows, desaturated blue-teal color grade,
film noir aesthetic, high contrast, subtle grain texture, mysterious atmosphere,
4K 24fps cinematic
```

**Documentary - Natural:**
```
[Cinematic Style]
Natural available lighting preserved, neutral color grading maintains authenticity,
realistic skin tones, medium depth of field, observational documentary aesthetic,
1080p 24fps, authentic real-world look
```

**Sci-Fi - Futuristic:**
```
[Cinematic Style]
Cool blue and cyan color palette, neon light accents, clean sharp digital,
high-key lighting with vibrant highlights, modern sci-fi aesthetic,
lens flares from practical lights, 4K HDR, futuristic polish
```

**Fantasy - Magical:**
```
[Cinematic Style]
Warm golden lighting with ethereal glow, saturated rich colors,
soft focus creates dreamlike quality, particle effects in light beams,
fairy tale aesthetic, shallow depth of field, 4K 24fps, enchanting atmosphere
```

## Complete LtX Pro Prompt Examples

### Example 1: Commercial - Luxury Product

```
[Description]
Premium Swiss watch on black velvet display, rose gold case catches soft light,
sapphire crystal face reflects subtly, brown leather strap with visible grain texture,
white background gradients to warm gray, minimalist luxury presentation

[Motion]
Camera slowly orbits product clockwise, watch remains stationary on turntable,
light reflections shift across metal surface revealing craftsmanship,
smooth constant rotation completes full circle in 10 seconds

[Framing]
Medium close-up, elevated angle 30 degrees looking down, product centered
in frame, negative space surrounding, symmetrical premium composition

[Cinematic Style]
Soft diffused lighting creates elegant highlights without harsh shadows,
warm color grade emphasizes gold tones, shallow depth of field at f/2.8,
pristine clean digital quality, luxury commercial aesthetic, 4K 30fps
```

### Example 2: Action - MMA Fight

```
[Description]
Professional MMA octagon, two fighters in athletic stance, referee watching closely,
cage fence surrounds the action, dramatic arena lighting creates high contrast,
crowd silhouettes visible in background, intense competitive atmosphere

[Motion]
Camera rapidly tracks left as fighters exchange combination strikes,
first fighter throws jab-cross combination, second counters with leg kick,
both move with explosive athletic speed, camera maintains dynamic framing

[Framing]
Wide shot, low angle looking up at fighters emphasizing power,
both athletes framed with room for movement, dynamic asymmetrical composition

[Cinematic Style]
High contrast dramatic lighting, desaturated color with skin tone preservation,
fast shutter speed captures sharp motion, gritty texture, high energy aesthetic,
4K 60fps for smooth athletic movement, professional sports cinematography
```

### Example 3: Sci-Fi - Space Station

```
[Description]
Futuristic command center interior, curved transparent viewport shows Earth below,
holographic displays float in air showing orbital data, sleek white surfaces
with blue LED accent strips, lone astronaut at central console, high-tech minimalism

[Motion]
Camera pushes slowly forward toward astronaut, holographic displays cycle
through data animations, stars rotate slowly outside viewport,
astronaut types commands with focused gestures, Earth rotates gradually

[Framing]
Medium shot transitioning to close-up, eye-level approaching from behind,
astronaut center-left with Earth visible through window in background,
compositionally balanced science fiction framing

[Cinematic Style]
Cool blue lighting from monitors and LEDs, clean digital sci-fi color palette
with cyan accents, sharp focus, subtle lens flares from practical light sources,
modern futuristic aesthetic, 4K 24fps, premium science fiction production
```

### Example 4: Documentary - Craftsman

```
[Description]
Traditional woodworking workshop, craftsman's hands shape wood on workbench,
tools hang on weathered wall, natural light from window illuminates work area,
wood shavings on floor, authentic artisan environment with vintage character

[Motion]
Camera slowly pushes in toward hands at work, craftsman planes wood surface
with rhythmic strokes, shavings curl away from blade, gentle deliberate movements
demonstrate mastery, natural workflow captured

[Framing]
Medium shot transitioning to close-up on hands, eye-level documentary perspective,
rule of thirds with subject in left frame, environmental context visible,
observational authentic framing

[Cinematic Style]
Natural window light creates soft directional lighting, warm neutral color grade
preserves authentic wood tones, medium depth of field keeps context visible,
subtle grain texture adds character, documentary realism aesthetic, 1080p 24fps
```

### Example 5: Horror - Abandoned Location

```
[Description]
Decayed asylum hallway, cracked walls with peeling paint, overturned wheelchair
in foreground, flickering ceiling light creates inconsistent illumination,
medical equipment scattered, ominous decay and abandonment atmosphere

[Motion]
Camera advances slowly down corridor with deliberate creeping movement,
ceiling light flickers intermittently, shadows shift with light changes,
wheelchair rocks slightly as if disturbed, unsettling environmental motion

[Framing]
Wide shot from low angle looking down hallway, wheelchair in foreground right,
corridor vanishes into darkness in background, Dutch angle 10 degrees adds unease

[Cinematic Style]
Low-key dramatic lighting with deep shadows, desaturated color with green-teal tint,
high contrast between light and dark, gritty texture, atmospheric haze,
horror cinematography aesthetic, 4K 24fps, disturbing mood
```

## Veo 3.1 to LtX Pro Conversion

### Automated Conversion

MindSignal toolkit bietet automatische Konvertierung:

**Via Web Interface:**
1. Tab "LtX Pro" öffnen
2. Alle Veo Prompts werden automatisch konvertiert

**Via Node.js Tool:**
```javascript
const { convertVeoToLtx } = require('./data/prompt_templates.js');

const veoPrompt = {
  setting: "Night city street, neon lights, rain",
  action: "Person runs through traffic",
  cameraStyle: "Tracking shot, handheld, anamorphic",
  output: "4K, cinematic color grade"
};

const ltxPrompt = convertVeoToLtx(veoPrompt);
console.log(ltxPrompt.fullPrompt);
```

### Manual Conversion Guidelines

**Step 1: Setting + Visual Elements → Description**

Veo Setting:
```
A dimly lit warehouse at sunset, dust particles float in orange light,
broken windows, abandoned feel
```

LtX Description:
```
Abandoned warehouse interior, concrete floor with scattered debris,
broken windows allowing orange sunset light, dust particles visible
in light beams, metal shelving casting long shadows, industrial decay
```

**Step 2: Action + Camera Motion → Motion**

Veo Action:
```
A figure walks cautiously between pillars, pauses to listen, then runs
toward the exit
```

Veo Camera:
```
Tracking shot following from behind
```

LtX Motion:
```
Camera tracks behind figure walking cautiously between pillars,
subject pauses mid-frame, then suddenly accelerates into run toward exit,
camera speed increases to maintain framing, dynamic pursuit motion
```

**Step 3: Camera Style → Framing**

Veo Camera (extract framing):
```
Wide shot, handheld, low angle
```

LtX Framing:
```
Wide shot, low angle looking up at subject, handheld-style composition,
dynamic framing with room for movement
```

**Step 4: Camera Style + Output → Cinematic Style**

Veo Camera (extract style):
```
anamorphic lens, cinematic color grade with teal and orange
```

Veo Output:
```
4K, film grain, 24fps
```

LtX Style:
```
Anamorphic lens characteristics with horizontal flares, teal and orange
color grade, film grain texture, 4K resolution, 24fps cinematic feel
```

## LtX Pro Optimization Tips

### 1. Conciseness

LtX responds well to **focused, precise descriptions** without excessive narrative:

**Less Optimal:**
```
[Description]
The viewer sees a beautiful sunset over mountains where the light
creates an amazing atmosphere and everything looks very cinematic
```

**Optimized:**
```
[Description]
Mountain range silhouetted against orange sunset sky, sun low on horizon
creates backlit peaks, atmospheric haze layers depth, dramatic natural vista
```

### 2. Technical Precision

LtX appreciates **specific technical language**:

**Generic:**
```
[Cinematic Style]
Nice lighting, good colors, professional look
```

**Precise:**
```
[Cinematic Style]
Three-point lighting setup, key light from left at 45 degrees,
fill softens shadows, rim light separates subject from background,
neutral color grade, sharp focus, 4K digital quality
```

### 3. Motion Clarity

**Ambiguous:**
```
[Motion]
Things move around interestingly
```

**Clear:**
```
[Motion]
Camera dollies left-to-right at constant speed, subject walks toward camera
diagonally from background, both motions converge in center frame,
coordinated movement creates dynamic composition
```

### 4. Consistent Framing

LtX maintains framing better with **specific spatial description**:

**Vague:**
```
[Framing]
Shot of the person
```

**Specific:**
```
[Framing]
Medium shot, subject centered vertically, positioned in left third
horizontally, eye-level camera height, headroom approximately 10% of frame
```

## LtX Pro Best Practices Summary

### DO's:
- ✅ Use precise visual descriptions
- ✅ Specify motion types clearly (camera vs. subject)
- ✅ Define framing with technical terms
- ✅ Layer style elements (lighting + color + texture)
- ✅ Include technical specs in Style section
- ✅ Be concise but specific

### DON'Ts:
- ❌ Mix narrative storytelling into Description
- ❌ Leave motion ambiguous
- ❌ Use vague framing terms
- ❌ Overload with unnecessary adjectives
- ❌ Forget technical quality specs
- ❌ Duplicate information across sections

## LtX Pro Prompt Checklist

- [ ] **Description:** Visual inventory complete
- [ ] **Description:** Environment clearly described
- [ ] **Description:** Color palette indicated
- [ ] **Motion:** Camera motion specified
- [ ] **Motion:** Subject motion detailed
- [ ] **Motion:** Speed/pace indicated
- [ ] **Framing:** Shot size stated
- [ ] **Framing:** Angle described
- [ ] **Framing:** Composition noted
- [ ] **Style:** Lighting type specified
- [ ] **Style:** Color grade described
- [ ] **Style:** Texture/quality indicated
- [ ] **Style:** Technical specs included (4K, fps, etc.)

## Resources

**Conversion Tool:** `convertVeoToLtx()` in `/data/prompt_templates.js`
**Examples:** Web Interface → "LtX Pro" tab
**Camera Terms:** `/data/camera_terms.js` (apply to Framing & Style)
**Library:** All prompts auto-convert to LtX format
