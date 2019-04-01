import $ from 'jquery';
//import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// Back to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 1200) {       // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(800);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(800);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});