'use strict';

/* ============================================================
  AIDAN YUNG — PORTFOLIO  |  scripts.js
  ────────────────────────────────────────────────────────────

  ██████╗ ██╗ ██████╗
  ██╔══██╗██║██╔═══██╗
  ██████╔╝██║██║   ██║
  ██╔══██╗██║██║   ██║
  ██████╔╝██║╚██████╔╝
  ╚═════╝ ╚═╝ ╚═════╝

  ─────────────────────────────────────────────────────────────
  QUICK EDIT GUIDE
  ─────────────────
  All content you'll regularly update is in the CONFIG object
  below. Nothing else in this file should need touching.

  ADDING PHOTOS
  ─────────────
  1. Drop image files into the matching images/ subfolder:
       images/about/          → About gallery
       images/work/disney/    → Disney gallery
       images/work/smt/       → SMT gallery  (etc.)

  2. Add the path string to the relevant photos array:
       photos: [
         "images/work/disney/existing.jpg",
         "images/work/disney/new-photo.jpg",   // ← add here
       ],

  EDITING JOB DESCRIPTIONS
  ─────────────────────────
  Find the matching work entry. Edit the description string.
  Use \n\n for paragraph breaks.

  ADDING A NEW EMPLOYER
  ──────────────────────
  Copy one of the work entries below and paste it as a new
  object inside the work array. Give it a unique id.
  ============================================================ */

const CONFIG = {

  /* ── ABOUT ──────────────────────────────────────────────── */
  about: {

    // Short lines rendered above the bold headline
    bioLines: [
      "I'm curious. I'm social.",
    ],

    // The big, bold statement
    bioHeadline: "I'm just getting started.",

    // Longer description paragraph
    bioText:
      "Blending my experience in Tech and Production, I want to " +
      "engineer tools and solutions for broadcast and streaming " +
      "and solve problems at scale.",

    // ── PHOTOS ────────────────────────────────────────────
    // Add or remove paths freely — gallery auto-adjusts.
    photos: [
      "images/about/headshot.jpg",
      "images/about/sportscenter.jpg",
      "images/about/disney-group.jpg",
      // "images/about/photo4.jpg",   ← uncomment to add more
    ],

    // ── SOCIAL LINKS ──────────────────────────────────────
    // Supported keys: linkedin | youtube | email
    // Add or remove objects freely.
    social: [
      { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/aidanyung"  },
      { key: "youtube",  label: "YouTube",  href: "https://youtube.com/@aidanyung"     },
      { key: "email",    label: "Email",    href: "mailto:aidan@example.com"            },
    ],
  },

  /* ── WORK ───────────────────────────────────────────────── */
  work: [

    {
      id:    "disney",
      label: "Disney",

      // ── DESCRIPTION ─────────────────────────────────────
      // Edit freely. \n\n = new paragraph.
      description:
        "At Disney, I learned about the distribution side of broadcasting.\n\n" +
        "Failovers, software-defined infrastructure, and digital workflows.\n\n" +
        "There, I developed an internal tool using Claude Code and Kiro, " +
        "as well as AWS cloud services and Kubernetes to deploy it.",

      // ── PHOTOS ──────────────────────────────────────────
      // Add or remove paths freely — gallery auto-adjusts.
      photos: [
        "images/work/disney/team.jpg",
        "images/work/disney/digital-center.jpg",
        "images/work/disney/sportscenter.jpg",
        "images/work/disney/disney-group.jpg",
        // "images/work/disney/another.jpg",
      ],
    },

    {
      id:    "smt",
      label: "SMT",
      description:
        "Description of your work at SMT goes here.\n\n" +
        "Add additional paragraphs as needed.\n\n" +
        "Tools, technologies, and key contributions.",
      photos: [
        "images/work/smt/photo1.jpg",
        // "images/work/smt/photo2.jpg",
      ],
    },

    {
      id:    "durham-bulls",
      label: "The Durham Bulls",
      description:
        "Description of your work with the Durham Bulls.\n\n" +
        "Add additional paragraphs as needed.",
      photos: [
        "images/work/durham-bulls/photo1.jpg",
      ],
    },

    {
      id:    "savannah-bananas",
      label: "Savannah Bananas",
      description:
        "Description of your work with the Savannah Bananas.\n\n" +
        "Add additional paragraphs as needed.",
      photos: [
        "images/work/savannah-bananas/photo1.jpg",
      ],
    },

  ],
};

/* ============================================================
   DOM HELPERS
   ============================================================ */

/** Shorthand for getElementById */
const $ = id => document.getElementById(id);

/**
 * Create a DOM element with attributes and text children.
 * @param {string} tag
 * @param {Object} attrs  — className, and any valid attribute name
 * @param {...(string|HTMLElement)} children
 */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') node.className = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    if (typeof child === 'string') node.appendChild(document.createTextNode(child));
    else if (child instanceof Node) node.appendChild(child);
  }
  return node;
}

