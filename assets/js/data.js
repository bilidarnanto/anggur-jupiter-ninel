/* =========================================================
   DATA — Sistem Budidaya Anggur Jupiter & Ninel
   Wilayah acuan: Bangil / Kabupaten Pasuruan, Jawa Timur
   Iklim: tropis, 2 musim. Data iklim dari Climate-Data.org (Bangil)
   + BMKG, sesuai kutipan di halaman Kabupaten Pasuruan.
   ========================================================= */

/* ---------- IKLIM PASURUAN (BANGIL) ----------
   Curah hujan rata-rata (mm), hari hujan, dan kelembapan per bulan.
   Sumber: Climate-Data.org (Bangil) & BMKG (normal 1991–2020). */
const IKLIM = [
  { m: 1,  nama: 'Januari',   hujan: 362, hari: 16, rh: 82 },
  { m: 2,  nama: 'Februari',  hujan: 344, hari: 15, rh: 83 },
  { m: 3,  nama: 'Maret',     hujan: 306, hari: 14, rh: 80 },
  { m: 4,  nama: 'April',     hujan: 212, hari: 10, rh: 77 },
  { m: 5,  nama: 'Mei',       hujan: 100, hari: 5,  rh: 75 },
  { m: 6,  nama: 'Juni',      hujan: 63,  hari: 3,  rh: 71 },
  { m: 7,  nama: 'Juli',      hujan: 22,  hari: 1,  rh: 69 },
  { m: 8,  nama: 'Agustus',   hujan: 8,   hari: 0,  rh: 66 },
  { m: 9,  nama: 'September', hujan: 11,  hari: 1,  rh: 67 },
  { m: 10, nama: 'Oktober',   hujan: 40,  hari: 2,  rh: 70 },
  { m: 11, nama: 'November',  hujan: 140, hari: 6,  rh: 74 },
  { m: 12, nama: 'Desember',  hujan: 283, hari: 13, rh: 79 }
];

/* Musim riil Pasuruan berdasarkan data di atas:
   - Hujan penuh  : November–April (Nov mulai naik, Des–Mar puncak)
   - Transisi     : April–Mei (hujan turun) dan Oktober–November (hujan naik)
   - Kemarau      : Juni–September (paling kering Agustus, hanya 8 mm) */
const MUSIM_PASURUAN = {
  hujan: 'November–April',
  kemarau: 'Juni–September',
  keringPuncak: 'Juli–Agustus',
  transisi: ['April–Mei', 'Oktober–November']
};

/* ---------- PROFIL VARIETAS ---------- */
const PROFIL = {
  jupiter: {
    id: 'jupiter',
    nama: 'Jupiter',
    namaLain: 'Kishmish Jupiter · Jupiter Seedless · Arkansas 1985',
    asal: 'Amerika Serikat — dirilis University of Arkansas 1998. Persilangan Arkansas 1258 × Arkansas 1672 (sumber: paten tanaman USPP13309, John R. Clark & James N. Moore).',
    tipe: 'Anggur buah meja tanpa biji (interspecific seedless), aroma muskat',
    warna: 'Merah kebiruan sampai biru saat matang penuh',
    rasa: 'Muskat tegas dan khas — ini keunggulan utamanya. Biji tidak ada, kulit tidak terlalu keras',
    pematang: 'Awal. Di sumber Arkansas dilaporkan berbuah cepat; di iklim tropis perlu dihitung ulang dari pengamatan lokal',
    ukuranBuah: 'Besar dan oval — lebih besar dari rata-rata anggur tanpa biji',
    ukuranTandan: 'Tandan besar (sumber resmi menyebut "large clusters")',
    gula: 'Sekitar 21 °Brix di Arkansas. Di Pasuruan bisa lebih tinggi karena penyinaran penuh, tapi harus diukur, bukan diasumsikan',
    asam: 'Tidak dilaporkan spesifik di sumber resmi',
    ketahanan: 'Ketahanan sedang sampai kuat terhadap penyakit jamur (bukan "sangat tinggi"). Sumber paten juga menyebut tahan pecah buah',
    produksi: 'Produktif. Uji resmi Arkansas mencapai 25–29 ton/acre (setara ±56–65 ton/ha) — angka ini dari kebun penelitian, bukan pekarangan',
    vigor: 'Kuat dan bisa dilatih tumbuh tegak (upright)',
    potong: 'Sumber resmi tidak menetapkan jumlah mata spesifik untuk Jupiter. Rekomendasi "10–12 mata" di panduan pekarangan adalah praktik umum, bukan angka resmi varietas',
    karakter: 'Tahan pecah buah, produktif, dan tahan penyakit jamur sedang–kuat. Di Washington State dilaporkan kurang tahan kekeringan musim panas',
    catatan: [
      'Keunggulan yang paling menonjol menurut pemulia aslinya adalah rasanya — varietas muskat pertama yang dirilis University of Arkansas.',
      'Patennya sudah kedaluwarsa sejak 11 Januari 2019, jadi bebas diperbanyak tanpa royalti.',
      'Tidak perlu penjarangan beban buah; tanaman cenderung mengatur sendiri.',
      'Kelemahan: bila dibiarkan terlalu lama di pohon, buah bisa rontok dari tangkainya (cluster shatter).',
      'Butuh penyerbukan yang baik. Hasil paling stabil di tanah subur tanpa nitrogen berlebihan.'
    ]
  },
  ninel: {
    id: 'ninel',
    nama: 'Ninel',
    namaLain: 'Nizina-2 (nama resmi) · Нинель · anggur meja Ukraina',
    asal: 'Ukraina — hasil pemuliaan V. N. Kraynov. Ninel adalah HIBRIDA KOMPLEKS (Talisman × Kishmish Archer), bukan hasil seleksi sederhana.',
    tipe: 'Anggur buah meja berbiji, bentuk tandan besar',
    warna: 'Merah keunguan (crimson)',
    rasa: 'Manis, lembut, aroma muskat ringan',
    pematang: 'Menengah–awal. Sumber breeder menyebut 125–135 hari sejak berbunga',
    ukuranBuah: 'Besar. Sumber pembibitan menyebut 12–15 gram per butir — angka dari penjual bibit, belum diverifikasi lembaga resmi',
    ukuranTandan: 'Tandan besar dan berat. Angka "600–1.500 g" berasal dari deskripsi pembibitan, bukan uji resmi',
    gula: 'Sekitar 17–18 °Brix menurut sumber pembibitan',
    asam: 'Tidak dilaporkan di sumber resmi',
    ketahanan: 'Sumber pembibitan menyebut ketahanan penyakit sedang. Perlu pencegahan lebih aktif daripada Jupiter',
    produksi: 'Sumber pembibitan menyebut sekitar 10–15 kg/pohon. Angka ini BELUM terverifikasi — tidak ditemukan di publikasi ilmiah',
    vigor: 'Kuat — harus dikendalikan agar tajuk tidak terlalu rimbun',
    potong: 'Perlu penjarangan buah agar tidak kelebihan beban dan buah tetap besar',
    karakter: 'Butuh air dan nutrisi lebih banyak daripada Jupiter',
    catatan: [
      'Nama "Ninel" adalah nama dagang; nama resmi varietasnya Nizina-2. Pastikan bibit yang dibeli benar-benar Nizina-2.',
      'Karena buahnya besar dan tandan berat, butuh trellis yang kuat dan penjarangan rutin.',
      'Sering diserang tawon dan semut — wajib perangkap atau pelindung buah.',
      'Sensitif terhadap kelebihan air; media harus punya drainase baik.',
      '⚠️ Angka-angka agronomis Ninel di panduan ini berasal dari deskripsi pembibitan komersial, bukan dari lembaga penelitian. Perlakukan sebagai perkiraan, bukan patokan pasti.'
    ]
  }
};

