const heroSwiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  allowTouchMove: true,
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  speed: 100,
  fadeEffect: {
    crossFade: true
  },
  // If we need navigation
  navigation: {
    nextEl: '.hero__nav-next',
    prevEl: '.hero__nav-prev',
  },
  // If we need slide autoPlay
  autoplay: {
    delay: 7000,
  },
};

const heroSwiper = new Swiper('.hero__slideshow', heroSwiperOptions);