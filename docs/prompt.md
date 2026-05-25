# Gubuk Kuliner — Dokumentasi Proyek

## Ringkasan Singkat

Website **landing page Gubuk Kuliner** berbasis **Astro v6 + Tailwind CSS v4 + Vanilla JS minimal**, fokus untuk menjual makanan: **Nasi telur dadar sambal cumi/teri** dan **Tahu tek-tek**, dengan CTA utama ke WhatsApp, harga mulai **Rp15.000+**, buka sampai **21.00 WIB**, layanan **makan di tempat, drive-thru, dan pesan via WA dengan DP dulu**.

| Item            | Detail                                                      |
| --------------- | ----------------------------------------------------------- |
| Nama Website    | Gubuk Kuliner                                               |
| URL             | `https://gubuk-kuliner.pages.dev`                           |
| Jenis           | Landing page kuliner / warung makan                         |
| Framework       | Astro v6.3.7                                                |
| Styling         | Tailwind CSS v4 (via `@tailwindcss/vite`)                   |
| Interaksi       | Vanilla JS minimal (mobile menu, FAQ accordion, scrollspy)  |
| Bahasa          | Indonesia                                                   |
| Target Deploy   | Cloudflare Pages                                            |
| Tujuan Utama    | Meningkatkan pesanan via WhatsApp                           |
| CTA Utama       | Pesan Sekarang via WhatsApp                                 |
| Nomor WA        | `6281545087641`                                             |
| Lokasi          | Jl. Ahmad Wongso, Kel. Madurejo, Kotawaringin Barat, Kalteng|
| Jam Operasional | Buka setiap hari s/d pukul 21.00 WIB                        |
| Harga           | Mulai Rp15.000+                                             |
| Layanan         | Makan di tempat, drive-thru, pesan via WA dengan DP dulu    |
| Bahan           | Halal terjamin untuk semua menu                               |
| Kolaborasi      | CSR oleh [ahliweb.com](https://ahliweb.com)                   |

---

## Struktur File Aktual

```
gubuk-kuliner/
├── public/
│   ├── favicon.svg              # Favicon vektor GK
│   ├── favicon.ico              # Favicon fallback
│   ├── site.webmanifest         # Manifest PWA
│   ├── robots.txt               # Instruksi crawler → sitemap
│   ├── sitemap.xml              # Sitemap (https://gubuk-kuliner.pages.dev/)
│   ├── _headers                 # Security headers Cloudflare Pages
│   └── assets/
│       └── img/
│           ├── logo.svg         # Logo vektor brand
│           ├── og-image.svg     # Source SVG untuk OG image
│           ├── og-image.png     # OG image 1200x630 (PNG untuk sosial media)
│           ├── nasi_telur_dadar.png  # Foto menu utama
│           └── tahu_tek_tek.png      # Foto menu utama
├── src/
│   ├── data/
│   │   ├── site.ts              # Central data: brand, WA, menu, FAQ, dll.
│   │   └── nutrition.ts         # Data estimasi nilai gizi per menu
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML wrapper, SEO, OG, JSON-LD, fonts
│   ├── components/
│   │   ├── Header.astro         # Sticky nav + mobile menu + badge buka
│   │   ├── Hero.astro           # Headline, badges, CTA, tumpukan foto
│   │   ├── MenuCard.astro       # Card menu: gambar, badge, harga, WA
│   │   ├── NutritionFacts.astro # Panel collapsible info nilai gizi
│   │   ├── OrderSteps.astro     # 4 langkah pesan via WA
│   │   ├── Gallery.astro        # Galeri 4 foto (lokal + Unsplash)
│   │   ├── FAQ.astro            # Accordion 5 pertanyaan (native details/summary)
│   │   ├── WhatsAppButton.astro # Floating WA button + pulse + tooltip
│   │   └── Footer.astro         # Info kontak, jam buka, Google Maps embed
│   ├── pages/
│   │   ├── index.astro          # Halaman utama (kompilasi semua komponen)
│   │   └── license.astro        # Halaman informasi lisensi
│   ├── styles/
│   │   └── global.css           # Tailwind v4 @theme, animasi, custom CSS
│   └── scripts/
│       └── main.js              # Mobile menu, FAQ, header scroll, scrollspy
├── astro.config.mjs             # Konfigurasi Astro + Tailwind vite plugin
├── package.json                 # astro, tailwindcss, @tailwindcss/vite
├── tsconfig.json                # TypeScript config (strict)
├── LICENSE                      # AW Non-Commercial License 1.0
├── README.md                    # Dokumentasi penggunaan
└── docs/
    └── prompt.md                # File ini (dokumentasi proyek)
```

---

## Data Site (`src/data/site.ts`)

Semua konten terpusat di satu file agar mudah diedit:

```ts
export const siteData = {
  brandName: "Gubuk Kuliner",
  website: "https://gubuk-kuliner.pages.dev",
  whatsapp: "6281545087641",
  address: "Jl. Ahmad Wongso, Kel. Madurejo",
  openUntil: "21.00",
  priceStart: "Rp15.000+",
  mapsUrl: "https://maps.app.goo.gl/wHutKSd4fZhZhLCDA",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.729134351688!2d111.6315829!3d-2.701618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e08efb0390c532b%3A0x2699991280e65a32!2sWARUNG%20MAKAN%20TAHU%20TEK!5e0!3m2!1sid!2sid!4v1748000000000!5m2!1sid!2sid",
  waMessage: "Assalamu'alaikum, saya mau pesan di Gubuk Kuliner. Mohon info menu yang tersedia hari ini.",
  waLink: "https://wa.me/6281545087641?text=Assalamu%27alaikum%2C%20saya%20mau%20pesan%20di%20Gubuk%20Kuliner.%20Mohon%20info%20menu%20yang%20tersedia%20hari%20ini.",
  seoTitle: "Gubuk Kuliner Madurejo - Nasi Telur Dadar, Sambal Cumi/Teri & Tahu Tek-Tek",
  seoDescription: "Gubuk Kuliner di Jl. Ahmad Wongso, Kel. Madurejo. Menu rumahan mulai Rp15.000+, buka sampai 21.00, bisa makan di tempat, drive-thru, dan pesan via WhatsApp dengan DP dulu.",
  menus: [ /* 3 menu: telur-dadar, tahu-tek, paket-hemat */ ],
  advantages: [ /* 6 keunggulan: halal, harga, jam buka, tempat, drive-thru, WA */ ],
  steps: [ /* 4 langkah pesan */ ],
  faqs: [ /* 5 FAQ */ ]
};
```

---

## Data Nutrisi (`src/data/nutrition.ts`)

Data estimasi nilai gizi untuk menu utama, berdasarkan **Tabel Komposisi Pangan Indonesia (TKPI)**:

```ts
export interface NutritionInfo {
  menuId: string;          // ID menu (cocok dengan siteData.menus[].id)
  portion: {               // Komposisi per porsi
    ingredient: string;    // Nama bahan
    weight: string;        // Berat dalam gram
  }[];
  values: {
    energy: string;        // Energi (kkal)
    protein: string;       // Protein (g)
    fat: string;           // Lemak (g)
    carbohydrate: string;  // Karbohidrat (g)
    fiber: string;         // Serat (g)
  };
  disclaimer: string;      // Disclaimer estimasi
  dataSource: string;      // Sumber referensi data
}

export const nutritionData: NutritionInfo[] = [
  // telur-dadar: ~610 kkal, 23g protein, 23g lemak, 79g karbo, 1g serat
  // tahu-tek: ~590 kkal, 26g protein, 28g lemak, 64g karbo, 5g serat
];

export function getNutritionByMenuId(menuId: string): NutritionInfo | undefined;
```

**Catatan penting:**
- Nilai gizi bersifat **estimasi**, bukan hasil laboratorium
- Disclaimer ditampilkan di setiap panel nutrisi
- Sumber acuan: TKPI / Data Komposisi Pangan Indonesia
- Menu tanpa data nutrisi (mis. paket-hemat) tidak menampilkan panel

---

## Komponen & Fitur

### 1. BaseLayout (`src/layouts/BaseLayout.astro`)

- HTML wrapper dengan `<html lang="id">`
- **SEO**: title, description, canonical (`https://gubuk-kuliner.pages.dev`)
- **Open Graph**: `og:type`, `og:url`, `og:title`, `og:description`, `og:image`
- **Twitter Card**: `summary_large_image` dengan `twitter:image`
- **JSON-LD**: tipe `Restaurant` dengan alamat, geo, jam buka, priceRange
- **Google Fonts**: Outfit (display), Plus Jakarta Sans (body), Caveat (handwritten)
- **Skip link**: aksesibilitas keyboard
- **Body**: grid overlay background, flex column layout

### 2. Header (`src/components/Header.astro`)

- **Sticky** di atas dengan `backdrop-blur-md`
- Logo brand (SVG)
- **Desktop**: navigasi link (Menu, Keunggulan, Cara Pesan, Galeri, Lokasi, FAQ) + badge "Buka s/d 21.00" + tombol WA
- **Mobile**: hamburger button (44×44px) → slide-down menu dengan semua link + badge buka + tombol WA
- Shrink saat scroll (via `main.js`)

### 3. Hero (`src/components/Hero.astro`)

- Layout 2 kolom: teks (kiri) + visual tumpukan foto (kanan)
- Badge tagline "Rasa Rumahan, Harga Ramah"
- Headline dengan highlight harga
- 6 badge: **bahan halal**, harga, jam buka, makan di tempat, drive-thru, pesan WA+DP
- 2 CTA: "Pesan Sekarang via WA" + "Lihat Menu Lengkap"
- Visual: 2 foto menu (nasi telur dadar + tahu tek-tek) dalam lingkaran dengan scribble SVG border, label melayang, panah dekoratif
- Background blob organik dengan animasi float

### 4. MenuCard (`src/components/MenuCard.astro`)

- Card dengan gambar `aspect-[4/3]`, badge kategori, overlay harga
- Judul, deskripsi, tombol "Pesan via WhatsApp" per menu
- Hover: scale, shadow, warna berubah

### 5. NutritionFacts (`src/components/NutritionFacts.astro`)

- Panel collapsible menggunakan `<details>` / `<summary>` (tanpa JS)
- Props: `{ nutrition: NutritionInfo }`
- **Komposisi Per Porsi**: daftar bahan + berat (flex justify-between)
- **Nilai Gizi Estimasi**: grid 2 kolom (mobile) → 3 kolom (sm+) dengan card per nutrisi
  - Energi, Protein, Lemak, Karbohidrat, Serat
- **Disclaimer**: teks italic tentang estimasi, bukan hasil lab
- **Sumber data**: referensi TKPI
- Animasi slide-down saat dibuka (`@keyframes slideDown`)
- Aksesibel: `focus-visible` ring, semantic HTML

### 6. OrderSteps (`src/components/OrderSteps.astro`)

- 4 langkah: Klik WA → Pilih Menu → Bayar DP → Siap Disantap
- Grid responsif: 1 kolom (mobile) → 2 kolom (tablet) → 4 kolom (desktop)
- Garis penghubung dashed di desktop
- Panah bounce di mobile antar langkah
- Tombol WA di bawah

### 7. Gallery (`src/components/Gallery.astro`)

- 4 gambar: 2 lokal (`nasi_telur_dadar.png`, `tahu_tek_tek.png`) + 2 Unsplash
- Grid: 1 → 2 → 4 kolom
- Hover overlay dengan gradient + judul
- Disclaimer: "Beberapa gambar adalah ilustrasi sajian"

### 8. FAQ (`src/components/FAQ.astro`)

- 5 pertanyaan dalam accordion menggunakan native `<details>` / `<summary>`
- **Tanpa JavaScript** — bekerja bahkan jika JS dinonaktifkan
- Animasi buka/tutup via CSS `max-height` transition
- Ikon caret berputar 180° saat terbuka (`details[open] .faq-icon`)
- Scoped CSS di dalam komponen Astro

### 9. WhatsAppButton (`src/components/WhatsAppButton.astro`)

- Fixed bottom-right (56×56px)
- Warna emerald-500 dengan pulse ring animation
- Tooltip "Pesan Cepat via WA" muncul saat hover
- Link ke `siteData.waLink`

### 10. Footer (`src/components/Footer.astro`)

- 2 kolom: info kontak (kiri) + peta (kanan)
- Logo (filter brightness untuk kontras di background gelap)
- Alamat, nomor WA, jam operasional dengan ikon
- Tombol "Buka Google Maps" → `siteData.mapsUrl`
- **Google Maps embed**: iframe responsif `aspect-ratio: 16/10` dengan `siteData.mapsEmbedUrl`
- **Badge halal** pada deskripsi warung (highlight emerald)
- Copyright + link CSR **ahliweb.com** + link lisensi + navigasi

### 11. License Page (`src/pages/license.astro`)

- Halaman informasi lisensi **AW Non-Commercial License 1.0**
- Menggunakan BaseLayout dengan title kustom
- Daftar penggunaan yang diizinkan (non-komersial) dan dilarang (komersial)
- Link ke `commercial@ahliweb.com` untuk lisensi komersial
- Copyright (c) 2026 Unggul

---

## Styling (`src/styles/global.css`)

### Tema Tailwind v4

```css
@theme {
  --color-brand-primary: #D9B43E;    /* Kuning mustard */
  --color-brand-secondary: #7A4A2E;  /* Cokelat tua */
  --color-brand-accent: #F59E0B;     /* Orange */
  --color-brand-bg: #FFF9ED;         /* Krem */
  --color-brand-surface: #FFFFFF;    /* Putih */
  --color-brand-text: #3B2418;       /* Cokelat sangat tua */
  --color-brand-muted: #80604A;      /* Cokelat redup */

  --font-sans: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  --font-display: 'Outfit', 'Inter', system-ui, sans-serif;
}
```

### Animasi Kustom

| Class | Deskripsi |
|---|---|
| `animate-pulse-ring` | Pulse ring pada floating WA button |
| `animate-float` | Float lembut 4s untuk blob dekoratif |
| `animate-float-reverse` | Float lembut 4.5s arah berlawanan |
| `blob-organic-1/2/3` | Border-radius organik untuk bentuk tidak beraturan |
| `slideDown` | Animasi buka panel nutrition facts |

### Fitur CSS Lainnya

- Custom scrollbar (mustard → cokelat)
- Focus-visible ring 3px cokelat
- Nav-link underline animation
- Scribble background SVG
- Grid overlay dot pattern
- Handwritten font class (Caveat)

---

## JavaScript (`src/scripts/main.js`)

| Fungsi | Deskripsi |
|---|---|
| `setupMobileMenu()` | Toggle hamburger menu, swap icon, lock body scroll |
| `setupHeaderScroll()` | Shrink header padding + shadow saat scroll > 50px |
| `setupScrollSpy()` | Highlight nav link aktif berdasarkan section yang terlihat |

**Catatan:** FAQ accordion tidak lagi memerlukan JavaScript — menggunakan native `<details>`/`<summary>` HTML elements.

---

## SEO & Metadata

### Meta Tags (BaseLayout)

- `<title>`: "Gubuk Kuliner Madurejo - Nasi Telur Dadar, Sambal Cumi/Teri & Tahu Tek-Tek"
- `<meta name="description">`: deskripsi lengkap
- `<link rel="canonical">`: `https://gubuk-kuliner.pages.dev`
- Open Graph: `og:type=restaurant`, `og:url`, `og:title`, `og:description`, `og:image`
- Twitter Card: `summary_large_image`, `twitter:image`

### JSON-LD (Restaurant)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Gubuk Kuliner",
  "url": "https://gubuk-kuliner.pages.dev",
  "telephone": "+6281545087641",
  "priceRange": "Rp15.000 - Rp30.000",
  "servesCuisine": "Indonesian",
  "address": { "streetAddress": "Jl. Ahmad Wongso, Kel. Madurejo", ... },
  "geo": { "latitude": "-2.701618", "longitude": "111.6315829" },
  "openingHoursSpecification": { "opens": "09:00", "closes": "21:00" }
}
```

### File Publik

| File | Isi |
|---|---|
| `robots.txt` | `User-agent: *`, `Allow: /`, `Sitemap: https://gubuk-kuliner.pages.dev/sitemap.xml` |
| `sitemap.xml` | 1 URL: `/` (lastmod 2026-05-24, priority 1.0) |
| `site.webmanifest` | PWA manifest: name, theme_color `#D9B43E`, bg `#FFF9ED` |
| `_headers` | Security headers: CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy |

