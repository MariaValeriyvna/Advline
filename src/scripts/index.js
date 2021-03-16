// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
const swiper = new Swiper(".swiper-container", {
  speed: 2000,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});
