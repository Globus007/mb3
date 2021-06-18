import '../scss/style.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function onLoad() {
  const BTN_ABOUT = document.getElementById('about');
  const BTN_SING_UP_SCHEDULE = document.getElementById('schedule-sing-up');
  const BTN_SING_UP_PRICE = document.getElementById('price-sing-up');
  const MODAL_ABOUT = document.getElementById('modal-about');
  const CLOSE_BTN = document.getElementById('modal-about-close');
  const FORM = document.getElementById('form');
  const LEFT = document.getElementById('left');
  const RIGHT = document.getElementById('right');
  const SLIDES = document.querySelectorAll('.foto__image');
  const ARCHORS = document.querySelectorAll('a[href*="#"]');
  let slideNumber = 0;

  function showModal() {
    MODAL_ABOUT.style.display = 'flex';
    window.addEventListener('click', closeModalFromOutside);
  }

  function closeModalFromOutside(event) {
    if (event.target == MODAL_ABOUT) {
      closeModal();
    }
  }

  function switchSlide(event) {
    SLIDES[slideNumber].classList.remove('active');
    if (LEFT.querySelector('img') == event.target) {
      slideNumber = slideNumber - 1;
      if (slideNumber < 0) slideNumber = SLIDES.length - 1;
    } else {
      slideNumber = slideNumber + 1;
      if (slideNumber >= SLIDES.length) slideNumber = 0;
    }

    SLIDES[slideNumber].classList.add('active');
  }

  function closeModal() {
    MODAL_ABOUT.style.display = 'none';
    window.removeEventListener('click', closeModalFromOutside);
  }

  // smooth scroll
  ARCHORS.forEach((archor) => {
    const speed = 0.2;
    archor.addEventListener('click', (event) => {
      event.preventDefault();
      const linkName = archor.getAttribute('href').substr(1);
      const offset =
        document.querySelector(`a[name*=${linkName}]`).getBoundingClientRect().top - 80;
      const windowOffset = window.pageYOffset;
      requestAnimationFrame(step);
      let start = null;

      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          stepOffset =
            offset < 0
              ? Math.max(windowOffset - progress / speed, windowOffset + offset)
              : Math.min(windowOffset + progress / speed, windowOffset + offset);
        window.scrollTo(0, stepOffset);
        if (stepOffset != windowOffset + offset) {
          requestAnimationFrame(step);
        } else {
        }
      }
    });
  });

  BTN_ABOUT.addEventListener('click', showModal);
  BTN_SING_UP_SCHEDULE.addEventListener('click', showModal);
  BTN_SING_UP_PRICE.addEventListener('click', showModal);
  CLOSE_BTN.addEventListener('click', closeModal);
  LEFT.addEventListener('click', switchSlide);
  RIGHT.addEventListener('click', switchSlide);
  FORM.addEventListener('submit', sendEmail);
}

window.addEventListener('load', onLoad);
