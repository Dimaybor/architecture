import './index.html';
import './gallery.html';
import './projects.html';
import './projects-article.html';
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

const swiper3 = new Swiper('.project-slider', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 700,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',

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

const swiper4 = new Swiper('.certificates-slider', {
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

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("connection-modal__close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('modal-open');
}
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
}