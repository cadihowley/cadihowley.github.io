//Navbar scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

//Animations on scroll

var $animationElements = $('.animation-element');
var $window = $(window);

$window.on('scroll resize', checkIfInView);

$window.trigger('scroll');

function checkIfInView() {
  var windowHeight = $window.height();
  var windowTopPosition = $window.scrollTop();
  var windowBottomPosition = (windowTopPosition + windowHeight);

  $.each($animationElements, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);

    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


