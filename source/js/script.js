//меню

var navMain = document.querySelector('.nav');
      var navToggle = document.querySelector('.inner-header__toggle');

      navMain.classList.remove('nav--nojs');


      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('nav--opened')) {
          navMain.classList.remove('nav--opened');
          navMain.classList.add('nav--hide');
        } else {
          navMain.classList.add('nav--opened');
          navMain.classList.remove('nav--hide');
        }
      });

//кнопка

var toggleMain = document.querySelector('.inner-header__toggle');
      var navToggle = document.querySelector('.inner-header__toggle');

      toggleMain.classList.remove('inner-header__toggle--nojs');

      navToggle.addEventListener('click', function() {
        if (toggleMain.classList.contains('inner-header__toggle-close')) {
          toggleMain.classList.remove('inner-header__toggle-close');
        } else {
          toggleMain.classList.add('inner-header__toggle-close');
        }
      });

//шапка меню

var menuMain = document.querySelector('.inner-header');
      var navToggle = document.querySelector('.inner-header__toggle');

      menuMain.classList.remove('inner-header--nojs');

      navToggle.addEventListener('click', function() {
        if (menuMain.classList.contains('inner-header--close-menu')) {
          menuMain.classList.remove('inner-header--close-menu');
          menuMain.classList.add('inner-header--open-menu');
        } else {
          menuMain.classList.add('inner-header--close-menu');
          menuMain.classList.remove('inner-header--open-menu');
        }
      })
