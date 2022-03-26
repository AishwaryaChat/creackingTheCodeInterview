const { LinkedList } = require("./singlyLinkedListImplementation");

// Implement an algorithm to find the kth to last element of a singly linked list

class LinkedListNew extends LinkedList {
  searchKthElementFromEnd(k) {
    let current = this.head;
    let runner = current;
    let count1 = 1;
    let count2 = 1;
    while (
      current.next !== null &&
      runner.next !== null &&
      runner.next.next !== null
    ) {
      current = current.next;
      runner = runner.next.next;
      count1 += 1;
      count2 += 2;
      if (runner.next !== null) {
        if (runner.next.next == null) count2 += 1;
      }
    }
    console.log("count1", count1)
    console.log("count2", count2)
    while (count1 <= count2 - k) {
      current = current.next;
      count1++;
    }
    return current;
  }
  //   Complexity: O(n)

  //   another solution
  searchKthElementFromEndAnother(k) {
    let current = this.head;
    let runner = this.head;
    let previous = this.head
    let flag = true
    for (let i = 0; i < k; i++) {
      if (runner.next === null) {
        flag = false
        break
      };
      runner = runner.next;
    }
    if(flag) {

      while (runner !== null) {
        runner = runner.next;
        previous = current
        current = current.next;
      }
    }
    console.log("current", current)
    return current;
  }
  //   Above solution is more simpler, but have same complexity O(N)
}

let ll = new LinkedListNew();
ll.insertAtBeginning(100);
ll.insertAtBeginning(200);
// ll.insertAtBeginning(300);
// ll.insertAtBeginning(400);
// ll.insertAtBeginning(500);
// ll.insertAtBeginning(600);
ll.printList();
const foundNode = ll.searchKthElementFromEndAnother(2);
console.log("Found Node: ", foundNode);
