const slides = Array.from(document.getElementsByClassName('slider__item'));
const naviButton = Array.from(document.getElementsByClassName('slider__dot'));
const buttonLR = Array.from(document.getElementsByClassName('slider__arrow'));
const indexMax = naviButton.length - 1;
let position = 0;

buttonLR.forEach((element) => element.onclick = shiftButton);

naviButton.forEach((element, index) => {
  element.onclick = function() {
    hideSlide(position);
    position = index;
    showSlide(position);
  }
})

function hideSlide(position) {
  slides[position].classList.remove('slider__item_active');
  naviButton[position].classList.remove('slider__dot_active');
}

showSlide = (position) => {
  slides[position].classList.add('slider__item_active');
  naviButton[position].classList.add('slider__dot_active');
}  

function shiftButton() {
  const dir = this.className.includes("next") ? 1 : -1;

  hideSlide(position);

  position += dir;
  if (position < 0) {
    position = indexMax;
  }
  if (position > indexMax) {
    position = 0;
  }

  showSlide(position);
}

showSlide(position);