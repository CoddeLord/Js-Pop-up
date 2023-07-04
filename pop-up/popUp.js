const button = document.querySelector('button');
const mainPop = document.querySelector('.main-popup');
const popclose = document.querySelector('.popuop-close');

button.addEventListener('click', ()=>{

        mainPop.style.display = 'block';
})


popclose.addEventListener('click', ()=>{
    mainPop.style.display= 'none'
})