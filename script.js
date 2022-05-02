let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
});

let swiper = new Swiper ('.home-slider', {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper ('.review-slider', {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  breakpoints:{
    0:{
      sliderPerView:1,
    },
    600:{
      sliderPerView:2,
    }
  }
});