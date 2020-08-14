export class ColumnWinInspector {
    inspect(column) {
        const tokens = column.tokenContainer;

        for (let i = 0; i < tokens.length-3; i++) {
            const square1 = tokens[i];
            const square2 = tokens[i + 1];
            const square3 = tokens[i + 2];
            const square4 = tokens[i + 3];

            if (square1 === square2 &&
                square1 === square3 &&
                square1 === square4 && square1) {
                console.log('winner!', square1);
                return square1;
            }
        }

        return 0;
    }
}