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

// let swiper = new Swiper ('.home-slider', {
//   spaceBetween: 20,
//   effect: "fade",
//   loop: true,
//   grabCursor: true,
//   centeredSlides: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// let swiper = new Swiper ('.review-slider', {
//   spaceBetween: 20,
//   loop: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   breakpoints:{
//     0:{
//       sliderPerView:1,
//     },
//     600:{
//       sliderPerView:2,
//     }
//   }
// });

let swiperx = new Swiper ('.blogs-slider', {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0:{
      sliderPerView:1,
    },
    768:{
      sliderPerView:2,
    },
    991:{
      sliderPerView:3,
    },
  }
});