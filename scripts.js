'use strict';

/* ============================================================
AIDAN YUNG — PORTFOLIO | scripts.js
────────────────────────────────────────────────────────────
QUICK EDIT GUIDE
─────────────────
All content you'll regularly update is in the CONFIG object
below. Nothing else in this file should need touching.

ADDING PHOTOS
─────────────
Drop image files into the matching images/ subfolder, then
add the path string to the relevant photos array.
For captions, use { src: "path", caption: "Caption text" }.
Existing string paths continue to work without captions.

ADDING YOUTUBE VIDEOS
─────────────────────
Add { id: "VIDEO_ID", title: "Video title" } to the
matching videos array. The ID is the value after v= in a
YouTube watch URL, or after youtu.be/ in a short URL.
Optionally add start: SECONDS to begin playback at that time.

ADDING YOUTUBE VIDEOS
─────────────────────
Add { id: "VIDEO_ID", title: "Video title" } to the
matching videos array. The ID is the value after v= in a
YouTube watch URL, or after youtu.be/ in a short URL.

EDITING JOB DESCRIPTIONS
─────────────────────────
Find the matching work entry. Edit the description string.
Use \n\n for paragraph breaks.

ADDING A NEW EMPLOYER
──────────────────────
Copy one work entry object, paste it into the work array,
and give it a unique id.
============================================================ */

