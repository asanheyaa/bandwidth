
const heroHomePageSwiper = document.querySelector('.swiper-hero-section');

if (heroHomePageSwiper) {

	const swiper = new Swiper(heroHomePageSwiper, {
		loop: true,
		autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 50,
		pagination: {
			el: '.swiper-hero-section__pagination',
			clickable:true
		},
	});
}