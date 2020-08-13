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