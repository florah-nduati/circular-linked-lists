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
