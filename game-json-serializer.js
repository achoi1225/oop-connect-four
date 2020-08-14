export class GameJsonSerializer {
    constructor(game) {
        this.game = game;
    }

    serialize() {
        const columns = [];
    
        for(let colIndex = 0; colIndex < 7; colIndex++) {
            const column = [];
            for(let rowIndex = 0; rowIndex < 6; rowIndex++) {
                column.push(this.game.getTokenAt(rowIndex, colIndex));
            }
            columns.push(column);
        }

        const saveData = {
            player1Name: this.game.player1,
            player2Name: this.game.player2,
            currentPlayer: this.game.currentPlayer,
            columns: columns
        }

        return JSON.stringify(saveData);
    }
}