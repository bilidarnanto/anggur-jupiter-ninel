/* =========================================================
   DATA — Sistem Budidaya Anggur Jupiter & Ninel
   Wilayah acuan: Pasuruan / Bangil, Jawa Timur (tropis, 2 musim)
   ========================================================= */

/* ---------- PROFIL VARIETAS ---------- */
const PROFIL = {
  jupiter: {
    id: 'jupiter',
    nama: 'Jupiter',
    namaLain: 'Kishmish Jupiter · Jupiter Seedless',
    asal: 'Amerika Serikat (Arkansas, persilangan Arkansas 1258 x Arkansas 1672)',
    tipe: 'Buah meja (table grape), tanpa biji — Kishmish kelas I',
    warna: 'Merah keunguan sampai ungu tua',
    rasa: 'Sangat manis, aroma muskat tegas, daging buah juicy',
    pematang: 'Awal — sekitar 125 hari sejak berbunga. Di tropics lebih cepat, sekitar 90–110 hari',
    ukuranBuah: '3–6 gram per butir, bentuk oval',
    ukuranTandan: '300–500 gram, bentuk silinder-kerucut',
    gula: '22–24 % Brix',
    asam: '6–7 gram per liter',
    ketahanan: 'Sangat tinggi terhadap penyakit jamur; tidak diserang tawan; buah tidak mudah pecah',
    produksi: '20–30 kg per pohon, stabil setiap tahun',
    vigor: 'Kuat, mudah diperbanyakan, kompatibel baik dengan berbagai rootstock',
    potong: 'Pruning buah 10–12 mata tunas (cane pruning) untuk ukuran buah besar',
    karakter: 'Toleransi panas baik, sangat cocok untuk musim kemarau Pasuruan',
    catatan: [
      'Tidak perlu penjarangan beban buah — tanaman mengatur sendiri (self-regulating).',
      'Kelemahan: bila dibiarkan terlalu lama di pohon, buah mulai rontok dari tangkai.',
      'Butuh penyerbukan yang baik. Hasil lebih stabil di tanah yang subur dan tidak dipupuk nitrogen berlebihan.',
      'Ukuran buah kecil membuat beban buah ringan, sehingga cocok untuk pot kecil dan beginner.',
      'Rasa paling konsisten di antara dua varietas ini, dan paling aman untuk pemula.'
    ]
  },
  ninel: {
    id: 'ninel',
    nama: 'Ninel',
    namaLain: 'Nizina-2 (sinonim resmi) · Anggur impor Ukraina',
    asal: 'Ukraina, seleksi V. N. Kraynov',
    tipe: 'Buah meja (table grape), berbiji, merah keunguan',
    warna: 'Merah keunguan / crimson',
    rasa: 'Manis, lembut, aroma muskat ringan',
    pematang: 'Awal sampai menengah — 125–135 hari sejak berbunga',
    ukuranBuah: '12–15 gram per butir, sekitar 30 x 23 mm, sedikit oval',
    ukuranTandan: '600–1.500 gram. Dengan Handling yang tepat bisa mencapai 2.000–3.000 gram',
    gula: '17–18 % Brix',
    asam: '8–9 gram per liter',
    ketahanan: 'Resistensi penyakit sedang (skala 3–3,5 dari 5) — perlu pencegahan lebih aktif',
    produksi: '10–15 kg per pohon, stabil setiap tahun',
    vigor: 'Sangat kuat — harus dikendalikan agar tidak terlalu rimbun',
    potong: 'Perlu normalisasi beban buah agar tidak overcrop dan buah tetap besar',
    karakter: 'Butuh air dan nutrisi lebih banyak dari Jupiter',
    catatan: [
      'Sering diserang tawon dan semut karena ukuran buah besar — wajib dipasang perangkap atau pelindung.',
      'Penjarangan bunga wajib dilakukan agar buah tidak kecil dan tidak menggantung.',
      'Sensitif terhadap kelebihan air, media tanam harus drainase baik.',
      'Tandan bisa mencapai 3 kg, sehingga butuh lattice atau trellis yang kuat.',
      'Di pasar, bibit sering dikenal dengan nama "Nizina-2" agar mudah dibeli.'
    ]
  }
};

