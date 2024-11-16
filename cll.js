class CircularLinkedList {
    constructor() {
        this.head = null; // Points to the first node in the list
    }

    // Insert a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Make it circular
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // Make it circular
        }
    }

    // Display the contents of the list
    display() {
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return;

        if (this.head.data === value) {
            if (this.head.next === this.head) {
                this.head = null; // List becomes empty
            } else {
                let current = this.head;
                while (current.next !== this.head) {
                    current = current.next;
                }
                current.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        let current = this.head;
        let prev = null;
        do {
            if (current.data === value) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }
}
