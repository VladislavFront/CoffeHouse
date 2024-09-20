let menuSwiper = new Swiper(".menuSwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

let menuSwiperPrev = document.querySelector('.menuSwiperPrev')
let menuSwiperNext = document.querySelector('.menuSwiperNext')

menuSwiperPrev.addEventListener('click', () => {
  menuSwiper.slidePrev();
})
menuSwiperNext.addEventListener('click', () => {
  menuSwiper.slideNext();
})



let reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },
});

let reviewsSwiperPrev = document.querySelector('.reviewsSwiperPrev')
let reviewsSwiperNext = document.querySelector('.reviewsSwiperNext')

reviewsSwiperPrev.addEventListener('click', () => {
  reviewsSwiper.slidePrev();
})
reviewsSwiperNext.addEventListener('click', () => {
  reviewsSwiper.slideNext();
})


function formReset() {
  document.querySelector('.form').reset();
}