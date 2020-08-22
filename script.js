const menuBars = document.querySelector('.menu-bars');
const overlay = document.querySelector('.overlay');

const navs = document.querySelectorAll('.nav');

function toggleNav() {
  //Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    navs.forEach((nav, index) => {
      nav.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`);
    });
  } else {
    navs.forEach((nav, index) => {
      nav.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`);

    });
  }
}
//Event Listeners
menuBars.addEventListener('click', toggleNav);
navs.forEach((nav, index) => nav.addEventListener('click', toggleNav));