---

## Responsive Design

Semua komponen menggunakan pendekatan **mobile-first** dengan breakpoint Tailwind:

| Breakpoint | Target | Contoh |
|---|---|---|
| Default (mobile) | 360px+ | 1 kolom, hamburger menu, stack vertikal |
| `sm:` | 640px+ | Font lebih besar, grid mulai 2 kolom |
| `md:` | 768px+ | Desktop nav muncul, grid 2 kolom |
| `lg:` | 1024px+ | Grid 3–4 kolom, layout 2 kolom hero/footer |
| `xl:` | 1280px+ | Dekorasi tambahan (panah, anotasi) |

### Pola Responsif yang Digunakan

- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Flex**: `flex-col sm:flex-row`
- **Spacing**: `py-16 md:py-24`, `gap-8`
- **Typography**: `text-3xl sm:text-4xl`, `text-sm sm:text-base`
- **Visibility**: `hidden md:flex`, `md:hidden`
- **Map embed**: `aspect-ratio: 16/10` + `w-full` (selalu responsif)

---

## Aksesibilitas

- Satu H1 (di Hero)
- Heading hierarkis (H1 → H2 → H3)
- Semua gambar punya `alt` deskriptif
- Tombol WA punya `aria-label`
- FAQ accordion: `aria-expanded`, `aria-controls`, `role="region"`
- Skip link "Lompati ke Konten Utama"
- Focus-visible ring 3px
- Touch target minimal 44×44px (mobile menu button, FAQ trigger)
- Kontras warna sesuai WCAG AA
- Layout tetap terbaca tanpa JavaScript

