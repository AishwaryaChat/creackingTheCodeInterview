const { Node } = require("./singlyLinkedListImplementation");

// Given a circcular linked list implement an algorithm that returns the node
// at the beginning of a loop in the linked list.

const loopDetection = (head) => {
  let meet = getMeetingNode(head);
  let current = head;
  while (!Object.is(meet, current)) {
    meet = meet.next;
    current = current.next;
  }
  return meet;
};

const getMeetingNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (Object.is(fast, slow)) return fast;
  }
  return null;
};

const n1 = new Node(1, null);
const n2 = new Node(2, n1);
const n3 = new Node(3, n2);
const n4 = new Node(4, n3);
const n5 = new Node(5, n4);
const n6 = new Node(6, n5);
const n7 = new Node(7, n6);
n1.next = n5;
console.log("Begging node of loop: ", loopDetection(n7));
