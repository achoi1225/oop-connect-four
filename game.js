import { Column } from './column.js';

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column());
        }
    }

    getName() {
        return `${this.player1.toUpperCase()} vs. ${this.player2.toUpperCase()}`;
    }

    playInColumn(colNum) {
        this.columns[colNum].add(this.currentPlayer);
        console.log(this.columns[colNum]);
        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }

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
}

