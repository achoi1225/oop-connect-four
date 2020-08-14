import { Column } from './column.js';
import { ColumnWinInspector } from './column-win-inspector.js';
import { RowWinInspector } from './row-win-inspector.js';
import { DiagonalWinInspector } from './diagonal-win-inspector.js';

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
        if (this.winnerNumber === 1) {
            return `${this.player1.toUpperCase()} wins!`;
        } else if(this.winnerNumber ===2) {
            return `${this.player2.toUpperCase()} wins!`;
        } else if (this.winnerNumber === 3) {
            return `${this.player1.toUpperCase()} ties with ${this.player2.toUpperCase()}!`;
        } 

        return `${this.player1.toUpperCase()} vs. ${this.player2.toUpperCase()}`;
    }

    playInColumn(colNum) {
        this.columns[colNum].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }

    getTokenAt(rowNum, colNum) {
        return this.columns[colNum].getTokenAt(rowNum);
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    isColumnFull(colNum) {
        if(this.winnerNumber === 1 || this.winnerNumber ===2) {
            return true;
        }
        return this.columns[colNum].isFull();
    }

    checkForTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return;
        }
        const columnInspector = new ColumnWinInspector();
        for (let i = 0; i < this.columns.length; i++) {
            const column = this.columns[i];
            const winner = columnInspector.inspect(column);
            if (winner !== 0) {
                this.winnerNumber = winner;
                return;
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber !== 0) {
            return;
        }
        const rowInspector = new RowWinInspector();
        for (let i = 0; i < 4; i++) {
            const columns = this.columns.slice(i, i + 4);
            const winner = rowInspector.inspect(columns);
            if (winner !== 0) {
                this.winnerNumber = winner;
                return;
            }
        }
    }

    checkForDiagonalWin() {
        if (this.winnerNumber !== 0) {
            return;
        }
        const diagonalInspector = new DiagonalWinInspector();
        for (let i = 0; i < 4; i++) {
            const columns = this.columns.slice(i, i + 4);
            const winner = diagonalInspector.inspect(columns);
            if (winner !== 0) {
                this.winnerNumber = winner;
                return;
            }
        }
    }
}

