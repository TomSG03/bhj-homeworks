if (localStorage.modalClosed === undefined) {
  document.getElementById('subscribe-modal').classList.add('modal_active');
}

document.querySelector('.modal__close').addEventListener('click', () => {
  localStorage.modalClosed = true;
  document.getElementById('subscribe-modal').classList.remove('modal_active');
})