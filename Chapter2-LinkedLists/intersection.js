const { Node } = require("./singlyLinkedListImplementation");

// Given 2 linked lists, determine if two lists lintersect. Return intersecting node.

const intersection = (h1, h2) => {
  if (h1 === null || h2 === null) return false;
  if (Object.is(h1, h2)) return true;
  let c1 = h1;
  let c2 = h2;
  const [s1, t1] = getSizeAndTail(h1);
  const [s2, t2] = getSizeAndTail(h2);
  if (!Object.is(t1, t2)) return false;
  let shorter = s1 < s2 ? c1 : c2;
  let longer = s1 < s2 ? c2 : c1;

  longer = getKthNode(longer, Math.abs(s1 - s2));

  while (longer !== null && shorter !== null) {
    if (Object.is(longer.next, shorter.next)) return shorter.next;
    shorter = shorter.next;
    longer = longer.next;
  }
  return false;
};

const getKthNode = (head, index) => {
  let current = head;
  let count = 0;
  while (count < index) {
    current = current.next;
    count++;
  }
  return current;
};

const getSizeAndTail = (head) => {
  let size = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    size++;
  }
  return [size, current];
};

const printList = (head) => {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

const n1 = new Node(1, null);
const n2 = new Node(2, n1);
const n3 = new Node(7, n2);
const n4 = new Node(9, n3);
const n7 = new Node(5, n4);
const n8 = new Node(1, n7);
const n9 = new Node(3, n8);
console.log("List 1 is: ");
printList(n9);
const n5 = new Node(6, n3);
const n6 = new Node(4, n5);
console.log("List 2 is: ");
printList(n6);
console.log("n4 and n6 linked Lists have intersection: ", intersection(n9, n6));
