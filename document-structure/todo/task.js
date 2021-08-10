function addTask(value) {
  const textHTML = `<div class="task"> <div class="task__title"> ${value} </div> <a href="#" class="task__remove">&times;</a> </div>`

  document.getElementById('tasks__list').insertAdjacentHTML('beforeend', textHTML);

  linksDelete = [...document.querySelectorAll('.task__remove')];
  linksDelete[linksDelete.length - 1].addEventListener('click', e => {
    e.target.closest('.task').remove();
  })
}

document.getElementById('tasks__add').addEventListener('click', event => {
  event.preventDefault();
  const text = document.getElementById('task__input')
  if (text.value.trim()) {
    addTask(text.value);
    text.value = '';
  }
})

document.getElementById('tasks__form').addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const text = document.getElementById('task__input')
    if (text.value.trim()) {
      addTask(text.value);
      text.value = '';
    }
  }
})

