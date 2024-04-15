const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const dropDown = document.querySelector('.dropdown');
menu.onclick = function () {
    dropDown.classList.toggle("open")
};

const navEl = document.querySelector('.containe');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
        navEl.classList.add('scroll');
    }else if (window.scrollY < 40) {
        navEl.classList.remove('scroll')
    }
});