/* =========================================================
   MODUL INTERAKTIF
   - Checklist tugas per bulan (localStorage)
   - Diagnosa gejala (rule-based, forward chaining)
   - Kalkulator dosis pupuk & ukuran wadah
   - Kalkulator jadwal panen
   ========================================================= */

const LS_KEY = 'anggur_bilidarnanto_state_v1';

function loadState() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveState(s) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {}
}

/* ---------- 1. CHECKLIST ---------- */
function initChecklist() {
  const wrap = document.getElementById('checklist-body');
  if (!wrap) return;

  const state = loadState();
  if (!state.done) state.done = {};

  function render() {
    const now = new Date();
    const cur = now.getMonth() + 1;
    const html = BULAN.map(b => {
      const doneCount = b.tugas.filter(t => state.done[b.m + ':' + t.nama]).length;
      const pct = Math.round((doneCount / b.tugas.length) * 100);
      const isNow = b.m === cur;
      return `
      <div class="cl-item ${isNow ? 'is-now' : ''}">
        <div class="cl-head">
          <div>
            <span class="cl-bulan">${b.nama}</span>
            ${isNow ? '<span class="cl-badge">BULAN INI</span>' : ''}
            <span class="cl-musim">${b.musim}</span>
          </div>
          <div class="cl-progress">
            <span>${doneCount}/${b.tugas.length}</span>
            <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
          </div>
        </div>
        <ul class="cl-tugas">
          ${b.tugas.map(t => {
            const id = b.m + ':' + t.nama;
            const on = !!state.done[id];
            return `<li class="cl-tugas-item ${on ? 'done' : ''}">
              <label>
                <input type="checkbox" data-id="${escapeAttr(id)}" ${on ? 'checked' : ''}>
                <span class="cl-nama">${escapeHtml(t.nama)}</span>
                <span class="tag tag-${t.tag}">${t.tag}</span>
              </label>
              <p class="cl-detail">${escapeHtml(t.detail)}</p>
            </li>`;
          }).join('')}
        </ul>
      </div>`;
    }).join('');

    wrap.innerHTML = html;

    wrap.querySelectorAll('input[type=checkbox]').forEach(cb => {
      cb.addEventListener('change', () => {
        state.done[cb.dataset.id] = cb.checked;
        if (!cb.checked) delete state.done[cb.dataset.id];
        saveState(state);
        render();
      });
    });
  }

  const reset = document.getElementById('checklist-reset');
  if (reset) reset.addEventListener('click', () => {
    if (confirm('Hapus semua centang checklist?')) { state.done = {}; saveState(state); render(); }
  });

  render();
}

/* ---------- 2. DIAGNOSA ---------- */
const GEJALA = [
  { id: 'g1', teks: 'Daun bercak coklat dengan lapisan putih di permukaan bawah' },
  { id: 'g2', teks: 'Serbuk putih seperti tepung di permukaan atas daun' },
  { id: 'g3', teks: 'Buah mengkerut kecoklatan dan berbau busuk' },
  { id: 'g4', teks: 'Bercak coklat kehitaman pada buah dengan titik-titik kecil' },
  { id: 'g5', teks: 'Titik-titik merah kecil di bawah daun, daun menguning' },
  { id: 'g6', teks: 'Daun menguning dari tepi lalu rontok' },
  { id: 'g7', teks: 'Ujung daun dan pucuk mengering' },
  { id: 'g8', teks: 'Ruas internode lebih dari 12 cm, daun sangat hijau' },
  { id: 'g9', teks: 'Ruas internode kurang dari 5 cm, pertumbuhan lambat' },
  { id: 'g10', teks: 'Buah kecil-kecil, tidak membesar' },
  { id: 'g11', teks: 'Bunga rontok sebelum menjadi buah' },
  { id: 'g12', teks: 'Buah pecah atau retak setelah masak' },
  { id: 'g13', teks: 'Tawon atau semut menggerogoti buah' },
  { id: 'g14', teks: 'Batang membekas, daun layu tanpa perubahan warna' },
  { id: 'g15', teks: 'Buah rontok dari tangkai saat sudah matang' },
  { id: 'g16', teks: 'Pertumbuhan tidak sama sekali sejak ditanam' }
];

