# Assets para gerar (imagens e vídeos)

Gere, exporte e coloque em `assets/` com o nome indicado. Eu integro.

## Regras para todas as imagens
- **Arte original.** Não use personagens, naves, logos nem frames de Cowboy Bebop ou de outro anime, e não cite o nome de nenhuma obra no prompt.
- **Arte em preto e branco** (tinta + retícula). A cor entra no site por CSS (duotone): preto vira tinta e branco vira a cor do quadro. Assim todos os quadros ficam coerentes, mesmo gerados em dias diferentes.
- **Sem texto na imagem.** Os títulos são HTML.
- **Exportar** em WebP, qualidade 80, no tamanho indicado (2× o quadro, para ficar nítido no zoom). Se o gerador entregar menos (ex.: 1024px), use o upscale dele (Midjourney "Upscale (Creative)", Magnific, Krea) antes de exportar.
- **Nunca cite o nome do arquivo no prompt.** O gerador lê "stack" como "pilha" e desenha roupas empilhadas.
- **Modelo recomendado:** Midjourney (estilo artístico). Alternativas: Recraft (ilustração) e Flux. Para outro modelo, use o bloco de texto sem os parâmetros `--`.

### Bloco de estilo (cole no início de todo prompt de imagem)
```
black and white Japanese manga ink illustration, 1990s hand-drawn cel-era aesthetic, bold confident brush-pen linework with varied line weight, heavy solid black shadows, mechanical halftone screentone dots for midtones, cross-hatching in deep shadows, high contrast, pure white paper background, cinematic composition, retro-futurist jazz-noir mood, no color, no gray gradients, no text, no lettering, no logos, no signature, no watermark, full-bleed edge to edge, no panel border, no frame
```
**Negativos:** `--no color, gradient shading, 3d render, photorealism, text, letters, logo, watermark, signature, frame border, characters' faces, blurry, low detail`

---

## Imagens

### 1. Capa do volume: `assets/cover.webp` (1200×1600, 3:4)
Status: v1 recebida e em uso (765px, upscale pendente). Refazer com o prompt abaixo: a v1 tem um canhão longo na frente, o que lembra naves de anime conhecidas.
```
[ESTILO] Vertical composition. A lone original retro-futurist single-seat spacecraft with a short blunt rounded nose, chunky twin rear engines, stubby swept-back wings and a bubble canopy (no long cannon or boom protruding forward, no forward guns), banking low over a rust-desert canyon at dusk, thin exhaust trail curving toward the viewer. Vast empty sky occupying the top 55% of the frame (reserved for the title, keep it nearly empty with only faint screentone stars). Low horizon, distant mesas, fine dust kicked up below the craft. Dramatic rim light from a low sun behind the mesas, long shadows. Wide-angle 24mm feel, slight dutch tilt. --ar 3:4 --style raw --stylize 200
```

### 2. Sobre: `assets/sobre.webp` (1100×740, 3:2)
Status: aprovada e em uso (1024px; upscale para 1100+ opcional).
```
[ESTILO] View from inside a dark room through a large circular porthole window with a thick riveted metal frame, one vertical support bar crossing the glass. Outside, at sunset, a hillside colonial town of Minas Gerais: whitewashed houses with terracotta roofs, two baroque church bell towers silhouetted against towering cumulus clouds. Interior in near-total black silhouette, a desk edge and a coffee mug in the foreground lower-left, a laptop glowing faintly. Clouds rendered with stepped flat screentone bands. Calm, contemplative. --ar 3:2 --style raw --stylize 150
```

### 3. ERP: `assets/erp.webp` (2240×1120, 2:1)
```
[ESTILO] Wide panoramic interior of a small clothing factory floor: two long rows of industrial sewing machines receding to a vanishing point, bolts of fabric stacked on shelves, hanging garment racks with uniforms on hangers, overhead fluorescent tube lights casting hard pools of light. A single wall-mounted monitor in the middle distance glowing white (screen left blank and bright, no interface detail). Dynamic one-point perspective, speed lines faintly radiating from the monitor. Busy but orderly. --ar 2:1 --style raw --stylize 150
```
O print real do ERP continua sendo a prioridade. Esta arte é o fundo do quadro, e o print entra por cima.

### 4. Botezini: `assets/botezini.webp` (1100×1100, 1:1)
```
[ESTILO] Extreme close-up still life: a wooden embroidery hoop holding taut fabric with a half-finished embroidered emblem (abstract geometric shape, no letters), a threaded needle pulling the stitch, spools of thread and a folded polo uniform beside it. Strong side light from the left, deep black shadow on the right half. Macro 100mm feel, shallow depth suggested by simplified background lines. --ar 1:1 --style raw --stylize 150
```

