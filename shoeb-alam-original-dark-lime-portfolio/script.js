// Original FIVEMINORS site interactions — retained with personal branding.
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));button.classList.add('active');const f=button.dataset.filter;document.querySelectorAll('.work-card').forEach(card=>card.hidden=f!=='all'&&card.dataset.category!==f);}));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  if (!video) return;

  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  video.play().catch(() => {
    console.log("Video autoplay blocked by browser.");
  });
});