// forward chaining: skor per aturan, bobot per gejala
const ATURAN = [
  {
    id: 'D1', nama: 'Downy Mildew (bulai)',
    syarat: { g1: 5 },
    minimal: 4,
    keyakinanDasar: 0.85,
    penyebab: 'Jamur Plasmopara viticola. Berkembang pada kelembapan tinggi dan daun basah, terutama musim hujan November sampai April.',
    tindakan: [
      'Buang dan bakar daun yang terinfeksi parah, jangan dikomposkan.',
      'Semprot mankozeb atau karbendazim sesuai dosis pada label.',
      'Pasang atap plastik atau terpal di atas baris untuk mengurangi curahan hujan langsung.',
      'Perbaiki drainase dan kurangi kelembapan di sekitar tanaman.',
      'Semprot dengan interval 7 sampai 10 hari selama musim hujan.'
    ]
  },
  {
    id: 'D2', nama: 'Oidium atau Embun Tepung',
    syarat: { g2: 5 },
    minimal: 4,
    keyakinanDasar: 0.8,
    penyebab: 'Jamur Uncinula necator. Muncul saat panas kering, terutama pada pergantian musim dan musim kemarau.',
    tindakan: [
      'Semprot sulfur 2 gram per liter atau karbendazim.',
      'Pangkas daun yang terlalu rapat untuk menambah sirkulasi udara.',
      'Hindari pemberian nitrogen berlebihan karena memperbesar risiko.',
      'Ulangi setiap 10 sampai 14 hari.'
    ]
  },
  {
    id: 'D3', nama: 'Gray Mold (Botrytis)',
    syarat: { g3: 5, g1: 2 },
    minimal: 4,
    keyakinanDasar: 0.8,
    penyebab: 'Jamur Botrytis cinerea. Muncul saat bunga dan buah berada di lingkungan lembap tanpa aliran udara.',
    tindakan: [
      'Segera buang buah dan bunga yang busuk.',
      'Kurangi kepadatan tajuk dengan membuang daun bawah.',
      'Kurangi penyiraman langsung ke buah, siram ke akar saja.',
      'Semprot preventif dan jaga sirkulasi udara tetap baik.'
    ]
  },
  {
    id: 'D4', nama: 'Black Rot',
    syarat: { g4: 5 },
    minimal: 4,
    keyakinanDasar: 0.75,
    penyebab: 'Jamur Guignardia bidwellii. Menyerang buah yang baru mulai mengeras.',
    tindakan: [
      'Buang seluruh buah yang terserang beserta tangkainya.',
      'Bersihkan sisa buah yang jatuh di bawah tanaman.',
      'Semprot mankozeb atau tembaga sejak fase pembungaan.',
      'Perhatikan: black rot dan gray mold sering muncul bersamaan.'
    ]
  },
  {
    id: 'D5', nama: 'Serangan Tungau Merah',
    syarat: { g5: 5, g6: 3 },
    minimal: 4,
    keyakinanDasar: 0.7,
    penyebab: 'Tungau Tetranychus urticae. Berkembang pesat di udara kering dan panas.',
    tindakan: [
      'Semprot bagian bawah daun dengan air bertekanan tinggi.',
      'Aplikasikan sulfur atau minyak hortikultura.',
      'Naikkan kelembapan udara dengan kabut air.',
      'Bersihkan gulma di sekitar tanaman karena bisa menjadi inang.'
    ]
  },
  {
    id: 'D6', nama: 'Kekurangan Kalium',
    syarat: { g6: 4, g7: 3 },
    minimal: 5,
    keyakinanDasar: 0.65,
    penyebab: 'Kekurangan kalium sering muncul saat beban buah tinggi. Gejala khasnya: tepi daun mengering seperti terbakar.',
    tindakan: [
      'Kocor KALINITRA atau NPK 0-0-60.',
      'Ulangi setiap 2 minggu sampai daun baru keluar normal.',
      'Kurangi beban buah dengan penjarangan.',
      'Tambahkan pupuk kandang matang di sekeliling akar.'
    ]
  },
  {
    id: 'D7', nama: 'Kelebihan Nitrogen',
    syarat: { g8: 5, g11: 2 },
    minimal: 4,
    keyakinanDasar: 0.6,
    penyebab: 'Terlalu banyak nitrogen. Tanaman tumbuh terlalu vigor sehingga sulit berbuah, bunga rontok, dan risiko jamur naik.',
    tindakan: [
      'Hentikan urea dan NPK tinggi selama 3 sampai 4 minggu.',
      'Ganti ke pemupukan berkalium dan fosfor.',
      'Kurangi pertumbuhan vegetatif dengan pruning lebih pendek.',
      'Pantau ulang setelah 2 minggu.'
    ]
  },
  {
    id: 'D8', nama: 'Kekurangan Nitrogen',
    syarat: { g9: 5, g6: 2 },
    minimal: 4,
    keyakinanDasar: 0.6,
    penyebab: 'Ruas pendek, daun kecil, dan warna pucat menandakan kurang nitrogen.',
    tindakan: [
      'Beri NPK 16-16-16 atau urea satu sendok makan per pohon setiap 2 minggu.',
      'Perbaiki media dengan tambahan pupuk kandang matang.',
      'Pastikan drainase baik agar akar bisa menyerap hara.'
    ]
  },
  {
    id: 'D9', nama: 'Kelebihan Beban Buah (Overcrop)',
    syarat: { g10: 4, g8: 3 },
    minimal: 4,
    keyakinanDasar: 0.55,
    penyebab: 'Terlalu banyak tandan dan tunas buah. Tanaman tidak mampu mengisi semua buah.',
    tindakan: [
      'Kurangi jumlah tunas: sisakan satu tunas buah per mata.',
      'Buang tandan kedua pada tiap tunas.',
      'Aplikasikan MKP dan KNO3 lewat kocor daun.',
      'Target Jupiter 1,5 sampai 2 kg per tunas, Ninel 1 sampai 1,2 kg per tunas.'
    ]
  },
  {
    id: 'D10', nama: 'Gagal Pembuahan (bunga rontok)',
    syarat: { g11: 5, g6: 2 },
    minimal: 4,
    keyakinanDasar: 0.6,
    penyebab: 'Bunga tidak berhasil membuahi. Penyebabnya bisa nitrogen berlebih, kelembapan ekstrem, atau musim yang tidak mendukung.',
    tindakan: [
      'Hentikan semua nitrogen, pindah ke MKP untuk merangsang pembentukan buah.',
      'Jaga kelembapan 75 sampai 80 persen saat pembungaan dengan kabut halus.',
      'Kurangi persaingan antar tunas saat bunga mekar.',
      'Pada Jupiter, penyerbukan manual dengan kuas dapat meningkatkan hasil.'
    ]
  },
  {
    id: 'D11', nama: 'Kelembapan Berlebih (pecah buah)',
    syarat: { g12: 5 },
    minimal: 4,
    keyakinanDasar: 0.6,
    penyebab: 'Fluktuasi air yang tinggi setelah buah mulai mengeras. Terlalu banyak air lalu kering membuat kulit retak.',
    tindakan: [
      'Jaga penyiraman konsisten, hindari pola kering–basah–kering.',
      'Kurangi volume air untuk Ninel karena buahnya besar dan menyerap banyak.',
      'Tambahkan kalium untuk memperkuat dinding buah.',
      'Kurangi genangan air di sekitar tanaman.'
    ]
  },
  {
    id: 'D12', nama: 'Serangan Tawon dan Semut',
    syarat: { g13: 5 },
    minimal: 4,
    keyakinanDasar: 0.7,
    penyebab: 'Buah yang matang menarik hama. Ninel yang besar lebih rentan, sedangkan Jupiter hampir kebal.',
    tindakan: [
      'Pasang perangkap feromon atau perangkap botol.',
      'Bungkus tandan dengan keranjang atau jaring.',
      'Bersihkan sisa buah yang jatuh di tanah.',
      'Letakkan perangkap gula di dekat tanaman, jangan dekat buah.'
    ]
  },
  {
    id: 'D13', nama: 'Busuk Akar',
    syarat: { g14: 5, g16: 4 },
    minimal: 5,
    keyakinanDasar: 0.7,
    penyebab: 'Genangan air di zona akar, media memadat, atau lubang drainase tersumbat.',
    tindakan: [
      'Periksa drainase, buat lubang baru, atau tinggikan pot.',
      'Kurangi frekuensi siram selama 2 minggu.',
      'Periksa media, ganti bagian yang memadat dengan media baru.',
      'Buang bagian akar yang sudah membusuk.'
    ]
  },
  {
    id: 'D14', nama: 'Panen Terlambat',
    syarat: { g15: 5 },
    minimal: 4,
    keyakinanDasar: 0.7,
    penyebab: 'Jupiter tidak mengeras seperti varietas lain. Bila dibiarkan, buah mulai rontok dari tangkainya.',
    tindakan: [
      'Panen tepat waktu saat Brix 20 ke atas dan buah bertekstur lembut.',
      'Catat tanggal panen agar pola hari berikutnya bisa diprediksi.',
      'Panen bertahap dua kali bila sebagian buah sudah matang.'
    ]
  },
  {
    id: 'D15', nama: 'Bibit Belum Berakar / Mati',
    syarat: { g16: 5, g14: 3 },
    minimal: 5,
    keyakinanDasar: 0.6,
    penyebab: 'Stek gagal berakar karena media semai terlalu kering atau suhu terlalu tinggi.',
    tindakan: [
      'Gunakan media semai yang lembap terus-menerus, tetapi jangan sampai menggenang.',
      'Naikkan kelembapan dengan wadah semai bertutup transparan.',
      'Jaga suhu media sekitar 25 sampai 30 derajat Celsius.',
      'Pindahkan stek ke media utama setelah akar tumbuh minimal 3 cm.'
    ]
  }
];

