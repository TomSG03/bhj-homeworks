const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

let xhrBtn = new XMLHttpRequest;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onload = function() {
  const rezult = JSON.parse(xhr.responseText);
  title.textContent = rezult.data.title;
  rezult.data.answers.forEach(item => {
    let btn = `<button class="poll__answer">${item}</button> `
    answers.insertAdjacentHTML('beforeend', btn);
  })

  const answerBtn = [...document.getElementsByClassName('poll__answer')];
  answerBtn.forEach((item, i) => {
    item.onclick = function() {
      alert('Спасибоб ваш голос засчитан!')
      xhrBtn.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
      xhrBtn.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhrBtn.send(`vote=${rezult.id}&answer=${i}`);
    }
  })
};

xhrBtn.onload = function() {
  const rezult = JSON.parse(xhrBtn.responseText).stat;
  answers.innerHTML = '';
  let summ = 0;
  rezult.forEach(item => {summ += item.votes});
  rezult.forEach(item => {
    title.innerHTML += `<div>${item.answer}: ${(item.votes / summ * 100).toFixed(2)}%</div>`;
  })
}