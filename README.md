# Gubuk Kuliner Landing Page

Landing page responsif dan berkinerja tinggi untuk warung makan **Gubuk Kuliner** yang berlokasi di Jl. Ahmad Wongso, Kel. Madurejo. Dibuat menggunakan **Astro v5+**, **Tailwind CSS v4**, dan **Vanilla JS minimal** tanpa library eksternal yang berat untuk performa optimal (Lighthouse score 95+).

## 🚀 Fitur Utama
1. **Identitas Visual Selaras Flyer**: Warna kuning mustard, cokelat, krem, dan putih hangat dengan doodle lingkaran dan tanda panah bergaya tulis tangan.
2. **Kesesuaian Target Konversi**: Tombol pintasan WhatsApp yang menonjol di Header, Hero, dan Floating Button di kanan bawah.
3. **Informasi Lengkap Terstruktur**:
   - Menu unggulan (*Nasi Telur Dadar Sambal Cumi/Teri* dan *Tahu Tek-Tek*) dengan harga mulai Rp15.000+.
   - Jam operasional jelas (buka s/d 21.00 WIB).
   - Info layanan (makan di tempat, drive-thru, dan pesan via WA dengan skema uang muka/DP).
   - Peta lokasi interaktif (iframe responsif) dan rute Google Maps.
4. **Optimasi SEO & Aksesibilitas**:
   - Struktur heading hierarkis (satu H1).
   - Teks alternatif gambar lengkap untuk pembaca layar.
   - PWA metadata (`site.webmanifest`) dan sitemap generator terintegrasi.
   - Skema terstruktur JSON-LD bertipe `Restaurant` / `LocalBusiness`.
5. **Keamanan & Performa**:
   - Skrip JavaScript minimal yang dimuat secara asinkron (*deferred*).
   - Pengaturan header keamanan Cloudflare (`_headers`).
   - Gambar CDN dioptimasi dengan *lazy loading* untuk mengurangi CLS (*Cumulative Layout Shift*).

---

## 📁 Struktur Proyek
```text
gubuk-kuliner/
├── public/
│   ├── favicon.svg          # Favicon vektor GK
│   ├── site.webmanifest     # Manifest PWA
│   ├── robots.txt           # File instruksi crawler
│   ├── sitemap.xml          # Sitemap halaman
│   ├── _headers             # Custom header Cloudflare Pages
│   └── assets/
│       └── img/
│           ├── logo.svg     # Logo vektor dengan bentuk organik
│           └── og-image.svg # Preview gambar media sosial
├── src/
│   ├── data/
│   │   └── site.ts          # Central data konfigurasi (WA, Menu, Alamat)
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML wrapper utama & SEO metadata
│   ├── components/
│   │   ├── Header.astro     # Sticky navigation & menu mobile
│   │   ├── Hero.astro       # Bagian utama penawaran & tumpukan foto visual
│   │   ├── MenuCard.astro   # Card menu dengan harga & CTA pesanan
│   │   ├── OrderSteps.astro # Alur pemesanan lewat WhatsApp
│   │   ├── Gallery.astro    # Galeri ilustrasi makanan
│   │   ├── FAQ.astro        # Accordion tanya-jawab interaktif
│   │   ├── WhatsAppButton.astro # Floating shortcut WhatsApp
│   │   └── Footer.astro     # Kontak, jam buka, & Google Maps embed
│   ├── pages/
│   │   └── index.astro      # Halaman utama kompilasi komponen
│   ├── styles/
│   │   └── global.css       # Custom styling CSS & Tailwind v4 themes
│   └── scripts/
│       └── main.js          # Logika interaktif Vanilla JS (FAQ, Burger menu)
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## 🛠️ Cara Menjalankan Lokal

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Jalankan Mode Pengembangan
```bash
npm run dev
```
Akses server lokal melalui peramban di alamat: `http://localhost:4321`

### 3. Build untuk Produksi
```bash
npm run build
```
Output static files akan dihasilkan pada direktori `dist/`

### 4. Preview Build
```bash
npm run preview
```

---

## ☁️ Deploy ke Cloudflare Pages

1. Hubungkan repositori GitHub proyek ke akun **Cloudflare Dashboard**.
2. Pilih opsi **Pages** > **Create a project** > **Connect to Git**.
3. Konfigurasikan pengaturan build sebagai berikut:
   - **Framework Preset**: `Astro` (atau pilih `None`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. Klik **Save and Deploy**.

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah **AW Non-Commercial License 1.0** — lisensi sumber-terbuka yang mengizinkan penggunaan non-komersial. Penggunaan komersial memerlukan izin tertulis dari pemegang hak cipta.

- [Lihat halaman lisensi](/license)
- [Dokumen lisensi resmi](https://github.com/ahliweb/aw-non-commercial-license)