function jalankanDiagnosa(pilihan) {
  if (!pilihan.length) return [];
  return ATURAN.map(a => {
    let skor = 0;
    for (const [g, w] of Object.entries(a.syarat || {})) {
      if (pilihan.includes(g)) skor += w;
    }
    if (skor < a.minimal) return null;
    return {
      ...a,
      skor,
      keyakinan: Math.min(0.97, (skor / (a.minimal + 2)) * (a.keyakinanDasar + 0.2))
    };
  }).filter(Boolean).sort((x, y) => y.skor - x.skor);
}

function initDiagnosa() {
  const box = document.getElementById('diag-gejala');
  const out = document.getElementById('diag-out');
  if (!box || !out) return;

  box.innerHTML = GEJALA.map(g => `
    <label class="diag-item">
      <input type="checkbox" value="${g.id}">
      <span>${g.teks}</span>
    </label>`).join('');

  box.addEventListener('change', () => {
    const dipilih = [...box.querySelectorAll('input:checked')].map(i => i.value);
    const hasil = jalankanDiagnosa(dipilih);

    if (!dipilih.length) { out.innerHTML = ''; return; }
    if (!hasil.length) {
      out.innerHTML = `<div class="diag-empty">Belum ada pola yang cocok dengan gejala yang dipilih.
        Coba pilih beberapa gejala lain, atau lihat tab Panduan untuk langkah pemeriksaan yang benar.</div>`;
      return;
    }

    out.innerHTML = hasil.map((h, i) => `
      <div class="diag-card ${i === 0 ? 'top' : ''}">
        <div class="diag-card-head">
          <h4>${i === 0 ? 'Diagnosis Teratas' : 'Kemungkinan Lain'} — ${h.nama}</h4>
          <div class="diag-conf">
            <div class="diag-conf-bar"><div style="width:${Math.round(h.keyakinan * 100)}%"></div></div>
            <span>${Math.round(h.keyakinan * 100)}%</span>
          </div>
        </div>
        <p class="diag-cause"><b>Penyebab:</b> ${h.penyebab}</p>
        <p class="diag-act-title">Tindakan yang disarankan:</p>
        <ul class="diag-act">
          ${h.tindakan.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>`).join('');
  });
}

