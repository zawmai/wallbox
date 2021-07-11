const productBullets = [
  'Gama Pulsar',
  'Copper SB',
  'Commander 2',
  'Quasar',
];

const productSwiperOptions = {
  // Optional parameters
  autoHeight: true,
  direction: 'horizontal',
  allowTouchMove: false,
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.products__nav-list',
    type: 'bullets',
    clickable: true,
    bulletClass: 'products__nav-list-item',
    bulletActiveClass: 'products__nav-list-item--active',
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + (productBullets[index]) + '</li>';
    },
  },
};

const productSwiper = new Swiper('.products__swiper-container', productSwiperOptions);