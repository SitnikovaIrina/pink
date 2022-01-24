var navMain = document.querySelector('.nav');
      var navToggle = document.querySelector('.page-header__toggle');

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
