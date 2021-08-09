const check = [...document.querySelectorAll('div > ul > .interest > label > .interest__check')];

check.forEach(element => {
    element.addEventListener('click', function(e) {
        let checkedGlobal = e.target.checked;
        const subCheck = [...e.target.closest('.interest').querySelectorAll('.interest')];
        subCheck.forEach(function(element) {
            element.querySelector('.interest__check').checked = checkedGlobal;
        })
    })
})
