const lidEl = document.getElementById('lid');
const promoEl = document.getElementById('promo');

//event listener
// document.addEventListener('DOMContentLoaded',loadAnimation);

function loadAnimation(){
lidEl.classList.add('play')
promoEl.classList.add('play')

setTimeout(() =>{

    lidEl.classList.remove('play')
    promoEl.classList.remove('play')
},1000)

}

setInterval(loadAnimation, 2000);