### 5. Lojas (BTZN + Fora da Caixa): `assets/lojas.webp` (1100×1100, 1:1)
```
[ESTILO] Split composition divided by a single diagonal black gutter line from top-right to bottom-left. Upper-left half: a streetwear shoebox with its lid half-open on a concrete floor, a folded hoodie inside, a countdown clock on the wall behind (blank face, no numbers). Lower-right half: a lush hand-tied flower bouquet wrapped in kraft paper with twine, roses and eucalyptus leaves. Both halves lit by the same hard light from the top, consistent ink style, mirrored balance. --ar 1:1 --style raw --stylize 150
```

### 6. Barbearia: `assets/barbearia.webp` (2240×740, 3:1)
```
[ESTILO] Ultra-wide panoramic interior of a classic barbershop at night: vintage hydraulic barber chair in the center, straight razor and comb on a counter in the foreground right, a large wall mirror reflecting rows of empty chairs into infinity, a rotating barber pole silhouette by the window on the left, rain streaks on the window glass. Moody noir lighting, single overhead lamp cone. --ar 3:1 --style raw --stylize 150
```

### 7. Painel de comando (arquivo `assets/stack.webp`, 1100×1100, 1:1)
Status: refazer. As 2 versões saíram como pilha de roupas.
```
[ESTILO] Interior view, no clothing, no fabric, no folded garments. Retro-futurist spaceship cockpit console seen from the pilot seat: banks of chunky toggle switches, round analog gauges, a small CRT monitor with scanlines showing an abstract wireframe cube (no text), thick bundles of cables snaking across the floor, a coffee cup on the dashboard. Through the curved windshield, a starfield rendered as screentone dots. Low angle, slight fisheye 18mm feel. --ar 1:1 --style raw --stylize 150
```

### 8. Contato: `assets/contato.webp` (1100×1100, 1:1)
```
[ESTILO] A vintage shortwave radio transceiver with a coiled handset microphone resting on a metal desk inside a spacecraft cabin, a circular porthole behind it showing a planet's curved horizon at sunrise rendered in stepped screentone bands. The handset cord loops toward the viewer. Warm, inviting, slight low angle, centered composition with negative space at the top. --ar 1:1 --style raw --stylize 150
```

### 9. Chão sob o livro: `assets/floor.webp` (2560×1440, 16:9, colorido e fotográfico)
Este é o único asset fotográfico e colorido. Não use o bloco de estilo.
```
Top-down flat lay photograph of a dark worn wooden floorboard surface, deep walnut and near-black tones, subtle grain and scratches, a soft warm pool of light from a single desk lamp falling in the center and fading to black at all edges (strong vignette), dust specks visible in the light, nothing on the floor, no objects. Overhead camera perfectly perpendicular, 35mm, f/8, low-key lighting, cinematic. --ar 16:9 --style raw --stylize 50 --no objects, furniture, text, people
```

---

## Vídeos (loops curtos, sem áudio)

Use no máximo 2. Vídeo pesa no celular e só toca quando o quadro está em foco.
- **Modelos:** Kling, Runway Gen-4, Luma Ray ou Veo. Gere a partir da imagem correspondente (image-to-video), para manter o traço.
- **Exportar:** 5 s em loop perfeito (o último quadro igual ao primeiro), 1280px de largura, MP4 H.264 + WebM, até 1,5 MB, 12 fps (animação "de dois em dois", como desenho clássico).

### V1. Nuvens na janela do Sobre: `assets/sobre-loop.mp4`
```
Image-to-video from sobre.webp. Locked-off static camera, no camera movement. Only the clouds outside the porthole drift slowly left to right and the sunset light flickers subtly; the town, the window frame and the interior stay completely still. Hand-drawn limited animation at 12 frames per second, boiling ink lines, black and white manga style preserved exactly, no color added. Seamless 5-second loop, last frame matches first frame.
```

### V2. Agulha da máquina de costura no ERP: `assets/erp-loop.mp4`
```
Image-to-video from erp.webp. Static camera. The nearest sewing machine needle moves up and down rhythmically, fabric advances slightly, fluorescent lights hum with a faint flicker, the wall monitor glows steadily. Everything else motionless. Black and white manga ink style preserved, 12 fps limited animation with subtle line boil. Seamless 5-second loop.
```

---

## Ordem de prioridade
1. Prints reais (ERP com dados fictícios, Botezini, BTZN, Fora da Caixa, Barbearia). São prova de trabalho.
2. `cover.webp` e `floor.webp`, a primeira impressão.
3. Arte dos quadros (2 a 8).
4. Vídeos.
