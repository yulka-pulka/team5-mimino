// import Swiper JS
import Swiper, { Navigation, Autoplay } from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';


const swiper = new Swiper(".mini-slider-1", {
  modules: [Navigation, Autoplay],
        speed: 3500,
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2500,
          reverseDirection: true,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button__next",
          prevEl: ".swiper-button__prev",
  },
  breakpoints: {

    1024: {
      spaceBetween: 40,
    },
  },
      });
    
const swiperSlider = new Swiper(".mini-slider-r", {
  modules: [Navigation, Autoplay],
        speed: 3500,
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button__next",
          prevEl: ".swiper-button__prev",
  },
  breakpoints: {

    1024: {
      spaceBetween: 40,
    },
  },
      });
// ---- smooth scroll

function scrollElement(){
 const element = document.getElementById("#price-menu");
 element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}
// onclick= "scrollElement()"