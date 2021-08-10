let progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function(event) {
      console.log(`Отправлено ${event.loaded} из ${event.total}`);
      progress.value = event.loaded / event.total;
  }
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(formData);
});
