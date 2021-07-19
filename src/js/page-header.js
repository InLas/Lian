const mainNav = document.querySelector('.main-nav');
const navToogle = document.querySelector('.controls__toogle');

if (mainNav) {
  mainNav.classList.remove('main-nav--no-js');
  navToogle.classList.remove('controls__toogle--no-js');
  mainNav.classList.add('main-nav--closed');

  navToogle.addEventListener('click', () => {
    navToogle.classList.toggle('controls__toogle--open');
    mainNav.classList.toggle('main-nav--closed');
  });
}
