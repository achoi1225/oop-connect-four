export class Column {
    constructor() {
        this.tokenContainer = [null, null, null, null, null, null]
    }

    add(playerNumber) {
        let index = this.tokenContainer.lastIndexOf(null);
        if (index >= 0) {
            this.tokenContainer[index] = playerNumber;
        }
    }

    getTokenAt(rowIndex) {
        return this.tokenContainer[rowIndex];
    }
}