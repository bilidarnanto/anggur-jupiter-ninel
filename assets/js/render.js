/* =========================================================
   RENDERER
   ========================================================= */

const FIELD_VARIETAS = [
  ['tipe', 'Tipe'], ['asal', 'Asal / Seleksi'],
  ['pematang', 'Pematangan'], ['ukuranBuah', 'Ukuran buah'],
  ['ukuranTandan', 'Ukuran tandan'], ['gula', 'Gula (Brix)'],
  ['asam', 'Asam'], ['karakter', 'Karakter khas'],
  ['ketahanan', 'Ketahanan penyakit'], ['produksi', 'Produksi'],
  ['vigor', 'Vigor'], ['potong', 'Rekomendasi pruning'],
  ['warna', 'Warna'], ['rasa', 'Rasa']
];

function renderRingkasan() {
  // peta siklus
  const map = document.getElementById('cycle-map');
  const musim = [
    { label: 'Jan', cls: 'hujan' }, { label: 'Feb', cls: 'hujan' },
    { label: 'Mar', cls: 'semi' },   { label: 'Apr', cls: 'kemarau' },
    { label: 'Mei', cls: 'kemarau' },{ label: 'Jun', cls: 'panen' },
    { label: 'Jul', cls: 'kemarau' },{ label: 'Agu', cls: 'kemarau' },
    { label: 'Sep', cls: 'semi' },   { label: 'Okt', cls: 'hujan' },
    { label: 'Nov', cls: 'panen' },  { label: 'Des', cls: 'hujan' }
  ];
  const now = new Date().getMonth() + 1;
  map.innerHTML = musim.map((m, i) => `
    <div class="cm-cell ${m.cls} ${i + 1 === now ? 'now' : ''}">
      <span class="cm-label">${m.label}</span>
    </div>`).join('') + `
    <div class="cm-legend">
      <span><i class="dot-weather hujan"></i>Hujan berat — fokus pencegahan penyakit</span>
      <span><i class="dot-weather semi"></i>Transisi</span>
      <span><i class="dot-weather kemarau"></i>Kemarau — fase produksi terbaik</span>
      <span><i class="dot-weather panen"></i>Jendela panen</span>
    </div>`;

  // kartu musim
  const mc = document.getElementById('musim-cards');
  mc.innerHTML = `
    <div class="card">
      <h4>Musim Hujan (Nov–Apr)</h4>
      <p class="muted">RH tinggi, sering hujan. Downy mildew dan gray mold aktif. Fokus: sanitasi,
      buang daun bawah, drainase, dan kontrol kelembapan. Produksi tetap berjalan tetapi risikonya tinggi.</p>
    </div>
    <div class="card">
      <h4>Musim Kemarau (Mei–Okt)</h4>
      <p class="muted">Kering dan panas. Oidium jadi ancaman utama, bisa dikendalikan dengan sulfur.
      Ini window terbaik untuk fruitset dan pem maturesan gula. Pastikan ketersediaan air irigasi.</p>
    </div>
    <div class="card">
      <h4>Jendela Panen (Jun & Nov–Des)</h4>
      <p class="muted">Dua siklus setahun dimungkinkan bila Anda memangkas dua kali:
      Februari untuk panen Juni, dan Agustus untuk panen November–Desember.</p>
    </div>`;
}

