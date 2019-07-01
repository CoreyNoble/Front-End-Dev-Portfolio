// Scoping this exercise to the page ID. Parent <div>.
const page = document.querySelector('#javascript30-24');
// Grab the 'nav'. <div> inside of 'page'.
const nav = page.querySelector('#sticky-nav');
// The position of the 'nav' relative to the top of the page.
let topOfNav = nav.offsetTop;

// Determines if the nav is fixed on the page or not.
function fixNav() {
  // If the window scrollY position is >= the top of the 'nav' (topOfNav).
  if (window.scrollY >= topOfNav) {
    // Add padding to the top of the parent the 'page' Equal to the height of the 'nav'. This ensures the newly fixed 'nav' does not hide any content underneath of it.
    page.style.paddingTop = nav.offsetHeight + 'px';
    // Add the class that sets 'nav' to position: fixed;.
    page.classList.add('fixed-nav');
  } else { // If the window is not scrolled far enough.
    // Remove the class that sets 'nav' to position: fixed;.
    page.classList.remove('fixed-nav');
    // Remove the padding at the top of 'page'.
    page.style.paddingTop = 0;
  }
}

// When the window is scrolled, fixNav().
window.addEventListener('scroll', fixNav);