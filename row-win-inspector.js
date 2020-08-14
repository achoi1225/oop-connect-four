export class RowWinInspector {
    inspect(columns) {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
            const token1 = columns[0].tokenContainer[rowIndex];
            const token2 = columns[1].tokenContainer[rowIndex];
            const token3 = columns[2].tokenContainer[rowIndex];
            const token4 = columns[3].tokenContainer[rowIndex];

            if (token1 === token2 &&
                token1 === token3 &&
                token1 === token4 &&
                token1) {
                return token1;
            }
        }
        return 0;
    }
}