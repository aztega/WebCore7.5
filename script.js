const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    375: {
      enabled: false,
    }
  }
});