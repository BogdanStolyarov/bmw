const disableScroll = () => {
	document.body.dataset.scrollY =
		document.body.style.cssText = `position: fixed;
	top:0;
	left:0;
	width:100%;
	overflow:hidden;
	height:100% `;

};

const enableScroll = () => {
	document.body.style.cssText =
}