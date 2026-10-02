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
    asal: 'Amerika Serikat — hasil persilangan Arkansas 1258 × Arkansas 1672 di Arkansas',
    tipe: 'Anggur buah meja, tanpa biji (seedless), kelas Kishmish',
    warna: 'Merah keunguan sampai ungu tua',
    rasa: 'Sangat manis, aroma muskat tegas, daging buah berair',
    pematang: 'Awal — sekitar 125 hari sejak berbunga. Di iklim tropis lebih cepat, sekitar 90–110 hari',
    ukuranBuah: '3–6 gram per butir, bentuk oval',
    ukuranTandan: '300–500 gram, bentuk silinder-kerucut',
    gula: '22–24 % Brix',
    asam: '6–7 gram per liter',
    ketahanan: 'Sangat tinggi terhadap penyakit jamur, hampir tidak diserang tawon, buah tidak mudah pecah',
    produksi: '20–30 kg per pohon, relatif stabil setiap tahun',
    vigor: 'Kuat, mudah diperbanyak, cocok disambung dengan berbagai rootstock',
    potong: 'Pruning buah 10–12 mata tunas (cane pruning) bila ingin buah besar',
    karakter: 'Toleran terhadap panas, sangat cocok untuk musim kemarau Pasuruan',
    catatan: [
      'Tidak perlu penjarangan beban buah — tanaman mengatur sendiri jumlah buahnya.',
      'Kelemahan: bila dibiarkan terlalu lama di pohon, buah mulai rontok dari tangkainya.',
      'Butuh penyerbukan yang baik. Hasil paling stabil di tanah subur dan tanpa pupuk nitrogen berlebihan.',
      'Karena buahnya kecil, bebannya ringan — cocok untuk pot kecil dan untuk pemula.',
      'Rasanya paling konsisten di antara kedua varietas ini, dan paling aman untuk pemula.'
    ]
  },
  ninel: {
    id: 'ninel',
    nama: 'Ninel',
    namaLain: 'Nizina-2 (nama resminya) · anggur impor dari Ukraina',
    asal: 'Ukraina, seleksi V. N. Kraynov',
    tipe: 'Anggur buah meja, berbiji, warna merah keunguan',
    warna: 'Merah keunguan (crimson)',
    rasa: 'Manis, lembut, aroma muskat ringan',
    pematang: 'Awal sampai menengah — 125–135 hari sejak berbunga',
    ukuranBuah: '12–15 gram per butir, sekitar 30 × 23 mm, agak oval',
    ukuranTandan: '600–1.500 gram. Dengan penanganan yang tepat bisa mencapai 2.000–3.000 gram',
    gula: '17–18 % Brix',
    asam: '8–9 gram per liter',
    ketahanan: 'Ketahanan penyakit sedang (skala 3–3,5 dari 5) — perlu pencegahan lebih aktif',
    produksi: '10–15 kg per pohon, relatif stabil setiap tahun',
    vigor: 'Sangat kuat — harus dikendalikan agar tajuk tidak terlalu rimbun',
    potong: 'Perlu penjarangan buah agar tidak kelebihan beban dan buah tetap besar',
    karakter: 'Butuh air dan nutrisi lebih banyak daripada Jupiter',
    catatan: [
      'Sering diserang tawon dan semut karena buahnya besar — wajib dipasang perangkap atau pelindung.',
      'Penjarangan bunga wajib dilakukan agar buah tidak kecil dan tandan tidak terlalu berat.',
      'Sensitif terhadap kelebihan air, jadi media tanam harus punya drainase yang baik.',
      'Tandan bisa mencapai 3 kg, sehingga butuh trellis yang kuat.',
      'Di pasaran, bibitnya sering dijual dengan nama "Nizina-2".'
    ]
  }
};

