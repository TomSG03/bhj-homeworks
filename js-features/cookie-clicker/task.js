const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speedClick = document.getElementById("clicker__time");
let lastClickTime = 0;

image.onclick = () => {
  let time = new Date();
  let currentTime = time.getTime();

  image.width = (image.width == 200) ? 240 : 200;
  counter.textContent++;

  speedClick.textContent = Number(1000/(currentTime - lastClickTime)).toFixed(2);
  lastClickTime = currentTime;
};