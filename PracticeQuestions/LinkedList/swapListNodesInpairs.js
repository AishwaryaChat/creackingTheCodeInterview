/*
Swap List Nodes in pairs

Problem Description
Given a linked list A, swap every two adjacent nodes and return its head.

NOTE: Your algorithm should use only constant space. You may not modify the values in the list; only nodes themselves can be changed.



Problem Constraints
1 <= |A| <= 10^6



Input Format
The first and the only argument of input contains a pointer to the head of the given linked list.



Output Format
Return a pointer to the head of the modified linked list.



Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4
Input 2:

 A = 7 -> 2 -> 1


Example Output
Output 1:

 2 -> 1 -> 4 -> 3
Output 2:

 2 -> 7 -> 1


Example Explanation
Explanation 1:

 In the first example (1, 2) and (3, 4) are the adjacent nodes. Swapping them will result in 2 -> 1 -> 4 -> 3
Explanation 2:

 In the second example, 3rd element i.e. 1 does not have an adjacent node, so it won't be swapped. 
*/

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

function swap(next1, next2) {
    next1.next = next2.next
    next2.next = next1
    return next2
}

// function solve(LL) {
//     if(LL===null || LL.next === null) return LL
//     let start = new Node()
//     start.next = LL
//     let x = start
//     while(x.next && x.next.next) {
//         x.next = swap(x.next, x.next.next)
//         x = x.next.next
//     }
//     return start.next
// }

// TC = O(N)
// SC = O(1)

function solve(LL) {
    if(LL===null || LL.next === null) return LL
    let start = new Node()
    start.next = LL
    let x = start
    while(x.next && x.next.next) {
        let next1 = x.next
        let next2 = x.next.next
        next1.next = next2.next
        next2.next = next1
        x.next = next2
        x = x.next.next 
    }
    return start.next
}

const L11 = new Node(11);
const L10 = new Node(10, L11);
const L9 = new Node(9, L10);
const L8 = new Node(8, L9);
const L7 = new Node(7, L8);
const L6 = new Node(6, L7);
const L5 = new Node(5, L6);
const L4 = new Node(4, L5);
const L3 = new Node(3, L4);
const L2 = new Node(2, L3);
const L1 = new Node(1, L2);

const newLL = solve(L1);
printLL(newLL);