function renderProfil() {
  const box = document.getElementById('profil-cards');
  box.innerHTML = Object.values(PROFIL).map(p => `
    <div class="card vcard vcard-${p.id}">
      <div class="vcard-head">
        <h3>${p.nama}</h3>
        <span class="vcard-sub">${p.namaLain}</span>
      </div>
      <table class="vtable">
        ${FIELD_VARIETAS.filter(([k]) => p[k]).map(([k, label]) =>
          `<tr><th>${label}</th><td>${escapeHtml(p[k])}</td></tr>`).join('')}
      </table>
      <h4 class="vcard-note-title">Catatan lapangan</h4>
      <ul class="tick-list small">
        ${p.catatan.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
      </ul>
    </div>`).join('');

  // tabel perbandingan
  const t = document.getElementById('cmp-table');
  const keys = ['tipe', 'pematang', 'ukuranBuah', 'ukuranTandan', 'gula', 'asam', 'produksi', 'ketahanan', 'potong'];
  const labels = {
    tipe: 'Tipe', pematang: 'Pematangan', ukuranBuah: 'Ukuran buah',
    ukuranTandan: 'Ukuran tandan', gula: 'Gula (Brix)', asam: 'Asam',
    produksi: 'Produksi per pohon', ketahanan: 'Ketahanan penyakit', potong: 'Pruning'
  };
  t.innerHTML = `
    <thead><tr><th>Aspek</th><th>Jupiter</th><th>Ninel</th></tr></thead>
    <tbody>
      ${keys.map(k => `<tr>
        <th>${labels[k]}</th>
        <td>${escapeHtml(PROFIL.jupiter[k] || '-')}</td>
        <td>${escapeHtml(PROFIL.ninel[k] || '-')}</td>
      </tr>`).join('')}
    </tbody>`;
}

function renderKalender() {
  const nav = document.getElementById('month-nav');
  const det = document.getElementById('month-detail');
  const now = new Date().getMonth() + 1;
  let aktif = now;

  function tampil(b) {
    aktif = b.m;
    nav.querySelectorAll('.mnav').forEach(el =>
      el.classList.toggle('active', +el.dataset.m === b.m));

    const badge = b.m === now ? '<span class="cl-badge">BULAN INI</span>' : '';
    det.innerHTML = `
      <div class="month-detail">
        <div class="md-head">
          <h3>${b.nama} <span class="md-season">${b.musim}</span>${badge}</h3>
          <p class="md-char">${b.ch}</p>
        </div>
        <div class="md-tugas">
          ${b.tugas.map(t => `
            <div class="md-item">
              <div class="md-item-head">
                <h4>${t.nama}</h4>
                <span class="tag tag-${t.tag}">${t.tag}</span>
              </div>
              <p>${t.detail}</p>
            </div>`).join('')}
        </div>
      </div>`;
  }

  nav.innerHTML = BULAN.map(b =>
    `<button class="mnav ${b.m === now ? 'active' : ''}" data-m="${b.m}">${b.nama.slice(0, 3)}</button>`
  ).join('');
  nav.querySelectorAll('.mnav').forEach(el =>
    el.addEventListener('click', () => tampil(BULAN.find(b => b.m === +el.dataset.m))));

  tampil(BULAN.find(b => b.m === now));
}

function renderPanduan() {
  document.getElementById('panduan-body').innerHTML = PANDUAN.map(p => `
    <details class="step">
      <summary>
        <span class="step-num">${p.step}</span>
        <span class="step-title">${p.judul}</span>
        <span class="step-ringkas">${p.ringkas}</span>
        <span class="step-caret"></span>
      </summary>
      <div class="step-body">
        <ul>${p.detail.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul>
        ${p.tips ? `<p class="step-tip"><b>Tip:</b> ${escapeHtml(p.tips)}</p>` : ''}
      </div>
    </details>`).join('');
}

function renderPustaka() {
  document.getElementById('pustaka-body').innerHTML = REFERENSI.map(sec => `
    <div class="card ref-card">
      <h3>${sec.kategori}</h3>
      <ol class="ref-list">${sec.items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ol>
    </div>`).join('');
}

/* ---------- NAVIGASI TAB ---------- */
function initTabs() {
  const tabs = document.getElementById('tabs');
  const panels = document.querySelectorAll('.panel');

  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.tab');
    if (!btn) return;
    tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // deep link via hash
  if (location.hash) {
    const t = tabs.querySelector(`[data-tab="${location.hash.slice(1)}"]`);
    if (t) t.click();
  }
}

/* ---------- BOOT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderRingkasan();
  renderProfil();
  renderKalender();
  renderPanduan();
  renderPustaka();
  initChecklist();
  initDiagnosa();
  initKalkulator();
  initPanen();
});
