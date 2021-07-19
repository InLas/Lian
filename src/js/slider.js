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
});