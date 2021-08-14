const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function logIn() {
  form.closest('.signin').classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = localStorage.user_id;
}

document.getElementById('signin__btn').addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(formData);

  xhr.onload = () => {
    const rezult = JSON.parse(xhr.responseText);

    if (rezult.success) {
      localStorage.user_id = rezult.user_id;
      logIn();
    }
    else {
      alert('Неверный логин/пароль');
    }
    [...form.querySelectorAll('.control')].forEach(item => item.value = '');
  }
})

document.getElementById('signout__btn').addEventListener('click', (event) => {
  form.closest('.signin').classList.add('signin_active');
  welcome.classList.remove('welcome_active');
  localStorage.removeItem('user_id');
})

window.onload = () => {
  if (localStorage.user_id != undefined) {
    logIn();
  }
}
