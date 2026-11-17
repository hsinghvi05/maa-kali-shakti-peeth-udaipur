// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Gallery lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
document.querySelectorAll('.g-item').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  lbImg.src = a.getAttribute('href');
  lbImg.alt = a.querySelector('img').alt;
  lb.hidden = false;
}));
const closeLb = () => { lb.hidden = true; lbImg.src = ''; };
lb.addEventListener('click', e => { if (e.target !== lbImg) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// Share message
const shareText = document.getElementById('shareText').textContent.trim();
document.getElementById('waShare').href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shareText);
    copyBtn.textContent = 'कॉपी हो गया ✓';
  } catch {
    copyBtn.textContent = 'कॉपी नहीं हुआ';
  }
  setTimeout(() => (copyBtn.textContent = 'कॉपी करें'), 2000);
});