/* ============================================================
   PAGE NAVIGATION
   ============================================================ */

const overlay  = $('t-overlay');
const allPages = document.querySelectorAll('.page');

/**
 * Animate to a new page using a clip-path circle expansion.
 * @param {string} targetId   — 'home' | 'about' | 'work'
 * @param {string} [originX]  — CSS value for circle origin X
 * @param {string} [originY]  — CSS value for circle origin Y
 */
function navigateTo(targetId, originX = '50%', originY = '50%') {
  const targetPage = $(targetId);
  if (!targetPage) return;

  // Choose overlay color by destination
  const colorMap = { about: '#564787', work: '#D5573B', home: '#101935' };
  overlay.style.background = colorMap[targetId] ?? '#101935';
  overlay.style.setProperty('--ox', originX);
  overlay.style.setProperty('--oy', originY);

  // Expand overlay (next frame so browser registers the initial state)
  requestAnimationFrame(() => overlay.classList.add('open'));

  overlay.addEventListener('transitionend', () => {
    // Swap visible page
    allPages.forEach(p => p.classList.remove('active'));
    targetPage.classList.add('active');
    window.scrollTo(0, 0);

    // Instantly collapse overlay (no transition) so the next call starts from 0%
    overlay.style.transition = 'none';
    overlay.classList.remove('open');

    // Re-enable transition after two rAF cycles (avoids flash)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => { overlay.style.transition = ''; })
    );
  }, { once: true });
}

// Back buttons (← HOME)
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () =>
    navigateTo(btn.dataset.target ?? 'home')
  );
});

/* ============================================================
   TV BARS — GLITCH + HOVER HINTS + NAVIGATION
   ============================================================ */

const tvScreen = $('tv-screen');
const tvTop    = $('tv-top');

// ── Glitch individual bars on hover ──────────────────────

tvTop.addEventListener('mouseover', e => {
  const bar = e.target.closest('.tv-bar');
  if (!bar) return;
  triggerGlitch(bar);

  // Chain-glitch a random neighbour 40% of the time for extra chaos
  if (Math.random() > 0.6) {
    const bars   = [...tvTop.querySelectorAll('.tv-bar')];
    const others = bars.filter(b => b !== bar);
    if (others.length) {
      const neighbour = others[Math.floor(Math.random() * others.length)];
      setTimeout(() => triggerGlitch(neighbour), 40 + Math.random() * 70);
    }
  }
});

function triggerGlitch(bar) {
  if (bar.classList.contains('glitch')) return;
  bar.classList.add('glitch');
  bar.addEventListener('animationend',
    () => bar.classList.remove('glitch'),
    { once: true }
  );
}

// ── Show ABOUT / WORK hint based on mouse X position ─────

let lastSide = null;

tvScreen.addEventListener('mousemove', e => {
  const { left, width } = tvScreen.getBoundingClientRect();
  const pct  = (e.clientX - left) / width;
  const side = pct < 0.5 ? 'left' : 'right';

  // On midpoint crossing: briefly glitch ALL bars
  if (lastSide && lastSide !== side) {
    tvTop.querySelectorAll('.tv-bar').forEach((bar, i) =>
      setTimeout(() => triggerGlitch(bar), i * 18)
    );
  }
  lastSide = side;

  tvScreen.classList.toggle('hover-left',  side === 'left');
  tvScreen.classList.toggle('hover-right', side === 'right');
});

tvScreen.addEventListener('mouseleave', () => {
  tvScreen.classList.remove('hover-left', 'hover-right');
  lastSide = null;
});

// ── Click navigates to About (left) or Work (right) ──────

tvScreen.addEventListener('click', e => {
  const { left, width } = tvScreen.getBoundingClientRect();
  const pct  = (e.clientX - left) / width;
  const dest = pct < 0.5 ? 'about' : 'work';
  navigateTo(dest, `${e.clientX}px`, `${e.clientY}px`);
});

// ── Keyboard support on TV screen ────────────────────────