/* ---------- KALENDER 12 BULAN ---------- */
const BULAN = [
  {
    m: 1, nama: 'Januari', musim: 'Musim hujan',
    ch: 'Puncak hujan dan risiko penyakit tertinggi. Fokus pada pencegahan dan drainase.',
    tugas: [
      { nama: 'Cegah busuk akar', detail: 'Kurangi volume siram 30–50 persen. Pastikan lubang drainase benar-benar lancar.', tag: 'kritis' },
      { nama: 'Bersihkan tajuk', detail: 'Pangkas daun dan ranting yang menyentuh tanah, beri ruang agar udara bisa mengalir.', tag: 'pangkas' },
      { nama: 'Pantau downy mildew', detail: 'Bintik kekuningan di atas daun dan lapisan putih di bawahnya adalah tanda downy mildew. Semprot mankozeb.', tag: 'sakit' },
      { nama: 'Siapkan media tanam', detail: 'Fermentasi pupuk kandang dan sekam dengan matang sebelum dipakai. Resepnya ada di tab Panduan.', tag: 'tanam' },
      { nama: 'Mulai stek', detail: 'Musim yang baik untuk stek: 15–20 cm, 2–3 mata tunas, media semai yang lembap.', tag: 'perbanyakan' }
    ]
  },
  {
    m: 2, nama: 'Februari', musim: 'Musim hujan berakhir',
    ch: 'Persiapan siklus panen pertama. Hujan mulai berkurang, tanaman beralih ke fase generatif.',
    tugas: [
      { nama: 'Pruning pembuahan siklus 1', detail: 'Pangkas 5–7 mata tunas (rod pruning). Target: bunga mekar akhir Maret, panen akhir Juni.', tag: 'kritis' },
      { nama: 'Pupuk dasar saat pangkas', detail: 'Beri 1 sengkul pupuk kandang matang plus 1 sengkul urea per pohon agar tunas baru cepat tumbuh.', tag: 'pupuk' },
      { nama: 'Kocor MKP dan KNO3', detail: '10–14 hari setelah pangkas: MKP 12 gram, KARATE PLUS BORONI 24 gram, KALINITRA 20 gram per 10 liter air, dipecah dua kali.', tag: 'pupuk' },
      { nama: 'Pasang atap atau terpal', detail: 'Atap plastik menahan guyuran hujan langsung ke buah dan menurunkan risiko gray mold secara drastis.', tag: 'sakit' }
    ]
  },
  {
    m: 3, nama: 'Maret', musim: 'Awal musim kemarau',
    ch: 'Peralihan dari fase vegetatif ke generatif. Tanaman butuh air lebih sering.',
    tugas: [
      { nama: 'Naikkan frekuensi siram', detail: 'Siram dua kali sehari saat panas. Ruas internode di bawah 5 cm menandakan kurang air.', tag: 'siram' },
      { nama: 'Pantau pembungaan', detail: 'Tunas bunga mulai terlihat di minggu ke-3 sampai ke-4. Hentikan urea, pindah ke MKP agar bunga terbentuk rapi.', tag: 'kritis' },
      { nama: 'Semprot preventif awal', detail: 'Fungisida untuk melindungi bunga dan buah muda dari thrips dan botrytis.', tag: 'sakit' },
      { nama: 'Buang tunas liar', detail: 'Buang tunas dari pangkal dan bagian yang tidak berbuah. Sisakan 2–3 tunas terkuat.', tag: 'pangkas' }
    ]
  },
  {
    m: 4, nama: 'April', musim: 'Musim kemarau',
    ch: 'Fase pembentukan buah. Ini saat menentukan seberapa besar buah Anda nanti.',
    tugas: [
      { nama: 'Penjarangan buah muda', detail: 'Wajib untuk Ninel. Sisakan 1 tandan per tunas, buang tandan kedua dan buah yang tidak sempurna.', tag: 'kritis' },
      { nama: 'Kontrol panjang tunas', detail: 'Potong pucuk 3–5 mata begitu tunas lebih dari 1,2 meter agar energi tersalur ke buah.', tag: 'pangkas' },
      { nama: 'Pemupukan pembesaran buah', detail: 'Mulai NPK 16-16-16 satu sendok makan per pohon, setiap dua minggu.', tag: 'pupuk' },
      { nama: 'Pasang perangkap hama', detail: 'Ninel yang besar sangat menarik tawon. Aktifkan perangkap botol dan perangkap berferomon.', tag: 'hama' }
    ]
  },
  {
    m: 5, nama: 'Mei', musim: 'Musim kemarau',
    ch: 'Buah membesar. Kadar gula mulai naik dan rasa mulai terbentuk.',
    tugas: [
      { nama: 'Semprot oidium', detail: 'Panas kering adalah puncak powdery mildew. Pakai sulfur 2 gram per liter atau karbendazim.', tag: 'sakit' },
      { nama: 'Jaga kondisi tunas', detail: 'Tunas masih aktif tumbuh. Jangan dibiarkan memanjang tanpa kontrol berkala.', tag: 'pangkas' },
      { nama: 'Irigasi konsisten', detail: 'Sekitar 4–8 liter per pot per hari, atau 20–40 liter per pohon. Jangan sampai media kering total.', tag: 'siram' },
      { nama: 'Cek Brix mingguan', detail: 'Pakai refractometer. Target Jupiter 20+ Brix, Ninel 16–17 Brix saat panen.', tag: 'panen' }
    ]
  },
  {
    m: 6, nama: 'Juni', musim: 'Musim kemarau',
    ch: 'Panen siklus 1. Panen dilakukan bertahap, bukan sekaligus di tanggal yang sama.',
    tugas: [
      { nama: 'Panen siklus 1', detail: 'Jupiter: buah ungu penuh, lembut, rasa manis. Ninel: merah pekat, tidak keras, aroma muskat ringan.', tag: 'panen' },
      { nama: 'Potong seluruh tandan', detail: 'Gunting seluruh tandan dan sisakan 5–10 ruas tangkai agar buah tidak jatuh.', tag: 'panen' },
      { nama: 'Pruning pasca panen', detail: 'Setelah panen, pangkas 3–4 mata. Ini memicu tunas pengganti yang produktif.', tag: 'kritis' },
      { nama: 'Hitung hasil per pohon', detail: 'Catat jumlah tandan dikali beratnya. Ini jadi acuan untuk pengaturan musim depan.', tag: 'panen' }
    ]
  },
  {
    m: 7, nama: 'Juli', musim: 'Musim kemarau',
    ch: 'Masa pemulihan. Biarkan daun kembali rimbun untuk mengisi cadangan energi tanaman.',
    tugas: [
      { nama: 'Pupuk nitrogen untuk pemulihan', detail: 'NPK 16-16-20 satu sendok makan per pohon setiap dua minggu. Tambah urea bila tanah kurang subur.', tag: 'pupuk' },
      { nama: 'Buang tunas non-fruktif', detail: 'Setelah pruning pasca panen, sisakan hanya tunas yang berasal dari mata buah.', tag: 'pangkas' },
      { nama: 'Waspadai defoliasi dini', detail: 'Tepi daun menguning lalu rontok menandakan kekurangan kalium. Tambahkan KALINITRA.', tag: 'pupuk' },
      { nama: 'Siapkan stek Juli–Agustus', detail: 'Musim terbaik untuk stek. Simpan 4–5 stek per varietas sebagai cadangan.', tag: 'perbanyakan' }
    ]
  },
  {
    m: 8, nama: 'Agustus', musim: 'Musim kemarau',
    ch: 'Persiapan siklus 2. Kerangka tajuk mulai terlihat jelas.',
    tugas: [
      { nama: 'Kontrol vigor dan kerapatan', detail: 'Jika ranting lebih dari 1,5 meter, pangkas pendek 2–3 mata untuk merapikan.', tag: 'pangkas' },
      { nama: 'Pruning siklus 2', detail: 'Akhir Agustus pangkas 7–8 mata. Sasaran panen siklus 2 adalah November.', tag: 'kritis' },
      { nama: 'Proteksi terakhir musim kemarau', detail: 'Fungisida untuk melindungi daun tua dan mencegah defoliasi dini menjelang musim hujan.', tag: 'sakit' }
    ]
  },
  {
    m: 9, nama: 'September', musim: 'Awal musim hujan',
    ch: 'Siklus 2 mulai berbunga. Kelembapan udara naik.',
    tugas: [
      { nama: 'Jaga kelembapan 75–80 persen', detail: 'Kabut halus pada pagi hari. Jangan menyiram pada jam siang terik.', tag: 'siram' },
      { nama: 'Proteksi botrytis', detail: 'Kelembapan tinggi saat bunga mekar adalah pemicu ledakan gray mold. Ini titik kritis.', tag: 'kritis' },
      { nama: 'Penjarangan bunga Ninel wajib', detail: 'Setelah buah sebesar 5 mm, gunting sebagian buah. Sisakan 60–80 butir per tandan.', tag: 'kritis' },
      { nama: 'Kontrol tunas ulang', detail: 'Buang tunas liar. Target kepadatan satu tunas per satu tangkai buah.', tag: 'pangkas' }
    ]
  },
  {
    m: 10, nama: 'Oktober', musim: 'Musim hujan',
    ch: 'Puncak hujan kedua. Buah membesar, waspadai busuk.',
    tugas: [
      { nama: 'Buang daun bawah', detail: 'Buang 6–8 daun paling bawah. Tajuk yang lebih terbuka menurunkan gray mold secara dramatis.', tag: 'kritis' },
      { nama: 'Pangkas daun bertumpuk', detail: 'Buang daun di dalam tajuk yang saling menumpuk. Maksimal 25 persen total daun per sesi.', tag: 'pangkas' },
      { nama: 'Siram selektif dan jaga drainase', detail: 'Jangan biarkan air menggenang lebih dari 6 jam. Gunakan raised bed setinggi 15–20 cm.', tag: 'siram' },
      { nama: 'Semprot preventif tiap 10–14 hari', detail: 'Mankozeb, tembaga, atau karbendazim. Perpendek interval saat hujan deras.', tag: 'sakit' }
    ]
  },
  {
    m: 11, nama: 'November', musim: 'Musim hujan',
    ch: 'Buah matang dan Brix naik. Rasa sudah manis, tetapi risiko penyakit juga tinggi.',
    tugas: [
      { nama: 'Cek Brix dua kali seminggu', detail: 'Jupiter 20+ Brix, Ninel 16+ Brix, atau sekitar tiga minggu setelah puncak gula.', tag: 'panen' },
      { nama: 'Lindungi tandan Ninel', detail: 'Bungkus atau beri keranjang pelindung. Tandan 1,5 kg rentan pecah dan busuk.', tag: 'kritis' },
      { nama: 'Cegah tawon dan semut', detail: 'Perangkap feromon, larutan gula, atau kain penutup. Jupiter hampir kebal, Ninel tidak.', tag: 'hama' },
      { nama: 'Atur waktu semprot', detail: 'Semprot pagi atau sore. Jangan menyemprot tepat sebelum hujan turun.', tag: 'sakit' }
    ]
  },
  {
    m: 12, nama: 'Desember', musim: 'Musim hujan',
    ch: 'Panen siklus 2 sekaligus masa istirahat. Waktunya mengevaluasi data musim ini.',
    tugas: [
      { nama: 'Panen siklus 2', detail: 'Panen pagi hari saat embun sudah menguap. Potong seluruh tandan.', tag: 'panen' },
      { nama: 'Pruning akhir siklus', detail: 'Tutup siklus dengan pangkas 4–6 mata, lalu diamkan sekitar seminggu.', tag: 'kritis' },
      { nama: 'Perawatan tanah', detail: 'Tambahkan satu karung pupuk kandang matang dan setengah karung sekam per pohon di sekitar akar.', tag: 'pupuk' },
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
      'Hindari lahan yang tergenang air, terutama pada musim hujan November sampai April.'
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
      'Ninel: wajib 60 sampai 80 liter sejak awal karena tandan 1,5 kg membutuhkan perakaran yang banyak.',
      'Bahan yang cocok: terakota, drum plastik, atau pot semen.',
      'Isi dasar dengan batu kerikil setebal 3 sampai 5 cm sebagai lapisan drainase.',
      'Wadah harus punya kaki atau alas agar air bisa keluar dari lubang bawah.'
    ],
    tips: 'Pot yang besar membuat penyiraman lebih jarang dan menurunkan risiko overwatering.'
  },
  {
    step: 4, judul: 'Menanam Bibit', icon: 'Tanam',
    ringkas: 'Gali lubang dua kali ukuran pot, ganti tanah galian dengan media, lalu tanam dalam.',
    detail: [
      'Buat lubang minimal satu setengah sampai dua kali diameter pot. Buang tanah galian dan ganti dengan media.',
      'Tanam cukup dalam agar bagian batang bawah tertutup media.',
      'Padatkan media dengan ringan, jangan dipukul atau ditekan keras.',
      'Siram satu ember penuh setelah tanam untuk memadatkan media.',
      'Beri naungan sementara 7 sampai 10 hari jika daun cepat layu.',
      'Beri label yang jelas berisi varietas dan tanggal tanam. Ini kunci pengarsipan data Anda.'
    ],
    tips: 'Stek lebih disarankan daripada benih karena mempertahankan karakter varietas secara persis.'
  },
  {
    step: 5, judul: 'Struktur dan Trellis', icon: 'Trellis',
    ringkas: 'Bangun trellis setinggi 2 meter, selebar 1,2 meter, dengan jarak 1,5 sampai 2 meter antar tanaman.',
    detail: [
      'Trellis: tinggi 2 meter, lebar 1 sampai 1,2 meter, dengan 3 sampai 4 tingkat kawat.',
      'Jarak tanam: 1,5 sampai 2 meter antar baris dan 1,5 meter di dalam baris. Ninel butuh lebih lebar.',
      'Arahkan batang utama naik ke satu kawat, lalu sebarkan horizontal dua arah untuk sistem V.',
      'Ikat dengan pita plastik, jangan kawat langsung, karena batang muda masih rapuh.',
      'Pastikan tersedia cukup mata buah di sepanjang batang.'
    ],
    tips: 'Ninel paling produktif saat batangnya dibentangkan horizontal. Posisikan lebih tinggi daripada Jupiter.'
  },
  {
    step: 6, judul: 'Pruning atau Pemangkasan', icon: 'Pruning',
    ringkas: 'Waktu pruning menentukan waktu panen. Ini keterampilan nomor satu yang perlu dikuasai.',
    detail: [
      'Pruning buah (generatif): sisakan 5 sampai 8 mata tunas (rod) atau 10 sampai 12 mata (cane). Makin pendek, buah makin besar tetapi jumlah totalnya berkurang.',
      'Pruning pembesaran (vegetatif): sisakan 2 sampai 3 mata untuk memperbesar batang.',
      'Pruning pasca panen: pangkas 3 sampai 4 mata setelah panen untuk memicu tunas buah yang kuat.',
      'Potong tepat di batas internode antara bagian hijau dan coklat.',
      'Buang tunas liar (sucker) dari pangkal setiap 2 minggu.',
      'Sterilkan gunting dengan alkohol 70 persen setiap kali berpindah tanaman.'
    ],
    tips: 'Di Pasuruan Anda bisa memangkas dua kali setahun, yaitu Februari dan Agustus, sehingga mendapatkan dua siklus panen.'
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
      'Musim hujan: kurangi volume air. Air yang mengendap di zona akar menyebabkan busuk akar.',
      'Selalu pastikan kelebihan air bisa keluar. Pot harus berada di atas kaki atau alas.',
      'Kabut daun membantu menjaga kelembapan saat kemarau, tetapi jangan membasahi buah 24 jam sebelum panen.'
    ],
    tips: 'Sistem tetes sederhana dari botol bekas dan selang cukup efektif untuk skala pekarangan saat kemarau.'
  },
  {
    step: 9, judul: 'Perlindungan Tanaman', icon: 'Proteksi',
    ringkas: 'Pencegahan lebih penting daripada pengobatan. Semprot preventif setiap 10 sampai 14 hari saat risiko tinggi.',
    detail: [
      'Oidium (embun tepung): serbuk putih di permukaan atas daun. Pakai sulfur 2 gram per liter atau karbendazim. Puncaknya saat pergantian musim dan kemarau.',
      'Downy mildew: bintik kekuningan di atas dan lapisan putih di bawah daun. Pakai mankozeb dan gunakan atap plastik saat hujan.',
      'Gray mold (Botrytis): buah mengkerut kecoklatan. Jaga sanitasi kebun dan kurangi kepadatan tajuk.',
      'Black rot: bercak coklat dengan bintik hitam. Buang buah yang terinfeksi dan jaga kebersihan kebun.',
      'Tungau merah: titik merah kecil di bawah daun. Semprot air bertekanan atau sulfur.',
      'Tawon dan semut, terutama pada Ninel: pakai perangkap feromon, jaring, atau penutup buah.'
    ],
    tips: 'Penyakit utama di Pasuruan adalah downy mildew dan gray mold saat hujan, serta oidium saat kemarau. Semuanya bisa ditekan dengan sanitasi dan sirkulasi udara.'
  },
  {
    step: 10, judul: 'Panen dan Pascapanen', icon: 'Panen',
    ringkas: 'Panen pagi hari, potong seluruh tandan, sisakan 5 sampai 10 ruas tangkai.',
    detail: [
      'Ciri siap panen Jupiter: buah merah keunguan penuh, bertekstur lembut, Brix 20 ke atas.',
      'Ciri siap panen Ninel: merah pekat, rasa menyatu antara manis dan asam, Brix 16 sampai 18.',
      'Potong seluruh tandan dengan gunting tajam, jangan ditarik.',
      'Sisakan 5 sampai 10 ruas tangkai agar buah tidak jatuh.',
      'Cuci dengan air mengalir ditambah sedikit baking soda, lalu keringkan.',
      'Simpan di kulkas pada suhu 4 sampai 5 derajat. Daya tahan 5 sampai 14 hari, Jupiter lebih tahan.',
      'Hitung hasil: jumlah tandan dikali berat rata-rata.'
    ],
    tips: 'Anggur tidak matang lagi setelah dipetik. Panen saat rasanya sudah matang, bukan hanya saat warnanya bagus.'
  }
];