/* ---------- VARIETAS LOKAL & UNGGUL NASIONAL ----------
   Varietas yang sudah dirilis Kementerian Pertanian / Balitjestro dan
   beradaptasi dengan iklim Indonesia. Cocok sebagai pembanding Jupiter & Ninel.
   Sumber: Balitjestro (Balitbangtan), SK pelepasan varietas, dan
   Dinas Komunikasi dan Informatika Jawa Timur. */
const VARIETAS_LOKAL = [
  {
    nama: 'Jestro AG 86',
    asal: 'Balai Penelitian Tanaman Jeruk dan Buah Subtropika (Balitjestro), Kementerian Pertanian',
    tipe: 'Anggur tanpa biji, tandan panjang',
    keunggulan: 'Produktivitas tinggi (9–16 kg/pohon), tandan panjang, cita rasa anggur kuat. Genjah — bisa panen 95–100 hari setelah pangkas produksi, lebih cepat dari varietas impor yang 120–130 hari.',
    catatan: 'Dirancang khusus untuk iklim Indonesia. Paling cepat berbuah di antara varietas unggul nasional.',
    status: 'Varietas unggul nasional (Balitjestro)',
    sumber: 'https://bulelengkab.go.id/informasi/download/52-hasil-penelitian-anggur-varietas-jestro-ag-86-balitbang-pertanian-kementan.pdf'
  },
  {
    nama: 'Jestro AG 60',
    asal: 'Balitjestro, Kementerian Pertanian',
    tipe: 'Anggur tanpa biji (seedless)',
    keunggulan: 'Manis, krispi, tanpa biji. Gula 16–19 °Brix, produktivitas 10–25 kg/pohon. Beradaptasi baik di dataran rendah.',
    catatan: 'Dikenal karena daging buah renyah — karakter yang jarang pada anggur tropis.',
    status: 'Varietas unggul nasional (Balitjestro)',
    sumber: 'https://jambi.antaranews.com/berita/322745/jestro-ag60-anggur-tanpa-biji-dari-balitbang-pertanian'
  },
  {
    nama: 'Prabu Bestari',
    asal: 'Probolinggo — dilepas sebagai varietas unggul (sinonim "Red Pince")',
    tipe: 'Anggur buah meja berbiji',
    keunggulan: 'Buah besar, warna merah gelap, gula 20 °Brix. Produksi 10–30 kg/pohon, tandan 250–660 g, tingkat pecah buah rendah. Tumbuh baik sampai 300 mdpl.',
    catatan: 'Pesaing langsung anggur impor menurut Dinas Kominfo Jatim. Cocok ditanam di dataran rendah seperti Pasuruan.',
    status: 'Varietas unggul nasional',
    sumber: 'https://kominfo.jatimprov.go.id/berita/prabu-bestari-anggur-probolinggo-yang-jadi-pesaing-anggur-impor'
  },
  {
    nama: 'Probolinggo Biru 81',
    asal: 'Probolinggo (Vitis vinifera)',
    tipe: 'Anggur buah meja',
    keunggulan: 'Manis, warna merah kehitaman berlapis bedak. Bobot buah 2,57–9,90 g, umur panen ±120 hari setelah pangkas, produktivitas 10–30 kg/panen/pohon.',
    catatan: 'Salah satu varietas lokal tertua yang masih ditanam dan direkomendasikan Departemen Pertanian.',
    status: 'Varietas lokal, direkomendasikan pemerintah',
    sumber: 'https://indonesiabaik.id/infografis/jenis-anggur-yang-ditanam-di-indonesia'
  },
  {
    nama: 'Probolinggo Super (Cardinal)',
    asal: 'Probolinggo',
    tipe: 'Anggur buah meja',
    keunggulan: 'Varietas lama yang terbukti beradaptasi di dataran rendah Jawa Timur. Dibahas dalam kajian karakteristik varietas di Kota Probolinggo.',
    catatan: 'Kajian akademik tersedia (El-Hayah: Jurnal Biologi, UIN Malang).',
    status: 'Varietas lokal',
    sumber: 'https://ejournal.uin-malang.ac.id/index.php/bio/article/view/1787'
  },
  {
    nama: 'Anggur Bali (Alphonso Lavalle)',
    asal: 'Buleleng, Bali — dikembangkan sejak 1934',
    tipe: 'Anggur buah meja dan olahan',
    keunggulan: 'Adaptasi sangat baik di iklim lokal dan produktif secara ekonomis. Buleleng menghasilkan 11.938 ton (2022) — tertinggi nasional.',
    catatan: 'Terdaftar resmi lewat SK Menteri Pertanian No. 857/Kpts/TP.240/12/1985.',
    status: 'Varietas lokal terdaftar',
    sumber: 'https://kanaldesa.com/artikel/semanis-aroma-anggur-dari-pulau-dewata'
  }
];

/* ---------- KALENDER 12 BULAN ----------
   Musim mengikuti data curah hujan Pasuruan (Bangil) yang sebenarnya:
   hujan penuh November–April, kemarau Juni–September.
   Pola siklus: pruning pasca hujan (Mei) → panen siklus 1 (Agustus–September),
   lalu pruning (September–Oktober) → panen siklus 2 (Desember–Januari). */
