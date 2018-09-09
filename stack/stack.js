class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);

        return this;
    }

    // Returns top most element from stack
    pop() {
        if (!this.items.length) {
            return undefined;
        }

        return this.items.pop();
    }
}