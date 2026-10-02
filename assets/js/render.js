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
    { label: 'Mar', cls: 'hujan' }, { label: 'Apr', cls: 'semi' },
    { label: 'Mei', cls: 'kemarau' },{ label: 'Jun', cls: 'kemarau' },
    { label: 'Jul', cls: 'kemarau' },{ label: 'Agu', cls: 'panen' },
    { label: 'Sep', cls: 'panen' }, { label: 'Okt', cls: 'semi' },
    { label: 'Nov', cls: 'hujan' }, { label: 'Des', cls: 'hujan' }
  ];
  const now = new Date().getMonth() + 1;
  map.innerHTML = musim.map((m, i) => `
    <div class="cm-cell ${m.cls} ${i + 1 === now ? 'now' : ''}">
      <span class="cm-label">${m.label}</span>
    </div>`).join('') + `
    <div class="cm-legend">
      <span><i class="dot-weather hujan"></i>Hujan — fokus pencegahan penyakit</span>
      <span><i class="dot-weather semi"></i>Transisi</span>
      <span><i class="dot-weather kemarau"></i>Kemarau — fase produksi terbaik</span>
      <span><i class="dot-weather panen"></i>Jendela panen</span>
    </div>`;

  // kartu musim — mengikuti data curah hujan Pasuruan yang sebenarnya
  const mc = document.getElementById('musim-cards');
  mc.innerHTML = `
    <div class="card">
      <h4>Musim Hujan (Nov–Apr)</h4>
      <p class="muted">Puncaknya Desember–Maret, terbasah Januari (362 mm). Kelembapan tinggi dan hujan
      hampir setiap hari. Downy mildew dan gray mold aktif. Fokus: sanitasi, buang daun bawah,
      drainase, dan atap plastik. Jangan memangkas produksi di masa ini.</p>
    </div>
    <div class="card">
      <h4>Musim Kemarau (Jun–Sep)</h4>
      <p class="muted">Paling kering Juli–Agustus (Agustus hanya 8 mm). Oidium jadi ancaman utama
      karena udara kering dan panas. Ini jendela terbaik untuk pembentukan buah dan pematangan gula,
      tapi justru paling butuh air irigasi.</p>
    </div>
    <div class="card">
      <h4>Jendela Panen (Agu–Sep &amp; Des–Jan)</h4>
      <p class="muted">Dua siklus setahun bisa dicapai bila Anda memangkas dua kali:
      <b>Mei</b> (setelah hujan berhenti) untuk panen Agustus–September, dan <b>Oktober</b>
      (sebelum hujan naik) untuk panen Desember–Januari.</p>
    </div>`;
}

/* ---------- VARIETAS LOKAL & UNGGUL NASIONAL ---------- */
function renderVarietasLokal() {
  const box = document.getElementById('lokal-body');
  if (!box) return;

  box.innerHTML = VARIETAS_LOKAL.map(v => `
    <div class="card vcard">
      <div class="vcard-head">
        <h3>${v.nama}</h3>
        <span class="vcard-sub">${v.status}</span>
      </div>
      <table class="vtable">
        <tr><th>Tipe</th><td>${escapeHtml(v.tipe)}</td></tr>
        <tr><th>Asal</th><td>${escapeHtml(v.asal)}</td></tr>
        <tr><th>Keunggulan</th><td>${escapeHtml(v.keunggulan)}</td></tr>
        <tr><th>Catatan</th><td>${escapeHtml(v.catatan)}</td></tr>
      </table>
      <p class="vcard-src"><a href="${v.sumber}" target="_blank" rel="noopener">Lihat sumber →</a></p>
    </div>`).join('');
}

/* ---------- RISET & SUMBER ---------- */
function renderRiset() {
  const box = document.getElementById('riset-body');
  if (!box) return;

  // ringkasan iklim Pasuruan
  const iklimBox = document.getElementById('iklim-body');
  if (iklimBox) {
    const maks = Math.max(...IKLIM.map(b => b.hujan));
    iklimBox.innerHTML = `
      <div class="iklim-chart">
        ${IKLIM.map(b => `
          <div class="iklim-col" title="${b.nama}: ${b.hujan} mm, ${b.hari} hari hujan, RH ${b.rh}%">
            <div class="iklim-bar" style="height:${Math.max(2, (b.hujan / maks) * 100)}%"></div>
            <span class="iklim-label">${b.nama.slice(0, 3)}</span>
          </div>`).join('')}
      </div>
      <div class="table-wrap">
        <table class="cmp">
          <thead><tr><th>Bulan</th><th>Hujan (mm)</th><th>Hari hujan</th><th>Kelembapan</th><th>Status</th></tr></thead>
          <tbody>
            ${IKLIM.map(b => `<tr>
              <td>${b.nama}</td>
              <td>${b.hujan}</td>
              <td>${b.hari}</td>
              <td>${b.rh}%</td>
              <td>${b.hujan >= 100 ? 'Basah' : b.hujan >= 40 ? 'Transisi' : 'Kering'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }

  // tabel status klaim
  const label = {
    'terverifikasi': 'Terverifikasi',
    'praktik lapangan': 'Praktik lapangan',
    'belum terverifikasi': 'Belum terverifikasi'
  };
  const jumlah = { 'terverifikasi': 0, 'praktik lapangan': 0, 'belum terverifikasi': 0 };
  STATUS_KLAIM.forEach(k => jumlah[k.status]++);

  box.innerHTML = `
    <div class="lib-stats">
      <div class="lib-stat"><span class="ls-num">${jumlah['terverifikasi']}</span><span class="ls-label">klaim terverifikasi</span></div>
      <div class="lib-stat"><span class="ls-num">${jumlah['praktik lapangan']}</span><span class="ls-label">praktik lapangan</span></div>
      <div class="lib-stat"><span class="ls-num">${jumlah['belum terverifikasi']}</span><span class="ls-label">belum terverifikasi</span></div>
    </div>
    <div class="table-wrap">
      <table class="cmp klaim-table">
        <thead><tr><th>Klaim</th><th>Status</th><th>Sumber / alasan</th></tr></thead>
        <tbody>
          ${STATUS_KLAIM.map(k => `<tr>
            <td>${escapeHtml(k.klaim)}</td>
            <td><span class="klaim-badge klaim-${k.status.replace(/ /g, '-')}">${label[k.status]}</span></td>
            <td class="muted small">${escapeHtml(k.sumber)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
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

  function tampil(b) {
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
  renderVarietasLokal();
  renderKalender();
  renderPanduan();
  renderRiset();
  renderPustaka();
  initChecklist();
  initDiagnosa();
  initKalkulator();
  initPanen();
});
