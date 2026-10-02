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
    kategori: 'Varietas Unggul Nasional',
    items: [
      { t: 'Anggur Tropis Indonesia: Saatnya Menguasai Pasar Domestik — Pustaka Kementerian Pertanian',
        u: 'https://pustaka.bppsdmp.pertanian.go.id/info-literasi/info-literasi-anggur-tropis-indonesia-saatnya-menguasai-pasar-domestik',
        n: 'Tiga varietas unggul Balitbangtan: Jestro AG 86, Jestro AG 60, dan Prabu Bestari.' },
      { t: 'Deskripsi Varietas Anggur Jestro AG 86 — Balitjestro',
        u: 'https://bulelengkab.go.id/informasi/download/52-hasil-penelitian-anggur-varietas-jestro-ag-86-balitbang-pertanian-kementan.pdf',
        n: 'Varietas genjah: panen 95–100 hari setelah pangkas, hasil 9–16 kg/pohon.' },
      { t: 'Deskripsi Varietas Anggur Prabu Bestari — Balitbangtan',
        u: 'https://bulelengkab.go.id/informasi/download/15-hasil-penelitian-anggur-varietas-prabu-bestari-balitbang-pertanian-kementan.pdf',
        n: 'Gula 20 °Brix, asam 1,9%, hasil 10–30 kg/pohon.' },
      { t: 'Prabu Bestari, Anggur Probolinggo Pesaing Anggur Impor — Kominfo Jatim',
        u: 'https://kominfo.jatimprov.go.id/berita/prabu-bestari-anggur-probolinggo-yang-jadi-pesaing-anggur-impor',
        n: 'Praktik nyata di KP Banjarsari: pangkas setelah hujan berhenti, panen raya setelah pangkas kedua.' },
      { t: 'Karakteristik Varietas Red Pince (Prabu Bestari) dan Cardinal — UIN Malang',
        u: 'https://ejournal.uin-malang.ac.id/index.php/bio/article/view/1787',
        n: 'Kajian akademik varietas Probolinggo.' }
    ]
  },
  {
    kategori: 'Sumber Resmi Varietas Impor',
    items: [
      { t: 'Paten tanaman Jupiter — USPP13309P2',
        u: 'https://patents.google.com/patent/USPP13309P2/en',
        n: 'Sumber primer: persilangan Arkansas 1258 × 1672, Clark & Moore, University of Arkansas.' },
      { t: 'Jupiter Seedless Grape — HortScience 34(7)',
        u: 'https://journals.ashs.org/downloadpdf/view/journals/hortsci/34/7/article-p1297.pdf',
        n: 'Publikasi rilis resmi dengan data hasil 25–29 ton/acre.' },
      { t: 'Jupiter — University of Arkansas Extension',
        u: 'https://www.uaex.uada.edu/farm-ranch/crops-commercial-horticulture/docs/jupiter.pdf',
        n: 'Lembar deskripsi resmi varietas.' }
    ]
  },
  {
    kategori: 'Pedoman Resmi Pemerintah',
    items: [
      { t: 'Buku Pedoman Budidaya Anggur (Vitis vinifera) — Ditjen Hortikultura',
        u: 'https://hortikultura.pertanian.go.id/buku-pedoman-budidaya-anggur-vitis-vinifera/',
        n: 'Pedoman nasional. Sumber resmi Kementerian Pertanian.' },
      { t: 'Info Teknologi: Kenali Penyakit Utama pada Anggur — Pustaka BPPSDMP',
        u: 'https://pustaka.bppsdmp.pertanian.go.id/info-literasi/info-teknologi-kenali-penyakit-utama-pada-anggur',
        n: 'Tujuh penyakit utama beserta patogen dan bahan aktif yang direkomendasikan. Sumber utama tab Perlindungan.' },
      { t: 'Budidaya Tanaman Anggur — Balai Besar Pengkajian dan Pengembangan Teknologi Pertanian',
        u: 'https://repository.pertanian.go.id/handle/123456789/17470',
        n: 'Buku panduan budidaya anggur Kementerian Pertanian (2021).' },
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
      { t: 'Grapevine double cropping: a magic technology — Frontiers in Plant Science (2023)',
        u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10140338/',
        n: 'Dasar ilmiah dua panen setahun di daerah bersuhu rata-rata di atas 20 °C, termasuk penjelasan tunas musim panas.' },
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
    kategori: 'Iklim Pasuruan',
    items: [
      { t: 'Data iklim Bangil, Kabupaten Pasuruan — Climate-Data.org',
        u: 'https://en.climate-data.org/asia/indonesia/east-java/bangil-977151/',
        n: 'Curah hujan, hari hujan, dan kelembapan bulanan. Dasar kalender 12 bulan di situs ini.' },
      { t: 'Buku Peta Rata-Rata Curah Hujan dan Hari Hujan 1991–2020 — BMKG',
        u: 'https://iklim.bmkg.go.id/bmkgadmin/storage/buletin/20220511_BukuNormal_Lengkap_FormatBuku.pdf',
        n: 'Normal curah hujan resmi BMKG.' },
      { t: 'Anggur Bali, Primadona Anggur Nusantara — Dinas Pertanian Buleleng',
        u: 'https://distankan.bulelengkab.go.id/informasi/detail/artikel/anggur-bali-primadona-anggur-nusantara-57',
        n: 'Sejarah varietas lokal Bali dan wilayah sentra anggur.' }
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
