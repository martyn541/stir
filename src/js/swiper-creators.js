import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper-creators", {
  slidesPerView: 1,
  spaceBetween: 56,
  centeredSlides: true,
  initialSlide: 2,
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