const BULAN = [
  {
    m: 1, nama: 'Januari', musim: 'Puncak musim hujan',
    ch: 'Bulan terbasah (362 mm, 16 hari hujan). Risiko penyakit paling tinggi. Fokus penuh pada pencegahan.',
    tugas: [
      { nama: 'Cegah busuk akar', detail: 'Kurangi volume siram 30–50 persen. Pastikan lubang drainase benar-benar lancar.', tag: 'kritis' },
      { nama: 'Bersihkan tajuk', detail: 'Pangkas daun dan ranting yang menyentuh tanah agar udara bisa mengalir.', tag: 'pangkas' },
      { nama: 'Pantau downy mildew', detail: 'Bintik kekuningan di atas daun dan lapisan putih di bawahnya adalah tanda downy mildew. Semprot mankozeb.', tag: 'sakit' },
      { nama: 'Siapkan media tanam', detail: 'Fermentasi pupuk kandang dan sekam dengan matang sebelum dipakai. Resepnya ada di tab Panduan.', tag: 'tanam' }
    ]
  },
  {
    m: 2, nama: 'Februari', musim: 'Puncak musim hujan',
    ch: 'Masih sangat basah (344 mm). Jangan memangkas produksi sekarang — batang muda rentan busuk kena hujan.',
    tugas: [
      { nama: 'Tahan dulu pruning produksi', detail: 'Petani Probolinggo menunggu hujan berhenti sebelum pangkas. Batang muda sangat rentan air hujan.', tag: 'kritis' },
      { nama: 'Jaga sanitasi dan drainase', detail: 'Buang daun sakit dan pastikan tidak ada genangan. Ini bulan paling menentukan kegagalan atau keberhasilan.', tag: 'kritis' },
      { nama: 'Semprot preventif rutin', detail: 'Interval 7–10 hari selama hujan masih deras. Jangan menunggu gejala muncul.', tag: 'sakit' },
      { nama: 'Siapkan stek', detail: 'Siapkan media semai lembap untuk stek 15–20 cm dengan 2–3 mata tunas.', tag: 'perbanyakan' }
    ]
  },
  {
    m: 3, nama: 'Maret', musim: 'Musim hujan',
    ch: 'Hujan mulai berkurang (306 mm) tapi masih tinggi. Belum aman untuk memangkas produksi.',
    tugas: [
      { nama: 'Selesaikan perawatan vegetatif', detail: 'Manfaatkan masa ini untuk membesarkan batang: pupuk kandang matang + urea per pohon.', tag: 'pupuk' },
      { nama: 'Pantau oidium dini', detail: 'Kelembapan masih tinggi. Awasi serbuk putih di daun dan segera tangani.', tag: 'sakit' },
      { nama: 'Perbaiki trellis', detail: 'Perbaiki kawat dan ikatan sebelum musim produktif dimulai. Jangan menunggu saat sibuk.', tag: 'pangkas' }
    ]
  },
  {
    m: 4, nama: 'April', musim: 'Transisi hujan → kemarau',
    ch: 'Hujan turun tajam (212 mm). Mulai bersiap untuk siklus produksi pertama.',
    tugas: [
      { nama: 'Rencanakan pruning', detail: 'Tentukan tanggal pangkas untuk panen siklus 1. Perhitungkan 90–120 hari sampai panen.', tag: 'kritis' },
      { nama: 'Kocor MKP dan KNO3', detail: 'Persiapan fase generatif: MKP 12 gram, KARATE PLUS BORONI 24 gram, KALINITRA 20 gram per 10 liter air, dipecah dua kali.', tag: 'pupuk' },
      { nama: 'Kurangi frekuensi semprot', detail: 'Seiring hujan berkurang, penyakit jamur basah mulai mereda. Sesuaikan interval semprot.', tag: 'sakit' }
    ]
  },
  {
    m: 5, nama: 'Mei', musim: 'Awal kemarau',
    ch: 'Bulan kunci. Hujan tinggal 100 mm — inilah saat petani Probolinggo memangkas produksi.',
    tugas: [
      { nama: 'PRUNING PRODUKSI SIKLUS 1', detail: 'Ini pangkas utama Anda. Pilih 5–7 mata tunas (rod pruning). Target panen Agustus–September.', tag: 'kritis' },
      { nama: 'Pupuk dasar saat pangkas', detail: 'Beri pupuk kandang matang plus urea per pohon agar tunas baru cepat tumbuh.', tag: 'pupuk' },
      { nama: 'Naikkan frekuensi siram', detail: 'Kemarau mulai. Siram 1–2 kali sehari saat panas, jangan biarkan media kering total.', tag: 'siram' },
      { nama: 'Pasang atap plastik bila perlu', detail: 'Untuk sisa hujan tak terduga, atap plastik melindungi bunga dan buah muda.', tag: 'sakit' }
    ]
  },
  {
    m: 6, nama: 'Juni', musim: 'Musim kemarau',
    ch: 'Kemarau mulai mantap (63 mm). Tunas dan bunga mulai berkembang.',
    tugas: [
      { nama: 'Pantau pembungaan', detail: 'Tunas bunga muncul beberapa minggu setelah pangkas. Hentikan urea, pindah ke MKP agar bunga terbentuk rapi.', tag: 'kritis' },
      { nama: 'Buang tunas liar', detail: 'Buang tunas dari pangkal dan bagian yang tidak berbuah. Sisakan 2–3 tunas terkuat.', tag: 'pangkas' },
      { nama: 'Semprot preventif awal', detail: 'Lindungi bunga dan buah muda dari thrips dan botrytis.', tag: 'sakit' }
    ]
  },
  {
    m: 7, nama: 'Juli', musim: 'Kemarau kering',
    ch: 'Sangat kering (22 mm). Waspadai oidium karena udara kering dan panas.',
    tugas: [
      { nama: 'Semprot oidium', detail: 'Panas kering adalah puncak powdery mildew. Pakai sulfur 2 gram per liter atau karbendazim.', tag: 'sakit' },
      { nama: 'Penjarangan buah muda', detail: 'Wajib untuk Ninel dan varietas berbiji besar. Sisakan 1 tandan per tunas.', tag: 'kritis' },
      { nama: 'Kontrol panjang tunas', detail: 'Potong pucuk 3–5 mata bila tunas lebih dari 1,2 meter agar energi tersalur ke buah.', tag: 'pangkas' },
      { nama: 'Irigasi konsisten', detail: 'Bulan kering: 4–8 liter per pot per hari, atau 20–40 liter per pohon.', tag: 'siram' }
    ]
  },
  {
    m: 8, nama: 'Agustus', musim: 'Puncak kemarau',
    ch: 'Bulan terkering (8 mm, hampir tanpa hujan). Buah membesar dan gula mulai naik.',
    tugas: [
      { nama: 'Jaga air jangan sampai kurang', detail: 'Ini bulan paling kering. Kekurangan air di fase ini membuat buah kecil dan pecah saat hujan datang.', tag: 'kritis' },
      { nama: 'Cek Brix mingguan', detail: 'Pakai refractometer. Ukur, jangan menebak dari warna saja.', tag: 'panen' },
      { nama: 'Pemupukan pembesaran buah', detail: 'Turunkan nitrogen, naikkan kalium: NPK 0-0-60 atau KALINITRA.', tag: 'pupuk' },
      { nama: 'Pantau tawon dan semut', detail: 'Buah mulai manis. Pasang perangkap sebelum hama datang, bukan sesudah.', tag: 'hama' }
    ]
  },
  {
    m: 9, nama: 'September', musim: 'Akhir kemarau',
    ch: 'Masih kering (11 mm). Panen siklus 1 sekaligus persiapan siklus 2.',
    tugas: [
      { nama: 'PANEN SIKLUS 1', detail: 'Panen pagi hari saat embun sudah menguap. Potong seluruh tandan dengan gunting tajam.', tag: 'panen' },
      { nama: 'Pruning pasca panen', detail: 'Pangkas 3–4 mata setelah panen untuk memicu tunas pengganti yang produktif.', tag: 'kritis' },
      { nama: 'Hitung hasil per pohon', detail: 'Catat jumlah tandan dikali beratnya. Ini acuan pengaturan musim depan.', tag: 'panen' },
      { nama: 'Siapkan siklus 2', detail: 'Rencanakan pruning siklus 2 sekitar Oktober, sebelum hujan naik lagi.', tag: 'kritis' }
    ]
  },
  {
    m: 10, nama: 'Oktober', musim: 'Transisi kemarau → hujan',
    ch: 'Hujan mulai naik (40 mm). Suhu tertinggi tahun ini (rata-rata 28,2 °C).',
    tugas: [
      { nama: 'PRUNING SIKLUS 2', detail: 'Pangkas 7–8 mata. Sasaran panen Desember–Januari.', tag: 'kritis' },
      { nama: 'Waspadai panas ekstrem', detail: 'Oktober adalah bulan terpanas. Pastikan tanaman tidak kekurangan air saat tunas baru keluar.', tag: 'siram' },
      { nama: 'Buang daun bawah', detail: 'Buang 6–8 daun paling bawah untuk membuka tajuk sebelum hujan datang.', tag: 'pangkas' }
    ]
  },
  {
    m: 11, nama: 'November', musim: 'Awal musim hujan',
    ch: 'Hujan naik (140 mm). Bunga siklus 2 mekar bersamaan dengan datangnya kelembapan.',
    tugas: [
      { nama: 'Proteksi botrytis', detail: 'Kelembapan tinggi saat bunga mekar adalah pemicu ledakan gray mold. Ini titik paling kritis siklus 2.', tag: 'kritis' },
      { nama: 'Penjarangan bunga', detail: 'Setelah buah sebesar 5 mm, gunting sebagian buah. Sisakan 60–80 butir per tandan untuk varietas berbiji besar.', tag: 'kritis' },
      { nama: 'Semprot preventif tiap 10–14 hari', detail: 'Mankozeb, tembaga, atau karbendazim. Perpendek interval saat hujan mulai sering.', tag: 'sakit' },
      { nama: 'Siapkan atap plastik', detail: 'Pasang sebelum puncak hujan Desember–Januari.', tag: 'sakit' }
    ]
  },
  {
    m: 12, nama: 'Desember', musim: 'Musim hujan',
    ch: 'Hujan deras kembali (283 mm). Buah siklus 2 mendekati matang di tengah risiko tinggi.',
    tugas: [
      { nama: 'Lindungi tandan', detail: 'Bungkus atau beri keranjang pelindung. Tandan berat rentan pecah dan busuk.', tag: 'kritis' },
      { nama: 'Semprot rutin jangan bolos', detail: 'Ini masa paling rentan. Semprot pagi atau sore, jangan tepat sebelum hujan.', tag: 'sakit' },
      { nama: 'Cegah tawon dan semut', detail: 'Perangkap feromon, larutan gula, atau kain penutup.', tag: 'hama' },
      { nama: 'Panen siklus 2', detail: 'Panen saat Brix sudah cukup dan rasa matang, bukan hanya karena warnanya bagus.', tag: 'panen' },
      { nama: 'Evaluasi musim', detail: 'Catat hasil, Brix, serangan penyakit, dan harga jual. Sesuaikan kalender tahun depan.', tag: 'admin' }
    ]
  }
];

