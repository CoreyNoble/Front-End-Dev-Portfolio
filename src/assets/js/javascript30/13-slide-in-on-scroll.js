// debounce: for performance. Pass a function through debounce to minimize how often the function can be run (wait = 20(milliseconds)).
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Grab all elements with .slide-in
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // Loop over each image
    sliderImages.forEach(sliderImage => {
        // The pixel level for where you are at the bottom of the viewport.
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // Where the bottom of the image is.
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // When the viewport is halfway scrolled through the height of the image.
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        // Have not scrolled past the image.
        const isNotScrolledPast = window.scrollY < imageBottom;

        // When we toggle the visibilty classes
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active'); // Show
        } else {
            sliderImage.classList.remove('active'); // Hide
        }
    });
}

// Every time the window is scrolled, debounce(checkslide())
window.addEventListener('scroll', debounce(checkSlide));