
      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
          breakpoints: {
    768: {
      enabled: false,
    }
  }
        
      });

      const showBtn = document.getElementById('showButton');
const hideBtn = document.getElementById('hideButton');
const bottomItems = document.querySelectorAll('.hide');

function hideBottomGrid(show) {
  bottomItems.forEach(item => {
    if (show) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });

  showBtn.style.display = show ? 'none' : 'flex';
  hideBtn.style.display = show ? 'flex' : 'none';
}

swiper.update();
showBtn.addEventListener('click', () => hideBottomGrid(true));
hideBtn.addEventListener('click', () => hideBottomGrid(false));