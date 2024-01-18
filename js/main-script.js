// burger-menu

const burgerMenu = document.querySelector('.header__burger');
burgerMenu.addEventListener('click', (e) => {
	burgerMenu.classList.toggle('_active');
	document.querySelector('.menu-header').classList.toggle('_active');
	document.body.classList.toggle('_lock');
});



// scrolling page after service link  transition 
const scroll = window.location.href.indexOf('#scroll')

if (scroll !== -1) {
	document.addEventListener('DOMContentLoaded', scrollingToServiceSection)
}

function scrollingToServiceSection() {
	const srollingSection = document.querySelector('#service');
	window.scrollTo({
		top: srollingSection.offsetTop,
		behavior: "smooth",
	});
}

// scrolling page after click to service link on homepage

const links = document.querySelectorAll('[href="#service"]');

if (links) {
	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			scrollingToServiceSection()
			document.querySelector('.menu-header').classList.remove('_active');
			document.body.classList.remove('_lock');
			burgerMenu.classList.remove('_active');
		})
	});
}

