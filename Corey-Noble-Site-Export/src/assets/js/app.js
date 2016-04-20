$(document).foundation();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

/* Back to Top Navigation */
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

/* Animations */
/* Initialize WOW*/
new WOW().init();

/* End of Shorcases */
$('#showcase3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ShowcaseTransition);

/* Showcase Pulsing */
function ShowcaseTransition(){
  $('#showcase1').removeClass('bounceIn');
  $('#showcase1').addClass('pulse infinite');
  $('#showcase2').removeClass('bounceIn');
  $('#showcase2').addClass('pulse infinite');
  $('#showcase3').removeClass('bounceIn');
  $('#showcase3').addClass('pulse infinite');
}
