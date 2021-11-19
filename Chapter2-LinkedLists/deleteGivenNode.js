//  Implement an algorithm to delete a node in the middle
// (i.e any node but the first and the last node,
// not necessarily the exact middle) of a singly linked list,
// given only access to that node which needs to be deleted

const { LinkedList } = require("./singlyLinkedListImplementation");

const deleteGivenNode = (node) => {
  if (node === null || node.next === null) return false;
  let next = node.next;
  node.data = next.data;
  node.next = next.next;
  return true;
};

// actually the node which is after the given node is deleted from the list

let ll = new LinkedList();
ll.insertAtBeginning(100);
ll.insertAtBeginning(200);
ll.insertAtBeginning(300);
ll.insertAtBeginning(400);
ll.insertAtBeginning(500);
ll.insertAtBeginning(600);
console.log("list before: ");
ll.printList();
const node = ll.getNodeAtIndex(2);
console.log("Node to be deleted: ", node.data);
console.log("Removed node from LL: ", deleteGivenNode(node));
console.log("list after removal: ");
ll.printList();
