const colorVariations = [
  'black',
  'white'
];

var gammaSwiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  allowTouchMove: false,
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.gamma-variation__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'gamma-variation__li',
    bulletActiveClass: 'gamma-variation__li--active',
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + '<div class="' + (colorVariations[index]) + ' ' + 'gamma-variation__li-color' + '"></div>' + '</li>';
    },
  },
};

var  commanderSwiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  allowTouchMove: false,
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.commander-variation__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'commander-variation__li',
    bulletActiveClass: 'commander-variation__li--active',
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + '<div class="' + (colorVariations[index]) + ' ' + 'commander-variation__li-color' + '"></div>' + '</li>';
    },
  },
};


const variationSwiperGamma = new Swiper('.gamma-variation', gammaSwiperOptions);
const variationSwiperCommander = new Swiper('.commander-variation', commanderSwiperOptions);