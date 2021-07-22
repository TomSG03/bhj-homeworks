const link = document.getElementsByClassName('menu__item');
let oldLink = null;

function checkSub(element) {
  return (element.closest('.menu__item').querySelector('.menu_sub') != null) ? true : false;
}

Array.from(link).forEach(function (element) {
    let menuLink = element.querySelector('.menu__item > .menu__link');
    menuLink.onclick = function () {
      if ((oldLink != null) && (oldLink != this)) {
        oldLink.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active');
      } 
      if (oldLink === this) {
        oldLink.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active');
        oldLink = null;
        return false;
      }
      else { 
        if (checkSub(this) === true) {
          this.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
          oldLink = this;
          return false;
        }
      }
    }
});

