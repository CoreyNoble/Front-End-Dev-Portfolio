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
    if ($(this).scrollTop() >= 1200) {       // If page is scrolled more than 1200px
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

// Mobile Navigation
// Navigation
$(function () {
    var pull = $('#pull');
    var menu = $('nav ul');
    var menuHeight = menu.height();

    var menuOpen = 1;

    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();

        if (menuOpen === 1){
            document.getElementById("nav-home-link").focus();
            menuOpen = 2;
        } else {
            document.getElementById("main").focus();
            menuOpen = 1;
        }            
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

// Initialize AOS
AOS.init({
    duration: 1000
});

// Contact Validation
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var dir=getParameterByName('captcha');

$(document).ready(function() {
    if (dir=='none'){
        $('#captcha-none').removeClass('hide');
        $('#captcha-none').focus();
        $('#captcha-none').attr( "aria-hidden", "false" );
    } 
    if (dir=='failed'){
        $('#captcha-failed').removeClass('hide');
        $('#captcha-failed').focus();
        $('#captcha-failed').attr( "aria-hidden", "false" );
    } 
    else{
        return;
    }
});