/* ---------- PANDUAN STEP-BY-STEP ---------- */
const PANDUAN = [
  {
    step: 1, judul: 'Pilih Lokasi dan Penempatan', icon: 'Lokasi',
    ringkas: 'Cari tempat dengan matahari langsung lebih dari 6 jam dan sirkulasi udara yang baik.',
    detail: [
      'Butuh 6 sampai 8 jam matahari langsung setiap hari. Kurang dari itu membuat buah tidak matang sempurna, rasa masam, dan akar mudah sakit.',
      'Orientasi timur–barat umumnya lebih baik daripada utara–selatan. Hindari bayangan permanen dari bangunan.',
      'Angin membantu mencegah jamur, tetapi angin yang terlalu kencang membuat buah kering.',
      'Jauhkan tanaman minimal 60 cm dari dinding rumah karena dinding menyimpan dan memancarkan panas.',
      'Di Pasuruan, ketinggian ideal sampai sekitar 300 mdpl. Suhu optimal 25–31 °C.'
    ],
    tips: 'Amati lokasi selama satu hari penuh: catat jam berapa matahari mulai mengenai tanaman sampai matahari terbenam.'
  },
  {
    step: 2, judul: 'Media Tanam', icon: 'Media',
    ringkas: 'Resep kuncinya: satu bagian pupuk kandang, satu bagian sekam, satu bagian tanah lempung.',
    detail: [
      'Pupuk kandang matang: sumber unsur hara dan bahan organik. Rasio satu banding satu dengan sekam.',
      'Sekam atau rice hull: menjaga aerasi dan menyimpan air. Ini komponen paling penting agar akar sehat.',
      'Tanah lempung ditambah pasir kasar: menambah drainase. Tanah liat murni membuat akar sesak.',
      'Bahan opsional: arang, serabut kelapa, atau vermikulit.',
      'Semua bahan sebaiknya difermentasi minimal 2 minggu sebelum dipakai.'
    ],
    tips: 'Banyak pekebun yang fokus membesarkan batang memakai pupuk kandang dan sekam dominan, dengan tanah liat hanya 5 sampai 10 persen.'
  },
  {
    step: 3, judul: 'Pot atau Wadah', icon: 'Wadah',
    ringkas: 'Minimal 40 liter, ideal 60 sampai 80 liter. Lubang drainase wajib ada.',
    detail: [
      'Jupiter: bisa mulai dari 30 sampai 40 liter, lalu naikkan ke 60 liter saat dewasa.',
      'Ninel: wajib 60 sampai 80 liter sejak awal karena tandannya berat dan butuh perakaran banyak.',
      'Bahan yang cocok: terakota, drum plastik, atau pot semen.',
      'Isi dasar dengan batu kerikil setebal 3 sampai 5 cm sebagai lapisan drainase.',
      'Wadah harus punya kaki atau alas agar air bisa keluar dari lubang bawah.'
    ],
    tips: 'Pot yang besar membuat penyiraman lebih jarang dan menurunkan risiko overwatering.'
  },
  {
    step: 4, judul: 'Menanam Bibit', icon: 'Tanam',
    ringkas: 'Pilih bibit berumur 3–4 bulan, ganti tanah galian dengan media, lalu tanam cukup dalam.',
    detail: [
      'Bibit yang dianjurkan berumur sekitar 3–4 bulan dengan daun dan tunas yang sehat, serta bebas hama dan penyakit.',
      'Buat lubang minimal satu setengah sampai dua kali diameter pot. Buang tanah galian dan ganti dengan media.',
      'Tanam cukup dalam agar bagian batang bawah tertutup media.',
      'Padatkan media dengan ringan, jangan dipukul atau ditekan keras.',
      'Siram satu ember penuh setelah tanam untuk memadatkan media.',
      'Beri label yang jelas berisi varietas dan tanggal tanam. Ini kunci pengarsipan data Anda.'
    ],
    tips: 'Stek lebih disarankan daripada benih karena mempertahankan karakter varietas secara persis. Pastikan bibit berlabel jelas asal varietasnya.'
  },
  {
    step: 5, judul: 'Struktur dan Trellis', icon: 'Trellis',
    ringkas: 'Bangun trellis setinggi 2 meter, selebar 1,2 meter, dengan jarak 1,5 sampai 2 meter antar tanaman.',
    detail: [
      'Trellis: tinggi 2 meter, lebar 1 sampai 1,2 meter, dengan 3 sampai 4 tingkat kawat.',
      'Jarak tanam: 1,5 sampai 2 meter antar baris dan 1,5 meter di dalam baris. Varietas bertandan berat butuh lebih lebar.',
      'Arahkan batang utama naik ke satu kawat, lalu sebarkan horizontal dua arah untuk sistem V.',
      'Ikat dengan pita plastik, jangan kawat langsung, karena batang muda masih rapuh.',
      'Pastikan tersedia cukup mata buah di sepanjang batang.'
    ],
    tips: 'Varietas dengan tandan berat paling produktif saat batangnya dibentangkan horizontal dan ditopang kuat.'
  },
  {
    step: 6, judul: 'Pruning atau Pemangkasan', icon: 'Pruning',
    ringkas: 'Waktu pruning menentukan waktu panen. Di Pasuruan, pangkas setelah hujan berhenti.',
    detail: [
      'Pruning buah (generatif): sisakan 5 sampai 8 mata tunas (rod) atau 10 sampai 12 mata (cane). Makin pendek, buah makin besar tetapi jumlah totalnya berkurang.',
      'Pruning pembesaran (vegetatif): sisakan 2 sampai 3 mata untuk memperbesar batang.',
      'Pruning pasca panen: pangkas 3 sampai 4 mata setelah panen untuk memicu tunas buah yang kuat.',
      'Potong tepat di batas internode antara bagian hijau dan coklat.',
      'Buang tunas liar (sucker) dari pangkal setiap 2 minggu.',
      'Sterilkan gunting dengan alkohol 70 persen setiap kali berpindah tanaman.'
    ],
    tips: 'Di Pasuruan, jangan memangkas saat hujan masih deras — batang muda rentan busuk. Tunggu sampai hujan berhenti, sekitar Mei, lalu pangkas lagi sekitar Oktober untuk siklus kedua.'
  },
  {
    step: 7, judul: 'Pemupukan', icon: 'Pupuk',
    ringkas: 'Tiga fase: vegetatif butuh nitrogen, generatif butuh fosfor, pembuahan butuh kalium.',
    detail: [
      'Fase vegetatif (pembesaran batang): NPK 16-16-16 atau urea satu sendok makan per pohon tiap 2 sampai 4 minggu.',
      'Fase generatif (membentuk bunga): MKP 12 gram, KARATE PLUS BORONI 24 gram, KALINITRA 20 gram per 10 liter air, dipecah dua kali aplikasi.',
      'Fase pembesaran buah: turunkan nitrogen, naikkan kalium dengan NPK 0-0-60 atau KALINITRA.',
      'Pupuk organik: 1 sampai 2 kilogram pupuk kandang matang per pohon setiap 3 bulan.',
      'Pemupukan lewat daun (foliar): semprot permukaan daun pada pagi hari sebelum jam 9, bukan ke tanah.'
    ],
    tips: 'Cek panjang ruas internode sebagai indikator: 5 sampai 12 cm berarti normal, lebih dari 12 cm berarti kelebihan hara, kurang dari 5 cm berarti kurang hara.'
  },
  {
    step: 8, judul: 'Irigasi dan Drainase', icon: 'Air',
    ringkas: 'Musim hujan 2 sampai 3 kali seminggu, musim kemarau 1 sampai 2 kali per hari.',
    detail: [
      'Kelembapan media optimal 60 sampai 80 persen — terasa lembap tetapi tidak basah kuyup.',
      'Cuaca cerah: siram pagi dan sore. Hindari menyiram jam 12 sampai 14 karena penguapan tinggi.',
      'Musim hujan (November–April): kurangi volume air. Air yang mengendap di zona akar menyebabkan busuk akar.',
      'Puncak kemarau (Juli–Agustus): justru paling butuh air. Kekurangan air di fase ini membuat buah pecah saat hujan datang.',
      'Selalu pastikan kelebihan air bisa keluar. Pot harus berada di atas kaki atau alas.'
    ],
    tips: 'Perhatikan bulan Agustus — hanya 8 mm hujan sebulan. Ini bulan paling kering dan paling sering membuat tanaman stres tanpa disadari.'
  },
  {
    step: 9, judul: 'Perlindungan Tanaman', icon: 'Proteksi',
    ringkas: 'Pencegahan lebih penting daripada pengobatan. Semprot preventif setiap 10 sampai 14 hari saat risiko tinggi.',
    detail: [
      'Oidium (embun tepung): serbuk putih di permukaan atas daun. Sumber Kementerian Pertanian menganjurkan bupirimat, oksitiokuineks, atau benomil. Puncaknya saat kemarau kering.',
      'Gray mold (Botrytis): buah mengkerut dan berubah coklat tua. Kendalikan dengan sanitasi kebun, bubur bordo, atau fungisida maneb dan zineb.',
      'Downy mildew (bulai): bintik kekuningan di atas dan lapisan putih di bawah daun. Pakai mankozeb atau karbendazim, dan atap plastik saat musim hujan.',
      'Antraknosa: bintik coklat meluas dengan massa spora jingga. Serang buah hampir masak. Pakai zineb, maneb, atau mankozeb.',
      'Karat daun: tepung merah jingga di bawah daun tua. Pakai zineb, maneb, atau sulfur.',
      'Tawon dan semut, terutama pada varietas berbiji besar: pakai perangkap feromon, jaring, atau penutup buah.'
    ],
    tips: 'Penyakit utama di Pasuruan: downy mildew dan gray mold saat hujan (November–April), serta oidium saat kemarau kering (Juli–September). Semuanya bisa ditekan dengan sanitasi dan sirkulasi udara.'
  },
  {
    step: 10, judul: 'Panen dan Pascapanen', icon: 'Panen',
    ringkas: 'Panen pagi hari, potong seluruh tandan, sisakan 5 sampai 10 ruas tangkai.',
    detail: [
      'Ciri siap panen Jupiter: buah merah kebiruan penuh, bertekstur lembut, aroma muskat tegas.',
      'Ciri siap panen varietas berbiji besar: warna pekat, rasa menyatu antara manis dan asam.',
      'Ukur Brix dengan refractometer. Jangan mengandalkan warna saja.',
      'Potong seluruh tandan dengan gunting tajam, jangan ditarik.',
      'Sisakan 5 sampai 10 ruas tangkai agar buah tidak jatuh.',
      'Cuci dengan air mengalir ditambah sedikit baking soda, lalu keringkan.',
      'Simpan di kulkas pada suhu 4 sampai 5 derajat. Daya tahan 5 sampai 14 hari.'
    ],
    tips: 'Anggur tidak matang lagi setelah dipetik. Panen saat rasanya sudah matang, bukan hanya saat warnanya bagus.'
  }
];

