/* =========================================================
   READER — pembaca internal + PDF viewer
   ========================================================= */

let BUKU_INDEX = null;   // daftar bab
let BUKU_SEDANG = null;  // bab yang aktif dibaca
const LS_BACA = 'anggur_bilidarnanto_baca_v1';

function bacaState() {
  try { return JSON.parse(localStorage.getItem(LS_BACA)) || {}; }
  catch (e) { return {}; }
}
function tulisBacaState(s) { try { localStorage.setItem(LS_BACA, JSON.stringify(s)); } catch (e) {} }

/* ---------- RENDER DAFTAR ---------- */
function renderPerpustakaan() {
  const box = document.getElementById('perpus-body');
  if (!box) return;

  const st = bacaState();
  const totalKata = BUKU_INDEX ? BUKU_INDEX.reduce((a, b) => a + b.kata, 0) : 0;

  box.innerHTML = `
    <div class="lib-stats">
      <div class="lib-stat"><span class="ls-num">${BUKU_INDEX ? BUKU_INDEX.length : 0}</span><span class="ls-label">bab dapat dibaca</span></div>
      <div class="lib-stat"><span class="ls-num">${(totalKata / 1000).toFixed(1)}k</span><span class="ls-label">kata teks penuh</span></div>
      <div class="lib-stat"><span class="ls-num">${PDF_INTERNAL.length}</span><span class="ls-label">PDF terbuka</span></div>
      <div class="lib-stat"><span class="ls-num">${TAUTAN.reduce((a, s) => a + s.items.length, 0)}</span><span class="ls-label">tautan terverifikasi</span></div>
    </div>

    <h3 class="sub-title">Manual of American Grape-Growing — baca di sini</h3>
    <p class="muted">Karya U. P. Hedrick (1908), domain publik. Buku hortikultura anggur klasik.
    Bab di bawah ini dipilih yang paling relevan untuk cultivation anggur pekarangan.
    Teks ini asli berbahasa Inggris dari abad ke-20, jadi istilah teknisnya perlu diterjemahkan
    ke dalam konteks kebun Anda.</p>

    <div class="lib-search">
      <input type="search" id="lib-q" placeholder="Cari di dalam buku, misalnya: pruning, mildew, rot, graft…" autocomplete="off">
      <div class="lib-search-hint" id="lib-hint"></div>
    </div>

    <div id="lib-search-out"></div>
    <div class="lib-list" id="lib-list"></div>

    <h3 class="sub-title">Dokumen PDF</h3>
    <p class="muted">Ditampilkan langsung di dalam halaman ini. Gunakan tombol pengontrol di pojok kiri bawah
    viewer untuk memperbesar, mencari, dan mengunduh.</p>
    <div class="pdf-list" id="pdf-list"></div>

    <h3 class="sub-title">Tautan eksternal</h3>
    <p class="muted">Semua URL di bawah diverifikasi dapat diakses HTTP 200 saat sistem ini dibuat.</p>
    <div id="tautan-body"></div>`;

  // --- daftar bab ---
  const list = box.querySelector('#lib-list');
  function gambarDaftar(filter) {
    let items = BUKU_INDEX || [];
    if (filter) {
      items = items.filter(b =>
        (b.judul + ' ' + b.id).toLowerCase().includes(filter.toLowerCase()));
    }
    list.innerHTML = items.map(b => {
      const key = 'buku-' + b.no;
      const done = st[key] ? 'done' : '';
      const pct = st[key] || 0;
      return `<div class="lib-item ${done}">
        <div class="lib-item-main">
          <div class="lib-item-head">
            <span class="lib-ch">Bab ${b.no}</span>
            <h4>${b.id}</h4>
            ${pct >= 95 ? '<span class="lib-done-badge">SELESAI</span>' : ''}
          </div>
          <p class="lib-item-en">${b.judul}</p>
          <p class="lib-item-meta">${b.kata.toLocaleString('id-ID')} kata</p>
        </div>
        <button class="btn btn-read" data-bab="${b.no}">${pct > 0 && pct < 95 ? 'Lanjutkan' : 'Baca'}</button>
      </div>`;
    }).join('') || '<p class="muted">Tidak ada bab yang cocok.</p>';

    list.querySelectorAll('[data-bab]').forEach(btn =>
      btn.addEventListener('click', () => bukaBab(btn.dataset.bab)));
  }
  gambarDaftar('');

  // --- pencarian ---
  const q = box.querySelector('#lib-q');
  const hint = box.querySelector('#lib-hint');
  const out = box.querySelector('#lib-search-out');
  let timer;

  q.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => cariFullText(q.value.trim(), out, hint), 350);
  });

  // --- PDF ---
  box.querySelector('#pdf-list').innerHTML = PDF_INTERNAL.map(d => `
    <div class="pdf-item">
      <div class="pdf-head">
        <div>
          <h4>${d.judul}</h4>
          <p class="pdf-meta">${d.penulis} · ${d.tahun} · ${d.outlet} · ${d.lisensi}</p>
          <p class="pdf-note">${d.catatan}</p>
        </div>
        <div class="pdf-actions">
          <button class="btn btn-pdf" data-pdf="${d.id}">Buka PDF</button>
          <a class="btn btn-ghost" href="${d.sumber}" target="_blank" rel="noopener">Sumber</a>
        </div>
      </div>
      <div class="pdf-view" id="pdf-${d.id}" hidden>
        <iframe src="${d.file}" title="${d.judul}" loading="lazy"></iframe>
      </div>
    </div>`).join('');

  box.querySelectorAll('[data-pdf]').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = box.querySelector('#pdf-' + btn.dataset.pdf);
      const buka = v.hasAttribute('hidden');
      if (buka) { v.removeAttribute('hidden'); btn.textContent = 'Tutup PDF'; }
      else { v.setAttribute('hidden', ''); btn.textContent = 'Buka PDF'; }
    });
  });

  // --- tautan ---
  box.querySelector('#tautan-body').innerHTML = TAUTAN.map(sec => `
    <div class="card ref-card">
      <h3>${sec.kategori}</h3>
      <ul class="ref-list ref-link">
        ${sec.items.map(i => `<li>
          <a href="${i.u}" target="_blank" rel="noopener">${i.t}</a>
          <span class="ref-n">${i.n}</span>
        </li>`).join('')}
      </ul>
    </div>`).join('');
}

