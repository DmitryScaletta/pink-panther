// fixed main menu
(() => {
  const header         = document.querySelector('.header');
  const mainMenu       = document.querySelector('.main-menu');
  const mainMenuCrutch = document.querySelector('.main-menu-crutch');
  const mainMenuMobile = document.querySelector('.main-menu-mobile');
  if (mainMenu === null || header === null || mainMenuCrutch === null) return;

  const fixedMainMenu = () => {
    const fixedClass              = 'main-menu--fixed';
    const mainMenuCrutchClass     = 'main-menu-crutch--show';
    const mainMenuMobileLogoClass = 'main-menu-mobile--logo';

    if (window.pageYOffset > header.clientHeight) {
      mainMenu      .classList.add(fixedClass);
      mainMenuCrutch.classList.add(mainMenuCrutchClass);
      mainMenuMobile.classList.add(mainMenuMobileLogoClass);
    } else {
      mainMenu      .classList.remove(fixedClass);
      mainMenuCrutch.classList.remove(mainMenuCrutchClass);
      mainMenuMobile.classList.remove(mainMenuMobileLogoClass);
    }
  };

  document.addEventListener('scroll', fixedMainMenu);
  document.addEventListener('load',   fixedMainMenu);
})();


// mobile menu
(() => {
  const mainMenuToggler = document.getElementById('main-menu-toggler');
  const mainMenuList    = document.querySelector('.main-menu__list');
  const mainMenuOverlay = document.querySelector('.main-menu-overlay');
  if (mainMenuToggler === null || mainMenuList === null) return;

  const toggleMobileMenu = () => {
    mainMenuList.classList.toggle('main-menu__list--opened');
    if (mainMenuOverlay !== null) mainMenuOverlay.classList.toggle('main-menu-overlay--show');
  };

  mainMenuToggler.addEventListener('click', toggleMobileMenu);
  if (mainMenuOverlay !== null) mainMenuOverlay.addEventListener('click', toggleMobileMenu);
})();


// iframe height fix
(() => {
  const iframeActualHeight = (iframeId) => {
    const setActualHeight = (iframe) => {
      iframe.style.height = 0;
      iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`;
    };

    const iframe = document.getElementById(iframeId);
    if (iframe === null) return;
    iframe.addEventListener('load',     setActualHeight.bind(null, iframe));
    window.addEventListener('resize',   setActualHeight.bind(null, iframe));
  };

  iframeActualHeight('iframe-instagram');
})();


// slider
(() => {
  const SLIDER_INTERVAL = 4000;

  const slider = document.querySelector('.slider');
  if (slider === null) return;

  const slides = slider.getElementsByClassName('slider__item');
  const dots   = slider.getElementsByClassName('slider__dot');
  const slidesCount = slides.length;
  if (slidesCount === 0) return;

  let   currentSlideIndex = 0;
  let   timeCounter       = 0;
  const activeSlideClass  = 'slider__item--active';
  const activeDotClass    = 'slider__dot--active';

  const setCurrentSlide = (newSlideIndex) => {
    slides[currentSlideIndex].classList.remove(activeSlideClass);
    dots  [currentSlideIndex].classList.remove(activeDotClass);
    slides[newSlideIndex].classList.add(activeSlideClass);
    dots  [newSlideIndex].classList.add(activeDotClass);
    currentSlideIndex = newSlideIndex;
    timeCounter = 0;
  };

  const showNextSlide = () => setCurrentSlide((currentSlideIndex === slidesCount - 1) ? 0 : currentSlideIndex + 1);
  const showPrevSlide = () => setCurrentSlide((currentSlideIndex === 0) ? slidesCount - 1 : currentSlideIndex - 1);

  Array.prototype.forEach.call(
    dots,
    (dot, dotIndex) => dot.addEventListener('click', setCurrentSlide.bind(null, dotIndex)),
  );

  const tick = 1000 / 30; // 30 times per second
  setInterval(() => {
    timeCounter += tick;
    if (timeCounter >= SLIDER_INTERVAL) showNextSlide();
  }, tick);
})();


// styleselect
const styleSelect = require('styleselect');

(() => {
  Array.prototype.forEach.call(
    document.querySelectorAll('select.select'),
    select => styleSelect(select),
  );
})();


// modal window
(() => {
  const modal            = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__close');
  if (modal === null || modalCloseButton === null) return;

  const toggleModalWindow = () => modal.classList.toggle('modal--opened');

  modalCloseButton.addEventListener('click', toggleModalWindow);

  window.addEventListener('click', (e) => {
    if (e.target === modal) toggleModalWindow();
  });

  Array.prototype.forEach.call(
    document.getElementsByClassName('open-modal-window'),
    elem => elem.addEventListener('click', toggleModalWindow),
  );
})();


// dropdown table
(() => {
  const dropdownTables = document.getElementsByClassName('table--dropdown');

  const toggleTable = (table) => {
    const tableOpenedClass = 'table--opened';

    if (table.classList.contains(tableOpenedClass)) {
      table.classList.remove(tableOpenedClass);
    } else {
      table.classList.add(tableOpenedClass);
    }
  };

  Array.prototype.forEach.call(
    dropdownTables,
    (table) => {
      const thead = table.querySelector('thead');
      if (thead === null) return;

      thead.addEventListener('click', toggleTable.bind(null, table));
    },
  );
})();