/* ---------- DAFTAR PUSTAKA ---------- */
const REFERENSI = [
  {
    kategori: 'Sumber Resmi Varietas',
    items: [
      'Clark, J. R. & Moore, J. N. Grapevine plant named "Jupiter". US Plant Patent USPP13309P2. University of Arkansas. https://patents.google.com/patent/USPP13309P2/en',
      'Clark, J. R. (1999). "Jupiter" Seedless Grape. HortScience 34(7): 1297–1299. American Society for Horticultural Science.',
      'University of Arkansas Division of Agriculture. Jupiter (seedless table grape) — deskripsi rilis varietas.',
      'Kraynov, V. N. (Ukraina). Ninel / Nizina-2 — hibrida kompleks (Talisman × Kishmish Archer). Deskripsi dari sumber pembibitan.'
    ]
  },
  {
    kategori: 'Varietas Unggul Nasional (Kementerian Pertanian)',
    items: [
      'Balitjestro, Balitbangtan. Deskripsi Varietas Anggur Jestro AG 86.',
      'Balitjestro, Balitbangtan. SK Pelepasan Varietas Anggur Jestro AG 60.',
      'Dinas Komunikasi dan Informatika Provinsi Jawa Timur (2021). Prabu Bestari, Anggur Probolinggo Yang Jadi Pesaing Anggur Impor.',
      'Balitbang Pertanian, Kementerian Pertanian. Deskripsi Varietas Anggur Prabu Bestari.',
      'Sukadi, Andriani, A., Harwanto, Yunimar, Tresnawati, T., Fami, A., Muhammad, F., Aprilianti, D., & Yustisyia, M. L. (2021). Budidaya Tanaman Anggur. Balai Besar Pengkajian dan Pengembangan Teknologi Pertanian.',
      'Pusat Perpustakaan dan Literasi Pertanian (2026). Anggur Tropis Indonesia: Saatnya Menguasai Pasar Domestik.'
    ]
  },
  {
    kategori: 'Penyakit dan Pengendalian',
    items: [
      'Pusat Perpustakaan dan Literasi Pertanian, Kementerian Pertanian (2024). Info Teknologi: Kenali Penyakit Utama pada Anggur.',
      'Hartantiko, I. J., Niswatin, R. K., & Setiawan, A. B. (2023). Identifikasi Gejala dan Penyakit pada Tanaman Anggur dengan Metode Forward Chaining dan Backward Chaining. Jurnal Nusantara of Engineering 6(2): 152–160.',
      'Soegito & Sidik, N. I. (1991). Hama dan Penyakit pada Tanaman Anggur, dalam Budi Daya Anggur. Repository Pertanian.',
      'Puspitasari, N. S. (2024). Pendampingan Pengendalian Fungi pada Anggur Caru. Jurnal JAMALI, Universitas Islam Indonesia.',
      'University of Kentucky Plant Pathology. Simplified Backyard Grape Spray Guide.'
    ]
  },
  {
    kategori: 'Iklim dan Agroklimat',
    items: [
      'Climate-Data.org. Bangil, Jawa Timur, Indonesia — data iklim bulanan.',
      'BMKG (2022). Buku Peta Rata-Rata Curah Hujan dan Hari Hujan Periode 1991–2020 Indonesia.',
      'Amrullah, F. Analisis Sebaran Curah Hujan Kabupaten Pasuruan 2002–2017. Universitas Brawijaya.',
      'Balai Pengkajian Teknologi Pertanian. Hubungan Curah Hujan dengan Produktivitas Apel di Kabupaten Pasuruan. Jurnal Tanaman Industri.'
    ]
  },
  {
    kategori: 'Teknik Budidaya Tropis',
    items: [
      'Lu, G., Zhang, K., Que, Y., & Li, Y. (2023). Grapevine double cropping: a magic technology. Frontiers in Plant Science 14: 1173985.',
      'Camargo, U. A. (2005). Grape Management Techniques in Tropical Regions.',
      'ISHS. On the Growing of Grapevines in the Tropics, Acta Horticulturae 662.',
      'University of Minnesota Extension. Post-Harvest Disease Management for Grapevine Downy and Powdery Mildew.'
    ]
  }
];

