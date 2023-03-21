const container = document.querySelector('.pop-container');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const container_two = document.querySelector('.container');
const btn__sub = document.getElementById('btn-sub');
const btn__reset = document.getElementById('btn-reset');
const btn__add = document.getElementById('btn-add');
const counter__number = document.querySelector('.counter-number');

btn__sub.addEventListener('click', function () {
   
    counter__number.innerHTML--;
})
btn__add.addEventListener('click', function () {
    counter__number.innerHTML++;
});
btn__reset.addEventListener('click', function () {
    counter__number.innerHTML = 0;
});
window.onload = function () {
    container.style.display = 'block'
 };
 yes.addEventListener('click', function () {
    if(container.style.display = 'block'){
        container_two.style.display = 'block';
        container.style.display = 'none'
    }
 })

