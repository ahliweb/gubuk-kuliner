# Skill: Landing Page UMKM Template (Gubuk Kuliner)

> Template landing page UMKM berbasis **Astro v6 + Tailwind CSS v4 + Vanilla JS** — dioptimalkan untuk AI Native Engineer dengan model AI murah/junior programmer.

## 🎯 Kapan Gunakan Skill Ini

Gunakan skill ini saat:
- Membuat landing page untuk UMKM/warung/restoran
- Membuat website statis dengan fokus konversi WhatsApp
- Membuat template yang bisa di-clone untuk proyek serupa
- AI model yang digunakan memiliki konteks terbatas (perlu struktur sederhana)

## 🏗️ Arsitektur Template

```
┌─────────────────────────────────────────────────────────────┐
│                    Astro v6 (Static)                        │
├──────────────┬──────────────────┬───────────────────────────┤
│   Data Layer │   UI Layer       │   Interaksi               │
│   (TypeScript│   (Astro +       │   (Vanilla JS ~100 baris) │
│    .ts files)│    Tailwind v4)  │                           │
├──────────────┼──────────────────┼───────────────────────────┤
│ site.ts      │ BaseLayout.astro │ main.js                   │
│ nutrition.ts │ Header.astro     │ - Mobile menu             │
│              │ Hero.astro       │ - Header scroll           │
│              │ MenuCard.astro   │ - Scrollspy               │
│              │ NutritionFacts   │                           │
│              │ FAQ.astro        │                           │
│              │ Footer.astro     │                           │
└──────────────┴──────────────────┴───────────────────────────┘
```

## 📋 Checklist Implementasi

### 1. Setup Proyek
```bash
npm create astro@latest -- --template minimal
npm install tailwindcss @tailwindcss/vite
```

### 2. Struktur Data (`src/data/site.ts`)
Buat file `site.ts` dengan struktur:
```ts
export const siteData = {
  brandName: string,
  website: string,
  whatsapp: string,
  address: string,
  openUntil: string,
  priceStart: string,
  mapsUrl: string,
  mapsEmbedUrl: string,
  waLink: string,
  waMessage: string,
  seoTitle: string,
  seoDescription: string,
  menus: Array<{ id, title, description, price, image, badge, waLink }>,
  advantages: Array<{ title, desc }>,
  steps: Array<{ num, title, desc }>,
  faqs: Array<{ q, a }>
};
```

### 3. Komponen Wajib
| Komponen | Fungsi |
|----------|--------|
| `BaseLayout.astro` | HTML wrapper, SEO, OG, JSON-LD, fonts |
| `Header.astro` | Sticky nav + mobile menu |
| `Hero.astro` | Headline + CTA + visual |
| `MenuCard.astro` | Card menu dengan gambar + harga + WA |
| `FAQ.astro` | Accordion (native `<details>`) |
| `Footer.astro` | Kontak + peta embed |
| `WhatsAppButton.astro` | Floating WA button |

### 4. OG Image
- Buat SVG source di `public/assets/img/og-image.svg`
- Convert ke PNG: `convert -density 150 og-image.svg -resize 1200x630 -quality 95 og-image.png`
- Pastikan 1200x630px, format PNG
- Gunakan font sistem (bukan @import) di SVG

### 5. Deploy
- Cloudflare Pages (gratis)
- Build command: `npm run build`
- Output: `dist`

## 🎨 Design System Pattern

### Warna Brand
```css
@theme {
  --color-brand-primary: #D9B43E;    /* Kuning mustard — CTA */
  --color-brand-secondary: #7A4A2E;  /* Cokelat tua — heading */
  --color-brand-accent: #F59E0B;     /* Orange — dekorasi */
  --color-brand-bg: #FFF9ED;         /* Krem — background */
  --color-brand-surface: #FFFFFF;    /* Putih — card */
  --color-brand-text: #3B2418;       /* Cokelat gelap — teks */
  --color-brand-muted: #80604A;      /* Cokelat redup — sekunder */
}
```

### Font
- Display: Outfit (heading)
- Body: Plus Jakarta Sans (teks)
- Handwritten: Caveat (doodle)

### Breakpoint
- Mobile-first: default → `sm:` (640px) → `md:` (768px) → `lg:` (1024px) → `xl:` (1280px)

## 🔑 Best Practices untuk AI Engineer

1. **Data dulu, komponen kemudian** — 80% perubahan konten bisa dilakukan di `site.ts`
2. **Native HTML > JavaScript** — `<details>` lebih baik dari custom accordion JS
3. **Tailwind > Custom CSS** — konsisten, tree-shake otomatis
4. **Satu perubahan per commit** — pesan jelas, atomic
5. **Test mobile dulu** — breakpoint `sm:` dan `md:` paling sering berubah
6. **OG image harus PNG** — SVG tidak didukung platform sosial media

## 📦 Template Clone Command

Untuk membuat proyek baru dari template ini:
```bash
git clone https://github.com/ahliweb/gubuk-kuliner.git nama-proyek-baru
cd nama-proyek-baru
# Edit src/data/site.ts dengan data baru
# Ganti gambar di public/assets/img/
npm install && npm run dev
```

## 💡 Tips untuk AI Model Murah/Junior

- Struktur file sederhana, tidak ada framework JS berat
- Data terpusat di 1-2 file `.ts`
- Komponen Astro tanpa props kompleks
- JavaScript minimal (~100 baris), mudah dipahami
- Tailwind CSS v4 konfigurasi via CSS (bukan JS config)
- Tidak ada build step kompleks
- Deploy gratis ke Cloudflare Pages
