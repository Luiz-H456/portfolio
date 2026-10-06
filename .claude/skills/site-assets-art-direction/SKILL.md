---
name: site-assets-art-direction
description: Generate, organize, validate, and integrate the visual assets for the user's portfolio/site using the supplied asset specification. Use when creating or replacing the site's image/video assets, preparing prompts for an image/video model, checking output dimensions/formats, or deciding which visual treatment belongs to each section.
---

# Site Assets — Art Direction & Generation Skill

## Source of truth

`docs/assets.md` (repo root) is the primary specification. Preserve its terminology, dimensions, filenames, visual rules, and priority order. Do not silently replace its art direction.

Core rules:
- Original artwork only.
- Do not use characters, spacecraft, logos, frames, or recognizable elements from existing anime/franchises.
- Black-and-white ink + halftone for the illustrated assets.
- Color is supplied by CSS/duotone in the site.
- No text inside generated images; titles belong to HTML.
- Export illustrated assets as WebP, quality 80, at 2× the displayed frame dimensions.
- `floor.webp` is the sole photographic/color asset.
- Maximum two video loops.
- Videos are 5-second seamless loops, 1280px wide, H.264 MP4 + WebM, ≤1.5 MB, 12 fps limited animation.

## Asset inventory

Generate these static assets:

1. `assets/cover.webp` — 1200×1600, 3:4
2. `assets/sobre.webp` — 1100×740, 3:2
3. `assets/erp.webp` — 2240×1120, 2:1
4. `assets/botezini.webp` — 1100×1100, 1:1
5. `assets/lojas.webp` — 1100×1100, 1:1
6. `assets/barbearia.webp` — 2240×740, 3:1
7. `assets/stack.webp` — 1100×1100, 1:1
8. `assets/contato.webp` — 1100×1100, 1:1
9. `assets/floor.webp` — 2560×1440, 16:9, photographic/color

Video loops:
- `assets/sobre-loop.mp4`
- `assets/erp-loop.mp4`

## Generation workflow

### 1. Generate
Use the prompts in `docs/assets.md` (single source; do not duplicate them here).

Preferred illustrated-image models:
1. Midjourney
2. Recraft
3. Flux

Preferred video models:
1. Kling
2. Runway Gen-4
3. Luma Ray
4. Veo

For image-to-video, always start from the generated corresponding still image. Do not redesign the scene during animation.

### 2. Inspect
Reject an output if any of these occur:
- recognizable copyrighted character/franchise imitation;
- text, letters, watermark, signature, logo, UI text;
- color in an illustrated asset;
- gray-gradient/3D/photorealistic treatment in an illustrated asset;
- incorrect aspect ratio or composition that destroys the intended negative space;
- excessive visual detail behind HTML text;
- inconsistent line weight or rendering between assets;
- accidental faces/people where not requested;
- AI artifacts that would become obvious at the site's zoom level.

### 3. Normalize
Convert to the requested dimensions and WebP quality 80.

For videos:
- make the loop seamless;
- 12 fps;
- 1280px wide;
- H.264 MP4 and WebM;
- keep each file ≤1.5 MB;
- no audio.

### 4. Integrate
Keep HTML text separate from images.

For illustrated sections, implement the color treatment with CSS rather than generating color:
- source image: black/white;
- black pixels become the site's ink color;
- white pixels become the section/frame color.

Do not bake titles, labels, or UI elements into the images.

## Composition-specific requirements

### Cover
The top ~55% must remain visually quiet because the site title occupies that region. The spacecraft must be original and read as retro-futurist, not as a known franchise vehicle.

### Sobre
The porthole scene should communicate place, origin, and contemplation. Keep the interior strongly silhouetted and the exterior legible.

### ERP
The real ERP screenshot is the priority. The generated image is only the background. Never replace the actual ERP screenshot with the illustration.

### Botezini
Keep the embroidery process physically believable: thread, needle, hoop, fabric tension, stitch direction, and polo should look manufacturable rather than digitally simulated.

### Lojas
The diagonal split must clearly separate the two businesses while sharing the same visual language.

### Barbearia
Use the wide composition as atmosphere, not as a UI mockup. Preserve the empty-space/panoramic feel.

### Stack
The cockpit is an abstract representation of technical work. The CRT may show a wireframe cube, but no text or readable UI.

### Contato
The radio/handset communicates communication/contact. Preserve negative space at the top for HTML content.

### Floor
This is deliberately different: photographic, colored, dark walnut/near-black wood, single warm pool of light, strong vignette, no objects.

## Video direction

Only generate two videos.

### `sobre-loop.mp4`
Animate only:
- clouds drifting slowly left-to-right;
- very subtle sunset-light flicker.

Do NOT animate:
- town;
- porthole;
- interior;
- camera.

Use limited animation and preserve the original ink style.

### `erp-loop.mp4`
Animate only:
- nearest sewing-machine needle moving vertically;
- fabric advancing slightly;
- very subtle fluorescent flicker.

Keep:
- camera static;
- monitor stable;
- factory geometry stable;
- everything else motionless.

## Creative extensions

Do not add more generated assets by default. Prefer effects created in CSS/JS:
- duotone color swapping;
- very subtle paper/ink texture;
- hover zoom limited to 1.01–1.03;
- masked reveal transitions;
- slow parallax only on static background art;
- CRT scanline overlay for `stack`;
- subtle film-grain/noise overlay;
- section-specific clipping/masks;
- image loading via responsive `<picture>`/`srcset`.

The visual system should feel like one authored world rather than a gallery of unrelated AI generations.

## Priority

1. Real project screenshots/proof-of-work.
2. `cover.webp` and `floor.webp`.
3. Static art assets 2–8.
4. Video loops.

## Output checklist

Before declaring the asset set complete, verify:

- [ ] All nine static filenames exist.
- [ ] Dimensions/aspect ratios match the specification.
- [ ] Illustrated assets are monochrome.
- [ ] `floor.webp` is photographic and colored.
- [ ] No generated image contains text/logo/watermark.
- [ ] ERP screenshot remains a real screenshot layered over `erp.webp`.
- [ ] At most two videos exist.
- [ ] Both loops are seamless and silent.
- [ ] Video files are ≤1.5 MB each.
- [ ] CSS supplies the site's color treatment.
- [ ] Assets are optimized for mobile.