const CONFIG = {

/* ── ABOUT ──────────────────────────────────────────────── */
about: {
bioLines: ["I'm capable. I'm flexible."],
bioHeadline: "I'm just getting started.",
bioText:
"I'm a student at UNC-Chapel Hill majoring in Computer Science and Journalism. I got my start in broadcast in high school and became interested in the technology behind it. Since then, I've explored graphics, streaming, and broadcast technology at different levels. I'd love to continue to pursue my interest in the technical side of media production and distribution!",

photos: [
  { src: "images/about/headshot.png", caption: "Aidan Yung, first of his name" },
  { src: "images/about/dearnyc.png", caption: "Humans of New York art exhibition in NYC" },
  { src: "images/about/gaming.png", caption: "Gaming with my friends" },
  { src: "images/about/uncduke.png", caption: "UNC vs Duke game, 2024" },
],
videos: [],

social: [
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/aidanyung"  },
  { key: "youtube",  label: "YouTube",  href: "https://youtube.com/@aidanyung"     },
  { key: "email",    label: "Email",    href: "mailto:aidanyungnc@gmail.com"      },
],
},

/* ── WORK ───────────────────────────────────────────────── */
work: [
{
id: "disney",
label: "Disney",
description:
"My summer at Disney, true to form, was magical.\n\n" + " After being on the production side of broadcasting for years, I got to explore the distribution side of the industry. Although I was based in NYC, I also got the chance to travel to ESPN’s facilities in Bristol, CT as well as the Woodlands in Houston, TX. Throughout the summer I learned about fail-overs and transport streams, software defined infrastructure, and SCTE markers.\n\n" +
"I was tasked with revamping the webscraping system used in Bristol. My new system is used daily by 300+ production assistants, content assistants and producers in Bristol. I gathered user feedback, pitched a solution, developed it (with the help of AI tools), and deployed it using AWS cloud services. Running yt-dlp on the backend, I created an easy-to-access webpage that received a URL and downloaded the video directly to the media asset management system for users in Bristol. \n\n" + "With a week left in my internship, I presented the working demo I had, connecting the cloud app to the nearline MAM through an on-prem VM I was using as a proxy.\n\n" + "“You just turned 30 minutes of work into a press of a button”\n\n" + "The team in Bristol was amazed. I loved receiving their feedback, and added an additional feature before my internship ended.\n\n" + "I learned a lot from this project – network traffic, cloud deployment options, and how to incorporate AI into my workflow, as well as how to navigate corporate structure and interact with different teams. Skills I’ll need as a professional.\n\n" + "Lastly, my experience at Disney isn’t complete without me mentioning the city. New York was an exciting place that taught me as much as the internship did. I discovered the convenience of the subway and that tax adds up on every bill. I learned that I missed the slow pace of Chapel Hill, but I loved the bustle of the city. And I met the most passionate, determined, and inspiring people Canin New York, and I hope to be back soon.",
photos: [
{ src: "images/work/disney/internclass.png", caption: "Disney Entertainment + ESPN Product & Technology NYC Interns 2026" },
{ src: "images/work/disney/scdesk.png", caption: "Sportscenter Desk in Bristol, CT" },
{ src: "images/work/disney/teampic.png", caption: "My team, the Advanced Technology Group!" },
{ src: "images/work/disney/squad.png", caption: "Run club squad" },
{ src: "images/work/disney/parade.JPG", caption: "Disney in the NYC Pride Parade" },
{ src: "images/work/disney/satellites.png", caption: "Satellites in Bristol, CT" },
{ src: "images/work/disney/distribution.png", caption: "Transmission and Operations Control in Bristol, CT" },
{ src: "images/work/disney/bristol.png", caption: "DC1, where the webscraping console was" },
{ src: "images/work/disney/emmy.png", caption: "Emmy I totally earned" },
{ src: "images/work/disney/DC3.png", caption: "The Woodlands, Houston TX" },
{ src: "images/work/disney/markkelly.png", caption: "Kelly & Mark's studio" }
],
},
{
id: "smt",
label: "SMT",
description:
"Throughout the later half of 2024 I worked remote graphics for the NHL through SportsMEDIA Technology in Durham, NC. This led to my summer internship with them as a Remote Operations Intern.\n\n" + "At the beginning of the summer, I got the chance to shadow and work on the Tour de France and ESPN’s PFL. In between shows, we configured cabling, assembled rack units for NFL trucks, and downloaded, updated, and tested software on machines for football and basketball. Then, beginning in the middle of summer, I got the chance to travel.\n\n" + "I first traveled to Columbus, OH, for the Honda Indy 200 at Mid-Ohio. There had never been an intern with the Indycar crew before, so not only did I set up and run the pylon and telemetry for the races with SMT’s technology, but I got the chance to try a variety of positions. I set up and fixed mics with the audio engineers, learned to operate remote cameras from the cameramen, met the talent casting the race and sat in on the international broadcast’s control room. Aside from a great learning experience, it was one of the most patriotic Fourth of July’s I’ve had so far.\n\n" + "Later in the summer, I worked at the nicest facility of my career: The NASCAR production studio in Charlotte, NC. Running telemetry and the pylon remotely from the studio gave me a glimpse at what the future of production could be – a centralized production facility with a crew that doesn’t have to travel site to site.\n\n" + "In Spring 2026 I returned – not on the operations side, but with a more tech-focused role. As a Quality Assurance Intern, I tested the software updates and graphics packages before they were shipped. This was my first exposure to an Agile workflow. I wrote documentation, flagged bugs and coordinated with PMs and SWEs to meet spring deadlines. \n\n" + "Thanks to SMT, I learned about computer graphics, computer hardware, and network and routing traffic. I love that I got to explore my interest in technology while remaining close to production.",
photos: [
{ src: "images/work/smt/nascar.png", caption: "The NASCAR studio in Charlotte, NC" },
{ src: "images/work/smt/canes.png", caption: "PNC Arena, where SMT tests their NHL technology" },
{ src: "images/work/smt/golfvb.png", caption: "Videoboard at a golf course in Greensboro we disassembled" },
{ src: "images/work/smt/imsa.png", caption: "IMSA control room" },
{ src: "images/work/smt/indycar.png", caption: "Indycar pit" },
{ src: "images/work/smt/indystation.png", caption: "Indycar graphics truck, where I tracked data collection" },
{ src: "images/work/smt/rackunit.png", caption: "Disassembling an SMT rack unit" },
{ src: "images/work/smt/nhl.png", caption: "Remote graphics for the NHL" },
{ src: "images/work/smt/pflgfx.png", caption: "Remote graphics for ESPN's PFL" },
{ src: "images/work/smt/nflpacks.png", caption: "NFL unit packaging" },
{ src: "images/work/smt/truck.png", caption: "Indycar truck control room" },
{ src: "images/work/smt/workstation.png", caption: "Configuring an SMT workstation" },
],
},
{
id: "durham-bulls",
label: "The Durham Bulls",
description:
"Rods. The Cones. The Rockets. Calling Joe (WRAL TOC). Fixing the umbrella. Stealing cookies. Chinese fire drill. Taylor Swift over comms. Barbie uno in a rain delay. All the time in between.\n\n" +
"My introduction to broadcasting began near the end of the pandemic, when I joined the Durham Bulls’ Explorer Post 50 internship program. At the time, I knew nothing about production. I didn’t know how it would change my life. \n\n" + "For the next four years, I spent my summers running camera, replay, audio, video, graphics, TD, producing and directing. I led set and strike, and grew into a leadership position where I interviewed and trained new interns.\n\n" + "I became interested in the production technology and software while working behind the broadcast. Working in the rack room and having to repair and restart old equipment led me to pursue computer science at UNC.\n\n" + "These days I visit the Bulls when I have free time — usually a few evenings each year. I enjoy meeting the new crew, seeing the interns I taught teach the new interns, and giving advice for those just beginning their careers.\n\n",
photos: [
{ src: "images/work/bulls/postgame.png", caption: "Postgame selfie" },
{ src: "images/work/bulls/duckrace.png", caption: "Racing rubber ducks after work" },
{ src: "images/work/bulls/cam2vibe.png", caption: "The view from high home" },
{ src: "images/work/bulls/chilling.png", caption: "The crowded control room pre-game" },
{ src: "images/work/bulls/directing.png", caption: "Directing with my friends" },
{ src: "images/work/bulls/producer.png", caption: "Lost in thought producing" },
{ src: "images/work/bulls/starwars.png", caption: "Star Wars night at the ballpark" },
],
videos: [
{ id: "nvdnfI9g4PY", title: "The Post 50 Vlog", start: 552 },
],
},
{
id: "savannah-bananas",
label: "Savannah Bananas",
description:
"Description of your work with the Savannah Bananas.\n\n" +
"Add additional paragraphs as needed.",
photos: [
{ src: "images/work/savannah-bananas/photo1.jpg", caption: "default caption" },
],
},
],

/* ── INTERESTS ──────────────────────────────────────────── */
interests: [
{
id: 'broadcast',
label: 'Broadcast & Streaming',
description: 'I’m interested in how live content reaches audiences, and in building reliable systems behind broadcast and streaming.',
photos: [],
},
{
id: 'software',
label: 'Software & Automation',
description: 'I enjoy using software and automation to solve production problems and make complex workflows easier to operate.',
photos: [],
},
{
id: 'live-sports',
label: 'Live Sports & Production',
description: 'Live sports brings technology, timing, and teamwork together. I’m drawn to the systems and crews that make each event happen.',
photos: [],
},
],
};

/* ============================================================
DOM HELPERS
============================================================ */

const $ = id => document.getElementById(id);

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

function renderGallery(gallery, photos, videos = [], label) {
const mediaCount = photos.length + videos.length;
gallery.classList.toggle('has-many', mediaCount >= 3);

photos.forEach((photo, i) => {
const { src, caption = '', alt: customAlt } = typeof photo === 'string'
? { src: photo }
: photo;
const alt = customAlt || `${label} — photo ${i + 1}`;
const img = el('img', {
className: 'grid-img',
src,
alt,
loading: 'lazy',
role: 'listitem',
});
img.style.setProperty('--anim-delay', `${(i * 0.07).toFixed(3)}s`);
img.classList.add('anim-up');
img.addEventListener('click', () => openLightbox(src, alt, caption));
gallery.appendChild(img);
});

const videoTiles = document.createDocumentFragment();
videos.forEach(({ id, title = 'YouTube video', start = 0 }, i) => {
if (!/^[\w-]{11}$/.test(id)) return;

const tile = el('div', { className: 'grid-video-tile', role: 'listitem' });
const button = el('button', {
className: 'grid-video-button',
type: 'button',
'aria-label': `Play video: ${title}`,
});
button.style.setProperty('--anim-delay', `${(i * 0.07).toFixed(3)}s`);
button.classList.add('anim-up');
button.appendChild(el('img', {
className: 'grid-video-thumb',
src: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
alt: '',
loading: 'lazy',
}));
button.appendChild(el('span', { className: 'video-play-icon', 'aria-hidden': 'true' }, '▶'));
button.appendChild(el('span', { className: 'video-title' }, title));
button.addEventListener('click', () => openVideo(id, title, start));
tile.appendChild(button);
videoTiles.appendChild(tile);
});
gallery.prepend(videoTiles);
}

/* ============================================================
ANIMATION UTILITIES
──────────────────────────────────────────────────────────
Pattern: CSS defines keyframes + animation classes.
JS adds/removes classes and sets --anim-delay
per element to create stagger sequences.

void el.offsetWidth forces a reflow, which resets the
animation so it replays even if the class was already on
the element (e.g. navigating back to a page).
============================================================ */

/**

Re-trigger an animation class on a set of elements with
staggered delays.
@param {string|Element[]} target CSS selector or element array
@param {string} animClass e.g. 'anim-up'
@param {number} baseDelay seconds before first element starts
@param {number} stagger seconds added per element
*/
function animateElements(target, animClass, baseDelay = 0, stagger = 0.08) {
const els = typeof target === 'string'
? [...document.querySelectorAll(target)]
: [...target];
if (!els.length) return;

els.forEach((node, i) => {
node.classList.remove(animClass);
void node.offsetWidth; // reset animation
node.style.setProperty(
'--anim-delay',
`${(baseDelay + i * stagger).toFixed(3)}s`
);
node.classList.add(animClass);
});
}

/**

Fire the entrance animation sequence for a given page.

Called by navigateTo() every time a page becomes active.

@param {string} pageId 'home' | 'about' | 'work' | 'interests'
*/
function animatePage(pageId) {
switch (pageId) {

case 'about':
// Title slashes in from the left
animateElements('#about .page-title', 'anim-left', 0, 0);
// Bio lines stagger up one by one
animateElements('#about .bio-plain', 'anim-up', 0.22, 0.07);
animateElements('#about .bio-headline', 'anim-up', 0.34, 0);
animateElements('#about .bio-body', 'anim-up', 0.44, 0);
// Photos cascade up across the grid
animateElements('#about .grid-img', 'anim-up', 0.18, 0.07);
// Connect block fades in last
animateElements('#about .connect-block','anim-up', 0.56, 0);
break;

case 'work':
// Title slashes in
animateElements('#work .page-title', 'anim-left', 0, 0);
// Employer buttons stagger in from the left
animateElements('#work .job-btn', 'anim-left', 0.18, 0.08);
// Gallery and description already animated by selectJob()
// but we re-trigger here so they replay on every navigation
animateElements('#work .grid-img', 'anim-up', 0.32, 0.07);
animateElements('#work .work-desc p', 'anim-up', 0.38, 0.07);
animateElements('#work .work-desc h3', 'anim-left', 0.3, 0);
break;

case 'interests':
animateElements('#interests .page-title', 'anim-left', 0, 0);
animateElements('#interests .interest-tab', 'anim-left', 0.18, 0.08);
animateElements('#interests .grid-img', 'anim-up', 0.32, 0.07);
animateElements('#interests .work-desc p, #interests .work-desc h3', 'anim-up', 0.38, 0.07);
break;

// Home uses pure CSS animations (see styles.css) so no JS needed.
// They replay automatically whenever #home goes from
// display:none → display:flex.
default:
break;

}
}

/* ============================================================
PAGE NAVIGATION
============================================================ */

const overlay = $('t-overlay');
const allPages = document.querySelectorAll('.page');

/**

Animate to a new page using a clip-path circle expansion.
@param {string} targetId 'home' | 'about' | 'work'
@param {string} [originX] CSS value for circle origin X
@param {string} [originY] CSS value for circle origin Y
*/
function navigateTo(targetId, originX = '50%', originY = '50%') {
const targetPage = $(targetId);
if (!targetPage) return;
const colorMap = { about: '#FF6A00', work: '#B84DFF', interests: '#00E5FF', home: '#0B1530' };
overlay.style.background = colorMap[targetId] ?? '#101935';
overlay.style.setProperty('--ox', originX);
overlay.style.setProperty('--oy', originY);

requestAnimationFrame(() => overlay.classList.add('open'));

overlay.addEventListener('transitionend', () => {
// Swap visible page
allPages.forEach(p => p.classList.remove('active'));
targetPage.classList.add('active');
document.querySelectorAll('.site-nav-link').forEach(link => {
const isCurrent = link.dataset.target === targetId;
link.classList.toggle('active', isCurrent);
if (isCurrent) link.setAttribute('aria-current', 'page');
else link.removeAttribute('aria-current');
});
window.scrollTo(0, 0);

// Instantly collapse overlay (no visible snap-back)
overlay.style.transition = 'none';
overlay.classList.remove('open');
requestAnimationFrame(() =>
  requestAnimationFrame(() => { overlay.style.transition = ''; })
);

// Fire staggered entrance animations for the new page
animatePage(targetId);
}, { once: true });
}

// Back buttons (← HOME)
document.querySelectorAll('.back-btn, .site-nav-link').forEach(btn => {
btn.addEventListener('click', () =>
navigateTo(btn.dataset.target ?? 'home')
);
});

/* ============================================================
TV BARS — GLITCH + HOVER HINTS + NAVIGATION
============================================================ */

const tvScreen = $('tv-screen');
const tvTop = $('tv-top');