/* ---------- DAFTAR PUSTAKA ---------- */
const REFERENSI = [
  {
    kategori: 'Buku dan Pedoman Resmi',
    items: [
      'Direktorat Jenderal Hortikultura, Kementerian Pertanian. Buku Pedoman Budidaya Anggur (Vitis vinifera).',
      'Balai Penerapan Standar Instrumen Pertanian Banten. Teknologi Budidaya Tanaman Anggur (Vitis vinifera).',
      'Soegito dan Sidik, N. I. (1991). Hama dan Penyakit pada Tanaman Anggur, dalam Buku Budidaya Anggur. Repository Pertanian.',
      'Refnizuida dan Alf. Agribisnis Tanaman Anggur. Jurnal ISSJ, Universitas Trunojoyo Madura.',
      'Budiati. Budidaya Anggur dalam Pot. Penerbit Perpusnas.'
    ]
  },
  {
    kategori: 'Jurnal Penelitian',
    items: [
      'Historiawati, H. (2023). Perbanyakan Tanaman Anggur Ninel (Vitis vinifera L) dengan Beberapa Grapevine Rootstock. Jurnal Vigor, Universitas Tidar.',
      'Jahrudin, A. (2024). Perbandingan Kualitas Bibit Anggur On Root dan Grafted. Prosiding SINASIS, Universitas Indira Ganesha.',
      'Hartantiko, I. J., Niswatin, R. K., dan Setiawan, A. B. (2023). Identifikasi Gejala dan Penyakit Tanaman Anggur dengan Metode Forward dan Backward Chaining. Jurnal Nusantara of Engineering 6(2): 152–160.',
      'A Review on Grape Growing in Tropical Regions. International Journal of Agricultural Sciences.',
      'Ghiglieno, I. (2025). Evaluation of the Impact of Vine Pruning Periods on Grape. OENO One.',
      'Tanjung, D. D. (2026). Peningkatan Minat Budidaya Anggur. Jurnal Ilmu Pertanian, Universitas Mataram.',
      'Puspitasari, N. S. (2024). Pendampingan Pengendalian Fungi pada Anggur Caru. Jurnal JAMALI, Universitas Islam Indonesia.'
    ]
  },
  {
    kategori: 'Sumber Deskriptif Varietas',
    items: [
      'Vinograd.cc. Deskripsi Varietas Anggur Ninel (Nizina-2).',
      'Vinograd-Loza. Deskripsi Kishmish Jupiter: Deskripsi, Foto, dan Ulasan.',
      'Megasad.net. Vinograd Jupiter, Deskripsi dan Karakteristik.',
      'Sortoved.ru. Varietas Jupiter.',
      'Ryabushin, V. N. Ninel (anggur meja tanpa biji partenokarpi).',
      'Kraynov, V. N. (Ukraina). Deskripsi resmi varietas Ninel.'
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