/* ---------- PENCARIAN FULL TEXT ---------- */
let cacheIsi = {};
async function ambilIsi(file) {
  if (cacheIsi[file]) return cacheIsi[file];
  try {
    const r = await fetch(file);
    const t = await r.text();
    cacheIsi[file] = t;
    return t;
  } catch (e) { return ''; }
}

async function cariFullText(q, out, hint) {
  if (q.length < 3) { out.innerHTML = ''; hint.textContent = ''; return; }
  hint.textContent = 'Mencari…';

  const target = BUKU_INDEX.filter(b =>
    (b.judul + ' ' + b.id).toLowerCase().includes(q.toLowerCase()));

  const hasil = [];
  for (const b of target) {
    const isi = await ambilIsi(b.file);
    if (!isi) continue;
    const lower = isi.toLowerCase();
    const needle = q.toLowerCase();
    const pos = [];
    let i = lower.indexOf(needle);
    while (i !== -1 && pos.length < 6) { pos.push(i); i = lower.indexOf(needle, i + needle.length); }
    if (pos.length) hasil.push({ bab: b, pos, total: lower.split(needle).length - 1, isi });
  }

  const totalHit = hasil.reduce((a, h) => a + h.total, 0);
  if (!hasil.length) {
    out.innerHTML = `<div class="lib-noresult">Tidak ditemukan "${escapeHtml(q)}" di dalam buku.</div>`;
    hint.textContent = '';
    return;
  }

  hint.textContent = `${totalHit} kemunculan di ${hasil.length} bab`;
  out.innerHTML = hasil.map(h => `
    <div class="lib-result">
      <div class="lib-result-head">
        <strong>Bab ${h.bab.no} — ${h.bab.id}</strong>
        <span>${h.total} kemunculan</span>
      </div>
      ${h.pos.map(p => {
        const s = Math.max(0, p - 110), e = Math.min(h.isi.length, p + q.length + 130);
        let snip = h.isi.slice(s, e).replace(/\s+/g, ' ').trim();
        snip = escapeHtml(snip).replace(
          new RegExp(escapeRegExp(escapeHtml(q)), 'gi'),
          m => `<mark>${m}</mark>`);
        return `<p class="lib-snippet">…${snip}…</p>`;
      }).join('')}
      <button class="btn btn-ghost btn-buka-bab" data-bab="${h.bab.no}" data-cari="${escapeAttr(q)}">
        Baca bab ini
      </button>
    </div>`).join('');

  out.querySelectorAll('[data-bab]').forEach(btn =>
    btn.addEventListener('click', () => bukaBab(btn.dataset.bab, btn.dataset.cari)));
}

