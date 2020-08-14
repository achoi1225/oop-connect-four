import { Column } from './column.js';

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [];
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column());
        }
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1.toUpperCase()} ties with ${this.player2.toUpperCase()}!`;
 
        }
        return `${this.player1.toUpperCase()} vs. ${this.player2.toUpperCase()}`;
    }

    playInColumn(colNum) {
        this.columns[colNum].add(this.currentPlayer);
        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
    }

    getTokenAt(rowNum, colNum) {
        return this.columns[colNum].getTokenAt(rowNum);
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    isColumnFull(colNum) {
        return this.columns[colNum].isFull();
    }

    checkForTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }
}

