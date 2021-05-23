const menuElem = document.querySelector('.menu');
const buterElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	buterElem.classList.toggle('humburger-menu-active');
};

buterElem.addEventListener('click', toggleMenu);