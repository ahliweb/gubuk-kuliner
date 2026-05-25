# AGENTS.md — Panduan AI Engineer untuk Gubuk Kuliner

> Repositori ini dioptimalkan untuk **AI Native Engineer** — developer yang menggunakan AI assistant (OpenCode, Claude, dll) sebagai partner coding utama.

## 🏗️ Arsitektur Proyek

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Framework | **Astro v6** | Static-first, zero JS by default, mudah dipahami AI |
| Styling | **Tailwind CSS v4** | Utility-first, konsisten, CSS-native config (`@theme`) |
| Interaksi | **Vanilla JS** (~100 baris) | Tanpa framework, mudah di-maintain, ringan |
| Data | **TypeScript** (`site.ts`, `nutrition.ts`) | Single source of truth, typed, mudah diedit |
| Deploy | **Cloudflare Pages** | Gratis, cepat, CI/CD otomatis dari GitHub |

## 📁 Struktur File Penting

```
src/
├── data/
│   ├── site.ts          # ← EDIT KONTEN DI SINI (brand, menu, FAQ, WA)
│   └── nutrition.ts     # ← EDIT DATA GIZI DI SINI
├── layouts/
│   └── BaseLayout.astro # ← SEO, OG tags, JSON-LD, fonts global
├── components/          # ← Komponen UI reusable
├── pages/
│   ├── index.astro      # ← Halaman utama (kompilasi komponen)
│   └── license.astro    # ← Halaman lisensi
├── styles/
│   └── global.css       # ← Tailwind @theme + custom CSS
└── scripts/
    └── main.js          # ← JS interaktif (mobile menu, scroll)

public/assets/img/
├── og-image.png         # ← OG image 1200x630 (sosial media)
├── og-image.svg         # ← Source SVG untuk OG image
├── logo.svg             # ← Logo brand
├── nasi_telur_dadar.png # ← Foto menu
└── tahu_tek_tek.png     # ← Foto menu
```

## 🎯 Workflow AI Engineer

### 1. Edit Konten → `src/data/site.ts`
Semua teks, link, harga, menu, FAQ ada di satu file. Tidak perlu sentuh komponen.

### 2. Tambah Komponen Baru
- Buat file `.astro` di `src/components/`
- Gunakan `interface Props` untuk typed props
- Import di `src/pages/index.astro`
- Gunakan Tailwind classes untuk styling

### 3. Tambah Data Terstruktur
- Buat file `.ts` baru di `src/data/`
- Export interface + data array + helper function
- Import di komponen yang butuh

### 4. Update OG Image
- Edit `public/assets/img/og-image.svg` (source)
- Convert ke PNG: `convert -density 150 og-image.svg -resize 1200x630 -quality 95 og-image.png`
- Pastikan ukuran 1200x630px

## 🎨 Design System

### Warna Brand
| Token | Hex | Penggunaan |
|-------|-----|------------|
| `--color-brand-primary` | `#D9B43E` | Kuning mustard — CTA, badge, aksen |
| `--color-brand-secondary` | `#7A4A2E` | Cokelat tua — heading, border |
| `--color-brand-accent` | `#F59E0B` | Orange — dekorasi |
| `--color-brand-bg` | `#FFF9ED` | Krem — background halaman |
| `--color-brand-surface` | `#FFFFFF` | Putih — card, surface |
| `--color-brand-text` | `#3B2418` | Cokelat sangat tua — teks utama |
| `--color-brand-muted` | `#80604A` | Cokelat redup — teks sekunder |

### Font
| Token | Font | Penggunaan |
|-------|------|------------|
| `--font-sans` | Plus Jakarta Sans | Body text |
| `--font-display` | Outfit | Heading, judul |
| Handwritten | Caveat | Doodle, anotasi dekoratif |

### Breakpoint
| Breakpoint | Target |
|------------|--------|
| Default | Mobile (360px+) |
| `sm:` | 640px+ |
| `md:` | 768px+ |
| `lg:` | 1024px+ |
| `xl:` | 1280px+ |

## ✅ Best Practices

### Komponen
- Gunakan **native HTML** sebelum JS (`<details>` > custom accordion)
- Props typed dengan TypeScript `interface`
- Semantic HTML + ARIA attributes
- Touch target minimal 44x44px

### Data
- Single source of truth di `src/data/`
- Export interface + data + helper function
- Gunakan `id` untuk relasi antar data

### OG Image
- Format **PNG** (bukan SVG) untuk kompatibilitas sosial media
- Ukuran **1200x630px** (rasio 1.91:1)
- Gunakan font sistem (bukan @import) agar render konsisten
- Simpan source SVG untuk editing

### Performa
- Astro prerender default → static HTML
- Gambar `loading="lazy"` + width/height
- JS defer via `<script src="...">`
- Tidak ada React/Vue/Svelte

### Aksesibilitas
- Satu H1 per halaman
- Heading hierarkis (H1 → H2 → H3)
- Alt text deskriptif untuk semua gambar
- Skip link ke konten utama
- Focus-visible ring 3px

## 🚀 Commands

```bash
npm install          # Instal dependensi
npm run dev          # Dev server (http://localhost:4321)
npm run build        # Build produksi → dist/
npm run preview      # Preview build produksi
```

## 📝 Checklist Sebelum Deploy

- [ ] `npm run build` berhasil tanpa error
- [ ] OG image PNG 1200x630 ada di `public/assets/img/`
- [ ] Semua link WA menggunakan format `https://wa.me/...`
- [ ] JSON-LD valid (cek di https://search.google.com/test/rich-results)
- [ ] Meta OG dan Twitter Card terisi lengkap
- [ ] Tidak ada secret/API key di frontend
- [ ] `robots.txt` dan `sitemap.xml` benar
- [ ] Security headers di `_headers` terpasang

## 🤖 Tips untuk AI Engineer

1. **Baca `docs/prompt.md`** sebelum mulai — dokumentasi lengkap ada di sana
2. **Edit `site.ts` dulu** sebelum mengubah komponen — 80% perubahan konten bisa dilakukan di sini
3. **Gunakan Tailwind classes** sebelum custom CSS — konsisten dan tree-shake otomatis
4. **Native HTML > JS** — `<details>`, `<dialog>`, `<input type="date">` lebih baik dari custom JS
5. **Test di mobile** — breakpoint `sm:` dan `md:` paling sering berubah
6. **Commit atomic** — satu perubahan per commit, pesan jelas
