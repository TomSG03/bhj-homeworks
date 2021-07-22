const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

const modalClose = Array.from(document.getElementsByClassName('modal'));

for (let index = 0; index < modalClose.length; index++) {
   modalClose[index].querySelector('.modal__close').onclick = function() {
    this.closest('.modal').classList.remove('modal_active');
   };
}

const success = document.querySelector('.show-success');
success.onclick = function() {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}

