const puzzleBoard = document.querySelector('#puzzle-board');
const solveButton = document.querySelector('#solve-button');
const squares = 81;
const submission = [];

// Create a new puzzle board
for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', '1');
    inputElement.setAttribute('max', '9');
    puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value);
        } else {
            submission.push('.');
        }
    });
    console.log(submission);
}

const solve = () => {

    const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'a37dd47d49mshb49631c56762072p1a42ffjsn83782442c97a',
        'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
    },
    data: {
        puzzle: '2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

solveButton.addEventListener('click', solve);