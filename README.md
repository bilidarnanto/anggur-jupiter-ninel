# 🍇 Sistem Budidaya Anggur Jupiter & Ninel

Situs web statis berisi panduan budidaya anggur untuk skala **pekarangan di
Pasuruan, Jawa Timur**, dengan dua fokus: varietas impor Jupiter & Ninel, dan
varietas unggul nasional Indonesia sebagai pembanding.

Setiap klaim faktual di situs ini diberi **status keterverifikasian** — termasuk
yang belum terverifikasi — agar pembaca bisa menilai sendiri dasar setiap anjuran.

## 🌐 Akses online

**<https://bilidarnanto.github.io/anggur-jupiter-ninel/>**

| | |
|---|---|
| **Live** | <https://bilidarnanto.github.io/anggur-jupiter-ninel/> |
| **Repository** | <https://github.com/bilidarnanto/anggur-jupiter-ninel> |
| **Deploy** | GitHub Pages · branch `main` · folder `/root` |

> ⚠️ Reader dan pencarian full-text membutuhkan `fetch`, jadi situs harus
> diakses lewat `https://`. Bookmark URL di atas, jangan buka `index.html` langsung dari disk.

## Isi

| Tab | Isi |
|---|---|
| **Ringkasan** | Peta siklus tahunan, tiga prinsip kunci, pola musim Pasuruan |
| **Varietas** | Profil lengkap Jupiter & Ninel + tabel perbandingan 9 aspek |
| **Varietas Lokal** | 6 varietas unggul nasional & lokal Indonesia yang sudah dirilis Kementerian Pertanian |
| **Kalender** | 12 bulan × tugas spesifik, berbasis data curah hujan Pasuruan |
| **Checklist** | Checklist tugas per bulan dengan progres tersimpan di localStorage |
| **Panduan** | 10 langkah bertahap: lokasi → media → tanam → pruning → panen |
| **Diagnosa** | Mesin diagnosa gejala berbasis 15 aturan + 16 gejala + skor keyakinan |
| **Kalkulator** | Kebutuhan pupuk per jumlah tanaman, dan perkiraan tanggal panen |
| **Pustaka** | Daftar sumber ilmiah dan pedoman resmi |
| **Riset & Sumber** | Data iklim Pasuruan + tabel status setiap klaim |
| **Perpustakaan** | Reader internal: 9 bab buku + 4 PDF terbuka + tautan terverifikasi |

## Prinsip utama yang dipegang

1. **Pruning menentukan hasil** — kapan panen, seberapa besar buah, dan berapa banyak.
2. **Musim hujan (Nov–Apr) adalah musuh** — downy mildew dan gray mold sedang aktif.
   Jangan memangkas produksi di masa ini; batang muda rentan busuk kena hujan.
3. **Musim kemarau (Jun–Sep) adalah kesempatan** — pembentukan buah berjalan tanpa
   gangguan, sehingga gula lebih tinggi dan risiko penyakit lebih rendah.

## 🌦️ Iklim Pasuruan (dasar kalender)

Kalender di situs ini tidak memakai asumsi umum, tetapi data curah hujan
Kabupaten Pasuruan (Bangil):

| Musim | Bulan | Curah hujan |
|---|---|---|
| **Hujan penuh** | November–April | 140–362 mm/bulan (terbasah Januari) |
| **Transisi** | April–Mei & Oktober–November | 40–212 mm |
| **Kemarau** | Juni–September | 8–63 mm (terkering Agustus, 8 mm) |

**Implikasinya:** pangkas produksi setelah hujan berhenti (**Mei**) untuk panen
**Agustus–September**, lalu pangkas lagi sebelum hujan naik (**Oktober**) untuk
panen **Desember–Januari**. Ini sejalan dengan praktik petani di KP Banjarsari,
Probolinggo. Sumber: Climate-Data.org (Bangil) & BMKG.

## 🔍 Status keterverifikasian klaim

