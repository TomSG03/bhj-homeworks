const item = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { 
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
  } else { 
    console.log(`Готово, получили ${xhr.response.length} байт`); 
  }

  document.querySelector('.loader_active').classList.remove('loader_active');

  const rezult = JSON.parse(xhr.responseText).response.Valute;
  for (const key in rezult) {
      const strHTML = `<div class="item">
                        <div class="item__code">${rezult[key].CharCode}</div>
                        <div class="item__value">${rezult[key].Value  }</div>
                        <div class="item__currency">руб.</div>
                        </div>`
      item.insertAdjacentHTML('beforeend', strHTML)                       
  }    
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    console.log(`Получено ${event.loaded} байт`); 
  }
};

xhr.onerror = function() {
  console.log("Запрос не удался");
};

