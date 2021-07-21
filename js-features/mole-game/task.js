let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
  getHole(index).onclick = function() {
    if (this.className.includes('hole_has-mole')) {
      dead.textContent++;
      if (dead.textContent == 10) {
        alert(`Победа !!! Убито ${dead.textContent} кротов`);
        reset();
      }
    } else {
      lost.textContent++;
      if (lost.textContent == 5) {
        alert(`Поражение !!! ${lost.textContent} промахов`);
        reset();
      }
    }
  }
}