const viewportHeight = window.innerHeight;

class Scroll {
  constructor(banner) {
    this.banner = banner;
    this.init(this);
}

  init(ths) {
    window.addEventListener('scroll', function () {
      const {top, bottom} = ths.banner.getBoundingClientRect()
      if (!ths.banner.classList.contains('reveal_active') && (top < viewportHeight) && (bottom > 0)) {
        ths.banner.classList.add('reveal_active');
      } 
      if (ths.banner.classList.contains('reveal_active') && ((top > viewportHeight) || (bottom < 0))) { 
          ths.banner.classList.remove('reveal_active');
        }
    });
  }
}

Array.from(document.querySelectorAll('.reveal')).forEach(item => new Scroll(item));