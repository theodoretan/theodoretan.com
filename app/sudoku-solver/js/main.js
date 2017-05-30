window.onload = () => {
	let div = document.querySelector('#is-loading');
	div.removeAttribute('id');
}

let cells = document.querySelectorAll(".input-cell");

cells.forEach((element) => {
    element.addEventListener('focus', () => {
        element.select();
    })
}, this);

let solveButton = document.querySelector('input[name="solve"]');
solveButton.addEventListener('click', () => {
    // start spinner overlay
    overlayToggle('Solving the sudoku..', true);

    let str = '';

    cells.forEach((element) => {
        let value = element.value;

        str = value == '' ? str + '-' : str + element.value;
    }, this);

    console.log('calling api');
    ajax(str);
});

let resetButton = document.querySelector('input[name="reset"]');
resetButton.addEventListener('click', () => {
    cells.forEach((element) => {
        element.value = '';
    }, this);
});


function ajax(str) {
    let url = `./lib/middleware.php`
    
    $.ajax({
        method: 'GET',
        url: url,
        data: `sudoku=${str}`,
        success: function (data) {
            updatePage(data);
        },
        error: function (err) {
            console.log(err);
            alert('Something went wrong. Please refresh and try again.');
        }
    });
}

function updatePage(data) {
    data = JSON.parse(data);

    // end spinner overlay
    overlayToggle()

    if (data['solution']) {
        for (let key in data['solution']) {
            let value = data['solution'][key];
            document.querySelector(`#${key.toLowerCase()}`).value = value;
        }
    } else {
        alert(data['message']);
    }
}

function overlayToggle(messageStr='', toggle=false) {
    let overlay = document.querySelector('.overlay');
    let message = document.querySelector('.overlay-message');

    if (toggle) {
        message.innerHTML = messageStr;
        overlay.classList.remove('hide');
    } else {
        message.innerHTML = '';
        overlay.classList.add('hide');
    }
}