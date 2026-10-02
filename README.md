# 🍇 Sistem Budidaya Anggur Jupiter & Ninel

Aplikasi web statis berisi panduan cultivation anggur impor untuk
skala **backyard di Pasuruan, Jawa Timur**.

## 🌐 Akses online

**<https://bilidarnanto.github.io/anggur-jupiter-ninel/>**

Tersedia lewat GitHub Pages, dipublikasi otomatis dari branch `main`.
Tidak perlu build step, tidak perlu login.

| | |
|---|---|
| **Live** | <https://bilidarnanto.github.io/anggur-jupiter-ninel/> |
| **Repository** | <https://github.com/bilidarnanto/anggur-jupiter-ninel> |
| **Deploy** | GitHub Pages · branch `main` · folder `/root` |

> ⚠️ Reader dan pencarian full-text membutuhkan `fetch`, jadi situs harus
> diakses lewat `https://`. Bookmark URL di atas, bukan buka `index.html` dari disk.

## Isi

| Tab | Isi |
|---|---|
| **Ringkasan** | Peta siklus tahunan, tiga prinsip kunci, pengenalan kedua varietas |
| **Varietas** | Profil lengkap Jupiter & Ninel + tabel perbandingan 9 aspek |
| **Kalender** | 12 bulan × tugas spesifik, menyesuaikan pola musim Pasuruan |
| **Checklist** | Checklist tugas per bulan dengan progres tersimpan di localStorage |
| **Panduan** | 10 langkah stepwise: lokasi → media → tanam → pruning → panen |
| **Diagnosa** | Mesin diagnosa gejala berbasis 15 aturan + 16 gejala + skor keyakinan |
| **Kalkulator** | Kebutuhan pupuk per jumlah tanaman, dan perkiraan tanggal panen |
| **Pustaka** | Daftar sumber: pedoman resmi, jurnal, deskripsi varietas, referensi teknis |
| **Perpustakaan** | Reader internal: 9 bab buku + 4 PDF terbuka + 22 tautan terverifikasi |

## Prinsip utama yang dipegang

1. **Pruning menentukan hasil** — kapan panen, seberapa besar buah, berapa banyak.
2. **Musim hujan (Nov–Apr) adalah musuh** — jamur downy mildew dan gray mold aktif.
   Hadapi dengan sanitasi, pembuangan daun bawah, dan drainase, bukan semprot terus-menerus.
3. **Musim kemarau (Mei–Okt) adalah kesempatan** — proses pembuahan berjalan tanpa
   gangguan, menghasilkan gula tinggi dan risiko penyakit rendah.

Pola siklus yang dirancang: **pruning Februari → panen Juni**, lalu
**pruning Agustus → panen November–Desember**. Dua siklus per tahun.

## Perpustakaan (reader internal)

Buku dan dokumen yang berstatus **open access** atau **domain publik** di-host
langsung di repository ini, sehingga bisa dibaca tanpa keluar dari situs.

### Reader full-text

*Manual of American Grape-Growing* (U. P. Hedrick, 1908) — Project Gutenberg #29659,
domain publik. Buku hortikultura anggur klasik, dipilih 9 bab yang paling relevan:

| Bab | Judul | Kata |
|---|---|---|
| I | Pengantar dan Klasifikasi Varietas | 3.516 |
| II | Penanaman dan Perawatan Vines | 6.048 |
| III | Pembibitan dan Perbanyakan | 8.139 |
| IV | Pemangkasan (Pruning) | 3.593 |
| V | Trellis dan Penopangan | 7.850 |
| VI | Pembuahan dan Fruit Setting | 3.183 |
| VIII | Penyakit Tanaman Anggur | 7.969 |
| IX | Hama Tanaman Anggur | 10.061 |
| X | Panen dan Penanganan Pascapanen | 2.381 |

Total 52.740 kata, dipecah per bab agar ringan dimuat. Fitur reader:
pencarian full-text dengan cuplikan kalimat, sorotan hasil, kontrol ukuran
tulisan 13–24 px, dan penanda progres baca di localStorage.

Teks asli berbahasa Inggris dari awal abad ke-20, jadi istilah teknisnya perlu
diterjemahkan ke konteks kebun.

### PDF

- Identifikasi Gejala dan Penyakit Tanaman Anggur (NOE, 2023) — dasar metodologi
  mesin diagnosa di tab Diagnosa.
- Breeding Grapevines for Tropical Environments (VITIS) — pemuliaan anggur untuk
  iklim tropis.
- Simplified Backyard Grape Spray Guide (Univ. Kentucky) — jadwal semprot backyard.
- Agribisnis Tanaman Anggur (Univ. Trunojoyo Madura) — konteks wilayah Jawa Timur.

### Tautan eksternal

22 tautan dalam 5 kategori, semuanya diverifikasi HTTP 200 saat sistem ini dibangun.

## Menjalankan secara lokal

Tidak perlu build step, tapi reader butuh `fetch` sehingga harus lewat HTTP
(jika dibuka langsung sebagai `file://`, pencarian dan pembaca bab tidak jalan):

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Lisensi dan hak cipta

Konten (kalender, panduan, mesin diagnosa) disusun untuk keperluan pribadi.
Materi perpustakaan tetap milik pemegangnya:

| Dokumen | Status |
|---|---|
| *Manual of American Grape-Growing* (Hedrick, 1908) | Domain publik — Project Gutenberg #29659 |
| Jurnal NOE, VITIS, Un. Kentucky, Un. Trunojoyo Madura | Open access, tetap milik penerbit |

## Menguji

```bash
npm i -D linkedom
node tests/test-app.mjs
```

Menjalankan seluruh aplikasi di DOM virtual dan memverifikasi render tiap tab,
mesin diagnosa, kalkulator, reader, dan pencarian full-text.

## Deploy

Sudah aktif di GitHub Pages: branch `main`, folder `/root`.
Setiap `git push` ke `main` memicu publish ulang otomatis.

```bash
git add -A
git commit -m "..."
git push
```

Bila perlu mengatur ulang: **Settings → Pages → Source: Deploy from a branch**
→ branch `main`, folder `/root`.

## Disclaimer

Dosis pupuk dan jadwal penyemaan disusun dari gabungan literatur hortikultura dan
praktik umum hobbyis. **Belum divalidasi lewat percobaan terkontrol di lokasi ini.**
Lakukan uji pada sebagian kecil tanaman sebelum menerapkan secara luas, dan
ikuti label resmi produk pestisida.
