const mobile_menu = document.querySelector('.mobile-menu');
const menu_bar = document.querySelector('.menu-bar');
const menu_bar_close = document.querySelector('.menu-bar-close');
const root = document.querySelector('.root');
const actions_header = document.querySelector('.actions-header');

const openMobileBar = () => {
  menu_bar.classList.add('active-mobile');
  document.body.style.overflow = 'hidden';
  root.style.position = 'absolute';
};

const closeMobileBar = () => {
  menu_bar.classList.remove('active-mobile');
  document.body.style.overflow = '';
};

mobile_menu.addEventListener('click', openMobileBar);

menu_bar_close.addEventListener('click', closeMobileBar);
