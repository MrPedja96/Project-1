function reload() {
  location.reload(true);
}

var lh = document.getElementById('logo-header');

/* IE and Edge optimization
if (navigator.userAgent.indexOf('Edge') >= 0){
  
} else {
  
}
*/

(function($) {
  "use strict";

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#main-nav',
    offset: 100,
  });

  var navbarCollapse = function() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      if ($("#main-nav").offset().top > 100) {
        $("#main-nav").addClass("navbar-shrink");
      } else {
        $("#main-nav").removeClass("navbar-shrink");
      }
    } else {
      if ($("#main-nav").offset().top > 100) {
        $("#main-nav").addClass("navbar-shrink");
      }
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

})(jQuery);

var bc = document.getElementById('main-nav');
var nb = document.getElementsByClassName('navbar-brand')[0];
var nt = document.getElementsByClassName('navbar-toggler')[0];
var nl = document.getElementsByClassName("nav-link");
var caA = document.getElementsByClassName("card");
var sIL = document.getElementsByClassName("order-md-1");
var sIR = document.getElementsByClassName("order-md-2");
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

function animateAdd(aA) {
  if (aA.matches) {
    for(i = 0; i < sIL.length; i++) {
      sIL[i].classList.add("slideInLeft");
    }
    for(i = 0; i < sIR.length; i++) {
      sIR[i].classList.add("slideInRight");
    }
    for(i = 0; i < caA.length; i++) {
      caA[i].classList.add("fadeInUp");
    }
  } else {
    
    for(i = 0; i < sIL.length; i++) {
      sIL[i].classList.remove("slideInLeft");
    }
    for(i = 0; i < sIR.length; i++) {
      sIR[i].classList.remove("slideInRight");
    }
    for(i = 0; i < caA.length; i++) {
      caA[i].classList.remove("fadeInUp");
    }
  }
}

var aA = window.matchMedia("(min-width: 768px)");
animateAdd(aA);
aA.addListener(animateAdd);

function responsiveCheck(rC) {
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

/*var gigs = [
  {
      "year": "2013",
      "date": "23.11",
      "venue": "CK13",
      "city": "Novi Sad"
  },
  {
      "year": "2014",
      "date": "14.03",
      "venue": "Quarter",
      "city": "Novi Sad"
  },
  {
      "year": "2014",
      "date": "17.04",
      "venue": "Route 66",
      "city": "Novi Sad"
  },
  {
      "year": "2014",
      "date": "28.06",
      "venue": "Bumerang",
      "city": "Belgrade"
  },
  {
      "year": "2014",
      "date": "20.09",
      "venue": "CK13",
      "city": "Novi Sad"
  },
  {
      "year": "2014",
      "date": "01.11",
      "venue": "Quarter",
      "city": "Novi Sad"
  },
  {
      "year": "2014",
      "date": "19.12",
      "venue": "Route 66",
      "city": "Novi Sad"
  },
  {
      "year": "2015",
      "date": "28.02",
      "venue": "Quarter",
      "city": "Novi Sad"
  },
  {
      "year": "2015",
      "date": "29.05",
      "venue": "Quarter",
      "city": "Novi Sad"
  },
  {
      "year": "2015",
      "date": "07.11",
      "venue": "Quarter",
      "city": "Novi Sad"
  },
  {
      "year": "2016",
      "date": "14.10",
      "venue": "Quarter",
      "city": "Novi Sad"
  },
  {
      "year": "2017",
      "date": "10.11",
      "venue": "SKCNS Fabrika",
      "city": "Novi Sad"
  },
  {
      "year": "2017",
      "date": "21.11",
      "venue": "Dvorište",
      "city": "Novi Sad"
  },
  {
      "year": "2017",
      "date": "16.12",
      "venue": "CK13",
      "city": "Novi Sad"
  },
  {
      "year": "2018",
      "date": "26.01",
      "venue": "Underground Disco",
      "city": "Beočin"
  },
  {
      "year": "2018",
      "date": "02.03",
      "venue": "Buka pod Rumom",
      "city": "Ruma"
  },
  {
      "year": "2018",
      "date": "28.04",
      "venue": "Zombi",
      "city": "Bečej"
  },
  {
      "year": "2018",
      "date": "04.05",
      "venue": "CK13",
      "city": "Novi Sad"
  },
  {
      "year": "2018",
      "date": "06.05",
      "venue": "Dom Omladine",
      "city": "Belgrade"
  },
  {
      "year": "2018",
      "date": "28.07",
      "venue": "Fest",
      "city": "Zemun"
  },
  {
      "year": "2018",
      "date": "31.07",
      "venue": "Perla",
      "city": "Bački Petrovac"
  },
  {
      "year": "2018",
      "date": "18.08",
      "venue": "Dvorište",
      "city": "Novi Sad"
  },
  {
      "year": "2018",
      "date": "21.10",
      "venue": "SKCNS Fabrika",
      "city": "Novi Sad"
  },
  {
      "year": "2019",
      "date": "23.02",
      "venue": "CK13",
      "city": "Novi Sad"
  },
];*/

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
      document.body.style.setProperty('--bg-xolor-secondary', "#282828");
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
      document.body.style.setProperty('--bg-xolor-secondary', "#dcdcdc");
      document.body.style.setProperty('--logo-header', 'url("../images/logo-crimson.png")');
      document.body.style.setProperty('--logo-header-vertical', 'url("../images/logo-crimson-vertical.png")');
      document.body.style.setProperty('--logo-svg', 'url("../images/logo-crimson.svg")');
      document.body.style.setProperty('--favixon', 'url("../images/favicon-crimson.ico")');
      check = false;
      break;
  }
}

themeChanger();