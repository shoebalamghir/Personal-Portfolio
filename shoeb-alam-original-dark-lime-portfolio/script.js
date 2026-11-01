
// Original FIVEMINORS site interactions — retained with personal branding.

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  if (!nav) return;

  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});


// ==========================================
// WORK FILTERS
// ==========================================

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(x => {
      x.classList.remove('active');
    });

    button.classList.add('active');

    const filter = button.dataset.filter;

    document.querySelectorAll('.work-card').forEach(card => {
      card.hidden =
        filter !== 'all' &&
        card.dataset.category !== filter;
    });
  });
});


// ==========================================
// FOOTER YEAR
// ==========================================

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// ==========================================
// HERO VIDEO PLAYBACK
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.hero-video');

  if (!video) return;

  // Playback settings
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;

  // Attempt autoplay
  const playVideo = () => {
    if (document.visibilityState === 'hidden') return;

    video.play().catch(error => {
      console.warn('Hero video playback failed:', error);
    });
  };

  // Play once video is ready
  if (video.readyState >= 2) {
    playVideo();
  } else {
    video.addEventListener('canplay', playVideo, {
      once: true
    });
  }

  // Restart if video reaches the end
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    playVideo();
  });

  // Resume when browser tab becomes visible
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && video.paused) {
      playVideo();
    }
  });

  // Log playback errors for debugging
  video.addEventListener('error', () => {
    console.error('Hero video error:', video.error);
  });
});