/* ---------- 3. KALKULATOR DOSIS ---------- */
const RENCANA = {
  urea:        { label: 'Urea (46% N)',        perPohon: 20,   per10L: 0,  fase: 'vegetatif' },
  npk161616:   { label: 'NPK 16-16-16',        perPohon: 20,   per10L: 0,  fase: 'vegetatif' },
  npk161620:   { label: 'NPK 16-16-20',        perPohon: 20,   per10L: 0,  fase: 'pemulihan' },
  npk00060:    { label: 'NPK 0-0-60 (Muriate)', perPohon: 15,  per10L: 0,  fase: 'pembesaran buah' },
  mkp:         { label: 'MKP (52% P2O5)',      perPohon: 0,    per10L: 12, fase: 'generatif' },
  karate:      { label: 'KARATE PLUS BORONI',  perPohon: 0,    per10L: 24, fase: 'generatif' },
  kalinitra:   { label: 'KALINITRA (KNO3)',    perPohon: 0,    per10L: 20, fase: 'generatif' },
  pupukOrganik:{ label: 'Pupuk Kandang Matang', perPohon: 1500, per10L: 0, fase: 'tiap 3 bulan' }
};

function initKalkulator() {
  const form = document.getElementById('calc-form');
  const out = document.getElementById('calc-out');
  if (!form || !out) return;

  function hitung() {
    const n = Math.max(0, parseInt(document.getElementById('calc-jumlah').value || '0', 10));
    const jenisPupuk = document.getElementById('calc-pupuk').value;
    const dosis = parseFloat(document.getElementById('calc-dosis').value || '0');
    const liter = Math.max(0, parseFloat(document.getElementById('calc-liter').value || '0'));

    if (!n) { out.innerHTML = '<p class="calc-hint">Masukkan jumlah tanaman terlebih dahulu.</p>'; return; }

    const r = RENCANA[jenisPupuk];
    if (!r) { out.innerHTML = '<p class="calc-hint">Pilih jenis pupuk.</p>'; return; }

    let html = `<div class="calc-grid">
      <div class="calc-cell"><span class="calc-label">Jumlah tanaman</span><span class="calc-value">${n} pohon</span></div>
      <div class="calc-cell"><span class="calc-label">Pupuk</span><span class="calc-value">${r.label}</span></div>
      <div class="calc-cell"><span class="calc-label">Total kebutuhan</span><span class="calc-value">${formatGram(dosis * n)}</span></div>
    </div>`;

    if (r.per10L > 0) {
      html += `<div class="calc-grid">
        <div class="calc-cell"><span class="calc-label">Total air</span><span class="calc-value">${liter.toLocaleString('id-ID')} liter</span></div>
        <div class="calc-cell"><span class="calc-label">Per tangki 10 L</span><span class="calc-value">${formatGram(r.per10L)}</span></div>
        <div class="calc-cell"><span class="calc-label">Jumlah tangki</span><span class="calc-value">${(liter / 10).toLocaleString('id-ID', { maximumFractionDigits: 1 })}</span></div>
      </div>
      <p class="calc-note">Dosis kocor daun: ${r.label} ${r.per10L} gram per 10 liter air. Aplikasikan dua kali: MKP lebih dulu, sisanya 3 hari kemudian.</p>`;
    } else {
      html += `<p class="calc-note">Dosis dasar: ${r.label} ${r.perPohon} gram per pohon per aplikasi. Sesuaikan bila tanah kurang subur atau vigor terlalu tinggi.</p>`;
    }

    out.innerHTML = html;
  }

  form.addEventListener('input', hitung);
  form.addEventListener('change', hitung);
  hitung();
}

