window.onload = () => {
	let div = document.getElementById('is-loading');
	div.removeAttribute('id');
}

let links = document.getElementsByClassName('links');
let leftOverlay = document.getElementsByClassName('pre-overlay')[0];
let rightOverlay = document.getElementsByClassName('overlay')[0];

console.log(links);

for (let link of links) {
	link.onclick = (event) => {
		event.preventDefault();
		leftOverlay.classList.remove('fadeOutLeftOverlay');
		rightOverlay.classList.remove('fadeOutRightOverlay');
		leftOverlay.classList.add('fadeInLeftOverlay');
		rightOverlay.classList.add('fadeInRightOverlay');
	}
}

leftOverlay.onclick = (event) => {
	leftOverlay.classList.remove('fadeInLeftOverlay');
	rightOverlay.classList.remove('fadeInRightOverlay');
	leftOverlay.classList.add('fadeOutLeftOverlay');
	rightOverlay.classList.add('fadeOutRightOverlay');
}