/* ---------- KALENDER 12 BULAN ---------- */
const BULAN = [
  {
    m: 1, nama: 'Januari', musim: 'Musim hujan',
    ch: 'Puncak hujan dan risiko penyakit tertinggi. Fokus pada pencegahan dan drainase.',
    tugas: [
      { nama: 'Cegah busuk akar', detail: 'Kurangi volume siram 30–50 persen. Pastikan lubang drainase benar-benar jalan.', tag: 'kritis' },
      { nama: 'Bersihkan tajuk', detail: 'Pangkas daun dan ranting menyentuh tanah. Beri ruang agar udara circulate.', tag: 'pangkas' },
      { nama: 'Pantau downy mildew', detail: 'Bintik kekuningan di atas daun dan buluh putih di bawah menandakan downy mildew. Semprot mankozeb.', tag: 'sakit' },
      { nama: 'Siapkan media tanam', detail: 'Fermentasi pupuke dan sekam dengan baik sebelum dipakai. Resep ada di tab Panduan.', tag: 'tanam' },
      { nama: 'Mulai stek', detail: 'Musim baik untuk stek: 15–20 cm, 2–3 mata tunas, media propagate lembap.', tag: 'perbanyakan' }
    ]
  },
  {
    m: 2, nama: 'Februari', musim: 'Musim hujan berakhir',
    ch: 'Persiapan siklus panen pertama. Musim hujan selesai, mulai transitioning.',
    tugas: [
      { nama: 'Pruning pembuahan siklus 1', detail: 'Pangkas 5–7 mata tunas (rod pruning). Target: pembungaan akhir Maret, panen akhir Juni.', tag: 'kritis' },
      { nama: 'Pupuk dasar saat pangkas', detail: '1 sengkul pupuke matang plus 1 sengkul urea per pohon agar tunas baru cepat tumbuh.', tag: 'pupuk' },
      { nama: 'Kocor MKP dan KNO3', detail: '10–14 hari setelah pangkas: MKP 12 gram, KARATE PLUS BORONI 24 gram, KALINITRA 20 gram per 10 liter air, dipecah 2 kali.', tag: 'pupuk' },
      { nama: 'Pasang atap atau terpal', detail: 'Atap outflow menahan guyuran hujan langsung ke buah, menurunkan risiko gray mold drastis.', tag: 'sakit' }
    ]
  },
  {
    m: 3, nama: 'Maret', musim: 'Awal musim kemarau',
    ch: 'Fase vegetatif ke generatif. Tanaman butuh air lebih sering.',
    tugas: [
      { nama: 'Naikkan frekuensi siram', detail: 'Siram 2 kali sehari saat panas. Ruas internode di bawah 5 cm menandakan kurang air.', tag: 'siram' },
      { nama: 'Pantau pembungaan', detail: 'Tunas bunga mulai terlihat di minggu ke 3–4. Hentikan urea, pindah ke MKP agar bunga terbentuk rapi.', tag: 'kritis' },
      { nama: 'Semprotpreventif awal', detail: 'Fungisida untuk melindungi bunga dan buah muda dari thrips dan botrytis.', tag: 'sakit' },
      { nama: 'Buang tunas liar', detail: 'Buang tunas dari pangkal dan bagian yang tidak.fmula fruits. Sisakan 2–3 shoot terkuat.', tag: 'pangkas' }
    ]
  },
  {
    m: 4, nama: 'April', musim: 'Musim kemarau',
    ch: 'Fase fruitset. Writable kapan memangkas agar buah besar.',
    tugas: [
      { nama: 'Pangkas buah muda', detail: 'Wajib untuk Ninel. Sisakan 1 tandan per shoot, buang tandan kedua dan buah yang tidak sempurna.', tag: 'kritis' },
      { nama: 'Kontrol panjang shoot', detail: 'Potong pucuk 3–5 mata saat shoot lebih dari 1,2 meter agar energiavigate ke buah.', tag: 'pangkas' },
      { nama: 'Pemupukan pembesaran buah', detail: 'Mulai━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ NPK 16-16-16 satu sendok makan per pohon tiap 2 minggu.', tag: 'pupuk' },
      { nama: 'Pasang perangkap hama', detail: 'Ninel berukuran besar sangat menarik tawon. Botol perangkap feromon dan perangkap validate di.activekan.', tag: 'hama' }
    ]
  },
  {
    m: 5, nama: 'Mei', musim: 'Musim kemarau',
    ch: 'Buah membesar. Gula mulai naik, rasa develop.',
    tugas: [
      { nama: 'Semprot oidium', detail: 'Musim panas dan kering adalah puncak powdery mildew. Sulfur 2 gram per liter atau karbendazim.', tag: 'sakit' },
      { nama: 'Jaga kondisi shoot', detail: 'Shoot masih aktif tumbuh. Jangan biarkan tumbuh tanpa kontrol berkala.', tag: 'pangkas' },
      { nama: 'Irigasi konsisten', detail: 'sekitar 4–8 liter per pot per hari, atau 20–40 liter per pohon. Jangan biarkan 100 persen kering.', tag: 'siram' },
      { nama: 'Cek Brix mingguan', detail: 'Pakai refractometer. Target Jupiter 20+ Brix, Ninel 16–17 Brix saat panen.', tag: 'panen' }
    ]
  },
  {
    m: 6, nama: 'Juni', musim: 'Musim kemarau',
    ch: 'Panen siklus 1. Panen bertahap, bukan sekaligus di tanggal yang sama.',
    tugas: [
      { nama: 'Panen siklus 1', detail: 'Jupiter: buah ungu penuh, lembut, rasa manis. Ninel: merah pekat, tidak keras, aroma muskat ringan.', tag: 'panen' },
      { nama: 'Potong seluruh tandan', detail: 'Gunting seluruh tandan, sisakan 5–10 ruas tangkai agar buah tidak jatuh.', tag: 'panen' },
      { nama: 'Pruning pasca panen', detail: 'Setelah panen pangkas 3–4 mata. Ini memicu tunas pengganti yang produktif.', tag: 'kritis' },
      { nama: 'Hitung hasil per pohon', detail: 'Catat jumlah tandan kali berat. Ini baseline untuk pengaturan musim depan.', tag: 'panen' }
    ]
  },
  {
    m: 7, nama: 'Juli', musim: 'Musim kemarau',
    ch: 'Pemulihan. Biarkan daun kembali penuh untuk mengisi energi.',
    tugas: [
      { nama: 'Pupuk nitrogen untuk pemulihan', detail: 'NPK 16-16-20 satu sendok makan per pohon tiap 2 minggu. Tambah urea bila kurang subur.', tag: 'pupuk' },
      { nama: 'Buang tunas non-fruktif', detail: 'Setelah pruning pasca panen, sisakan hanya shoot dari node yang fruitful.', tag: 'pangkas' },
      { nama: 'Waspai defoliasi dini', detail: 'Tepi daun menguning dan rontok menandakan kekurangan kalium. Tambahkan KALINITRA.', tag: 'pupuk' },
      { nama: 'Siapkan stek Juli dan Agustus', detail: 'Musim terbaik untuk stek. Simpan 4–5 stek per varietas sebagai cadangan.', tag: 'perbanyakan' }
    ]
  },
  {
    m: 8, nama: 'Agustus', musim: 'Musim kemarau',
    ch: 'Persiapan siklus 2. Sistem tajuk mulai terlihat jelas.',
    tugas: [
      { nama: 'Kontrol vigor dan kerapatan', detail: 'Jika ranting lebih dari 1,5 meter, pangkas pendek 2–3 mata untuk merapikan.', tag: 'pangkas' },
      { nama: 'Pruning siklus 2', detail: 'Akhir Agustus pangkas 7–8 mata. Sasaran panen siklus 2 di November.', tag: 'kritis' },
      { nama: 'Proteksi terakhir musim kemarau', detail: 'Fungisida untuk daun tua. Cegah defoliasi dini menjelang musim hujan.', tag: 'sakit' }
    ]
  },
  {
    m: 9, nama: 'September', musim: 'Awal musim hujan',
    ch: 'Siklus 2 mulai berbunga. Kelembapan tinggi.',
    tugas: [
      { nama: 'Jaga kelembapan 75–80 persen', detail: 'Kabut halus pagi hari, jangan menyiram pada jam siang terik.', tag: 'siram' },
      { nama: 'Proteksi botrytis', detail: 'Kelembapan tinggi bersamaan bunga adalah pemicu ledakan gray mold. Ini titik kritis.', tag: 'kritis' },
      { nama: 'Penjarangan bunga Ninel wajib', detail: 'Setelah ukuran buah sekitar 5 mm, gunting sebagian buah. Sisakan 60–80 butir per cluster.', tag: 'kritis' },
      { nama: 'Kontrol shoot ulang', detail: 'Buang shoot liar. Target kepadatan 1 shoot per satu tangkai fruitful.', tag: 'pangkas' }
    ]
  },
  {
    m: 10, nama: 'Oktober', musim: 'Musim hujan',
    ch: 'Puncak hujan kedua. Buah membesar. Waspadai busuk.',
    tugas: [
      { nama: 'Buang daun bawah', detail: 'Buang 6–8 daun paling bawah. Bentuk jubah ini menurunkan gray mold secara dramatis.', tag: 'kritis' },
      { nama: 'Pangkas daun bertumpuk', detail: 'Buang daun dalam tajuk yang saling menumpuk. Maksimal 25 persen total daun per sesi.', tag: 'pangkas' },
      { nama: 'Siram selektif dan drainase baik', detail: 'Jangan biarkan genangan lebih dari 6 jam. Gunakan raised bed setinggi 15–20 cm.', tag: 'siram' },
      { nama: 'Semprot preventif tiap 10–14 hari', detail: 'Mankozeb, tembaga, atau karbendazim. Interval pendekkan saat hujan deras.', tag: 'sakit' }
    ]
  },
  {
    m: 11, nama: 'November', musim: 'Musim hujan',
    ch: 'Buah matang, Brix naik. Rasa sudah manis tapi risiko penyakit tinggi.',
    tugas: [
      { nama: 'Cek Brix dua kali seminggu', detail: 'Jupiter 20+ Brix, Ninel 16+ Brix, atau 3 minggu setelah puncak gula.', tag: 'panen' },
      { nama: 'Lindungi tandan Ninel', detail: 'Bungkus atau keranjang preventif. Tandan 1,5 kg rentan pecah dan busuk.', tag: 'kritis' },
      { nama: 'Cegah tawon dan semut', detail: 'Perangkap feromon, larutan gula jebat, atau kain penutup. Jupiter hampir kebal, Ninel tidak.', tag: 'hama' },
      { nama: 'Atur waktu semprot', detail: 'Semprot pagi atau sore. Jangan meny protectors tepat sebelum hujan turun.', tag: 'sakit' }
    ]
  },
  {
    m: 12, nama: 'Desember', musim: 'Musim hujan',
    ch: 'Panen siklus 2 dan istirahat. Evaluasi data musim ini.',
    tugas: [
      { nama: 'Panen siklus 2', detail: 'Panen pagi saat embun sudah menguap. Potong seluruh cluster.', tag: 'panen' },
      { nama: 'Pruning akhir siklus', detail: 'Tutup siklus dengan pangkas 4–6 mata lalu diamkan sekitar seminggu.', tag: 'kritis' },
      { nama: 'Perawatan tanah', detail: 'Tambah satu karung pupuke matang dan setengah karung sekam per pohon di sekeliling akar.', tag: 'pupuk' },
      { nama: 'Evaluasi musim', detail: 'Catat hasil, Brix, penyakit, dan harga jual. Sesuaikan kalender tahun depan.', tag: 'admin' }
    ]
  }
];

