const tagEl = document.getElementsByTagName('h1');
console.log(tagEl);
const testEl = document.getElementsByClassName("testing");
console.log(testEl); 

const checkId = document.getElementById('boxText');

const allEl = document.querySelectorAll('.selectEl');

const OneEl = document.querySelector('.selectElOne');

const ell = document.querySelector('#peleZainabu');

const submitBtn = document.querySelector('button');

console.log(submitBtn );


submitBtn.addEventListener('mouseover', ()=> {
    alert('Its closing time already')
})


