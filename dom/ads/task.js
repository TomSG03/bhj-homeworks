class Rotator {
  constructor(rotor) {
    this.rotor = rotor;
    this.next();
    this.fl = true;
  }

  next() {
    setTimeout(function (ths) {
      if (ths.fl === false) {
        ths.rotor.classList.toggle('rotator__case_active');
        ths.rotor = ths.rotor.parentElement.firstElementChild;
        ths.rotor.style.color = ths.rotor.dataset.color;
        ths.rotor.classList.toggle('rotator__case_active');
        ths.fl = true;
      } else {
        ths.rotor.classList.toggle('rotator__case_active');
        ths.rotor = ths.rotor.nextElementSibling;
        ths.rotor.style.color = ths.rotor.dataset.color;
        ths.rotor.classList.toggle('rotator__case_active');
        
        if (ths.rotor.nextElementSibling === null) {
          ths.fl = false;
        }
      }
      setTimeout(ths.next(), ths.rotor.dataset.speed);
    }, this.rotor.dataset.speed, this);
  }
}

Array.from(document.querySelectorAll('.rotator')).forEach(item => new Rotator(item.firstElementChild));