/* ---------- PANDUAN STEP-BY-STEP ---------- */
const PANDUAN = [
  {
    step: 1, judul: 'Pilih Lokasi dan Penempatan', icon: 'Lokasi',
    ringkas: 'Cari tempat dengan 6 jam lebih matahari langsung dan sirkulasi udara baik.',
    detail: [
      'Butuh 6 sampai 8 jam matahari langsung setiap hari. Kurang dari itu membuat buah tidak matang, rasa masam, dan akar sensitif.',
      'Orientasi timur-barat lebih baik daripada utara-selatan. Hindari bayangan permanen bangunan.',
      'Angin membantu mencegah jamur, tetapi angin berlebihan mengeringkan buah.',
      'Jauhkan dari dinding rumah minimal 60 cm karena efek panas dari dinding.',
      'Hindari lahan yang tergenang air, terutama pada musim hujan November sampai April.'
    ],
    tips: 'Cek sepanjang satu hari penuh: catat jam berapa matahari mengenai tanaman dari pagi sampai matahari terbenam.'
  },
  {
    step: 2, judul: 'Media Tanam', icon: 'Media',
    ringkas: 'Resep kunci: satu bagian pupuke, satu bagian sekam, satu bagian tanah lempung.',
    detail: [
      'Pupukandang matang: sumber unsur hara dan bahan organik. Rasio satu banding satu.',
      'Sekam atau rice hull: aerasi dan menyimpan air, komponen paling penting untuk akar Healthy.',
      'Tanah lempung ditambah pasir kasar: menambah drainase. Tanah liat murni membuat akar sesak.',
      'Bahan opsional: arang, serabut kelapa, vermikulit.',
      'Semua bahan sebaiknya difementasi minimal 2 minggu sebelum dipakai.'
    ],
    tips: 'Praktik pembesaran batang yang umum dipakai grower Lann: pupuke dan sekam dominan, tanah liat hanya 5 sampai 10 persen.'
  },
  {
    step: 3, judul: 'Pot atau Wadah', icon: 'Wadah',
    ringkas: 'Minimal 40 liter, ideal 60 sampai 80 liter. Lubang drainase wajib ada.',
    detail: [
      'Jupiter: bisa mulai 30 sampai 40 liter, naikkan ke 60 liter saat dewasa.',
      'Ninel: wajib 60 sampai 80 liter dari awal karena tandan 1,5 kg membutuhkan akar yang banyak.',
      'Bahan yang cocok: terakota, drum plastik, atau pot semen.',
      'Isi dasar dengan batu kerikil setebal 3 sampai 5 cm sebagai lapisan drainase.',
      'Wadah harus punya kaki atau alas agar air keluar dari lubang bawah.'
    ],
    tips: 'Pot besar membuat pekerjaan lebihcols jarang di siram, dan mengurangi risiko overwatering.'
  },
  {
    step: 4, judul: 'Menanam Bibit', icon: 'Tanam',
    ringkas: 'Gali lubang dua kali ukuran pot, ganti tanah galian dengan media, tanam dalam.',
    detail: [
      'Lubang minimal satu setengah sampai dua kali diameter pot. Buang tanah galian, ganti dengan media.',
      'Tanam setinggi mungkin agar bagian batang bawah tertutup media.',
      'Padatkan dengan ringan, jangan dipatok atau ditekan keras.',
      'Siram satu ember penuh setelah tanam untuk memadatkan media.',
      'Beri naungan sementara 7 sampai 10 hari jika daun cepat layu.',
      'Label jelas dengan jenis dan tanggal tanam. Ini kunci pengarsipan data Anda.'
    ],
    tips: 'Stek lebih direkomendasikan daripada benih, karena mempertahankan karakteristik varietas secara persis.'
  },
  {
    step: 5, judul: 'Struktur dan Trellis', icon: 'Trellis',
    ringkas: 'Bangun lattice 2 meter tinggi, 1,2 meter lebar, jarak 1,5 sampai 2 meter antar tanaman.',
    detail: [
      'Lattice atau trellis: tinggi 2 meter, lebar 1 sampai 1,2 meter, dengan 3 sampai 4 tingkat kawat.',
      'Jarak tanaman: 1,5 sampai 2 meter antar baris dan 1,5 meter dalam baris. Ninel butuh lebih lebar.',
      'Ajarakan batang utama naik satu kawat, lalu sebarkan horizontal dua arah untuk sistem V.',
      'Ikat dengan pita plastic, bukan kawat langsung, karena batang muda masihrapuh.',
      'Pastikan ada cukup noda fruktif di setiap metre batang.'
    ],
    tips: 'Ninel paling produktif saat dijepit secara horizontal. Letakkan posisinya lebih tinggi dari Jupiter.'
  },
  {
    step: 6, judul: 'Pruning atau Pemangkasan', icon: 'Pruning',
    ringkas: 'Waktu pruning menentukan waktu panen. Ini keterampilan nomor satu.',
    detail: [
      'Pruning buah atau generatif: sisakan 5 sampai 8 mata tunas (rod) atau 10 sampai 12 mata (cane). Makin pendek, buah makin besar tapi jumlah total berkurang.',
      'Pruning pembesaran atau vegetatif: sisakan 2 sampai 3 mata, untuk memperbesar batang.',
      'Pruning pasca panen: pangkas 3 sampai 4 mata setelah panen, untuk memicu tunas fruktif yang kuat.',
      'Potong tepat di batas internode antara bagian hijau dan coklat.',
      'Buang tunas suckers dari pangkal setiap 2 minggu.',
      'Disincentif gunting dengan alkohol 70 persen setiap berganti tanaman.'
    ],
    tips: 'Di Pasuruan Anda bisa memangkas dua kali setahun, yaitu Februari dan Agustus, sehingga получить dua siklus panen.'
  },
  {
    step: 7, judul: 'Pemupukan', icon: 'Pupuk',
    ringkas: 'Tiga fase: vegetatif butuh nitrogen, generatif butuh fosfor, pem fruitful butuh kalium.',
    detail: [
      'Fase vegetatif untuk pembesaran batang: NPK 16-16-16 atau urea satu sendok makan per pohon tiap 2 sampai 4 minggu.',
      'Fase generatif untuk membentuk bunga: MKP 12 gram, KARATE PLUS BORONI 24 gram, KALINITRA 20 gram per 10 liter air, dipecah dua kali.',
      'Fase pembesaran buah: turunkan nitrogen, naikkan kalium dengan NPK 0-0-60 atau KALINITRA.',
      'Pupuk organik: 1 sampai 2 kilogram pupuke matang per pohon setiap 3 bulan.',
      'Penyemaan foliar: semprot permukaan daun pada pagi hari sebelum jam 9, bukan langsung ke tanah.'
    ],
    tips: 'Cek panjang ruas internode sebagai indikator: 5 sampai 12 cm normal, lebih dari 12 cm berarti kelebihan hara, kurang dari 5 cm berarti kurang hara.'
  },
  {
    step: 8, judul: 'Irigasi dan Drainase', icon: 'Air',
    ringkas: 'Musim hujan 2 sampai 3 kali seminggu, musim kemarau 1 sampai 2 kali per hari.',
    detail: [
      'Kelembapan media optimal 60 sampai 80 persen, terasa lembap tetapi tidak basah kuyup.',
      'Cuaca cerah: siram pagi dan sore. Jangan menyiram jam 12 sampai 14 karena uap air tinggi.',
      'Musim hujan: kurangi volume. Air mengendap di zona akar menyebabkan busuk akar.',
      'Selalu biarkan kelebihan air keluar. Pot harus berada di atas kaki atau alas.',
      'Kabut daun membantu menjaga kelembapan saat kemarau, tapi jangan membasahi buah 24 jam sebelum panen.'
    ],
    tips: 'Sistem tetes sederhana dari botol bekas dan selang cukup efektif untuk skala backyard saat kemarau.'
  },
  {
    step: 9, judul: 'Perlindungan Tanaman', icon: 'Proteksi',
    ringkas: 'Pencegahan lebih penting daripada PENANGANAN. Semprot preventif setiap 10 sampai 14 hari saat risiko.',
    detail: [
      'Oidium atau embun Acoustics: serbuk putih di permukaan atas daun. Sulfur 2 gram per liter atau karbendazim. Puncak di pergantian musim dan kemarau.',
      'Downy mildew: bintik kekuningan di atas dan buluh putih di bawah daun. Mankozeb, dan gunakan atap plastik saat hujan.',
      'Gray mold atau Botrytis: buah mengkerut kecoklatan. SanitasiKebun dan kurangkan kepadatan tajuk.',
      'Black rot: bercak coklat dengan pustule hitam. Buang buah정치 dan.generasiPercentage hygiene.',
      'Tungau merah: titik merah di bawah daun. Semprot air kuat atau sulfur.',
      'Tawon dan semut, terutama pada Ninel: perangkap feromon, jaring, atau penutup buah.'
    ],
    tips: 'Penyakit utama di Pasuruan adalah downy mildew dan gray mold saat hujan, serta oidium saat kemarau. Semuanya bisa dicegah dengan sanitasi dan sirkulasi udara.'
  },
  {
    step: 10, judul: 'Panen dan Pascapanen', icon: 'Panen',
    ringkas: 'Panen pagi hari, potong seluruh tandan, sisakan 5 sampai 10 ruas.',
    detail: [
      'Ciri siap panen Jupiter: buah merah keunguan penuh, bertekstur lembut, Brix 20 lebih.',
      'Ciri siap panen Ninel: merah pekat, rasa menyatu antara manis dan asam, Brix 16 sampai 18.',
      'Potong seluruh tandan dengan gunting tajam, jangan ditarik.',
      'Sisakan 5 sampai 10 ruas tangkai agar buah tidak jatuh.',
      'Cuci dengan air mengalir ditambah sedikit baking soda, lalu keringkan.',
      'Simpan di kulkas suhu 4 sampai 5 derajat. Daya tahan 5 sampai 14 hari, Jupiter lebih tahan.',
      'Hitung hasil: jumlah tandan dikali berat rata-rata.'
    ],
    tips: 'Buah anggur tidak matang lagi di pohon setelah dipetik. Panen saat rasa sudah matang, bukan hanya saat warna bagus.'
  }
];

