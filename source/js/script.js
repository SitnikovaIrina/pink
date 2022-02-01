var navMain = document.querySelector('.nav');
      var navToggle = document.querySelector('.inner-header__toggle');

      navMain.classList.remove('nav--nojs');

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('nav--hide')) {
          navMain.classList.remove('nav--hide');
          navMain.classList.add('nav--opened');
        } else {
          navMain.classList.add('nav--hide');
          navMain.classList.remove('nav--opened');
        }
      });

var toggleMain = document.querySelector('.inner-header__button-open');
      var navToggle = document.querySelector('.inner-header__toggle');

      toggleMain.classList.remove('inner-header__button-open--nojs');

      navToggle.addEventListener('click', function() {
        if (toggleMain.classList.contains('inner-header__button-open--close-menu')) {
          toggleMain.classList.remove('inner-header__button-open--close-menu');
          toggleMain.classList.add('inner-header__button-open--open-menu');
        } else {
          toggleMain.classList.add('inner-header__button-open--close-menu');
          toggleMain.classList.remove('inner-header__button-open--open-menu');
        }
      });

var toggleMain = document.querySelector('.inner-header__button-close');
      var navToggle = document.querySelector('.inner-header__toggle');

      toggleMain.classList.remove('inner-header__button-close--nojs');

      navToggle.addEventListener('click', function() {
        if (toggleMain.classList.contains('inner-header__button-close--open-menu')) {
          toggleMain.classList.remove('inner-header__button-close--open-menu');
          toggleMain.classList.add('inner-header__button-close--close-menu');
        } else {
          toggleMain.classList.add('inner-header__button-close--open-menu');
          toggleMain.classList.remove('inner-header__button-close--close-menu');
        }
      });

var menuMain = document.querySelector('.inner-header__menu');
      var navToggle = document.querySelector('.inner-header__toggle');

      menuMain.classList.remove('inner-header__menu--nojs');

      navToggle.addEventListener('click', function() {
        if (menuMain.classList.contains('inner-header__menu--close-menu')) {
          menuMain.classList.remove('inner-header__menu--close-menu');
          menuMain.classList.add('inner-header__menu--open-menu');
        } else {
          menuMain.classList.add('inner-header__menu--close-menu');
          menuMain.classList.remove('inner-header__menu--open-menu');
        }
      });
