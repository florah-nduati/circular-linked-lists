# Circular Linked Lists

## Introduction  
A **Circular Linked List (CLL)** is a variation of the linked list where the last node points back to the head node, forming a circular structure. This allows the list to be traversed continuously without null references.

In a **Singly Circular Linked List**, each node has a reference to the next node, and the last node links back to the first node.

---

## Features of Circular Linked Lists
1. The last node connects to the head node, making the list circular.
2. Traversal can continue indefinitely.
3. Suitable for applications like implementing buffers, scheduling algorithms, and multiplayer games.

---

## Structure of a Node
Each node in the list contains:  
- **Data**: Stores the value.  
- **Next**: Points to the next node.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
    }
}
```
# Implementation of a Circular Linked List
### Here is an implementation of a Circular Linked List in JavaScript:

Create the Circular Linked List Class

```javascript
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
```

### usage example
```javascript
const list = new CircularLinkedList();

// Append nodes to the list
list.append(10);
list.append(20);
list.append(30);

// Display the list
console.log("Contents of the Circular Linked List:");
list.display(); // Output: 10, 20, 30

// Delete a node
list.delete(20);

// Display after deletion
console.log("After deleting 20:");
list.display(); // Output: 10, 30
```
## Advantages of Circular Linked Lists
1. Efficient for implementing queues and buffers.
2. Enables quick access to the head and tail nodes.
3. Ideal for applications requiring continuous traversal.
## limitations
1. More complex than singly or doubly linked lists.
2. Requires careful handling to prevent infinite loops.
