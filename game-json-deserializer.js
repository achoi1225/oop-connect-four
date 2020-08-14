import { Game } from "./game.js";

export class GameJsonDeserializer {
    constructor(jsonStr) {
        this.jsonStr = jsonStr;
    }

    deserialize() {
        const parsedData = JSON.parse(this.jsonStr);
        const game = new Game(parsedData.player1Name, parsedData.player2Name);

        for(let colIndex = 0; colIndex < 7; colIndex++) {
            const column = parsedData.columns[colIndex];
            for(let rowIndex = 5; rowIndex >= 0; rowIndex--) {
                const token = column[rowIndex];
                if(token) {
                    game.currentPlayer = token;
                    game.playInColumn(colIndex);
                } 
            }
        }

        game.currentPlayer = parsedData.currentPlayer;
        return game;
    }
}