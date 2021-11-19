const { LinkedList } = require("./singlyLinkedListImplementation");

// Remove duplicates from an unsorted linked
class LinkedListNew extends LinkedList {
  removeDuplicates() {
    if (this.size === 0) return;
    let current = this.head;
    let previous = this.head;
    let hashMap = {};
    while (current) {
      if (hashMap[current.data] !== undefined) {
        previous.next = current.next;
        this.size--;
      } else {
        hashMap[current.data] = 1;
        previous = current;
      }
      current = current.next;
    }
  }
  // Complexity of above solution: O(N), where N is the number of nodes in the Linked List

  // How would you solve this problem if a buffer is not allowed
  // runners approach
  removeDuplicatesInPlace = () => {
    let current = this.head;
    while (current !== null) {
      let runner = current;
      while (runner.next !== null) {
        if (runner.next.data === current.data) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  };
}

// Complexity of above solution: Space complexity is O(1),
// but time complexity is O(N^2), where N is the number of nodes in the Linked List

let ll = new LinkedListNew();
ll.insertAtBeginning(100);
ll.insertAtBeginning(200);
ll.insertAtBeginning(300);
ll.insertAtBeginning(100);
ll.insertAtBeginning(200);
ll.insertAtBeginning(300);
ll.insertAtBeginning(100);
ll.insertAtBeginning(200);
ll.insertAtBeginning(300);
ll.insertAtBeginning(300);
ll.insertAtBeginning("ABCD");
ll.insertAtEnd("ABCD");

console.log("before removing duplicates: ");
ll.printList();
// ll.removeDuplicates();
ll.removeDuplicatesInPlace();
console.log("New LL: ");
ll.printList();
