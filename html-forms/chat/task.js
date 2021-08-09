let timeStamp;
let fl = 0;
let timeId, scroll;

const messages = document.querySelector( '.chat-widget__messages' );

function showMessage(robot, message, param) {
  const time = new Date().toTimeString().slice(0, 9);
  if (!robot) {
    timeStamp = time;
  } 
  messages.innerHTML += `
    <div class="message ${param}">
      <div class="message__time">${time.slice(0, 5)}</div>
      <div class="message__text">${message}</div>
    </div>`;
    scroll.scrollTop = scroll.scrollHeight;
}

function getAnswer(random) {
  const words = ['Введите вопрос', 'Как дела?', 'Я знаю', 'Я не знаю', 'Да', 'Нет' ];
    let index = 0;
    if (random) {
      index = Math.floor(Math.random() * words.length);
    } 
  return words[index];
}

document.querySelector('.chat-widget').addEventListener('click', (e) => {
  e.target.closest('.chat-widget').classList.add('chat-widget_active');
  scroll = document.querySelector('.chat-widget__messages-container');
  timeId = setInterval(() => {
    fl++;
    if (fl > 30) {
      showMessage(true, getAnswer(false), '');
      fl = 0;
    }
  }, 1000)
})

document.getElementById('chat-widget__input').addEventListener('change', (e) => {
  if (e.target.value.trim()) {
    fl = 0;
    showMessage(false, e.target.value, 'message_client');
    e.target.value = '';
    showMessage(true, getAnswer(true), '');
  }
})

