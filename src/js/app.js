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
  //
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
