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

		if (link.id == 'about' || link.id == 'contact') {
			getFiles(link.id, '');
		} else {
			getFiles('experience', link.id);
		}
	}
}

cancelBtn.onclick = leftOverlay.onclick = (event) => {
	leftOverlay.classList.remove('fadeInLeftOverlay');
	rightOverlay.classList.remove('fadeInRightOverlay');
	leftOverlay.classList.add('fadeOutLeftOverlay');
	rightOverlay.classList.add('fadeOutRightOverlay');
	body.classList.remove('no-scroll');

	let innerOverlay = document.getElementsByClassName('inner-overlay')[0];
	innerOverlay.innerHTML = '';
}

// will have to do JSON.parse() for modals

let getFiles = (content, picker) => {
	let url = '../assets/files/' + content + '.json';
	var ajax = new XMLHttpRequest();
	let c = content;
	let p = picker;

	let setImage = (filename, imgclass, parent) => {
		let img = new Image();
		img.src = '../assets/' + filename;
		img.classList.add(imgclass);
		parent.appendChild(img);
		return;
	};

	ajax.onreadystatechange = () => {
		try {
			if (ajax.readyState === XMLHttpRequest.DONE) {
				if (ajax.status === 200) {
					let innerOverlay = document.getElementsByClassName('inner-overlay')[0];
					innerOverlay.innerHTML = '';

					let json = JSON.parse(ajax.responseText);

					if (c === 'experience') {
						json = json[p];
					}

					let title = json.Title;
					let content = json.Content;

					// check for subtitle
					if (!json.Subitle) {
						for (var key in content) {
							for (var type in content[key]) {
								switch (type) {
									case 'Paragraph':
										// create p tags
										let p = document.createElement('p');
										let node = document.createTextNode(content[key][type]);
										p.appendChild(node);
										p.className = 'overlay-p';
										innerOverlay.appendChild(p);

										break;
									case 'Image':
										setImage(content[key][type], 'overlay-img', innerOverlay);
										// let img = new Image();
										// img.src = '../assets/' + content[key][type];
										// img.classList.add('overlay-img');
										// innerOverlay.appendChild(img);
										break;
									case 'Links':
										let div = document.createElement('div');
										div.className = 'social-container';
										for (var links in content[key][type]) {
											let href = document.createElement('a');
											href.className = 'social-link';
											for (var t in content[key][type][links]) {
												let c = content[key][type][links][t];
												if (t === 'Image') {
													setImage(c, 'social-links', href);
												} else if (t === 'Link') {
													href.href = c;
												}
											}
											div.appendChild(href);
										}
										innerOverlay.appendChild(div);
										break;
									default:
										console.log('Unknown Type: ' + type);
								}
							}
						}
					}
				}
			}
		} catch (e) {
			console.log('could not connect');
			console.log(e);
		}
	}
	ajax.open('GET', url);
	ajax.send();
}
