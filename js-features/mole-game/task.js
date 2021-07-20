let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let index = 1; index < 10; index++) {
  let getHole = document.getElementById(`hole${index}`);
  getHole.onclick = () => {
    if (getHole.className.includes('hole_has-mole')) {
      dead.textContent++;
      if (dead.textContent == 10) {
        alert('Победа !!!');
        reset();
      }
    } else {
      lost.textContent++;
      if (lost.textContent == 5) {
        alert('Поражение !!!');
        reset();
      }
    }
  }
}