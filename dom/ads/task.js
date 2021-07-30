class Spin {
  constructor(spinner) {
    this.rotor = Array.from(spinner.querySelectorAll('.rotator__case'));
    this.next();
    this.timeOut = 1;
  }

  next() {
    setTimeout(function (ths) {
      let index = ths.rotor.findIndex(element => element.classList.contains('rotator__case_active') === true);
      ths.rotor[index].classList.remove('rotator__case_active');
      index = (index === ths.rotor.length - 1) ? index = 0 : index += 1;
      ths.rotor[index].classList.add('rotator__case_active');
      ths.rotor[index].style.color = ths.rotor[index].dataset.color;
      ths.timeOut = ths.rotor[index].dataset.speed;
      setTimeout(ths.next(), ths.timeOut);
    }, this.timeOut, this);
  };
}

Array.from(document.querySelectorAll('.rotator')).forEach(item => new Spin(item));;