function formatGram(g) {
  if (g >= 1000) return (g / 1000).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + ' kg';
  return g + ' gram';
}

/* ---------- 4. KALKULATOR PANEN ---------- */
function initPanen() {
  const form = document.getElementById('panen-form');
  const out = document.getElementById('panen-out');
  if (!form || !out) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const tgl = document.getElementById('panen-tgl').value;
    if (!tgl) { out.innerHTML = '<p class="calc-hint">Pilih tanggal pruning.</p>'; return; }

    const start = new Date(tgl);
    const rows = [
      { n: 'Jupiter', h: 90, cat: 'Perkiraan panen lebih cepat karena buahnya kecil' },
      { n: 'Ninel',  h: 110, cat: 'Lebih lama, tandan besar butuh waktu untuk mengisi' }
    ];

    out.innerHTML = '<div class="calc-grid">' + rows.map(r => {
      const d = new Date(start);
      d.setDate(d.getDate() + r.h);
      return `<div class="calc-cell">
        <span class="calc-label">${r.n} (${r.h} hari)</span>
        <span class="calc-value">${d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        <span class="calc-sub">${r.cat}</span>
      </div>`;
    }).join('') + `</div>
    <p class="calc-note">Perkiraan ini berdasarkan siklus 90 sampai 110 hari di iklim Pasuruan.
    Selalu cek Brix dan rasa sebelum memanen, bukan hanya tanggal.</p>`;
  });
}

/* ---------- UTIL ---------- */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }
