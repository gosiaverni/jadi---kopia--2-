// main.js
const welcomeCard = document.getElementById('welcomeCard');
const toolCard = document.getElementById('toolCard');

const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const magnifier = document.getElementById('magnifier');
const hero = document.querySelector('.hero');
const backgroundImage = document.getElementById('backgroundImage');
const infoCard = document.getElementById('infoCard');

const nextBtn = document.getElementById('nextBtn');
const leftCard =
  document.getElementById('leftCard');

const backLeftBtn =
  document.getElementById('backLeftBtn');

const nextBottomBtn =
  document.getElementById('nextBottomBtn');

const bottomCard =
  document.getElementById('bottomCard');

const backBottomBtn =
  document.getElementById('backBottomBtn');

const wideRightCard =
  document.getElementById('wideRightCard');

const backWideBtn =
  document.getElementById('backWideBtn');

const nextLeftBtn =
  document.getElementById('nextLeftBtn');

const backInfoBtn =
  document.getElementById('backInfoBtn');

const nextInfoBtn =
  document.getElementById('nextInfoBtn');
  const secondWideRightCard =
  document.getElementById('secondWideRightCard');

const backSecondWideBtn =
  document.getElementById('backSecondWideBtn');

const nextWideBtn =
  document.getElementById('nextWideBtn');
  const narrowRightCard =
  document.getElementById('narrowRightCard');

const backNarrowBtn =
  document.getElementById('backNarrowBtn');

const nextSecondWideBtn =
  document.getElementById('nextSecondWideBtn');
  const finalBottomCard =
  document.getElementById('finalBottomCard');

const backFinalBtn =
  document.getElementById('backFinalBtn');

const nextNarrowBtn =
  document.getElementById('nextNarrowBtn');

const magnifierImage =
  document.getElementById('magnifierImage');

startBtn.addEventListener('click', () => {

  welcomeCard.classList.add('hidden');

  toolCard.classList.add('active');
  hero.classList.add('magnifier-active');

});

backBtn.addEventListener('click', () => {

  toolCard.classList.remove('active');

  welcomeCard.classList.remove('hidden');
  hero.classList.remove('magnifier-active');

magnifier.style.opacity = '0';

});

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {

  if (!toolCard.classList.contains('active')) return;

  const isOverCard = toolCard.contains(e.target);

  if (isOverCard) {

    magnifier.style.opacity = '0';

    return;
  }

  magnifier.style.opacity = '1';

  mouseX = e.clientX;
  mouseY = e.clientY;

});

function animateMagnifier() {

  if (toolCard.classList.contains('active')) {

    const zoom = 1.4;

/* dynamiczny rozmiar lupy */

const lensWidth = magnifier.offsetWidth;
const lensHeight = magnifier.offsetHeight;

const lensCenterX = lensWidth / 2;
const lensCenterY = lensHeight / 2;

/* pozycja lupy */

magnifier.style.left =
  `${mouseX - lensCenterX}px`;

magnifier.style.top =
  `${mouseY - lensCenterY}px`;

/* pozycja względem obrazu */

const rect =
  backgroundImage.getBoundingClientRect();

/* proporcje */

const relativeX = mouseX - rect.left;
const relativeY = mouseY - rect.top;

magnifierImage.style.transform =
  `
  translate(
    ${-relativeX * zoom + lensCenterX}px,
    ${-relativeY * zoom + lensCenterY}px
  )
  scale(${zoom})
  translateZ(0)
  `;


}
requestAnimationFrame(animateMagnifier);
}

animateMagnifier();

nextBtn.addEventListener('click', () => {

  toolCard.classList.remove('active');

  infoCard.classList.add('active');

  /* wyłączamy lupę */

  hero.classList.remove('magnifier-active');

  magnifier.style.opacity = '0';

});

backInfoBtn.addEventListener('click', () => {

  infoCard.classList.remove('active');

  toolCard.classList.add('active');

  /* ponownie aktywujemy lupę */

  hero.classList.add('magnifier-active');

});

nextInfoBtn.addEventListener('click', () => {

  infoCard.classList.remove('active');

  bottomCard.classList.add('active');

});

backBottomBtn.addEventListener('click', () => {

  bottomCard.classList.remove('active');

  infoCard.classList.add('active');

});

nextBottomBtn.addEventListener('click', () => {

  bottomCard.classList.remove('active');

  leftCard.classList.add('active');

});

backLeftBtn.addEventListener('click', () => {

  leftCard.classList.remove('active');

  bottomCard.classList.add('active');

});

nextLeftBtn.addEventListener('click', () => {

  leftCard.classList.remove('active');

  wideRightCard.classList.add('active');

});

backWideBtn.addEventListener('click', () => {

  wideRightCard.classList.remove('active');

  leftCard.classList.add('active');

});

nextWideBtn.addEventListener('click', () => {

  wideRightCard.classList.remove('active');

  secondWideRightCard.classList.add('active');

});

backSecondWideBtn.addEventListener('click', () => {

  secondWideRightCard.classList.remove('active');

  wideRightCard.classList.add('active');

});

nextSecondWideBtn.addEventListener('click', () => {

  secondWideRightCard.classList.remove('active');

  narrowRightCard.classList.add('active');

});

backNarrowBtn.addEventListener('click', () => {

  narrowRightCard.classList.remove('active');

  secondWideRightCard.classList.add('active');

});

nextNarrowBtn.addEventListener('click', () => {

  narrowRightCard.classList.remove('active');

  finalBottomCard.classList.add('active');

});

backFinalBtn.addEventListener('click', () => {

  finalBottomCard.classList.remove('active');

  narrowRightCard.classList.add('active');

});