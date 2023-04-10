


const toogle = document.querySelector('.toggle');

const navbar = document.querySelector('.items');

toogle.addEventListener('click', () => {
    navbar.classList.toggle('active')
    toogle.classList.toggle('act')
    toogle.classList.toggle('open')
})