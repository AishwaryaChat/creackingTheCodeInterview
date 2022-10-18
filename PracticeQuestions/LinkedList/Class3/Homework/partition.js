// Partition List

// Problem Description
// Given a linked list A and a value B, partition it such that all nodes less than B come before nodes greater than or equal to B.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Problem Constraints
// 1 <= |A| <= 10^6

// 1 <= A[i], B <= 10^9

// Input Format
// The first argument of input contains a pointer to the head to the given linked list.

// The second argument of input contains an integer, B.

// Output Format
// Return a pointer to the head of the modified linked list.

// Example Input
// Input 1:

// A = [1, 4, 3, 2, 5, 2]
// B = 3
// Input 2:

// A = [1, 2, 3, 1, 3]
// B = 2

// Example Output
// Output 1:

// [1, 2, 2, 4, 3, 5]
// Output 2:

// [1, 1, 2, 3, 3]

// Example Explanation
// Explanation 1:

//  [1, 2, 2] are less than B wheread [4, 3, 5] are greater than or equal to B.
// Explanation 2:

//  [1, 1] are less than B wheread [2, 3, 3] are greater than or equal to B.

// Tc - O(N)
// Idea is to keep storing smaller element list in first Linled list, store greater and equal elements in second linked list and merge at end

class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function printLL(LL) {
  let temp = LL;
  let flag = 0;
  while (temp != null) {
    if (flag == 0) {
      process.stdout.write(temp.data.toString());
      flag = 1;
    } else {
      process.stdout.write(" " + temp.data.toString());
    }
    temp = temp.next;
  }
  process.stdout.write("\n");
}

function solve(head, B) {
  if (head == null || head.next == null) return head;
  let current = new Node(0);
  current.next = head;
  let firstHalfHead = null;
  let firstHalfLast = null;
  let secondHalfHead = null;
  let secondHalfLast = null;
  while (current) {
    if (current.data < B) {
      if (firstHalfHead == null) {
        firstHalfLast = firstHalfHead = current;
      } else {
        firstHalfLast.next = current;
        firstHalfLast = current;
      }
    } else {
      if (secondHalfHead == null) {
        secondHalfLast = secondHalfHead = current;
      } else {
        secondHalfLast.next = current;
        secondHalfLast = current;
      }
    }
    current = current.next;
  }
  //   if some extra elements are attached to secondHalf list, mark next of it null
  if (secondHalfLast && secondHalfLast.next !== null) {
    secondHalfLast.next = null;
  }
  //   if no elements present which are smaller then B
  if (firstHalfHead == null) return secondHalfHead;
  firstHalfLast.next = secondHalfHead;
  return firstHalfHead.next;
}

// const L8 = new Node(3);
// const L7 = new Node(2, L8);
// const L7 = new Node(4);
// const L6 = new Node(1, L7);
// const L5 = new Node(3, L6);
// const L4 = new Node(1, L5);
// const L3 = new Node(3, L4);
// const L2 = new Node(2, L3);
// const L1 = new Node(1, L2);
// const B = 3;

const L5 = new Node(5);
const L4 = new Node(4, L5);
const L3 = new Node(3, L4);
const L2 = new Node(2, L3);
const L1 = new Node(1, L2);
const B = 6;

function getLL(A) {
  let node = new Node();
  let head = node;
  for (let i = 0; i < A.length; i++) {
    let newNode = new Node(A[i]);
    node.next = newNode;
    node = node.next;
  }
  return head.next;
}

// const arr = [
//   192, 856, 647, 251, 498, 749, 252, 577, 322, 794, 490, 278, 754, 505, 688,
//   418, 486, 3, 700, 680, 707, 892, 37, 666, 9, 858, 802, 82, 441, 500, 64, 373,
//   174, 779, 346, 803, 760, 48, 783, 654, 731, 391, 733, 480, 5, 144, 919, 291,
//   180, 50, 326, 90, 437, 502, 527, 648, 361, 828, 729, 546, 934, 69, 209, 187,
//   365, 329, 276, 86, 348, 986, 344, 183, 495,
// ];
// const B = 40;
// const L1 = getLL(arr);
console.log("original LL");
printLL(L1);
let newLL = solve(L1, B);

console.log("new LL after partition");
printLL(newLL);

// 3 -> 37 -> 9 -> 5 -> 192 -> 856 -> 647 -> 251 -> 498 -> 749 -> 252 -> 577 -> 322 -> 794 -> 490 -> 278 -> 754 -> 505 -> 688 -> 418 -> 486 -> 700 -> 680 -> 707 -> 892 -> 666 -> 858 -> 802 -> 82 -> 441 -> 500 -> 64 -> 373 -> 174 -> 779 -> 346 -> 803 -> 760 -> 48 -> 783 -> 654 -> 731 -> 391 -> 733 -> 480 -> 144 -> 919 -> 291 -> 180 -> 50 -> 326 -> 90 -> 437 -> 502 -> 527 -> 648 -> 361 -> 828 -> 729 -> 546 -> 934 -> 69 -> 209 -> 187 -> 365 -> 329 -> 276 -> 86 -> 348 -> 986 -> 344 -> 183 -> 495
