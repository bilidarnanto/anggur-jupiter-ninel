# 🍇 Sistem Budidaya Anggur Jupiter & Ninel

Aplikasi web statis (GitHub Pages) berisi panduan cultivation anggur impor untuk
skala **backyard di Pasuruan, Jawa Timur**.

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

## Prinsip utama yang dipegang

1. **Pruning menentukan hasil** — kapan panen, seberapa besar buah, berapa banyak.
2. **Musim hujan (Nov–Apr) adalah musuh** — jamur downy mildew dan gray mold aktif.
   Hadapi dengan sanitasi, pembuangan daun bawah, dan drainase, bukan semprot terus-menerus.
3. **Musim kemarau (Mei–Okt) adalah kesempatan** — proses pembuahan berjalan tanpa
   gangguan, menghasilkan gula tinggi dan risiko penyakit rendah.

Pola siklus yang dirancang: **pruning Februari → panen Juni**, lalu
**pruning Agustus → panen November–Desember**. Dua siklus per tahun.

## Menjalankan secara lokal

Tidak perlu build step. Buka `index.html` langsung, atau:

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Deploy

Sudah dikonfigurasi untuk GitHub Pages (branch `main`, folder `/root`).
Aktifkan di **Settings → Pages → Source: Deploy from a branch**.

## Disclaimer

Dosis pupuk dan jadwal penyemaan disusun dari gabungan literatur hortikultura dan
praktik umum hobbyis. **Belum divalidasi lewat percobaan terkontrol di lokasi ini.**
Lakukan uji pada sebagian kecil tanaman sebelum menerapkan secara luas, dan
ikuti label resmi produk pestisida.
