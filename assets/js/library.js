/* =========================================================
   DATA PERPUSTAKAAN
   Dokumen yang di-host sendiri (reader internal) + tautan eksternal
   ========================================================= */

/* Dokumen dengan reader internal (full text) */
const BUKU_INTERNAL = [
  {
    id: 'hedrick',
    judul: 'Manual of American Grape-Growing',
    penulis: 'U. P. Hedrick',
    tahun: '1908',
    penerbit: 'New York State College of Agriculture',
    bahasa: 'Inggris (klasik)',
    jenis: 'Buku',
    lisensi: 'Public Domain — Project Gutenberg #29659',
    sumber: 'https://www.gutenberg.org/ebooks/29659',
    berkas: 'perpustakaan/buku/index.json',
    catatan: 'Buku hortikultura anggur klasik. Bukan panduan iklim tropis, tetapi bab tentang pemangkasan, penyakit, dan hama tetap menjadi rujukan dasar.',
    relevan: 'Bab II, IV, VIII, IX langsung relevan untuk pruning, patologi, dan hama.'
  }
];

/* Dokumen PDF, ditampilkan lewat viewer bawaan browser */
const PDF_INTERNAL = [
  {
    id: 'noe',
    judul: 'Identifikasi Gejala dan Penyakit pada Tanaman Anggur dengan Metode Forward Chaining dan Backward Chaining',
    penulis: 'Hartantiko, I. J., Niswatin, R. K., Setiawan, A. B.',
    tahun: '2023',
    outlet: 'Nusantara of Engineering (NOE), Vol. 6 No. 2, hlm. 152–160',
    jenis: 'Jurnal',
    lisensi: 'Open Access',
    file: 'perpustakaan/noe-2023-diagnosa-penyakit.pdf',
    sumber: 'https://ojs.unpkediri.ac.id/index.php/noe/article/view/20802',
    catatan: 'Dasar metodologis mesin diagnosa di tab Diagnosa: pola gejala dipetakan ke aturan penalaran.'
  },
  {
    id: 'vitis',
    judul: 'Breeding Grapevines for Tropical Environments',
    penulis: 'Wolpert, A. J. dan rekan',
    tahun: '2012',
    outlet: 'VITIS Journal of Grapevine Science',
    jenis: 'Jurnal',
    lisensi: 'Open Access',
    file: 'perpustakaan/vitis-breeding-tropis.pdf',
    sumber: 'https://ojs.openagrar.de/index.php/VITIS/article/view/5493',
    catatan: 'Membahas kenapa dan bagaimana anggur bisa dibudidayakan di iklim panas, termasuk strategi pruning dan defoliasi.'
  },
  {
    id: 'uky',
    judul: 'Simplified Backyard Grape Spray Guide',
    penulis: 'University of Kentucky, College of Agriculture, Plant Pathology',
    tahun: '—',
    outlet: 'PPFS-FR-S-23',
    jenis: 'Panduan Penyuluhan',
    lisensi: 'Gratis untuk pengguna ekstensi',
    file: 'perpustakaan/uky-spray-schedule.pdf',
    sumber: 'https://plantpathology.mgcafe.uky.edu/',
    catatan: 'Jadwal semprot paling praktis untuk skala pekarangan. Prinsipnya universal: mulai saat tunas mekar, ulangi tiap 7–14 hari.'
  },
  {
    id: 'agribisnis',
    judul: 'Agribisnis Tanaman Anggur',
    penulis: 'Refnizuida, M. MA., dan rekan',
    tahun: '—',
    outlet: 'Jurnal Ilmiah ISSJ, Universitas Trunojoyo Madura',
    jenis: 'Jurnal',
    lisensi: 'Open Access',
    file: 'perpustakaan/agribisnis-anggur.pdf',
    sumber: 'https://tahtamedia.co.id/index.php/issj',
    catatan: 'Perspektif agribisnis di Madura, wilayah yang kondisi iklimnya paling mirip dengan Pasuruan.'
  }
];

