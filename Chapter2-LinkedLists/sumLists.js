const LinkedList = require("./singlyLinkedListImplementation");

// You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the 1's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list

const addition = (l1, l2) => {
  let l1Head = l1.getHead();
  let l2Head = l2.getHead();
  const finalSum = new LinkedList();
  let carry = 0;
  let rem = 0;
  while (l1Head !== null || l2Head !== null) {
    let sum = carry;
    carry = 0;
    if (l1Head !== null) {
      sum += l1Head.data;
    }
    if (l2Head !== null) {
      sum += l2Head.data;
    }

    if (sum > 9) {
      carry = Math.floor(sum / 10);
      rem = sum % 10;
      finalSum.insertAtBeginning(rem);
    } else {
      finalSum.insertAtBeginning(sum);
    }
    if (l1Head !== null) {
      l1Head = l1Head.next;
    }
    if (l2Head !== null) {
      l2Head = l2Head.next;
    }
  }
  return finalSum;
};

const l1 = new LinkedList();
l1.insertAtBeginning(6);
l1.insertAtBeginning(1);
l1.insertAtBeginning(7);
l1.insertAtBeginning(7);
console.log("l1: ");
l1.printList();
const l2 = new LinkedList();
l2.insertAtBeginning(2);
l2.insertAtBeginning(9);
l2.insertAtBeginning(5);
console.log("l2: ");
l2.printList();

const finalLL = addition(l1, l2);
console.log("final sum: ");
finalLL.printList();
