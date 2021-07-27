class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeElement = container.querySelector('.status__time');
    

    this.timeId = null;
    this.timeInterval = 0;
   
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    
    
  }

   registerEvents() {

    document.addEventListener('keydown', (event) => {
      if (event.key.toUpperCase() === this.currentSymbol.textContent.toUpperCase()) {
        this.success();
      }
      else {
        this.fail();
      }

    })
  }
 
  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    
    clearInterval(this.timeId);   
    this.wordBackGround = Array.from(this.container.querySelectorAll('.symbol'));
    this.timeInterval = word.length;
    this.timeElement.textContent = this.timeInterval;
    this.timeId = setInterval((element) => {
      
      
      let i = element.timeElement.textContent--;
      if (i === 0) {
        element.fail()
      } else {
          element.wordBackGround[this.timeInterval - i].classList.add('symbol_time');
        }  
 
    },1000, this)

  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