/* Tautan eksternal — sudah diverifikasi HTTP 200 pada tanggal build */
const TAUTAN = [
  {
    kategori: 'Pedoman Resmi Pemerintah',
    items: [
      { t: 'Buku Pedoman Budidaya Anggur (Vitis vinifera) — Ditjen Hortikultura',
        u: 'https://hortikultura.pertanian.go.id/buku-pedoman-budidaya-anggur-vitis-vinifera/',
        n: 'Pedoman nasional. Sumber resmi Kementerian Pertanian.' },
      { t: 'Info Teknologi: Kenali Penyakit Utama pada Anggur — Pustaka BPPSDMP',
        u: 'https://pustaka.bppsdmp.pertanian.go.id/info-literasi/info-teknologi-kenali-penyakit-utama-pada-anggur',
        n: 'Ringkasan tujuh penyakit utama beserta patogen dan bahan yang direkomendasikan.' },
      { t: 'GAP13 — Kumpulan Pedoman Good Agricultural Practice Hortikultura',
        u: 'https://hortikultura.pertanian.go.id/gap13/',
        n: 'Indeks seluruh pedoman hortikultura nasional, termasuk tanaman anggur.' }
    ]
  },
  {
    kategori: 'Deskriptif Varietas (Sumber Asli Breeders)',
    items: [
      { t: 'Ninel (Nizina-2) — vinograd.cc',
        u: 'https://vinograd.cc/ninel.html',
        n: 'Deskripsi lengkap Ninel: 125–135 hari, tandan 600–1500 g, gula 17–18 %, asam 8–9 g/l. Sumber angka di tab Varietas.' },
      { t: 'Kishmish Jupiter — vinograd-loza.com',
        u: 'https://vinograd-loza.com/vinograd-kishmish/vinograd-kishmish-yupiter',
        n: 'Deskripsi Jupiter: 125 hari, gula hingga 24 %, tanpa biji, tahan jamur tinggi. Termasuk catatan pruning 10–12 mata.' },
      { t: 'Karakteristik Varietas — megasad.net',
        u: 'https://megasad.net/ru/vinograd-upter.-opis-kharakteristika/',
        n: 'Data produktivitas dan ketahanan Jupiter.' }
    ]
  },
  {
    kategori: 'Jurnal Penelitian',
    items: [
      { t: 'Diagnosa Penyakit Anggur dengan Forward dan Backward Chaining (2023)',
        u: 'https://ojs.unpkediri.ac.id/index.php/noe/article/view/20802',
        n: 'Tersedia sebagai PDF di dalam sistem ini.' },
      { t: 'Breeding Grapevines for Tropical Environments',
        u: 'https://ojs.openagrar.de/index.php/VITIS/article/view/5493',
        n: 'Tersedia sebagai PDF di dalam sistem ini.' },
      { t: 'Review Grape Growing in Tropical Regions',
        u: 'https://www.researchgate.net/publication/293327673_A_Review_on_Grape_Growing_in_Tropical_Regions',
        n: 'Studi komparatif praktik, cocok untuk memahami perbedaan dengan vitikultur iklim sedang.' },
      { t: 'Pengaruh Waktu Pruning terhadap Produksi — OENO One (2025)',
        u: 'https://oeno-one.eu/article/view/8239',
        n: 'Analisis efek waktu pruning terhadap hasil dan komposisi buah.' },
      { t: 'Budidaya Anggur pada Masa Pascapandemi — Universitas Mataram',
        u: 'https://jurnalfkip.unram.ac.id/index.php/JPPM/article/download/12465/7300',
        n: 'Konteks budidaya anggur di pekarangan Jawa, termasuk materi grafting.' },
      { t: 'Pendampingan Pengendalian Fungi Anggur Caru (2024)',
        u: 'https://journal.uii.ac.id/JAMALI/article/download/33758/17216/121264',
        n: 'Uji efektivitas fungisida sulfur pada anggur.' }
    ]
  },
  {
    kategori: 'Referensi Teknis Internasional',
    items: [
      { t: 'Simplified Backyard Grape Spray Guide — Univ. Kentucky',
        u: 'https://plantpathology.mgcafe.uky.edu/files/ppfs-fr-s-23.pdf',
        n: 'Tersedia sebagai PDF di dalam sistem ini.' },
      { t: 'Manual of American Grape-Growing — Project Gutenberg',
        u: 'https://www.gutenberg.org/ebooks/29659',
        n: 'Tersedia reader lengkap di dalam sistem ini.' },
      { t: 'Grape Production Guide — Perennia Food',
        u: 'https://www.perennia.ca/wp-content/uploads/2022/05/Grape-Production-Guide-2022-MAY-web.pdf',
        n: 'Panduan produksi buah anggur, termasuk pemilihan lahan dan pengelolaan tanah.' },
      { t: 'On the Growing of Grapevines in the Tropics — ISHS Acta 662',
        u: 'https://ishs.org/ishs-article/662_2/',
        n: 'Dasar bahwa anggur tropis tetap hijau dan dapat dipangkas saat aktif tumbuh.' },
      { t: 'Grape Management Techniques in Tropical Regions — Camargo (2005)',
        u: 'https://www.cabidigitallibrary.org/doi/pdf/10.5555/20053213808',
        n: 'Dua kali pruning dan satu kali panen per tahun sebagai konfigurasi ideal.' },
      { t: 'Post-Harvest Disease Management for Grapevine — U. Minnesota',
        u: 'https://enology.umn.edu/grapes-how/post-harvest-disease-management-grapevine-downy-mildew-and-powdery-mildew',
        n: 'Pengelolaan penyakit yang muncul menjelang akhir musim.' }
    ]
  },
  {
    kategori: 'Praktik Lokal',
    items: [
      { t: 'Resep Media Tanam Pohon Anggur — Jagadtani',
        u: 'https://jagadtani.com/read/4347/bongkar-resep-rahasia-media-tanam-pohon-anggur',
        n: 'Praktik pembesaran batang: pupuk kandang dan sekam dominan, tanah liat 5–10 persen.' },
      { t: 'Teknik Pemangkasan agar Cepat Berbuah — Liputan6',
        u: 'https://www.liputan6.com/hot/read/6270761/teknik-pemangkasan-anggur-agar-cepat-berbuah-langkah-penting-yang-membuat-tanaman-produktif',
        n: 'Panduan pruning ringkas untuk pemula.' },
      { t: 'Tiga Metode Pruning — Agriculture Indonesia',
        u: 'https://www.facebook.com/AgricultureIndonesia/posts/1110377911128601/',
        n: 'Spur, rod, dan cane pruning beserta jenis varietas yang cocok untuk tiap metode.' },
      { t: 'Panduan Pemupukan Tanaman Anggur — Scribd',
        u: 'https://id.scribd.com/document/382837635/PEMUPUKAN-ANGGUR',
        n: 'Skema pemupukan per fase pertumbuhan.' }
    ]
  }
];
