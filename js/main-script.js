// burger-menu

const burgerMenu = document.querySelector('.header__burger');
burgerMenu.addEventListener('click', (e) => {
	burgerMenu.classList.toggle('_active');
	document.querySelector('.menu-header').classList.toggle('_active');
	document.body.classList.toggle('_lock');
});