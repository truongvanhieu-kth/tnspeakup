/* TNSPEAKUP – tiện ích dùng chung. Dữ liệu lưu trong localStorage của trình duyệt (chưa có máy chủ). */
const S = {
  get(k, d) { try { const v = localStorage.getItem('tns_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('tns_' + k, JSON.stringify(v)); } catch (e) {} }
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nowStr = () => new Date().toLocaleString('vi-VN');
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
document.addEventListener('DOMContentLoaded', () => {
  const t = $('#menuToggle'), n = $('#mainNav');
  if (t && n) {
    t.addEventListener('click', () => { const o = n.classList.toggle('open'); t.setAttribute('aria-expanded', String(o)); });
    $$('a', n).forEach(a => a.addEventListener('click', () => { n.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); }));
  }
  $$('.chip[data-toggle]').forEach(c => c.addEventListener('click', () => c.classList.toggle('on')));
});
