const reviewOptions = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 45,
  // If we need navigation
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsive Card/Slides
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 'auto',
      spaceBetween: 100,

    },
  }
};

const swiper = new Swiper('.reviews__swiper-container', reviewOptions);