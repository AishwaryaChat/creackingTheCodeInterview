const LinkedList = require("./singlyLinkedListImplementation");

//write code to partition a linked list around a piviot element x,
// such that all nodes less than x comes before all nodes greater than or equal to x
class LinkedListNew extends LinkedList {
  partition(p) {
    let l1 = new LinkedList();
    let l2 = new LinkedList();
    let current = this.head;
    while (current) {
      if (current.data < p) {
        l1.insertAtEnd(current.data);
      } else if (current.data > p) {
        l2.insertAtEnd(current.data);
      } else {
        l2.insertAtBeginning(current.data);
      }
      current = current.next;
    }
    let l1Head = l1.getHead();
    let l2Head = l2.getHead();
    while (l1Head.next) {
      l1Head = l1Head.next;
    }
    l1Head.next = l2Head;
    return l1;
  }
}

let ll = new LinkedListNew();
ll.insertAtBeginning(1);
ll.insertAtBeginning(2);
ll.insertAtBeginning(10);
ll.insertAtBeginning(5);
ll.insertAtBeginning(8);
ll.insertAtBeginning(5);
ll.printList();
const l1 = ll.partition(5);
console.log("after partition: ");
l1.printList();
