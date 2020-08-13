import { Game } from './game.js';

let game = undefined;

document.getElementById("form-holder").addEventListener("keyup", e => {
    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name");

    if (player1Name.value !== '' && player2Name.value !== '') {
        disableNewGame(false);
    }
});

document
    .getElementById('new-game')
    .addEventListener('click', event => {
        const player1Name = document.getElementById("player-1-name");
        const player2Name = document.getElementById("player-2-name");

        game = new Game(player1Name.value, player2Name.value)

        player1Name.value = '';
        player2Name.value = '';
        disableNewGame(true);

        updateUI();
    });

document
    .getElementById("click-targets")
    .addEventListener('click', e => {
        const target = e.target.id;
        if(target.startsWith("column-")) {
            const index = Number.parseInt(target[target.length-1]);
            game.playInColumn(index);
            updateUI();
        }

});

function disableNewGame(bool) {
    const newGameBtn = document.getElementById("new-game");
    newGameBtn.disabled = bool;
}

function updateUI() {
    if (game === undefined) {
        document.getElementById('board-holder')
            .classList.add('is-invisible');
    } else {
        document.getElementById('board-holder')
            .classList.remove('is-invisible');
        document.getElementById('game-name')
            .innerHTML = game.getName();
        const currentPlayer = game.getCurrentPlayer();
        updateBoard(currentPlayer);

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                const square = document.getElementById(`square-${row}-${col}`);

                square.innerHTML = '';

                const token = game.getTokenAt(row, col);

                if (token === 1) {
                    const tokenDiv = document.createElement('div');
                    tokenDiv.classList.add('token');
                    tokenDiv.classList.add('black');
                    square.appendChild(tokenDiv);
                } else if (token === 2) {
                    const tokenDiv = document.createElement('div');
                    tokenDiv.classList.add('token');
                    tokenDiv.classList.add('red');
                    square.appendChild(tokenDiv);
                }
            }
        }
    }
}

function updateBoard(currentPlayer) {
    if(currentPlayer === 1){
        document.getElementById("click-targets") 
        .classList.add('black');

        document.getElementById("click-targets")
            .classList.remove('red');

    } else {
        document.getElementById("click-targets")
        .classList.add('red');

        document.getElementById("click-targets")
            .classList.remove('black');

    }
}