/* =========================================================
   MODUL INTERAKTIF
   - Checklist tugas per bulan (localStorage)
   - Diagnosa gejala (rule-based, forward chaining)
   - Kalkulator dosis|round & ukuran wadah
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
  { id: 'g1', teks: 'Daun bercak coklat dengan buluh putih di permukaan bawah' },
  { id: 'g2', teks: 'Serbuk putih seperti flour di permukaan atas daun' },
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
  { id: 'g13', teks: 'Tawon atau semut menggerogoh buah' },
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
   Certainty: 0.85,
    penyebab: 'Jamur Plasmopara viticola. thrives padaRH tinggi dan daun basah, terutama musim hujan November sampai April.',
    tindakan: [
      'Buang dan bakar daun yang sévère parah, jangan dikomposkan.',
      'Semprot mankozeb atau karbendazim sesuai dosis label.',
      'Pasang atap plastik atau terpal di atas baris untuk mengurangi terkena hujan.',
      'Perbaiki drainase dan kurangi kelembapangensamu.',
      'Semprot interval 7 sampai 10 hari selama musim hujan.'
    ]
  },
  {
    id: 'D2', nama: 'Oidium atau Embun Tepung',
    syarat: { g2: 5 },
    minimal: 4,
    Certainty: 0.8,
    penyebab: 'Jamur Uncinula necator. Muncul saat panas kering, terutama pergantian musim dan kemarau.',
    tindakan: [
      'Semprot sulfur 2 gram per liter atau karbendazim.',
      'Pangkas daun yang terlalu rapat untuk menambah sirkulasi udara.',
      'Hindari prednisone input nitrogen berlebihan karena memperbesar risiko.',
      'Ulangi setiap 10 sampai 14 hari.'
    ]
  },
  {
    id: 'D3', nama: 'Gray Mold (Botrytis)',
    syarat: { g3: 5, g1: 2 },
    minimal: 4,
    Certainty: 0.8,
    penyebab: 'Jamur Botrytis cinerea. Muncul saat bunga dan buah berada di lingkungan lembap tanpa aliran udara.',
    tindakan: [
      'Buang buah dan bunga yang busuk segera.',
      'Kurangi kepadatan tajuk dengan daun bawah removal.',
      'Kurangi siram langsung ke buah, siram akar saja.',
      'Semprot preventif dan gunakan atmosfer_appорт yang baik.'
    ]
  },
  {
    id: 'D4', nama: 'Black Rot',
    syarat: { g4: 5 },
    minimal: 4,
    Certainty: 0.75,
    penyebab: 'Jamur Guignardia bidwellii. Menyerang buah yang baru mulai mengeras.',
    tindakan: [
      'Buang seluruh buah attacked beserta tangkainya.',
      'Bersihkan sisa buah yang jatuh di bawah tanaman.',
      'Semprot mankozeb atau tembaga sejak fase pembungaan.',
      'Peringatan: busuk hitam dan gray mold sering muncul bersamaan.'
    ]
  },
  {
    id: 'D5', nama: 'Serangan Tungau Merah',
    syarat: { g5: 5, g6: 3 },
    minimal: 4,
    Certainty: 0.7,
    penyebab: 'Tungau Tetranychus urticae.=dead-end thrives di udara kering dan panas.',
    tindakan: [
      'Semprot bagian bawah daun dengan air bertekanan tinggi.',
      'Aplikasikan sulfur atau minyak hortikultura.',
      'Naikkan kelembapanRH dengan kabut air.',
      'Bersihkan gulma di sekitar tanaman karena menjadi inang.'
    ]
  },
  {
    id: 'D6', nama: 'Kekurangan Kalium',
    syarat: { g6: 4, g7: 3 },
    minimal: 5,
    Certainty: 0.65,
    penyebab: 'Kekurangan K sering muncul saat(load) buah tinggi. Gejala khas: tepi daun mengering seperti terbakar.',
    tindakan: [
      'Kocor KALINITRA atau NPK 0-0-60.',
      'Ulangi 2 minggu sekali sampai daun baru keluar normal.',
      'Kurangi beban buah dengan penjarangan.',
      'Tambahkan pupuke matang di sekeliling akar.'
    ]
  },
  {
    id: 'D7', nama: 'Kelebihan Nitrogen',
    syarat: { g8: 5, g11: 2 },
    minimal: 4,
    Certainty: 0.6,
    penyebab: 'Terlalu banyak N. Tanaman tumbuh terlaluvigor sehingga sulit berbuah, bunga rontok, dan risiko jamur naik.',
    tindakan: [
      'Hentikan urea dan NPK tinggi selama 3 sampai 4 minggu.',
      'Ganti ke pemupukan berkalium dan fosfor.',
      'Kurangivegetative growth dengan pruning lebih pendek.',
      'Pantau ulang setelah 2 minggu.'
    ]
  },
  {
    id: 'D8', nama: 'Kekurangan Nitrogen',
   satisfies: {},
    syarat: { g9: 5, g6: 2 },
    minimal: 4,
    Certainty: 0.6,
    penyebab: 'Ruas pendek, daun kecil, dan warna pucat menandakan kurang N.',
    tindakan: [
      'Beri NPK 16-16-16 atau urea 1_INSTIK spoon per pohon tiap 2 minggu.',
      'Perbaiki media dengan tambahan pupuke matang.',
      'Pastikan drainage baik agar akar bisa menyerap.'
    ]
  },
  {
    id: 'D9', nama: 'Kelebihan Beban Buah (Overcrop)',
    syarat: { g10: 4, g8: 3 },
    minimal: 4,
    Certainty: 0.55,
    penyebab: 'Terlalu banyak tandan dan tunas fruitful. Tanaman tidak mampu mengisi semua buah.',
    tindakan: [
      'Kurangi jumlah shoot: sisakan 1 shoot buah per node.',
      'Buang tandan kedua pada tiap shoot.',
      'Aplikasikan MKP dan KNO3 via kocor daun.',
      'Target Jupiter 1,5 sampai 2 kg per shoot, Ninel 1 sampai 1,2 kg per shoot.'
    ]
  },
  {
    id: 'D10', nama: 'Gagal fruitset (bunga rontok)',
    syarat: { g11: 5, g6: 2 },
    minimal: 4,
    Certainty: 0.6,
    penyebab: 'Bunga tidak berhasil membuahi. Penyebab: nitrogen berlebih, kelembapan ekstrem, atau musim tidak mendukung.',
    tindakan: [
      'Hentikan semua nitrogen, pindah ke MKP untuk merangsang fruit set.',
      'Jaga kelembapan 75 sampai 80 persen saat pembungaan dengan kabut halus.',
      'Kurangi beban tunascompetition saat bunga mekar.',
      'Pada Jupiter, pollinasi manual dengan kuas dapat meningkatkan hasil.'
    ]
  },
  {
    id: 'D11', nama: 'Kelembapan Berlebih (pecah buah)',
    syarat: { g12: 5 },
    minimal: 4,
    Certainty: 0.6,
    penyebab: 'Fluktuasi air tinggi setelah buah mulai mengeras. Terlalu banyak air lalu kering membuat kulit retak.',
    tindakan: [
      'Jaga penyiraman konsisten, hindari skenario kering-basah-kering.',
      'Kurangi volume air Ninel karena buahnya besar dan menyerap banyak.',
      'Tambahkan kalium untuk memperkuat dinding buah.',
      'Kurangi Aisakan hidup di sekeliling buah.'
    ]
  },
  {
    id: 'D12', nama: 'Serangan Tawan dan Semut',
    syarat: { g13: 5 },
    minimal: 4,
    Certainty: 0.7,
    penyebab: 'Buah yang matang menarik hama. Ninel yang besar lebih rentan dibanding Jupiter yang hampir kebal.',
    tindakan: [
      'Pasang perangkap feromon atau perangkap botol.',
      'Bungkuscluster dengan keranjang atau jaring.',
      'Bersihkan sisa buah yang jatuh di tanah.',
      'Kasih perangkap gula di dekat tanaman, jangan di dekat buah.'
    ]
  },
  {
    id: 'D13', nama: 'Busuk Akar',
    syarat: { g14: 5, g16: 4 },
    minimal: 5,
    Certainty: 0.7,
    penyebab: 'Genangan air di zona akar, media memadats, atau lubang drainase tersumbat.',
    tindakan: [
      'Periksa drainase, buat lubang baru atau elevate pot.',
      'Kurangi frekuensi siram selama 2 minggu.',
      'Periksa media, ganti bagian yang memadats dengan media baru.',
      'Sempan substring yang busuk denganSUCCESSENANCE.'
    ]
  },
  {
    id: 'D14', nama: 'Panen Terlambat',
    syarat: { g15: 5 },
    minimal: 4,
    Certainty: 0.7,
    penyebab: 'Jupiter tidak mengeras seperti varietas lain. Bila dibiarkan, buah mulai rontok dari tangkai.',
    tindakan: [
      'Panen tepat waktu saat Brix 20 lebih dan buah bertekstur lembut.',
      'Catat tanggal panen agar pola hari berikutnya bisa diprediksi.',
      'Panen bertahap 2 tahap jika sebagian buah sudah matang.'
    ]
  },
  {
    id: 'D15', nama: 'Bibit Belum Akar / Mati',
    syarat: { g16: 5, g14: 3 },
    minimal: 5,
    Certainty: 0.6,
    penyebab: 'Stek gagal berakar karena media propagasi terlalu kering atau suhu terlalu tinggi.',
    tindakan: [
      'Gunakan media propagasi yang lembap terus-menerus tapi jangan sampai menggenang.',
      'Naikkan kelembapan dengan wadah propagasi bertutup transparan atauFOLIA.',
      'Suhu media dijaga sekitar 25 sampai 30 derajat Celsius.',
      'Pindahkan stek ke media utama setelah akar tumbuh minimal 3 cm.'
    ]
  }
];

function jalankanDiagnosa(pilihan) {
  if (!pilihan.length) return [];
  return ATURAN.map(a => {
    let skor = 0, cocok = 0;
    for (const [g, w] of Object.entries(a.syarat || {})) {
      if (pilihan.includes(g)) { skor += w; cocok++; }
    }
    if (skor < a.minimal) return null;
    return {
      ...a,
      skor,
      keyakinan: Math.min(0.97, (skor / (a.minimal + 2)) * (a.Certainty + 0.2))
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
        <p class="diag-cause"><b>Penyebab:</b> ${h.cause ?? h.penyebab}</p>
        <p class="diag-act-title">Tindakan yang disarankan:</p>
        <ul class="diag-act">
          ${(h.tindakan || h.act || []).map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>`).join('');
  });
}

/* ---------- 3. KALKULATOR DOSIS ---------- */
const RENCANA = {
  urea:        { label: 'Urea (46% N)',        perPohon: 20,  per10L: 0,  fase: 'vegetatif' },
  npk161616:   { label: 'NPK 16-16-16',         perPohon: 20,  per10L: 0,  fase: 'vegetatif' },
  npk161620:   { label: 'NPK 16-16-20',         perPohon: 20,  per10L: 0,  fase: 'recovery' },
  npk00060:    { label: 'NPK 0-0-60 (Muriate)', perPohon: 15,  per10L: 0,  fase: 'buah' },
  mkp:         { label: 'MKP (52% P2O5)',       perPohon: 0,   per10L: 12, fase: 'generatif' },
  karate:      { label: 'KARATE PLUS BORONI',   perPohon: 0,   per10L: 24, fase: 'generatif' },
  kalinitra:   { label: 'KALINITRA (KNO3)',     perPohon: 0,   per10L: 20, fase: 'generatif' },
  pupukOrganik:{ label: 'Pupuke Matang',        perPohon: 1500, per10L: 0,  fase: 'per3bulan' }
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
      <p class="calc-note">Dosis kocor daun: ${r.label} ${r.per10L} gram per 10 liter air. Aplikasikan 2 kali: MKP lebih dulu, sisanya 3 hari kemudian.</p>`;
    } else {
      html += `<p class="calc-note">Dosis dasar: ${r.label} ${r.perPohon} gram per pohon per aplikasi. Sesuaikan jika kurang subur atau jika vigor terlalu tinggi.</p>`;
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
      { n: 'Jupiter', h: 90, cat: 'Perkiraan panen lebih cepat karena buah kecil' },
      { n: 'Ninel',  h: 110, cat: 'Lebih lama, tandan besar butuh waktu isi' }
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
    <p class="calc-note">Perkiraan ini berdasarkan siklus Configuration 90 sampai 110 hari di iklim Pasuruan.
    Selalu cek Brix dan rasa sebelum memanen, bukan hanya tanggal.</p>`;
  });
}

/* ---------- UTIL ---------- */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }
