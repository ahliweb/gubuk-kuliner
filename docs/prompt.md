# Gubuk Kuliner — Dokumentasi Proyek

## Ringkasan Singkat

Website landing page **Gubuk Kuliner** berbasis **Astro v6.3.7 + Tailwind CSS v4 + Vanilla JS minimal**. Fokusnya adalah konversi pesanan via WhatsApp, dengan menu utama **Nasi Telur Dadar Sambal Cumi/Teri** dan **Tahu Tek-Tek**, harga mulai **Rp15.000+**, buka sampai **21.00 WIB**, serta layanan **makan di tempat, drive-thru, dan pesan via WA dengan DP**.

| Item | Detail |
|---|---|
| Nama Website | Gubuk Kuliner |
| URL | `https://gubuk-kuliner.pages.dev` |
| Jenis | Landing page kuliner / warung makan |
| Framework | Astro v6.3.7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Interaksi | Vanilla JS minimal (mobile menu, header scroll, scrollspy) |
| Bahasa | Indonesia |
| Target Deploy | Cloudflare Pages |
| Tujuan Utama | Meningkatkan pesanan via WhatsApp |
| CTA Utama | Pesan Sekarang via WhatsApp |
| Nomor WA | `6281545087641` |
| Lokasi | Jl. Ahmad Wongso, Kel. Madurejo, Kotawaringin Barat, Kalteng |
| Jam Operasional | Setiap hari s/d 21.00 WIB |
| Harga | Mulai Rp15.000+ |
| Layanan | Makan di tempat, drive-thru, pesan via WA dengan DP |
| Bahan | Halal terjamin untuk semua menu |
| Kolaborasi | CSR oleh [ahliweb.com](https://ahliweb.com) |

---

## Struktur File Aktual

```
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

---

## Data Site (`src/data/site.ts`)

Semua konten utama terpusat di satu file:

```ts
export const siteData = {
  brandName: "Gubuk Kuliner",
  website: "https://gubuk-kuliner.pages.dev",
  whatsapp: "6281545087641",
  address: "Jl. Ahmad Wongso, Kel. Madurejo",
  openUntil: "21.00",
  priceStart: "Rp15.000+",
  mapsUrl: "https://maps.app.goo.gl/wHutKSd4fZhZhLCDA",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
  waMessage: "Assalamu'alaikum, saya mau pesan di Gubuk Kuliner. Mohon info menu yang tersedia hari ini.",
  waLink: "https://wa.me/6281545087641?text=...",
  seoTitle: "Gubuk Kuliner Madurejo - Nasi Telur Dadar, Sambal Cumi/Teri & Tahu Tek-Tek",
  seoDescription: "Gubuk Kuliner di Jl. Ahmad Wongso, Kel. Madurejo. Menu rumahan mulai Rp15.000+, buka sampai 21.00, bisa makan di tempat, drive-thru, dan pesan via WhatsApp dengan DP dulu.",
  menus: [3 menu],
  advantages: [6 keunggulan],
  steps: [4 langkah pesan],
  faqs: [5 FAQ]
};
```

Isi menu saat ini:
- `telur-dadar` -> Nasi Telur Dadar Sambal Cumi/Teri.
- `tahu-tek` -> Tahu Tek-Tek.
- `paket-hemat` -> paket hemat tanpa panel nutrisi.

---

## Data Nutrisi (`src/data/nutrition.ts`)

Data estimasi nilai gizi hanya tersedia untuk 2 menu utama.

```ts
export interface NutritionInfo {
  menuId: string;
  portion: { ingredient: string; weight: string }[];
  values: {
    energy: string;
    protein: string;
    fat: string;
    carbohydrate: string;
    fiber: string;
  };
  disclaimer: string;
  dataSource: string;
}

export const nutritionData: NutritionInfo[] = [
  // telur-dadar: ~610 kkal, 23 g protein, 23 g lemak, 79 g karbo, 1 g serat
  // tahu-tek: ~590 kkal, 26 g protein, 28 g lemak, 64 g karbo, 5 g serat
];

export function getNutritionByMenuId(menuId: string): NutritionInfo | undefined;
```

Catatan:
- Nilai gizi bersifat estimasi, bukan hasil laboratorium.
- Panel nutrisi muncul di bawah `MenuCard` yang punya data nutrisi.
- `paket-hemat` memang tidak punya panel nutrisi.

---

## Komponen & Fitur

### 1. `BaseLayout.astro`
- HTML wrapper dengan `<html lang="id">`.
- SEO: title, description, canonical.
- Open Graph dan Twitter Card memakai `og-image.png` 1200x630.
- JSON-LD `Restaurant` dengan alamat, geo, jam buka, dan `priceRange`.
- Google Fonts: Outfit, Plus Jakarta Sans, dan Caveat.
- Skip link ke konten utama.
- Script Vanilla JS dimuat di akhir body.

### 2. `Header.astro`
- Sticky header dengan `backdrop-blur`.
- Desktop nav untuk Menu, Keunggulan, Cara Pesan, Galeri, Lokasi, dan FAQ.
- Badge jam buka di desktop dan mobile.
- CTA WhatsApp di desktop dan mobile.
- Tombol mobile berukuran 44x44px.

### 3. `Hero.astro`
- Layout 2 kolom: teks + visual foto.
- Tagline "Rasa Rumahan, Harga Ramah".
- 6 badge ringkas: halal, harga, jam buka, makan di tempat, drive-thru, WA + DP.
- 2 CTA: WhatsApp dan lihat menu.
- Visual memakai 2 foto menu lokal dengan elemen dekoratif.

### 4. `MenuCard.astro`
- Props: `title`, `description`, `price`, `image`, `badge?`, `waLink`.
- Gambar `aspect-[4/3]` dengan `loading="lazy"` dan ukuran tetap.
- Badge opsional dan overlay harga.
- Tombol pesan via WhatsApp per menu.

### 5. `NutritionFacts.astro`
- Panel collapsible menggunakan `<details>` / `<summary>`.
- Menampilkan komposisi per porsi, nilai gizi estimasi, disclaimer, dan sumber data.
- Tidak butuh JavaScript.

### 6. `OrderSteps.astro`
- 4 langkah: Klik WhatsApp -> Pilih Menu -> Bayar DP -> Siap Disantap.
- Grid responsif 1/2/4 kolom.
- Ada tombol WhatsApp di bawah langkah.

### 7. `Gallery.astro`
- 4 gambar: 2 foto menu lokal, 1 gambar Unsplash, 1 foto warung fisik.
- Grid 1/2/4 kolom.
- Ada catatan bahwa beberapa gambar adalah ilustrasi sajian.

### 8. `FAQ.astro`
- 5 pertanyaan memakai native `<details>` / `<summary>`.
- Smooth open/close memakai CSS.
- Ikon caret berputar saat terbuka.

### 9. `WhatsAppButton.astro`
- Tombol melayang fixed di kanan bawah.
- Ukuran 56x56px dengan pulse ring.
- Tooltip muncul saat hover.

### 10. `Footer.astro`
- Kolom info kontak, jam buka, dan lokasi.
- Tombol buka Google Maps.
- Embed Google Maps responsif.
- Foto warung fisik `gubuk_kuliner_stall.jpg`.
- Link CSR ahliweb.com, lisensi, Menu, FAQ, dan Kontak WA.

### 11. `license.astro`
- Halaman lisensi AW Non-Commercial License 1.0.
- Menggunakan `BaseLayout` dengan title kustom.

---

## Styling (`src/styles/global.css`)

### Theme

```css
@theme {
  --color-brand-primary: #D9B43E;
  --color-brand-secondary: #7A4A2E;
  --color-brand-accent: #F59E0B;
  --color-brand-bg: #FFF9ED;
  --color-brand-surface: #FFFFFF;
  --color-brand-text: #3B2418;
  --color-brand-muted: #80604A;
  --font-sans: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  --font-display: 'Outfit', 'Inter', system-ui, sans-serif;
}
```

### Animasi dan utility penting
- `animate-pulse-ring`
- `animate-float`
- `animate-float-reverse`
- `blob-organic-1/2/3`
- `grid-bg`
- `handwritten`
- `nav-link` underline
- `slideDown` untuk panel nutrisi

---

## JavaScript (`src/scripts/main.js`)

| Fungsi | Deskripsi |
|---|---|
| `setupMobileMenu()` | Toggle hamburger menu dan lock body scroll |
| `setupHeaderScroll()` | Shrink header saat scroll > 50px |
| `setupScrollSpy()` | Highlight nav link aktif berdasarkan section |

FAQ tidak memakai JavaScript karena menggunakan native HTML.

---

## SEO & Metadata

### Meta Tags (BaseLayout)
- `<title>`: `Gubuk Kuliner Madurejo - Nasi Telur Dadar, Sambal Cumi/Teri & Tahu Tek-Tek`
- canonical: `https://gubuk-kuliner.pages.dev`
- Open Graph: `og:type=restaurant`, `og:image` PNG 1200x630
- Twitter Card: `summary_large_image`

### JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Gubuk Kuliner",
  "url": "https://gubuk-kuliner.pages.dev",
  "telephone": "+6281545087641",
  "priceRange": "Rp15.000 - Rp30.000",
  "servesCuisine": "Indonesian",
  "openingHoursSpecification": {
    "opens": "09:00",
    "closes": "21:00"
  }
}
```

### File Publik

| File | Isi |
|---|---|
| `robots.txt` | Allow semua crawler dan arahkan ke sitemap |
| `sitemap.xml` | 1 URL utama, `lastmod` terbaru |
| `site.webmanifest` | Nama app, theme color, background color, icon SVG |
| `_headers` | Security headers dan CSP |

---

## Responsive Design

Pola utama yang dipakai:
- Mobile-first.
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- `hidden md:flex` untuk navigasi desktop.
- `md:hidden` untuk menu mobile.
- Gambar punya `width`, `height`, dan `loading="lazy"`.

---

## Aksesibilitas

- Satu H1 di Hero.
- Heading hierarkis konsisten.
- Semua gambar punya `alt`.
- Tombol CTA punya `aria-label`.
- Skip link tersedia.
- Touch target minimal 44x44px.
- Fokus keyboard jelas dengan `focus-visible`.

---

## Performa

- Static site dari Astro.
- Tidak ada React/Vue/Svelte.
- Tailwind v4 via CSS theme, tanpa `tailwind.config`.
- JavaScript minimal.
- Gambar lokal untuk menu utama dan stall.
- Script dimuat di akhir body.

---

## Keamanan

- Tidak ada secret/API key di frontend.
- WhatsApp link memakai HTTPS.
- CSP dan header keamanan ada di `_headers`.
- External image yang dipakai hanya dari HTTPS.

---

## Catatan

- OG image sudah PNG 1200x630, source SVG tetap disimpan.
- Semua konten utama dapat diedit lewat `src/data/site.ts`.
- Nilai gizi dapat diupdate di `src/data/nutrition.ts`.
- `AGENTS.md` adalah panduan kerja internal AI Engineer.
- `.opencode/skills/landing-page-umkm.md` adalah template skill untuk proyek serupa.
