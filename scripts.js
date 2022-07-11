//Create function to select elements

const selectElement = ({ s }) => document.querySelector(s);
selectElement({ s: '.ion-md-menu' }).addEventListener('click', () => {
    selectElement({ s: 'nav' }).classList.add('active');
});
selectElement({ s: '.ion-md-close' }).addEventListener('click', () => {
    selectElement({ s: 'nav' }).classList.remove('active');
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    grabCursor:true,
    followFinger:true,
    preloadImages:true,
    preventClicks:true,
    autoplay: {
    delay: 7000,

    disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
 