tvTop.addEventListener('mouseover', e => {
const bar = e.target.closest('.tv-bar');
if (!bar) return;
triggerGlitch(bar);

if (Math.random() > 0.6) {
const bars = [...tvTop.querySelectorAll('.tv-bar')];
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

let lastZone = null;

function tvZoneAt(clientX) {
const { left, width } = tvScreen.getBoundingClientRect();
return Math.min(2, Math.floor(((clientX - left) / width) * 3));
}

const tvDestinations = ['about', 'work', 'interests'];
const tvHoverClasses = ['hover-left', 'hover-center', 'hover-right'];

tvScreen.addEventListener('mousemove', e => {
const zone = tvZoneAt(e.clientX);

if (lastZone !== null && lastZone !== zone) {
tvTop.querySelectorAll('.tv-bar').forEach((bar, i) =>
setTimeout(() => triggerGlitch(bar), i * 18)
);
}
lastZone = zone;

tvHoverClasses.forEach((className, i) =>
tvScreen.classList.toggle(className, zone === i)
);
});

tvScreen.addEventListener('mouseleave', () => {
tvScreen.classList.remove(...tvHoverClasses);
lastZone = null;
});

tvScreen.addEventListener('click', e => {
navigateTo(tvDestinations[tvZoneAt(e.clientX)], `${e.clientX}px`, `${e.clientY}px`);
});

tvScreen.addEventListener('keydown', e => {
const keyDestinations = {
ArrowLeft: 'about', a: 'about',
ArrowDown: 'work', w: 'work',
ArrowRight: 'interests', i: 'interests',
};
if (keyDestinations[e.key]) {
e.preventDefault();
navigateTo(keyDestinations[e.key]);
} else if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
navigateTo('work');
}
});

/* ============================================================
BUILD ABOUT PAGE
============================================================ */

function buildAbout() {
const { bioLines, bioHeadline, bioText, photos, videos = [], social } = CONFIG.about;

// ── Gallery ──────────────────────────────────────────────
const gallery = $('about-gallery');
renderGallery(gallery, photos, videos, 'About');

// ── Bio ───────────────────────────────────────────────────
const bioEl = $('about-bio');

bioLines.forEach(line =>
bioEl.appendChild(el('p', { className: 'bio-plain' }, line))
);
bioEl.appendChild(el('p', { className: 'bio-headline' }, bioHeadline));
bioEl.appendChild(el('p', { className: 'bio-body' }, bioText));

// ── Social links ─────────────────────────────────────────
const svgIcons = {
linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.77S5.53 3.5 6.5 3.5s1.75.79 1.75 1.76S7.47 6.73 6.5 6.73zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77C14.4 7.2 21 7.02 21 12.48V19z"/></svg>`,
youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3 3 0 0 0 2.12-2.13A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z"/></svg>`,
email: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
};

const socRow = $('social-links');
social.forEach(({ key, label, href }) => {
const a = el('a', {
className: 'social-link',
href,
target: key !== 'email' ? '_blank' : '_self',
rel: 'noopener noreferrer',
'aria-label': label,
role: 'listitem',
});
a.innerHTML = (svgIcons[key] ?? '') + `<span>${label}</span>`;
socRow.appendChild(a);
});
}

/* ============================================================
BUILD WORK PAGE
============================================================ */

function buildWork() {
const btnGroup = $('work-buttons');
const descEl = $('work-description');
const galleryEl = $('work-gallery');

// Build employer buttons
CONFIG.work.forEach((job, i) => {
const btn = el('button', {
className: 'job-btn work-tab',
id: `work-tab-${job.id}`,
'data-job': job.id,
'role': 'tab',
'aria-controls': 'work-description',
'aria-selected': 'false',
tabindex: '-1',
}, job.label);

btn.addEventListener('click', () => selectJob(job.id));
btn.addEventListener('keydown', e => {
if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
e.preventDefault();
const direction = e.key === 'ArrowRight' ? 1 : -1;
const nextIndex = (i + direction + CONFIG.work.length) % CONFIG.work.length;
const nextTab = btnGroup.querySelectorAll('.work-tab')[nextIndex];
selectJob(CONFIG.work[nextIndex].id);
nextTab.focus();
});
btnGroup.appendChild(btn);
});

/**

Populate description + gallery for the selected employer.
Images and description paragraphs get animation classes
set at creation time so they animate in every time.
@param {string} id
*/
function selectJob(id) {
const job = CONFIG.work.find(j => j.id === id);
if (!job) return;
// Update button active states
btnGroup.querySelectorAll('.work-tab').forEach(b => {
  const isActive = b.dataset.job === id;
  b.classList.toggle('active', isActive);
  b.setAttribute('aria-selected', String(isActive));
  b.tabIndex = isActive ? 0 : -1;
  if (isActive) descEl.setAttribute('aria-labelledby', b.id);
});

// ── Render description ──────────────────────────────────
descEl.innerHTML = '';

const heading = el('h3', {}, job.label);
descEl.appendChild(heading);
// Animate heading
void heading.offsetWidth;
heading.style.setProperty('--anim-delay', '0s');
heading.classList.add('anim-left');

job.description.split('\n\n').forEach((para, i) => {
  const p = el('p', {}, para);
  // Each paragraph staggers up
  p.style.setProperty('--anim-delay', `${(0.1 + i * 0.08).toFixed(3)}s`);
  p.classList.add('anim-up');
  descEl.appendChild(p);
});

// ── Render gallery ──────────────────────────────────────
galleryEl.innerHTML = '';
renderGallery(galleryEl, job.photos, job.videos ?? [], job.label);
}

// Load first employer by default
if (CONFIG.work.length > 0) selectJob(CONFIG.work[0].id);
}

function buildInterests() {
const tabGroup = $('interest-tabs');
const descEl = $('interest-description');
const galleryEl = $('interest-gallery');

function selectInterest(id) {
const interest = CONFIG.interests.find(item => item.id === id);
if (!interest) return;

tabGroup.querySelectorAll('.interest-tab').forEach(tab => {
const isActive = tab.dataset.interest === id;
tab.classList.toggle('active', isActive);
tab.setAttribute('aria-selected', String(isActive));
tab.tabIndex = isActive ? 0 : -1;
if (isActive) descEl.setAttribute('aria-labelledby', tab.id);
});

descEl.innerHTML = '';
const heading = el('h3', {}, interest.label);
heading.style.setProperty('--anim-delay', '0s');
heading.classList.add('anim-left');
descEl.appendChild(heading);
interest.description.split('\n\n').forEach((paragraph, i) => {
const text = el('p', {}, paragraph);
text.style.setProperty('--anim-delay', `${(0.1 + i * 0.08).toFixed(3)}s`);
text.classList.add('anim-up');
descEl.appendChild(text);
});

galleryEl.innerHTML = '';
galleryEl.classList.remove('has-many');
if (interest.photos.length === 0 && (interest.videos ?? []).length === 0) {
galleryEl.appendChild(el('p', { className: 'gallery-empty', role: 'listitem' }, 'Photos coming soon.'));
return;
}
renderGallery(galleryEl, interest.photos, interest.videos ?? [], interest.label);
}

CONFIG.interests.forEach((interest, i) => {
const tab = el('button', {
className: 'job-btn interest-tab',
id: `interest-tab-${interest.id}`,
'data-interest': interest.id,
role: 'tab',
'aria-selected': 'false',
tabindex: '-1',
}, interest.label);

tab.addEventListener('click', () => selectInterest(interest.id));
tab.addEventListener('keydown', e => {
if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
e.preventDefault();
const direction = e.key === 'ArrowRight' ? 1 : -1;
const nextIndex = (i + direction + CONFIG.interests.length) % CONFIG.interests.length;
const nextTab = tabGroup.querySelectorAll('.interest-tab')[nextIndex];
selectInterest(CONFIG.interests[nextIndex].id);
nextTab.focus();
});
tabGroup.appendChild(tab);
});

if (CONFIG.interests.length > 0) selectInterest(CONFIG.interests[0].id);
}

/* ============================================================
LIGHTBOX
============================================================ */

const lightbox = $('lightbox');
const lbImg = $('lb-img');
const lbVideo = $('lb-video');
const lbCaption = $('lb-caption');
const lbClose = $('lb-close');

function setLightboxCaption(caption = '') {
lbCaption.textContent = caption;
lbCaption.hidden = !caption;
lightbox.classList.toggle('caption-open', Boolean(caption));
if (caption) lbImg.setAttribute('aria-describedby', 'lb-caption');
else lbImg.removeAttribute('aria-describedby');
}

function openLightbox(src, alt = '', caption = '') {
lightbox.classList.remove('video-open');
lbVideo.removeAttribute('src');
lbImg.src = src;
lbImg.alt = alt;
setLightboxCaption(caption);
lightbox.classList.add('open');
lbClose.focus();
}

function openVideo(id, title, start = 0) {
lbImg.src = '';
setLightboxCaption();
lbVideo.title = title;
const startTime = Number.isFinite(start) ? Math.max(0, Math.floor(start)) : 0;
const startParam = startTime > 0 ? `&start=${startTime}` : '';
lbVideo.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${startParam}`;
lightbox.classList.add('open', 'video-open');
lbClose.focus();
}

function closeLightbox() {
lightbox.classList.remove('open');
lbImg.src = '';
lbVideo.removeAttribute('src');
lightbox.classList.remove('video-open', 'caption-open');
lbCaption.textContent = '';
lbCaption.hidden = true;
lbImg.removeAttribute('aria-describedby');
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

/* ============================================================
INIT
============================================================ */

buildAbout();
buildWork();
buildInterests();