// Not a ton of code, but hard to
const page = document.querySelector('#javascript30-24');
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    page.style.paddingTop = nav.offsetHeight + 'px';
    page.classList.add('fixed-nav');
  } else {
    page.classList.remove('fixed-nav');
    page.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);