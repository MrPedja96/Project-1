var check = true;

/*function cookie() {
  var c = readCookie("check");
  if (c) {
      check = c;
      themeChanger();
  }
}

function makeCookie(name, value, days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}*/

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

$(function () {
  $('[data-toggle="popover"]').popover()
})

function themeChanger() {
  var lh = document.getElementById('logoHeader');
  var ln = document.getElementById('logoNav');
  switch(check) {
    case false:
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '../images/favicon-gold.ico';
      document.getElementsByTagName('head')[0].appendChild(link);
      document.body.style.setProperty('--bg-xolor', "#0c0c0c");
      document.body.style.setProperty('--body-xolor', "gray");
      document.body.style.setProperty('--nav-foot', "#181818");
      document.body.style.setProperty('--xolor', "#dbae59");
      document.body.style.setProperty('--xolor-darker', "#80693f");
      document.body.style.setProperty('--xolor-darker-darker', "#403520");
      document.body.style.setProperty('--logo-header', 'url("../images/logo-gold.png")');
      document.body.style.setProperty('--logo-header-vertical', 'url("../images/logo-gold-vertical.png")');
      document.body.style.setProperty('--logo-svg', 'url("../images/logo-gold.svg")');
      document.body.style.setProperty('--favixon', 'url("../images/favicon-gold.ico")');
      check = true;
      break;
    case true:
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '../images/favicon-crimson.ico';
      document.getElementsByTagName('head')[0].appendChild(link);
      document.body.style.setProperty('--bg-xolor', "#e9e9e9");
      document.body.style.setProperty('--body-xolor', "#454545");
      document.body.style.setProperty('--nav-foot', "#ddd");
      document.body.style.setProperty('--xolor', "#b22a2a");
      document.body.style.setProperty('--xolor-darker', "#851f1f");
      document.body.style.setProperty('--xolor-darker-darker', "#591515");
      document.body.style.setProperty('--logo-header', 'url("../images/logo-crimson.png")');
      document.body.style.setProperty('--logo-header-vertical', 'url("../images/logo-crimson-vertical.png")');
      document.body.style.setProperty('--logo-svg', 'url("../images/logo-crimson.svg")');
      document.body.style.setProperty('--favixon', 'url("../images/favicon-crimson.ico")');
      check = false;
      break;
  }
  //makeCookie("check", check, 365);
}