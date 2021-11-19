const { LinkedList } = require("./singlyLinkedListImplementation");

// Reverse a given linked list

class LinkedListNew extends LinkedList {
  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  recursiveReverse(head) {
    if (head == null || head.next === null) {
      return head;
    }
    const newNode = this.recursiveReverse(head.next);
    let temp = head.next;
    temp.next = head;
    head.next = null;
    this.head = newNode;
    return this.head;
  }
}

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// head = 1 -> 2 -> 3 -> 4 -> 5 -> null
// head = 2 -> 3 -> 4 -> 5 -> null
// head = 3 -> 4 -> 5 -> null
// head = 4 -> 5 -> null
// head = 5 -> null
const ll = new LinkedListNew();
ll.insertAtBeginning(5);
ll.insertAtBeginning(4);
ll.insertAtBeginning(3);
ll.insertAtBeginning(2);
ll.insertAtBeginning(1);
console.log("LL before reversing: ");
ll.printList();
// ll.reverse();
ll.recursiveReverse(ll.getHead());
console.log("LL after reversing: ");

ll.printList();
