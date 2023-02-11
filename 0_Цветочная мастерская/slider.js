import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.slider', {
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__item',
  navigation: {
    nextEl: 'swiper-button-next',
    prevEl: 'swiper-button-prev',
  },
})