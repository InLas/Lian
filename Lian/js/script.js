'use strict'

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
;
$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    arrows: false,
    draggable: true,
    speed: 500,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        }
      }
    ]
  });
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav',
  draggable: true,
  speed: 500,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        draggable: false,
        fade: true,
      }
    }
  ]
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  mobileFirst: false,
  responsive: [
    {
      breakpoint: 767,
      settings: "unslick",
    }
  ]
});;
const likeBtnCard = document.querySelector('.card__likes');
const likeBtnBlog = document.querySelector('.single-post__likes');

if (likeBtnCard) {
  let numberLikes = likeBtnCard.querySelector('.card__num-likes');

  likeBtnCard.addEventListener('click', (evt) => {
    evt.preventDefault();
    likeBtnCard.blur();

    if (likeBtnCard.classList.contains('card__likes--active')) {
      likeBtnCard.classList.remove('card__likes--active');
      numberLikes.textContent--;
    } else {
      likeBtnCard.classList.add('card__likes--active');
      numberLikes.textContent++;
    }
  });
}

if (likeBtnBlog) {
  let numberLikes = likeBtnBlog.querySelector('.single-post__num-likes');

  likeBtnBlog.addEventListener('click', (evt) => {
    evt.preventDefault();
    likeBtnBlog.blur();

    if (likeBtnBlog.classList.contains('single-post__likes--active')) {
      likeBtnBlog.classList.remove('single-post__likes--active');
      numberLikes.textContent--;
    } else {
      likeBtnBlog.classList.add('single-post__likes--active');
      numberLikes.textContent++;
    }
  });
}
;
window.onload = function () {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.classList.contains('gallery__button')) {
      getProducts(targetElement);
      e.preventDefault();
    }
  }
}

async function getProducts(button) {
  const file = 'json/cards.json'

  let responce = await fetch(file, {
    method: "GET"
  });

  if (responce.ok) {
    let result = await responce.json();
    loadProducts(result);
    button.remove();
  } else {
    alert('Erorr');
  }
};

function loadProducts(data) {
  const masonry = document.querySelector('.masonry');

  data.cards.forEach(card => {
    const img = card.image;

    let template = `
    <li class="masonry__item">
    <a href="portfolio-item.html">
      <img src="${img}" width="360" height="350" alt="cosmetic-1">
    </a>
    <div class="masonry__cover">
      <a href="portfolio-item.html" class="masonry__link"></a>
    </div>
    </li>
    `
    masonry.insertAdjacentHTML('beforeend', template);
  });
};
;