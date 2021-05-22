const scrollElemes = document.querySelectorAll('a[href^="#"]:not(a[href="#"]');
// ищет на странице весь контент с ссылками, но с продолжением
scrollElemes.forEach(link => {
	// ищем 
	link.addEventListener('click', (e) => {
		// не перезагружает страницу E
		const id = link.getAttribute('href').substring(1);
		// нашли. но стерли #, чтобы могли перейти 
		document.getElementById(id).scrollIntoView({
			behavior: "smooth"
			// как прокручивать 
		});
	});
});