/* ---------- STATUS KLAIM ----------
   Transparansi: mana klaim yang didukung sumber dan mana yang masih perkiraan.
   Diberi kode agar bisa ditampilkan di tab Riset & Sumber. */
const STATUS_KLAIM = [
  { klaim: 'Jupiter dirilis University of Arkansas tahun 1998', status: 'terverifikasi', sumber: 'Paten USPP13309 + HortScience 34(7)' },
  { klaim: 'Jupiter adalah persilangan Arkansas 1258 × Arkansas 1672', status: 'terverifikasi', sumber: 'Paten USPP13309' },
  { klaim: 'Jupiter tahan pecah buah dan tahan jamur sedang–kuat', status: 'terverifikasi', sumber: 'Paten USPP13309' },
  { klaim: 'Jupiter produktif (25–29 ton/acre dalam uji Arkansas)', status: 'terverifikasi', sumber: 'HortScience 34(7): 1297–1299' },
  { klaim: 'Paten Jupiter kedaluwarsa 11 Januari 2019', status: 'terverifikasi', sumber: 'USPTO' },
  { klaim: 'Jupiter hampir tidak diserang tawon', status: 'belum terverifikasi', sumber: 'Tidak ditemukan di sumber resmi — klaim dari praktik lapangan' },
  { klaim: 'Jupiter mencapai 22–24 °Brix di Pasuruan', status: 'belum terverifikasi', sumber: 'Sumber Arkansas menyebut 21 °Brix; angka lokal belum diukur' },
  { klaim: 'Ninel adalah hibrida Talisman × Kishmish Archer', status: 'terverifikasi', sumber: 'Sumber breeder/pembibitan' },
  { klaim: 'Ninel perlu penjarangan buah', status: 'praktik lapangan', sumber: 'Konsisten dengan kebutuhan varietas bertandan berat' },
  { klaim: 'Ninel produksi 10–15 kg per pohon', status: 'belum terverifikasi', sumber: 'Angka pembibitan, tidak ada di publikasi ilmiah' },
  { klaim: 'Ninel 12–15 g per butir', status: 'belum terverifikasi', sumber: 'Angka penjual bibit' },
  { klaim: 'Musim hujan Pasuruan November–April', status: 'terverifikasi', sumber: 'Climate-Data.org (Bangil) + BMKG' },
  { klaim: 'Puncak kemarau Pasuruan Juli–Agustus (8–22 mm)', status: 'terverifikasi', sumber: 'Climate-Data.org (Bangil)' },
  { klaim: 'Petani Probolinggo memangkas produksi setelah hujan berhenti (Mei)', status: 'terverifikasi', sumber: 'Dinas Kominfo Jatim, KP Banjarsari' },
  { klaim: 'Di tropis bisa dua panen setahun', status: 'terverifikasi', sumber: 'Lu et al. (2023), Frontiers in Plant Science' },
  { klaim: 'Double cropping menaikkan hasil 10–20%', status: 'terverifikasi', sumber: 'Lu et al. (2023)' },
  { klaim: 'Jestro AG 86 bisa panen 95–100 hari setelah pangkas', status: 'terverifikasi', sumber: 'Balitjestro' },
  { klaim: 'Prabu Bestari produksi 10–30 kg/pohon, gula 20 °Brix', status: 'terverifikasi', sumber: 'Dinas Kominfo Jatim + Balitbangtan' },
  { klaim: 'Varietas unggul nasional Indonesia bersaing dengan impor', status: 'terverifikasi', sumber: 'Kementerian Pertanian (2026)' },
  { klaim: 'Dosis pupuk 20 gram/pohon per aplikasi', status: 'praktik lapangan', sumber: 'Praktik umum pekebun, belum diuji terkontrol' },
  { klaim: 'Resep media 1:1:1 pupuk kandang:sekam:tanah', status: 'praktik lapangan', sumber: 'Praktik pekebun, belum diuji terkontrol' },
  { klaim: 'Media tanam difermentasi minimal 2 minggu', status: 'praktik lapangan', sumber: 'Praktik umum' }
];

