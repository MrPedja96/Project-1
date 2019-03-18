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

function reload() {
  location.reload(true);
}

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

var bc = document.getElementById('mainNav');
var nb = document.getElementsByClassName('navbar-brand')[0];
var nt = document.getElementsByClassName('navbar-toggler')[0];
var tIO = false;

function bottomToTop(bTT) {
  if (bTT.matches) {
    document.getElementById('mainNav').className = "navbar navbar-expand-lg navbar-dark fixed-top";
  } else {
    document.getElementById('mainNav').className = "navbar navbar-expand-lg navbar-dark fixed-bottom";
  }
}

var bTT = window.matchMedia("(min-width: 576px)");
bottomToTop(bTT);
bTT.addListener(bottomToTop);

function transparencyIO() {
  if (window.matchMedia("(max-width: 575.98px)").matches) {
    switch(tIO) {
      case false:
        bc.style.backgroundColor = 'var(--nav-foot)';
        bc.style.pointerEvents = 'all';
        nb.style.display = 'block';
        nt.style.display = 'none';
        tIO = true;
        break;
      case true:
        bc.style.backgroundColor = 'transparent';
        bc.style.pointerEvents = 'none';
        nb.style.display = 'none';
        nt.style.display = 'block';
        tIO = false;
        break;
    }
  }
}

$(function () {
  $('[data-toggle="popover"]').popover()
})

var check = Math.random() >= 0.5;

function themeChanger() {
  switch(check) {
    case false:
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '../images/favicon-gold.ico';
      document.getElementsByTagName('head')[0].appendChild(link);
      document.body.style.setProperty('--bg-xolor', "#101010");
      document.body.style.setProperty('--body-xolor', "#a0a0a0");
      document.body.style.setProperty('--nav-foot', "#202020");
      document.body.style.setProperty('--xolor', "#dbae59");
      document.body.style.setProperty('--xolor-darker', "#a48243");
      document.body.style.setProperty('--xolor-darker-darker', "#80693f");
      document.body.style.setProperty('--bg-xolor-secondary', "#303030");
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
      document.body.style.setProperty('--bg-xolor', "#f0f0f0");
      document.body.style.setProperty('--body-xolor', "#606060");
      document.body.style.setProperty('--nav-foot', "#e0e0e0");
      document.body.style.setProperty('--xolor', "#b22a2a");
      document.body.style.setProperty('--xolor-darker', "#851f1f");
      document.body.style.setProperty('--xolor-darker-darker', "#591515");
      document.body.style.setProperty('--bg-xolor-secondary', "#d0d0d0");
      document.body.style.setProperty('--logo-header', 'url("../images/logo-crimson.png")');
      document.body.style.setProperty('--logo-header-vertical', 'url("../images/logo-crimson-vertical.png")');
      document.body.style.setProperty('--logo-svg', 'url("../images/logo-crimson.svg")');
      document.body.style.setProperty('--favixon', 'url("../images/favicon-crimson.ico")');
      check = false;
      break;
  }
  //makeCookie("check", check, 365);
}

themeChanger();