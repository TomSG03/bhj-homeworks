class DropDown {
  constructor(list) {
    this.menu = list.querySelector('.dropdown__value');
    this.list = Array.from(list.getElementsByClassName('dropdown__item'));
    this.initDropDown();
    this.initSelect(this.list, this.menu);
  }

  initSelect(list, menu) {
    list.forEach(function (element) {
      element.onclick = () => {
        menu.textContent = element.textContent;
        menu.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        return false;
      }
    })
  }

  initDropDown() {
    this.menu.addEventListener('click', function() {
      const link = this.closest('.dropdown').querySelector('.dropdown__list');
      const open = link.classList.contains('dropdown__list_active');
      if ( open === true) {
        link.classList.remove('dropdown__list_active')
      }
      else {
        link.classList.add('dropdown__list_active')
      }
    })
  }
}

const dropDownList = document.querySelector('.dropdown');

new DropDown(dropDownList)