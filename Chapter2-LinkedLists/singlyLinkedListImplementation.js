class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  setHead(node) {
    this.head = node;
  }

  insertAtBeginning(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
    return;
  }

  insertAtEnd(data) {
    if (this.size === 0) {
      this.insertAtBeginning(data);
      return;
    }
    const node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  insertAtIndex(data, index) {
    if (index < 0 || index > this.size) return;
    if (this.size === 0) {
      this.insertAtBeginning(data);
      return;
    }
    if (index === this.size) {
      this.insertAtEnd(data);
      return;
    }
    const node = new Node(data);
    let current = this.head;
    let previous = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  removeFirstNode() {
    this.head = this.head.next;
    return;
  }

  removeLastNode() {
    let current = this.head;
    let previous = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
  }

  removeFromIndex(index) {
    if (this.size === 0) return;
    if (index >= this.size) return;
    if (index === 0) {
      this.removeFirstNode();
      return;
    }
    if (index === this.size - 1) {
      this.removeLastNode();
      return;
    }
    let current = this.head;
    let previous = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    this.size--;
  }

  getNodeAtIndex(index) {
    if (this.size === 0 || index < 0 || index > this.size)
      return "error wrong index provided";
    if (index === 0) return this.head.data;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  length() {
    return this.size;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    return;
  }
}

module.exports = LinkedList;

const ll = new LinkedList();
// ll.insertAtBeginning(100);
// ll.insertAtEnd("ABCD");
// ll.insertAtBeginning(200);
// ll.insertAtIndex(500, 3);
// ll.insertAtIndex(200, 2);
// ll.insertAtBeginning(300);
// ll.insertAtBeginning(100);
// ll.insertAtBeginning(500);
// ll.insertAtBeginning(100);
// ll.insertAtBeginning(200);
// ll.insertAtBeginning(400);
// ll.insertAtEnd("ABCD");
// // ll.removeFirstNode();
// // ll.removeLastNode();
// // ll.removeFromIndex(4);
// // ll.removeFromIndex(0);
// ll.printList();
// // console.log("Data at index 1 is: ", ll.getNodeAtIndex(1));
// // console.log("Size of ll: ", ll.length());
