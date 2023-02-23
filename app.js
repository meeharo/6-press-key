var pressBtn = document.querySelector('.press-btn')
var box = document.querySelector('.box')
var eKey = document.querySelector('.card.key p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var result = document.querySelector('.result')

document.addEventListener('keydown', (e) => {
    eKey.innerText = e.key
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.which

    pressBtn.classList.add('hide')
    box.classList.remove('hide')
})