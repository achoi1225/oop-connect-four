export class Column {
    constructor() {
        this.tokenContainer = [null, null, null, null, null, null]
    }

    add(playerNumber) {
        let index = this.tokenContainer.lastIndexOf(0);
        if (index >= null) {
            this.tokenContainer[index] = playerNumber;
        }
    }

    getTokenAt(rowIndex) {
        return this.tokenContainer[rowIndex];
    }
}