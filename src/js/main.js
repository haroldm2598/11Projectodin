const menuBars = document.querySelector('#menuBars');
const mobileMenu = document.querySelector('#mobileMenu');
const yearToday = document.querySelector('#year');

menuBars.addEventListener('click', toggleMenu);

function toggleMenu() {
	mobileMenu.classList.toggle('mobile__menu');
}

const year = new Date().getFullYear();
yearToday.textContent = year;
