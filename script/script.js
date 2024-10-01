const linkYes = `https://amazon.pl/?vote=yes`; //здесь нужно водить линки
const linkNo = `https://amazon.pl/?vote=no`; //здесь нужно водить линки


// // only_mobile container
window.addEventListener('load', function () {
  const mobile_content_no = document.querySelector('#mobile_content_no');
  const mobile_content_yes = document.querySelector('#mobile_content_yes');
  const container = document.querySelector('#accept_mobile_container');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gclid = urlParams.get('gclid');

  mobile_content_no.href = linkNo + gclid;
  mobile_content_yes.href = linkYes + gclid;
});

// coockie

window.addEventListener('load', function () {
  const cookieBanner = document.getElementById('cookieBanner');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
  }

  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
});



const mobile_menu = document.querySelector('.mobile-menu');
const menu_bar = document.querySelector('.menu-bar');
const menu_bar_close = document.querySelector('.menu-bar-close');
const root = document.querySelector('.root');
const actions_header = document.querySelector('.actions-header');
const login = document.querySelector('.login');
const name_input = document.querySelector('.name_input');
const number_input = document.querySelector('.number_input');

login.addEventListener('click', (e) => {
  console.log(name_input.value);
  console.log(number_input.value);
  alert('succesfull');
});



// ====
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

// animated

const options = {
  root: null,
  rootMargin: '10px',
  threshold: 1,
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__bounceInLeft');
    }
  });
});

document
  .querySelectorAll('.animate__animated')
  .forEach((an) => imageObserver.observe(an));
