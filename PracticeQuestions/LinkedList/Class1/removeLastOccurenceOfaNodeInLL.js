class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function solve(head, ele) {
  let x = head;
  let last = null;
  while (x.next !== null) {
    if (x.next.data == ele) {
      last = x;
    }
    x = x.next;
  }
  last.next = last.next.next;
  return head;
}

function printLL(head) {
  let x = head;
  while (x) {
    console.log(x.data);
    x = x.next;
  }
}

const L6 = new Node(4);
const L5 = new Node(8, L6);
const L4 = new Node(3, L5);
const L3 = new Node(4, L4);
const L2 = new Node(5, L3);
const L1 = new Node(10, L2);

console.log("print LL before")
printLL(L1)
const newLL = solve(L1, 4)
console.log("print LL after");
printLL(newLL)
