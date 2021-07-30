const book = document.getElementById('book');

class Control {
  constructor(startValue, dataSet, arrElem, property, active) {
    this.active = active;
    this.oldValue = startValue;
    this.DataSet = 'event.target.dataset.' + dataSet;
    this.arrElem = [...arrElem];
    this.prop = property;
    this.init(this);
  }

  setBook(oldValue, newValue) {
    if (book.classList.contains(newValue) === false) {
      if (oldValue != '') {
        book.classList.remove(oldValue);
      }
      if (newValue != undefined) {
        book.classList.add(newValue);
      }
    }
    return newValue;
  }

  setControl(evt, arr, active) {
    const i = arr.findIndex(element => element.classList.contains(active));
    arr[i].classList.remove(active);
    evt.target.classList.add(active);
  }

  init(ths) {
    this.arrElem.forEach(function (element) {
      element.onclick = function (event) {
        ths.setControl(event, ths.arrElem, ths.active);
        ths.oldValue = ths.setBook(ths.oldValue, ths.prop[eval(ths.DataSet)]);
        return false;
      }
    })
  }
}

//Размер
const font = document.getElementsByClassName('font-size');
const propSize = {
  'small': 'book_fs-small',
  'norm': '',
  'big': 'book_fs-big'
  }
new Control('', 'size', font, propSize, 'font-size_active');

//Цвет
const color = document.querySelector('.book__control_color').getElementsByClassName('color');
const propColor = {
  'black': 'book_color-black',
  'gray': 'book_color-gray',
  'whitesmoke': 'book_color-whitesmoke'
  }
new Control('book_color-black', 'textColor', color, propColor, 'color_active');

//Фон
const backGround = document.querySelector('.book__control_background').getElementsByClassName('color');
const propBg = {
  'black': 'book_bg-black',
  'gray': 'book_bg-gray',
  'white': 'book_bg-white'
  }
new Control('book_bg-white', 'bgColor', backGround, propBg, 'color_active');