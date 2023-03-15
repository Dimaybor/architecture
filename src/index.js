import './index.html';
import './gallery.html';
import './projects.html';
import './certificates.html';
import './contacts.html';
import './index.scss';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.main-slider', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 700,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
      formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    }
  },
});

const swiper2 = new Swiper('.gallery-slider', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 700,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
      formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    }
  },
});
