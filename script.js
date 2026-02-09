const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  

  breakpoints: {
    320: {
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

showBtn.addEventListener('click', () => hideBottomGrid(true));
hideBtn.addEventListener('click', () => hideBottomGrid(false));




 