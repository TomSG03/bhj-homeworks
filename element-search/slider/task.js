let position = 0;

const buttonLR = Array.from(document.getElementsByClassName('slider__arrow'));
buttonLR.forEach((element) => element.onclick = shiftButton);

const naviButton = Array.from(document.getElementsByClassName('slider__dot'));
naviButton.forEach((element, index) => {
  element.onclick = function() {
    position = index;
    shiftSlide(0);
  }
})

function shiftSlide (dir) {
  const slides = Array.from(document.getElementsByClassName('slider__item'));
  let indexMax = slides.length - 1;

  position += dir;
  if (position < 0) {
    position = indexMax;
  }
  if (position > indexMax) {
    position = 0;
  }

  let index = slides.findIndex(element => element.classList.contains('slider__item_active'));

  slides[index].classList.remove('slider__item_active');
  slides[position].classList.add('slider__item_active');
  naviButton[index].classList.remove('slider__dot_active');
  naviButton[position].classList.add('slider__dot_active');
}  

function shiftButton() {
  const dir = this.className.includes("next") ? 1 : -1;
  shiftSlide(dir);
}

shiftSlide(0);