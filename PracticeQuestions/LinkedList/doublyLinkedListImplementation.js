class Node {
  constructor(key = 0, data = 0, next = null, previous = null) {
    this.key = key;
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DLL {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = head !== null ? head : tail;
    this.size = head !== null ? 1 : 0;
  }
  insertAtHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
    this.size++;
    return;
  }

  deleteFromHead() {
    if (this.head === null) return "empty";
    const deleted = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.previous = null;
      this.head = this.head.next;
      deleted.next = null;
    }
    this.size--;
    return deleted;
  }

  insertAtTail(node) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return this.tail;
    }
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.size++;
    return this.tail;
  }

  deleteFromTail() {
    if (this.tail === null) return "empty";
    const deleted = this.tail;
    if (this.size == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail.previous.next = null;
      this.tail = deleted.previous;
      deleted.previous = null;
    }
    this.size--;
    return deleted;
  }

  deleteNode(node) {
    if (node == this.head) {
      this.deleteFromHead();
    } else if (node == this.tail) {
      this.deleteFromTail();
    } else {
      node.previous.next = node.next;
      node.next.previous = node.previous;
      this.size--;
    }
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size
  }

  printLL() {
    let LL = this.head;
    while (LL) {
      console.log(LL.data);
      LL = LL.next;
    }
  }
}

module.exports = DLL;
