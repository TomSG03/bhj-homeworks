const basket = document.querySelector('.cart__products');

const inc = [...document.getElementsByClassName('product__quantity-control')];
inc.forEach(element => {
  element.addEventListener('click', event => {
    let num = event.target.classList.contains('product__quantity-control_dec') ? -1 : 1
    const product = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    num += Number(product.textContent);
    product.textContent = num > 1 ? num : 1;
  })
})

function addNew(event) {
  const productId = event.target.closest('.product').dataset.id;
  const productImg = event.target.closest('.product').querySelector('.product__image').src;
  const productCount = event.target.closest('.product').querySelector('.product__quantity-value').textContent;
  const productHTML = `<div class="cart__product" data-id="${productId}">
                        <img class="cart__product-image" src="${productImg}"> 
                        <div class="cart__product-count">${productCount}</div>
                      </div>`
  basket.insertAdjacentHTML('beforeend', productHTML);    
}

function checkBasket(event, fillBasket) {
  return fillBasket.find(item => item.dataset.id === event.target.closest('.product').dataset.id);
}

function updateBasket(event, fillBasket) {
  const i = fillBasket.findIndex(item => item.dataset.id === event.target.closest('.product').dataset.id);
  fillBasket[i].querySelector('.cart__product-count').textContent = Number(fillBasket[i].querySelector('.cart__product-count').textContent) + Number(event.target.closest('.product').querySelector('.product__quantity-value').textContent);
}

const addBtn = [...document.getElementsByClassName('product__add')];
addBtn.forEach(element => {
  element.addEventListener('click', event => {
    const fillBasket = [...basket.querySelectorAll('.cart__product')]; 
    if (fillBasket.length === 0 || checkBasket(event, fillBasket) === undefined) {
      addNew(event);  
    } 
    else {
      updateBasket(event, fillBasket);
    }
  })
})

