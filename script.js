document.addEventListener('mousemove', function(event) {
	let x = event.pageX;
	let y = event.pageY;
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	let z = Math.floor((x * 255) / windowWidth);
	let z2 = Math.floor((y * 256) / windowHeight);
	document.body.style.backgroundColor = `rgb(${z}, 0, ${z2})`;
	console.log(`rgb(${z}, 0, ${z2});`);
});
