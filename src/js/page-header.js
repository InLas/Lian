const mainNav = document.querySelector('.main-nav');
const navToogle = document.querySelector('.controls__toogle');

if (mainNav) {
  mainNav.classList.remove('main-nav--no-js');
  navToogle.classList.remove('controls__toogle--no-js');

  navToogle.addEventListener('click', () => {
    navToogle.classList.toggle('controls__toogle--open');
    mainNav.classList.toggle('main-nav--closed');
  });
}
