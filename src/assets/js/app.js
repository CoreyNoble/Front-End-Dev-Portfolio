$(document).foundation();

// /* Animations */
// /* Initialize WOW*/
// new WOW().init(){};

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


$(function() {

  var $window = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInRight')
      }
    });
  }

  revealOnScroll();
});

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
