const textArea = document.getElementById('editor');

textArea.addEventListener('keyup', event => {
  localStorage.textArea = textArea.value;
})

window.onload = function() {
  if (localStorage.textArea != undefined) {
    document.getElementById('editor').value = localStorage.textArea;
  }
};

document.getElementById('clear').addEventListener('click', () => {
  localStorage.removeItem('textArea');
  textArea.value = '';
})

