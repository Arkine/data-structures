/*
https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
*/
class LinkedList {
    constructor(...value) {
        this.head = null;
        this.length = 0;
        this.addToHead(...value);
    }

    addToHead(...values) {
        values.forEach(val => this._addSingleItemToHead(val));

        return this;
    }

    _addSingleItemToHead(value) {
        // Create the new node
        const newNode = {value};
        // The node is being added to the head so the head's
        // current node should be next
        newNode.next = this.head;
        // The new node is now the head
        this.head = newNode;
        this.length++;

        return this;
    }

    removeFromHead() {
        if (!this.length) {
            return undefined;
        }

        const value = this.head.value;
        // The head should point to the previous head's next node
        this.head = this.head.next;
        this.length--;

        return value;
    }

    find(val) {
        let thisNode = this.head;

        while(thisNode) {
            if (thisNode.val === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

    remove(val) {
        if (!this.length) {
            return undefined;
        }

        // If the first node is the value we are looking for, remove the head
        if (this.head.value === val) {
            this.removeFromHead();

            return this;
        }

        // The previous node in the list of the one being iterated
        let previousNode = this.head;
        // The current iterated node
        let thisNode = previousNode.next;

        // Iterate through nodes
        while(thisNode) {
            // If we found the node, break out
            if (thisNode.value === val) {
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        // If the node is undefined
        if (thisNode === null) {
            return undefined;
        }
        
        // Set the previous node's next to be the remove node's next
        previousNode.next = thisNode.next;
        this.length--;

        return this;
    }
}