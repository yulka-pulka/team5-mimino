// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';

      var swiper = new Swiper(".mini-slider-1", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    

      