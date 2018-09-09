class Queue {
    constructor() {
        this.data = [];
    }

    getLength() {
        return this.data.length;
    }

    add(value) {
        this.data.unshift(value);
    }

    remove() {
        this.data.pop();
    }

    first() {
        return this.data[0];
    }

    last() {
        const length = this.getLength();
        return this.data[length - 1];
    }
}