/* ---------- HARGA PASAR ANGGUR ----------
   Harga sangat fluktuatif. Setiap baris dicatat tanggal sumbernya.
   Catatan penting: harga di tingkat petani jauh lebih rendah daripada
   harga eceran. Jangan pakai harga supermarket untuk menghitung usaha tani. */
const HARGA_PASAR = [
  {
    segmen: 'Anggur impor — eceran pasar',
    contoh: 'Anggur merah & hitam Australia',
    harga: 100000, hargaMax: 125000, satuan: 'kg',
    tanggal: 'Juni 2026',
    catatan: 'Naik dari Rp80.000–100.000/kg imbas pelemahan rupiah (saat itu Rp17.944/USD).',
    sumber: 'https://www.cnnindonesia.com/ekonomi/20260610213346-92-1367696/harga-buah-impor-makin-mahal-gara-gara-rupiah-amblas'
  },
  {
    segmen: 'Anggur impor — premium',
    contoh: 'Shine Muscat',
    harga: 139000, satuan: 'kg',
    tanggal: 'Februari 2026',
    catatan: 'Kelas premium. Harga tertinggi di pasar ritel.',
    sumber: 'https://www.instagram.com/reel/DVK7nSfEx0e/'
  },
  {
    segmen: 'Anggur impor — premium',
    contoh: 'Sweet Globe, Midnight',
    harga: 119000, satuan: 'kg',
    tanggal: 'Februari 2026',
    catatan: 'Ritel modern.',
    sumber: 'https://www.instagram.com/reel/DVK7nSfEx0e/'
  },
  {
    segmen: 'Anggur impor — eceran online',
    contoh: 'Anggur merah import 500 g',
    harga: 126000, satuan: 'kg',
    tanggal: 'September 2026',
    catatan: 'Dihitung dari Rp63.000 per 500 g di marketplace.',
    sumber: 'https://www.blibli.com/jual/anggur-import'
  },
  {
    segmen: 'Anggur lokal — eceran online',
    contoh: 'Anggur lokal',
    harga: 48000, satuan: 'kg',
    tanggal: 'September 2026',
    catatan: 'Selisih dengan impor masih sekitar 2,5 kali.',
    sumber: 'https://www.blibli.com/jual/anggur-lokal'
  },
  {
    segmen: 'Anggur Bali — eceran online',
    contoh: 'Fresh Balinese Grapes',
    harga: 35900, satuan: 'kg',
    tanggal: '2026',
    catatan: 'Varietas lokal Bali, harga bersaing.',
    sumber: 'https://www.lazada.co.id/tag/harga-anggur-per-kg/'
  },
  {
    segmen: 'Anggur lokal — TINGKAT PETANI',
    contoh: 'Prabu Bestari grade A',
    harga: 15000, hargaMax: 20000, satuan: 'kg',
    tanggal: 'Studi UB',
    catatan: 'Ini harga yang benar-benar diterima petani, bukan harga pasar.',
    sumber: 'https://repository.ub.ac.id/128827/1/051100893.pdf'
  },
  {
    segmen: 'Anggur lokal — TINGKAT PETANI',
    contoh: 'Prabu Bestari grade B',
    harga: 10000, satuan: 'kg',
    tanggal: 'Studi UB',
    catatan: 'Grade B jauh lebih murah. Kualitas menentukan margin.',
    sumber: 'https://repository.ub.ac.id/128827/1/051100893.pdf'
  },
  {
    segmen: 'Anggur lokal — kebun premium',
    contoh: 'Anggur petik langsung / agrowisata',
    harga: 100000, satuan: 'kg',
    tanggal: '2025',
    catatan: 'Harga di kebun dengan model wisata petik bisa jauh lebih tinggi dari harga pasar.',
    sumber: 'https://www.instagram.com/p/DQTVSWdiY3a/'
  }
];

