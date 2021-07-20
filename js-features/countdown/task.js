const timerWiner = document.getElementById("timer");
let arrCounter = timerWiner.textContent.split(':');
let counter = Number(arrCounter[0] * 3600) + Number(arrCounter[1] * 60) + Number(arrCounter[2]);
let timeId;

function counterToStr(sec) {
  let hh = Math.floor(sec / 3600);
  let mm = Math.floor((sec - hh * 3600) / 60);
  let ss = Number(sec % 60).toFixed(0);

  return (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm + ':' + (ss < 10 ? '0' : '') + ss;
}

function ShowTimer() {
  counter--;
  timerWiner.textContent = counterToStr(counter);
  console.log(counter);
  if (counter === 0) {
    clearInterval(timeId);
    alert('Вы победили в конкурсе!');
  }
}

timeId = setInterval(ShowTimer, 1000);