/* ---------- DAFTAR PUSTAKA ---------- */
const REFERENSI = [
  {
    kategori: 'Buku dan Pedoman Resmi',
    items: [
      'Direktorat Jenderal Hortikultura Kementerian Pertanian. Buku Pedoman Budidaya Anggur (Vitis vinifera).',
      'Balai Penerapan Standar Instrumen Pertanian Banten. Teknologi Budidaya Tanaman Anggur (Vitis vinifera).',
      'Soegito dan Sidik, N. I. (1991). Hama dan Penyakit pada Tanaman Anggur, dalam Buku Budidaya Anggur. Repository Pertanian.',
      'Refnizuida danAlf. Agribisnis Tanaman Anggur. Jurnal ISSJ, UniversitasTrunojoyo Madura.',
      'Budidaya Anggur dalam Pot. Budiati, Terbit membacaan:${Perpusnas}.'
    ]
  },
  {
    kategori: 'Jurnal Penelitian',
    items: [
      'Historiawati, H. (2023). Perbanyakan Tanaman Anggur Ninel (Vitis vinifera L) dengan Several Grapevine Rootstock. Jurnal Vigor Universitas Tidar.',
      'Jahrudin, A. (2024). Perbandingan Kualitas Bibit Anggur On Root dan Grafted. Prosiding SINASIS Universitas Indira Gambira.',
      'Hartantiko, I. J., Niswatin, R. K., dan Setiawan, A. B. (2023). Identifikasi Gejala dan Penyakit Tanaman Anggur dengan Metode Forward dan Backward Chaining. Jurnal Nusantara of Engineering 6(2): 152-160.',
      'A Review on Grape Growing in Tropical Regions. International Journal of Agricultural Sciences.',
      'Ghiglieno, I. (2025). Evaluation of the Impact of Vine Pruning Periods on Grape. OENO One.',
      'Tanjung, D. D. (2026). Peningkatan Minat Budidaya Anggur. Jurnal Ilmu Pertanian Universitas Mataram.',
      'Puspitasari, N. S. (2024). Pendampingan Pengendalian Fungi pada Anggur Caru. Jurnalagripenal AMALI, Universitas Islam Indonesia.'
    ]
  },
  {
    kategori: 'Sumber Deskriptif Varietas',
    items: [
      'Vinograd.cc. Deskripsi Varietas Anggur Ninel (Nizina-2).',
      'Vinograd-Loza. Deskripsi Kishmish Jupiter:Deskripsi, Foto, dan Ulasan.',
      'Megasad.net. Vinograd Jupiter, Deskripsi dan Karakteristik.',
      'Sortoved.ru. Sortovod VinedFruits. Varietas Jupiter.',
      'Arah ekspansi: Ryabushin, V. N. Ninel (parthenocarpic seedless table grape).',
      'Kraynov, V. N. (Ukraine). Deskripsi resmi varietas Ninel.'
    ]
  },
  {
    kategori: 'Referensi Teknis Umum',
    items: [
      'University of Minnesota Extension. Post-Harvest Disease Management for Grapevine Downy and Powdery Mildew.',
      'University of Kentucky Plant Pathology. Simplified Backyard Grape Spray Guide.',
      'Purdue Horticulture and Family Education. Early Season Pest and Disease Control in Grapevines.',
      'University of Missouri Extension. Fruit Spray Schedules for the Homeowner.',
      'ISHS. On the Growing of Grapevines in the Tropics, Acta Horticulturae 662.',
      'Camargo, U. A. (2005). Grape Management Techniques in Tropical Regions.'
    ]
  }
];