/* ---------- REFERENSI BIAYA USAHA TANI ANGGUR ----------
   Angka dari penelitian akademik. Gunakan sebagai acuan kasar,
   lalu sesuaikan dengan kondisi lokasi Anda. */
const BIAYA_REFERENSI = [
  {
    keterangan: 'Biaya produksi Prabu Bestari',
    nilai: 'Rp33.235.153/ha/tahun',
    lokasi: 'Kota Probolinggo',
    sumber: 'Maulidah, S. (2010). Agrise, Universitas Brawijaya',
    catatan: 'Data 2010 — nilai rupiah sudah berubah, tapi struktur biayanya masih relevan.'
  },
  {
    keterangan: 'Biaya produksi usahatani anggur',
    nilai: 'Rp34.923.417/ha/tahun',
    lokasi: 'Studi terbaru',
    sumber: 'Akbar, R. (2026). Agriwana',
    catatan: 'Angka terbaru, lebih dekat ke kondisi sekarang.'
  },
  {
    keterangan: 'Biaya per satu kali proses produksi',
    nilai: 'Rp517.677',
    lokasi: 'Desa Banjarsari, Probolinggo',
    sumber: 'Analisis kelayakan usahatani anggur Red Prince',
    catatan: 'Biaya untuk satu siklus produksi.'
  },
  {
    keterangan: 'Titik impas produksi',
    nilai: '6 kg/pohon',
    lokasi: 'Kota Probolinggo',
    sumber: 'Cakrawala Journal',
    catatan: 'Di bawah 6 kg/pohon, usaha belum balik modal.'
  },
  {
    keterangan: 'Titik impas harga (BEP)',
    nilai: 'Rp4.000/kg',
    lokasi: 'Kota Probolinggo',
    sumber: 'Cakrawala Journal',
    catatan: 'Harga jual minimum agar tidak rugi.'
  },
  {
    keterangan: 'Rasio R/C',
    nilai: '2,0',
    lokasi: 'Studi usaha anggur',
    sumber: 'Nursafira, A. (2025). MONETER, UIKA Bogor',
    catatan: 'R/C 2,0 berarti setiap Rp1 biaya menghasilkan Rp2 penerimaan — layak dijalankan.'
  }
];

/* ---------- PANDUAN VARIETAS LOKAL ----------
   Penanganan spesifik untuk varietas yang berpotensi menggantikan
   atau melengkapi Jupiter & Ninel. */
const PANDUAN_VARIETAS = [
  {
    nama: 'Jestro AG 86',
    tagline: 'Paling cepat berbuah — pilihan kalau Anda tidak sabar menunggu',
    iklim: 'Dataran rendah, dirancang untuk iklim Indonesia',
    kecepatan: 'Panen 95–100 hari setelah pangkas produksi (varietas impor 120–130 hari)',
    hasil: '9–16 kg per pohon, baik di musim hujan maupun kemarau',
    kekuatan: [
      'Genjah — paling cepat berbuah di antara varietas unggul nasional.',
      'Hasil stabil di musim hujan maupun kemarau, tidak hanya saat kering.',
      'Tandan panjang dan cita rasa anggur kuat.',
      'Berasal dari Balitjestro, jadi bibit berlabel jelas dan asal-usulnya bisa dilacak.'
    ],
    perhatian: [
      'Tetap perlu atap plastik saat puncak hujan Desember–Maret.',
      'Lakukan penjarangan buah bila tandan terlalu padat.',
      'Bibit resmi lebih aman daripada bibit tidak berlabel.'
    ],
    kapanPilih: 'Kalau Anda ingin hasil tercepat, hasil stabil sepanjang tahun, dan bibit yang jelas asalnya.'
  },
  {
    nama: 'Jestro AG 60',
    tagline: 'Tanpa biji dan renyah — untuk pasar yang suka praktis',
    iklim: 'Beradaptasi baik di dataran rendah',
    kecepatan: 'Varietas unggul nasional (genjah)',
    hasil: '10–25 kg per pohon, gula 16–19 °Brix',
    kekuatan: [
      'Tanpa biji (seedless) — tidak perlu repot, disukai konsumen modern.',
      'Daging buah krispi atau renyah, karakter yang jarang pada anggur tropis.',
      'Rasa manis segar dan jumlah biji sedikit.',
      'Dikembangkan PTPN XII sejak 2010, jadi sudah terbukti di lapangan.'
    ],
    perhatian: [
      'Kadar gula 16–19 °Brix sedikit di bawah Jupiter (21 °Brix), tapi teksturnya jadi keunggulan.',
      'Tetap butuh penjarangan buah.',
      'Pasar utama adalah konsumen ritel, bukan industri olahan.'
    ],
    kapanPilih: 'Kalau target pasar Anda konsumen rumahan yang menyukai anggur tanpa biji dan renyah.'
  },
  {
    nama: 'Prabu Bestari',
    tagline: 'Buah besar dan manis — pesaing langsung anggur impor',
    iklim: 'Tumbuh baik sampai 300 mdpl, cocok untuk Pasuruan',
    kecepatan: 'Perlu waktu lebih lama, tapi hasil per pohon besar',
    hasil: '10–30 kg per pohon, gula 20 °Brix, tandan 250–660 g',
    kekuatan: [
      'Buah besar dengan warna merah gelap — tampilannya meyakinkan di pasar.',
      'Tingkat pecah buah relatif rendah, lebih tahan saat hujan.',
      'Gula 20 °Brix, setara atau lebih tinggi dari banyak anggur impor.',
      'Sudah terbukti di Probolinggo — wilayah dengan iklim hampir sama dengan Pasuruan.'
    ],
    perhatian: [
      'Berbiji 1–3 per buah — bukan untuk pasar yang menuntut tanpa biji.',
      'Tandan rapat, jadi perlu penjarangan agar buah tidak kecil.',
      'Petani Probolinggo menunggu hujan berhenti sebelum memangkas produksi.',
      'Harga di tingkat petani hanya Rp15.000–20.000/kg (grade A), jauh di bawah harga ritel impor.'
    ],
    kapanPilih: 'Kalau Anda ingin buah besar dan manis untuk pasar lokal, dan tidak masalah dengan biji.'
  }
];
