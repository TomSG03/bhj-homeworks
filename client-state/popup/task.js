function chekSubscrib() {
  const cookies = document.cookie.split('; ')
  const result = cookies.find(c => c.startsWith('modal'))

  return result ? decodeURIComponent(result.substr(6)) : null
}

if (chekSubscrib() != 'closed') {
  document.getElementById('subscribe-modal').classList.add('modal_active');
}

document.querySelector('.modal__close').addEventListener('click', () => {
   document.cookie = 'modal=closed'
   document.getElementById('subscribe-modal').classList.remove('modal_active');
})