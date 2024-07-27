const mobile_menu = document.querySelector('.mobile-menu');
const menu_bar = document.querySelector('.menu-bar');
const menu_bar_close = document.querySelector('.menu-bar-close');
const root = document.querySelector('.root');
const actions_header = document.querySelector('.actions-header');

// lang
const select = document.querySelector('select');
const allLang = ['UZ', 'RU'];
select.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#RU';
    location.reload();
  }
  select.value = hash;
  document.querySelectorAll('.lng_btn').forEach((btn) => {
    btn.innerHTML = langArr['default_btn'][hash];
  });

  const name_input = document.querySelector('.name_input');
  hash === 'RU'
    ? (name_input.placeholder = 'Ваше имя')
    : (name_input.placeholder = 'ism');

  document.querySelector('title').innerHTML = langArr['unit'][hash];
  document.querySelector('.lng_title').innerHTML = langArr['home_title'][hash];
  document.querySelector('.lng_description').innerHTML =
    langArr['home_description'][hash];
  document.querySelector('.lng_about_title').innerHTML =
    langArr['about_title'][hash];
  document.querySelector('.lng_about_card1_title').innerHTML =
    langArr['about_card1_title'][hash];
  document.querySelector('.lng_about_card1_description').innerHTML =
    langArr['about_card1_description'][hash].toLowerCase();
  document.querySelector('.lng_about_card2_title').innerHTML =
    langArr['about_card2_title'][hash];
  document.querySelector('.lng_about_card2_description').innerHTML =
    langArr['about_card2_description'][hash].toLowerCase();
  document.querySelector('.lng_about_card3_title').innerHTML =
    langArr['about_card3_title'][hash];
  document.querySelector('.lng_about_card3_description').innerHTML =
    langArr['about_card3_description'][hash].toLowerCase();

  document.querySelector('.lng_clean_title').innerHTML =
    langArr['clean_title'][hash];
  document.querySelector('.lng_clean_description').innerHTML =
    langArr['clean_description'][hash].toLowerCase();

  document.querySelector('.lng_service_title').innerHTML =
    langArr['service_title'][hash];
  document.querySelector('.lng_service_description').innerHTML =
    langArr['service_description'][hash].toLowerCase();

  document.querySelector('.lng_service_card1_title').innerHTML =
    langArr['service_card1_title'][hash];
  document.querySelector('.lng_service_card1_description').innerHTML =
    langArr['service_card1_description'][hash];

  document.querySelector('.lng_service_card2_title').innerHTML =
    langArr['service_card2_title'][hash];
  document.querySelector('.lng_service_card2_description').innerHTML =
    langArr['service_card2_description'][hash];

  document.querySelector('.lng_title2').innerHTML = langArr['title2'][hash];

  document.querySelector('.lng_service_card3_title').innerHTML =
    langArr['service_card3_title'][hash];
  document.querySelector('.lng_service_card3_description').innerHTML =
    langArr['service_card3_description'][hash];
  document.querySelector('.lng_service_card3_title').innerHTML =
    langArr['service_card3_title'][hash];
  document.querySelector('.lng_service_card3_description').innerHTML =
    langArr['service_card3_description'][hash];

  // klapalar

  document.querySelector('.lng_service_klap1_title').innerHTML =
    langArr['service_klap1_title'][hash];
  document.querySelector('.lng_service_klap1_description').innerHTML =
    langArr['service_klap1_description'][hash];

  document.querySelector('.lng_service_klap2_title').innerHTML =
    langArr['service_klap2_title'][hash];
  document.querySelector('.lng_service_klap2_description').innerHTML =
    langArr['service_klap2_description'][hash];

  document.querySelector('.lng_service_klap3_title').innerHTML =
    langArr['service_klap3_title'][hash];
  document.querySelector('.lng_service_klap3_description').innerHTML =
    langArr['service_klap3_description'][hash];

  document.querySelector('.lng_service_klap4_title').innerHTML =
    langArr['service_klap4_title'][hash];
  document.querySelector('.lng_service_klap4_description').innerHTML =
    langArr['service_klap4_description'][hash];

  document.querySelector('.lng_service_klap5_title').innerHTML =
    langArr['service_klap5_title'][hash];
  document.querySelector('.lng_service_klap5_description').innerHTML =
    langArr['service_klap5_description'][hash];

  document.querySelector('.lng_cleanM_title').innerHTML =
    langArr['cleanM_title'][hash];

  document.querySelector('.lng_faq').innerHTML = langArr['faq'][hash];

  document.querySelector('.lng_slid1_title').innerHTML =
    langArr['lng_slid1_title'][hash];
  document.querySelector('.lng_slid1_description').innerHTML =
    langArr['lng_slid1_description'][hash];

  document.querySelector('.lng_slid2_title').innerHTML =
    langArr['lng_slid2_title'][hash];
  document.querySelector('.lng_slid2_description').innerHTML =
    langArr['lng_slid2_description'][hash];

  document.querySelector('.lng_slid3_title').innerHTML =
    langArr['lng_slid3_title'][hash];
  document.querySelector('.lng_slid3_description').innerHTML =
    langArr['lng_slid3_description'][hash];

  document.querySelector('.lng_ozim').innerHTML = langArr['lng_ozim'][hash];
  document.querySelector('.lng_pol').innerHTML = langArr['lng_pol'][hash];
  document.querySelector('.lng_contact_text').innerHTML =
    langArr['lng_contact_text'][hash];
  document.querySelector('.lng_address').innerHTML =
    langArr['lng_address'][hash];
  document.querySelector('.lng_login').innerHTML = langArr['lng_login'][hash];

  document.querySelectorAll('.lng_menu_home').forEach((item) => {
    item.innerHTML = langArr['lng_menu_home'][hash];
  });
  document.querySelectorAll('.lng_menu_service').forEach((item) => {
    item.innerHTML = langArr['lng_menu_service'][hash];
  });
  document.querySelectorAll('.lng_menu_about').forEach((item) => {
    item.innerHTML = langArr['lng_menu_about'][hash];
  });
  document.querySelectorAll('.lng_menu_contacts').forEach((item) => {
    item.innerHTML = langArr['lng_menu_contacts'][hash];
  });
}

changeLanguage();

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