function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* ---------- PEMBACA BAB ---------- */
async function bukaBab(no, cari) {
  const b = (BUKU_INDEX || []).find(x => x.no === no);
  if (!b) return;

  const shell = document.getElementById('reader-shell');
  const isiEl = document.getElementById('reader-isi');
  const judulEl = document.getElementById('reader-judul');
  const subEl = document.getElementById('reader-sub');
  const posEl = document.getElementById('reader-pos');
  const bar = document.getElementById('reader-bar');
  const cariEl = document.getElementById('reader-cari');

  shell.removeAttribute('hidden');
  judulEl.textContent = `Bab ${b.no} — ${b.id}`;
  subEl.textContent = `${b.judul} · U. P. Hedrick (1908)`;
  isiEl.innerHTML = '<p class="muted">Memuat…</p>';
  shell.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const isi = await ambilIsi(b.file);
  if (!isi) { isiEl.innerHTML = '<p class="muted">Gagal memuat bab ini.</p>'; return; }

  // format: judulbab -> h3, subjudul -> h4
  let html = escapeHtml(isi);
  html = html.replace(/^##\s*(.+)$/m, '<h3>$1</h3>');
  html = html.replace(/^([A-Z][A-Z\s\.\,\-]{6,})$/m, '<h4>$1</h4>');
  html = html.split(/\n{2,}/).map(p => {
    if (/^<h[34]>/.test(p.trim())) return p;
    return `<p>${p.replace(/\n/g, ' ')}</p>`;
  }).join('');
  isiEl.innerHTML = html;

  // sorot pencarian
  if (cari) {
    const w = window.getComputedStyle(document.documentElement).getPropertyValue('--reader-size') || '16px';
    isiEl.style.setProperty('--reader-size', w);
    const walker = document.createTreeWalker(isiEl, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const needle = cari.toLowerCase();
    nodes.forEach(n => {
      if (!n.nodeValue.toLowerCase().includes(needle)) return;
      const frag = document.createDocumentFragment();
      const parts = n.nodeValue.split(new RegExp(`(${escapeRegExp(cari)})`, 'gi'));
      parts.forEach(p => {
        if (p.toLowerCase() === needle) {
          const m = document.createElement('mark');
          m.className = 'reader-hit';
          m.textContent = p;
          frag.appendChild(m);
        } else {
          frag.appendChild(document.createTextNode(p));
        }
      });
      n.parentNode.replaceChild(frag, n);
    });
    setTimeout(() => {
      const first = isiEl.querySelector('.reader-hit');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
  }

  // progress
  const wrap = document.getElementById('reader-scroll');
  function updatePos() {
    const total = isiEl.scrollHeight - wrap.clientHeight;
    const pct = total > 0 ? Math.min(100, Math.round((wrap.scrollTop / total) * 100)) : 100;
    bar.style.width = pct + '%';
    posEl.textContent = pct + '%';
    const st = bacaState();
    st['buku-' + no] = Math.max(st['buku-' + no] || 0, pct);
    tulisBacaState(st);
  }
  wrap.removeEventListener('scroll', wrap._handler || (() => {}));
  wrap._handler = updatePos;
  wrap.addEventListener('scroll', updatePos, { passive: true });
  wrap.scrollTop = 0;
  updatePos();

  // pencarian dalam bab
  const clearMarks = () => {
    isiEl.querySelectorAll('mark.reader-hit').forEach(m => {
      const t = document.createTextNode(m.textContent);
      m.parentNode.replaceChild(t, m);
    });
  };
  let ctimer;
  cariEl.oninput = () => {
    clearTimeout(ctimer);
    ctimer = setTimeout(() => {
      clearMarks();
      const q = cariEl.value.trim();
      if (q.length < 2) { posEl.textContent = posEl.dataset.base || ''; return; }
      const walker = document.createTreeWalker(isiEl, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      let n = 0;
      const needle = q.toLowerCase();
      nodes.forEach(node => {
        if (!node.nodeValue.toLowerCase().includes(needle)) return;
        const frag = document.createDocumentFragment();
        node.nodeValue.split(new RegExp(`(${escapeRegExp(q)})`, 'gi')).forEach(p => {
          if (p.toLowerCase() === needle) {
            const m = document.createElement('mark');
            m.className = 'reader-hit';
            m.textContent = p;
            frag.appendChild(m);
            n++;
          } else frag.appendChild(document.createTextNode(p));
        });
        node.parentNode.replaceChild(frag, node);
      });
      posEl.dataset.base = posEl.dataset.base || posEl.textContent;
      posEl.textContent = n ? `${n} hit` : '0 hit';
    }, 300);
  };

  // font size
  let fs = parseInt(localStorage.getItem('anggur_fs') || '16', 10);
  const applyFs = () => {
    isiEl.style.setProperty('--reader-size', fs + 'px');
    localStorage.setItem('anggur_fs', fs);
    document.getElementById('reader-fs').textContent = fs + 'px';
  };
  document.getElementById('reader-fs-minus').onclick = () => { fs = Math.max(13, fs - 1); applyFs(); };
  document.getElementById('reader-fs-plus').onclick = () => { fs = Math.min(24, fs + 1); applyFs(); };
  applyFs();
}

/* ---------- BOOT ---------- */
document.addEventListener('DOMContentLoaded', async () => {
  const el = document.getElementById('perpus-body');
  if (!el) return;
  try {
    const r = await fetch('perpustakaan/buku/index.json');
    BUKU_INDEX = await r.json();
  } catch (e) {
    BUKU_INDEX = [];
  }
  renderPerpustakaan();

  const close = document.getElementById('reader-close');
  if (close) close.onclick = () => document.getElementById('reader-shell').setAttribute('hidden', '');
});
