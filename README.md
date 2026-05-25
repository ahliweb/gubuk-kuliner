# Gubuk Kuliner Landing Page

Landing page static-first untuk warung makan **Gubuk Kuliner** di Jl. Ahmad Wongso, Kel. Madurejo. Dibuat dengan **Astro v6.3.7**, **Tailwind CSS v4**, dan **Vanilla JS minimal**.

## Ringkasan
- Fokus utama: konversi pesanan via WhatsApp.
- Konten terpusat di `src/data/site.ts` dan `src/data/nutrition.ts`.
- Ada 3 menu, 6 keunggulan, 4 langkah pesan, dan 5 FAQ.
- 2 menu utama punya panel nutrisi estimasi berbasis TKPI.
- SEO sudah lengkap: canonical, Open Graph, Twitter Card, JSON-LD `Restaurant`, manifest, robots, dan sitemap.

## Fitur Utama
- Sticky header dengan menu mobile, badge jam buka, dan CTA WhatsApp.
- Hero dengan 2 CTA, 6 badge ringkas, dan visual foto menu.
- Menu card reusable dengan tombol WhatsApp per menu.
- Panel nilai gizi estimasi memakai `<details>` tanpa JavaScript.
- Alur pesan 4 langkah.
- Galeri 4 gambar, termasuk foto warung fisik.
- FAQ native `<details>` / `<summary>`.
- Floating WhatsApp button di kanan bawah.
- Footer dengan alamat, jam buka, embed Google Maps, dan foto stall.

## Struktur Proyek
```text
gubuk-kuliner/
├── public/
│   ├── _headers
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── sitemap.xml
│   └── assets/
│       └── img/
│           ├── gubuk_kuliner_stall.jpg
│           ├── logo.svg
│           ├── nasi_telur_dadar.png
│           ├── og-image.png
│           ├── og-image.svg
│           └── tahu_tek_tek.png
├── src/
│   ├── components/
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── MenuCard.astro
│   │   ├── NutritionFacts.astro
│   │   ├── OrderSteps.astro
│   │   └── WhatsAppButton.astro
│   ├── data/
│   │   ├── nutrition.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── license.astro
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── global.css
├── AGENTS.md
├── LICENSE
├── README.md
└── package.json
```

## Menjalankan Lokal
```bash
npm install
npm run dev
```

Build produksi:
```bash
npm run build
```

Preview hasil build:
```bash
npm run preview
```

## Deploy
1. Hubungkan repo ke Cloudflare Pages.
2. Build command: `npm run build`.
3. Output directory: `dist`.

## Dokumen Terkait
- `docs/prompt.md` untuk dokumentasi teknis lengkap.
- `AGENTS.md` untuk panduan kerja AI Engineer.
- `.opencode/skills/landing-page-umkm.md` untuk template proyek serupa.

## Lisensi
Proyek ini memakai **AW Non-Commercial License 1.0**. Penggunaan komersial memerlukan izin tertulis.