---

## Performa

- Static site (Astro prerender default)
- Tidak ada React/Vue/Svelte
- Tailwind CSS v4 via Vite plugin (tree-shaking otomatis)
- Vanilla JS minimal (~100 baris, FAQ tanpa JS)
- FAQ accordion menggunakan native `<details>`/`<summary>` (tidak butuh JS)
- Gambar lazy loading (`loading="lazy"`)
- Width/height pada semua gambar (mengurangi CLS)
- Google Fonts dengan `preconnect`
- Script defer via `<script src="...">` di BaseLayout

---

## Keamanan

- Tidak ada secret/API key di frontend
- WhatsApp link aman (HTTPS)
- External images via HTTPS (Unsplash)
- Security headers di `_headers`:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy`: mengizinkan `self`, `https:`, `data:`, Google Fonts, Google Maps frame

---

## Cara Menjalankan

```bash
npm install          # Instal dependensi
npm run dev          # Development server (http://localhost:4321)
npm run build        # Build produksi → dist/
npm run preview      # Preview build produksi
```

### Deploy ke Cloudflare Pages

1. Hubungkan repo GitHub ke Cloudflare Dashboard
2. Pages → Create a project → Connect to Git
3. Konfigurasi:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Save and Deploy → URL: `https://gubuk-kuliner.pages.dev`

---

## Catatan

- OG image sudah dalam format **PNG 1200×630px** untuk kompatibilitas penuh dengan WhatsApp, Facebook, Twitter, dan LinkedIn. Source SVG tetap tersedia di `og-image.svg`.
- Foto menu (`nasi_telur_dadar.png`, `tahu_tek_tek.png`) sudah lokal. Foto galeri lainnya dari Unsplash (ilustrasi).
- Semua konten bisa diedit melalui `src/data/site.ts` tanpa menyentuh komponen.
- Data nutrisi disimpan terpisah di `src/data/nutrition.ts` agar mudah diupdate tanpa mengubah komponen.
- Nilai gizi bersifat **estimasi** berdasarkan TKPI, bukan hasil analisis laboratorium.
- Semua menu menggunakan **bahan halal** — informasi ditampilkan di Hero badge dan keunggulan pertama.
- Website ini merupakan hasil **kolaborasi CSR** dari [ahliweb.com](https://ahliweb.com).
- Tailwind CSS v4 menggunakan konfigurasi berbasis CSS (`@theme` di `global.css`), tidak ada file `tailwind.config.mjs`.
