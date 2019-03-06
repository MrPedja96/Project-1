(function($) {
    "use strict";
  
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });
  
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
  
  })(jQuery);