export class DiagonalWinInspector {
    inspect(columns) {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            const token1 = columns[0].tokenContainer[rowIndex];
            const token2 = columns[1].tokenContainer[rowIndex + 1];
            const token3 = columns[2].tokenContainer[rowIndex + 2];
            const token4 = columns[3].tokenContainer[rowIndex + 3];

            const token5 = columns[0].tokenContainer[rowIndex + 3];
            const token6 = columns[1].tokenContainer[rowIndex + 2];
            const token7 = columns[2].tokenContainer[rowIndex + 1];
            const token8 = columns[3].tokenContainer[rowIndex];

            if (token1 === token2 &&
                token1 === token3 &&
                token1 === token4 &&
                token1) {
                return token1;
            }

            if (token5 === token6 &&
                token5 === token7 &&
                token5 === token8 &&
                token5) {
                return token5;
            }
        }
        return 0;
    }
}