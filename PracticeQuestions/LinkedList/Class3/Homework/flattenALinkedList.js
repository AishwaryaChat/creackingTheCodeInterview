// Flatten a linked list

// Problem Description
// Given a linked list where every node represents a linked list and contains two pointers of its type:

// Pointer to next node in the main list (right pointer)
// Pointer to a linked list where this node is head (down pointer). All linked lists are sorted.
// You are asked to flatten the linked list into a single list. Use down pointer to link nodes of the flattened list. The flattened linked list should also be sorted.

// Problem Constraints
// 1 <= Total nodes in the list <= 100000

// 1 <= Value of node <= 10^9

// Input Format
// The only argument given is head pointer of the doubly linked list.

// Output Format
// Return the head pointer of the Flattened list.

// Example Input
// Input 1:

//    3 -> 4 -> 20 -> 20 ->30
//    |    |    |     |    |
//    7    11   22    20   31
//    |               |    |
//    7               28   39
//    |               |
//    8               39
// Input 2:

//    2 -> 4
//    |    |
//    7    11
//    |
//    7

// Example Output
// Output 1:

//  3 -> 4 -> 7 -> 7 -> 8 -> 11 -> 20 -> 20 -> 20 -> 22 -> 28 -> 30 -> 31 -> 39 -> 39
// Output 2:

//  2 -> 4 -> 7 -> 7 -> 11

// Example Explanation
// Explanation 1:

//  The return linked list is the flatten sorted list.

class Node {
  constructor(data = 0, down = null) {
    this.data = data;
    this.down = down;
  }
}

class DoublyNode {
  constructor(data = 0, right = null, down = null) {
    this.data = data;
    this.right = right;
    this.down = down;
  }
}

// let temp2 = temp.down
//       while(temp2 !== null) {

//       }

//       function anotherFun(LL) {
// let temp = LL
//         let flag = 0;
//         while (temp != null) {
//           if (flag == 0) {
//             process.stdout.write(temp.data.toString());
//             flag = 1;

//           } else {
//             process.stdout.write(" " + temp.data.toString());
//           }
//           temp = temp[nextPointer];
//         }
//         process.stdout.write("\n");
//       }

// function printLL(LL, nextPointer) {
//   let temp = LL;
//   let flag = 0;
//   while (temp != null) {
//     if (flag == 0) {
//       process.stdout.write(temp.data.toString());
//       flag = 1;

//     } else {
//       process.stdout.write(" " + temp.data.toString());
//     }
//     temp = temp[nextPointer];
//   }
//   process.stdout.write("\n");
// }

// function merge(L1, L2) {
//   if (L1 === null) return L2;
//   if (L2 === Null) return L1;
//   let head;
//   if (L1.data <= L2.data) {
//     head = L1;
//     L1 = L1.right;
//   } else {
//     head = L2;
//     L2 = L2.right;
//   }
//   let ans = head;
//   while (L1 && L2) {
//     if (L1.data <= L2.data) {
//       ans.right = L1;
//       L1 = L1.right;
//     } else {
//       ans.right = L2;
//       L2 = L2.right;
//     }
//     ans = ans.right;
//   }
//   if (L1) ans.right = L1;
//   if (L2) ans.right = L2;
//   return head;
// }

// function solve(LL) {
//   let x = LL;
//   let ans = new DoublyNode(0)
//   ans.right = LL
//   while (x && x.right) {
//     let temp = x.right
//     let newNode = x
//     x.right = x.down
//     x.right = merge(newNode, temp)
//     x =
//   }
// }



function merge(l1, l2) {
  let newHead;
  if(l1 == null) return l2
  if(l2 == null) return l1
  if (l1.data <= l2.data) {
    newHead = l1;
    l1 = l1.down;
  } else {
    newHead = l2;
    l2 = l2.down;
  }
  let ans = newHead;
  while (l1 && l2) {
    if (l1.data < l2.data) {
      ans.down = l1;
      l1 = l1.down;
    } else {
      ans.down = l2;
      l2 = l2.down;
    }
    ans = ans.down;
  }
  if (l1) {
    ans.down = l1;
  }
  if (l2) {
    ans.down = l2;
  }
  return newHead;
}

function solve(head) {
  if (head === null) return head;
  if (head.right === null) return head;
  let x = head;
  let y = head.right;
  while(y) {
    x.down = merge(x.down, y)
    y = y.right
  }
  return x
}

function printLL(LL) {
  let x = LL
  while(x) {
    console.log(x.data)
    // process.stdout.write(" ", x.data.toString(), " ")
    x = x.down
  }
}

const L5Down2 = new DoublyNode(39);
const L5Down1 = new DoublyNode(31, null, L5Down2);
const L5 = new DoublyNode(30, null, L5Down1);

const L4Down3 = new DoublyNode(39);
const L4Down2 = new DoublyNode(28, null, L4Down3);
const L4Down1 = new DoublyNode(20, null, L4Down2);
const L4 = new DoublyNode(20, L5, L4Down1);

const L3Down1 = new DoublyNode(22);
const L3 = new DoublyNode(20, L4, L3Down1);

const L2Down1 = new DoublyNode(11);
const L2 = new DoublyNode(4, L3, L2Down1);

const L1Down3 = new DoublyNode(8);
const L1Down2 = new DoublyNode(7, null, L1Down3);
const L1Down1 = new DoublyNode(7, null, L1Down2);
const L1 = new DoublyNode(3, L2, L1Down1);

const newLL = solve(L1)
console.log("printing result")
printLL(newLL);
