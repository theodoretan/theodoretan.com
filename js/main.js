window.onload = () => {
	let div = document.getElementById('is-loading');
	div.removeAttribute('id');
}

let body = document.body;
let links = document.getElementsByClassName('links');
let leftOverlay = document.getElementsByClassName('pre-overlay')[0];
let rightOverlay = document.getElementsByClassName('overlay')[0];
let cancelBtn = document.getElementsByClassName('cancel-btn')[0];

console.log(links);

for (let link of links) {
	link.onclick = (event) => {
		event.preventDefault();
		leftOverlay.classList.remove('fadeOutLeftOverlay');
		rightOverlay.classList.remove('fadeOutRightOverlay');
		leftOverlay.classList.add('fadeInLeftOverlay');
		rightOverlay.classList.add('fadeInRightOverlay');
		body.classList.add('no-scroll');
	}
}

cancelBtn.onclick = leftOverlay.onclick = (event) => {
	leftOverlay.classList.remove('fadeInLeftOverlay');
	rightOverlay.classList.remove('fadeInRightOverlay');
	leftOverlay.classList.add('fadeOutLeftOverlay');
	rightOverlay.classList.add('fadeOutRightOverlay');
	body.classList.remove('no-scroll');
}

// will have to do JSON.parse() for modals

// var ajax = new XMLHttpRequest();
//
// ajax.onreadystatechange = () => {
// 	try {
// 		if (ajax.readyState === XMLHttpRequest.DONE) {
// 			if (ajax.status === 200) {
// 				// do the stuff with ajax.responseText
// 				// JSON.parse(ajax.responseText) probably
// 			} else {
// 				// will need a fallback
// 			}
// 		}
// 	} catch (e) {
// 		// could not connect
// 	} finally {
// 		// do something smart with the modal
// 	}
// }
// ajax.open('GET', url);
// ajax.send();