Ini bagian yang membedakan situs ini dari panduan budidaya biasa. Setiap klaim
ditandai salah satu dari tiga status:

| Status | Arti |
|---|---|
| ✅ **Terverifikasi** | Didukung sumber resmi atau publikasi ilmiah |
| 🟡 **Praktik lapangan** | Kebiasaan pekebun yang masuk akal, belum diuji terkontrol |
| 🔴 **Belum terverifikasi** | Tidak ditemukan sumber yang bisa dilacak |

Contoh temuan yang jujur ditandai **belum terverifikasi**: angka produksi
Ninel (10–15 kg/pohon) dan ukuran buahnya (12–15 g) berasal dari deskripsi
penjual bibit, bukan lembaga penelitian. Klaim Jupiter "hampir tidak diserang
tawon" juga tidak punya dasar di sumber resmi.

## 📚 Sumber utama

**Varietas impor:**
- Paten tanaman Jupiter **USPP13309P2** (Clark & Moore, University of Arkansas) — sumber primer persilangan Arkansas 1258 × 1672
- Clark, J. R. (1999). *"Jupiter" Seedless Grape*. HortScience 34(7): 1297–1299
- Deskripsi breeder Ninel / Nizina-2 (V. N. Kraynov, Ukraina)

**Varietas unggul nasional (Kementerian Pertanian):**
- Balitjestro: Jestro AG 86, Jestro AG 60
- Prabu Bestari & Probolinggo Biru 81 (Probolinggo)
- Anggur Bali / Alphonso Lavalle (SK Mentan No. 857/Kpts/TP.240/12/1985)

**Iklim & teknik:**
- Climate-Data.org (Bangil) & BMKG (normal 1991–2020)
- Lu et al. (2023). *Grapevine double cropping: a magic technology*. Frontiers in Plant Science 14: 1173985
- Puspitasari, N. S. (2024). *Pendampingan Pengendalian Fungi pada Anggur Caru*. Jurnal JAMALI
- Hartantiko, I. J. dkk. (2023). *Identifikasi Gejala dan Penyakit pada Tanaman Anggur dengan Forward & Backward Chaining*. Jurnal Nusantara of Engineering 6(2): 152–160

## Perpustakaan (reader internal)

Buku dan dokumen yang berstatus **open access** atau **domain publik** di-host
langsung di repository ini, sehingga bisa dibaca tanpa keluar dari situs.

### Reader full-text

*Manual of American Grape-Growing* (U. P. Hedrick, 1908) — Project Gutenberg #29659,
domain publik. Dipilih 9 bab yang paling relevan, total 52.740 kata. Fitur reader:
pencarian full-text dengan cuplikan kalimat, sorotan hasil, kontrol ukuran
tulisan 13–24 px, dan penanda progres baca di localStorage.

Teks aslinya berbahasa Inggris dari awal abad ke-20, jadi istilah teknisnya
perlu Anda terjemahkan ke dalam konteks kebun sendiri.

### PDF

- Identifikasi Gejala dan Penyakit Tanaman Anggur (NOE, 2023) — dasar metodologi mesin diagnosa
- Breeding Grapevines for Tropical Environments (VITIS)
- Simplified Backyard Grape Spray Guide (Univ. Kentucky)
- Agribisnis Tanaman Anggur (Univ. Trunojoyo Madura)

## Menjalankan secara lokal

Tidak perlu build step, tetapi reader membutuhkan `fetch` sehingga harus lewat HTTP
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
| Jurnal NOE, VITIS, Univ. Kentucky, Trunojoyo Madura | Open access, tetap milik penerbit |

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

Dosis pupuk dan jadwal penyemprotan disusun dari gabungan literatur hortikultura
dan praktik umum pekebun. **Belum divalidasi lewat percobaan terkontrol di lokasi ini.**
Lakukan uji pada sebagian kecil tanaman sebelum diterapkan luas, dan ikuti label
resmi produk pestisida. Status keterverifikasian tiap klaim dapat dilihat di tab
**Riset & Sumber** pada situs.