tvScreen.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft'  || e.key === 'a') { e.preventDefault(); navigateTo('about'); }
  if (e.key === 'ArrowRight' || e.key === 'd') { e.preventDefault(); navigateTo('work');  }
  if (e.key === 'Enter' || e.key === ' ')      { e.preventDefault(); navigateTo('work');  }
});

/* ============================================================
   BUILD ABOUT PAGE
   ============================================================ */

function buildAbout() {
  const { bioLines, bioHeadline, bioText, photos, social } = CONFIG.about;

  // ── Gallery ──────────────────────────────────────────────
  const gallery = $('about-gallery');
  gallery.classList.toggle('has-many', photos.length >= 3);

  photos.forEach((src, i) => {
    const img = el('img', {
      className: 'grid-img',
      src,
      alt:     `About — photo ${i + 1}`,
      loading: 'lazy',
      role:    'listitem',
    });
    img.addEventListener('click', () => openLightbox(src, `About — photo ${i + 1}`));
    gallery.appendChild(img);
  });

  // ── Bio ───────────────────────────────────────────────────
  const bioEl = $('about-bio');

  bioLines.forEach(line =>
    bioEl.appendChild(el('p', { className: 'bio-plain' }, line))
  );
  bioEl.appendChild(el('p', { className: 'bio-headline' }, bioHeadline));
  bioEl.appendChild(el('p', { className: 'bio-body' },     bioText));

  // ── Social links ─────────────────────────────────────────
  const svgIcons = {
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.77S5.53 3.5 6.5 3.5s1.75.79 1.75 1.76S7.47 6.73 6.5 6.73zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77C14.4 7.2 21 7.02 21 12.48V19z"/></svg>`,
    youtube:  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3 3 0 0 0 2.12-2.13A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z"/></svg>`,
    email:    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  };

  const socRow = $('social-links');

  social.forEach(({ key, label, href }) => {
    const a = el('a', {
      className: 'social-link',
      href,
      target:   key !== 'email' ? '_blank' : '_self',
      rel:      'noopener noreferrer',
      'aria-label': label,
      role:     'listitem',
    });
    a.innerHTML = (svgIcons[key] ?? '') + `<span>${label}</span>`;
    socRow.appendChild(a);
  });
}

/* ============================================================
   BUILD WORK PAGE
   ============================================================ */

function buildWork() {
  const btnGroup  = $('work-buttons');
  const descEl    = $('work-description');
  const galleryEl = $('work-gallery');

  // Build employer buttons
  CONFIG.work.forEach(job => {
    const btn = el('button', {
      className:     'job-btn',
      'data-job':    job.id,
      role:          'listitem',
      'aria-pressed': 'false',
    }, job.label);

    btn.addEventListener('click', () => selectJob(job.id));
    btnGroup.appendChild(btn);
  });

  /**
   * Populate description + gallery for the selected employer.
   * @param {string} id
   */
  function selectJob(id) {
    const job = CONFIG.work.find(j => j.id === id);
    if (!job) return;

    // Update button active states
    btnGroup.querySelectorAll('.job-btn').forEach(b => {
      const isActive = b.dataset.job === id;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });

    // Render description
    descEl.innerHTML = '';
    descEl.appendChild(el('h3', {}, job.label));
    job.description.split('\n\n').forEach(para =>
      descEl.appendChild(el('p', {}, para))
    );

    // Render gallery (auto-adjusting grid)
    galleryEl.innerHTML = '';
    galleryEl.classList.toggle('has-many', job.photos.length >= 3);

    job.photos.forEach((src, i) => {
      const img = el('img', {
        className: 'grid-img',
        src,
        alt:     `${job.label} — photo ${i + 1}`,
        loading: 'lazy',
        role:    'listitem',
      });
      img.addEventListener('click', () =>
        openLightbox(src, `${job.label} — photo ${i + 1}`)
      );
      galleryEl.appendChild(img);
    });
  }

  // Load first employer by default
  if (CONFIG.work.length > 0) selectJob(CONFIG.work[0].id);
}

/* ============================================================
   LIGHTBOX
   ============================================================ */

const lightbox = $('lightbox');
const lbImg    = $('lb-img');
const lbClose  = $('lb-close');

function openLightbox(src, alt = '') {
  lbImg.src = src;
  lbImg.alt = alt;
  lightbox.classList.add('open');
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lbImg.src = '';
}

lbClose.addEventListener('click', closeLightbox);

// Click backdrop to close
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// Escape key to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

/* ============================================================
   INIT
   ============================================================ */

buildAbout();
buildWork();
