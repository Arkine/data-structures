class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adds the node into the list at the end
    addToTail(val) {
        const node = new Node(val);

        // If there is no head
        if (!this.head) {
            // This node is the new head
            this.head = node;
            // The tail is also this node
            this.tail = node;
        } else {
            // The node's previous is a referene to the tail
            node.previous = this.tail;
            // The tails next node is the head  
            this.tail.next = node;
            // Add this node to the tail
            this.tail = node;
        }

        this.length++;
    }

    remove(value) {
        let current = this.head;
        while(current) {
            // If this is the value we are looking for 
            if (current.value === value) {
                // If this is the only node   
                if (current === this.head && current === this.tail) {
                    // Remove the head and tail
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    // If this is head node, set the previous node to be the head
                    this.head = this.head.previous;
                    this.head.next = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    // If the value is neither the head or tail
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
            }

            this.length--;
            current = current.next;
        }
    }

    insertAfter(value, toNodeData) {
        let current = this.head;
        while(current) {
            // If this is the value we are looking for
            if (current.value === toNodeData) {
                // Create a new node
                const node = new Node(value);
                // If this is the tail node
                if (current === this.tail) {
                    // Add it to the tail
                    this.addToTail(data);
                } else {
                    // Make the new node the next node's prev node
                    current.next.previous = node;
                    // Set new node prev to be this node
                    node.previous = current;
                    // Set the new node next to be the current nodes next
                    node.next = current.next;
                    // Set the existing node's next to be the new node
                    current.next = node;

                    this.length++;
                }
            }

            current = current.next;
        }
    }

    // Traverse the list with CB
    traverse(fn) {
       let current = this.head;
       while(current) {
           if (fn) {
               fn(current);
           }

           current = current.next;
       }
    }

    traverseReverse(fn) {
        let current = this.tail;
        while(current) {
            if (fn) {
                fn(current);
            }

            current = current.previous;
        }
    }

}