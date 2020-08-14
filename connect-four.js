import { Game } from './game.js';
import { GameJsonDeserializer } from './game-json-deserializer.js';
import { GameJsonSerializer } from './game-json-serializer.js';

let game = undefined;

const gameJsonStr = localStorage.getItem('game');
if(gameJsonStr) {
    console.log('in if');
    const gamejsondeserializer = new GameJsonDeserializer(gameJsonStr);
    game = gamejsondeserializer.deserialize();
    console.log('top of connectfour.js ', game.columns);
    updateUI();
}



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
        saveGame();
    });

document
    .getElementById("click-targets")
    .addEventListener('click', e => {
        if(game.winnerNumber !== 0) {
            return;
        }

        const target = e.target.id;
        if(target.startsWith("column-")) {
            const index = Number.parseInt(target[target.length-1]);
            game.playInColumn(index);
            updateUI();
            saveGame();
        }

    });

function disableNewGame(bool) {
    const newGameBtn = document.getElementById("new-game");
    newGameBtn.disabled = bool;
}

function saveGame() {
    const serializer = new GameJsonSerializer(game);
    const serialized = serializer.serialize();
    // console.log(serialized);
    localStorage.setItem('game', serialized);
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
        updateUIForCurrentPlayer(currentPlayer);

        // Redraw the game board =============================================
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

        // Redraw the click targets ===========================================
        for(let i = 0; i < 7; i++) {
            const columnIndex = document.getElementById(`column-${i}`);
            if(game.isColumnFull(i)) {
                columnIndex.classList.add("full");            
            } else {
                columnIndex.classList.remove("full");  
            }
        }
    }
}

function updateUIForCurrentPlayer(currentPlayer) {
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