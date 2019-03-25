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
    if (window.matchMedia("(min-width: 992px)").matches) {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    } else {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      }
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

})(jQuery);

var bc = document.getElementById('mainNav');
var nb = document.getElementsByClassName('navbar-brand')[0];
var nt = document.getElementsByClassName('navbar-toggler')[0];
var nl = document.getElementsByClassName("nav-link");
var tIO = false;

function bottomToTop(bTT) {
  if (bTT.matches) {
    bc.className = "navbar navbar-expand-lg navbar-dark fixed-top";
  } else {
    bc.className = "navbar navbar-expand-lg navbar-dark fixed-bottom";
  }
}

var bTT = window.matchMedia("(min-width: 576px)");
bottomToTop(bTT);
bTT.addListener(bottomToTop);

function responsiveCheck(bTT) {
  if (rC.matches) {
    bc.style.backgroundColor = 'transparent';
    bc.style.pointerEvents = 'all';
    nb.style.display = 'block';
    for (var i = 0; i < nl.length; i++) {
      nl[i].style.visibility = 'visible';
      nl[i].style.opacity = '1';
    }
    nt.style.display = 'none';
  } else {
    tIO = true;
    transparencyIO();
  }
}

var rC = window.matchMedia("(min-width: 992px)");
responsiveCheck(rC);
rC.addListener(responsiveCheck);

function transparencyIO() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    switch(tIO) {
      case false:
        bc.style.backgroundColor = 'var(--nav-foot)';
        bc.style.pointerEvents = 'all';
        nb.style.display = 'block';
        for (var i = 0; i < nl.length; i++) {
          nl[i].style.visibility = 'visible';
          nl[i].style.opacity = '1';
        }
        nt.style.display = 'none';
        tIO = true;
        break;
      case true:
        bc.style.backgroundColor = 'transparent';
        bc.style.pointerEvents = 'none';
        nb.style.display = 'none';
        for (var i = 0; i < nl.length; i++) {
          nl[i].style.visibility = 'hidden';
          nl[i].style.opacity = '0';
        }
        nt.style.display = 'block';
        tIO = false;
        break;
    }
  }
}

$(function () {
  $('[data-toggle="popover"]').popover();
});

var check = Math.random() >= 0.5;

function themeChanger() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  switch(check) {
    case false:
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
}

themeChanger();