# Skill: Landing Page UMKM Template (Gubuk Kuliner)

> Template landing page UMKM berbasis **Astro v6 + Tailwind CSS v4 + Vanilla JS minimal**.

## Kapan Dipakai
- Membuat landing page UMKM, warung, atau restoran.
- Membuat website statis dengan fokus konversi WhatsApp.
- Membuat template yang bisa di-clone untuk proyek serupa.

## Arsitektur Template

```
Astro v6 (static)
├── Data layer: src/data/site.ts, src/data/nutrition.ts
├── UI layer: BaseLayout, Header, Hero, MenuCard, NutritionFacts, OrderSteps, Gallery, FAQ, Footer, WhatsAppButton
└── Interaksi: src/scripts/main.js
    ├── mobile menu
    ├── header scroll shrink
    └── scrollspy
```

## Struktur Data

`src/data/site.ts` menyimpan:
- brand name, website, WhatsApp, alamat, jam buka, harga awal
- maps URL dan embed URL
- SEO title dan description
- `menus`, `advantages`, `steps`, dan `faqs`

`src/data/nutrition.ts` menyimpan:
- data estimasi gizi per `menuId`
- `portion`, `values`, `disclaimer`, dan `dataSource`

## Komponen Wajib
| Komponen | Fungsi |
|---|---|
| `BaseLayout.astro` | HTML wrapper, SEO, OG, JSON-LD, fonts |
| `Header.astro` | Sticky nav + mobile menu + badge buka |
| `Hero.astro` | Headline + CTA + visual |
| `MenuCard.astro` | Card menu dengan gambar, harga, dan CTA WA |
| `NutritionFacts.astro` | Panel nutrisi estimasi tanpa JS |
| `OrderSteps.astro` | 4 langkah pesan |
| `Gallery.astro` | Galeri gambar |
| `FAQ.astro` | Accordion native `<details>` |
| `Footer.astro` | Kontak + maps embed + foto warung |
| `WhatsAppButton.astro` | Floating WA button |

## OG Image
- Source SVG: `public/assets/img/og-image.svg`
- Output PNG: `public/assets/img/og-image.png`
- Ukuran: 1200x630px

## Design System

```css
@theme {
  --color-brand-primary: #D9B43E;
  --color-brand-secondary: #7A4A2E;
  --color-brand-accent: #F59E0B;
  --color-brand-bg: #FFF9ED;
  --color-brand-surface: #FFFFFF;
  --color-brand-text: #3B2418;
  --color-brand-muted: #80604A;
}
```

- Font display: Outfit.
- Font body: Plus Jakarta Sans.
- Handwritten accent: Caveat.

## Best Practices
1. Data dulu, komponen kemudian.
2. Pakai native HTML sebelum menambah JavaScript.
3. Tailwind utility dulu, custom CSS hanya jika perlu.
4. Keep changes kecil dan atomic.
5. Test mobile lebih dulu.

## Clone Command

```bash
git clone https://github.com/ahliweb/gubuk-kuliner.git nama-proyek-baru
cd nama-proyek-baru
npm install
npm run dev
```
