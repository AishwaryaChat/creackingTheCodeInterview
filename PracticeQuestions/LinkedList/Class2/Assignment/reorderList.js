/*
Reorder List

Problem Description
Given a singly linked list A

 A: A0 → A1 → … → An-1 → An 
reorder it to:

 A0 → An → A1 → An-1 → A2 → An-2 → … 
You must do this in-place without altering the nodes' values.



Problem Constraints
1 <= |A| <= 10^6



Input Format
The first and the only argument of input contains a pointer to the head of the linked list A.



Output Format
Return a pointer to the head of the modified linked list.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5] 
Input 2:

 A = [1, 2, 3, 4] 


Example Output
Output 1:

 [1, 5, 2, 4, 3] 
Output 2:

 [1, 4, 2, 3] 


Example Explanation
Explanation 1:

 The array will be arranged to [A0, An, A1, An-1, A2].
Explanation 2:

 The array will be arranged to [A0, An, A1, An-1, A2].
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

function solve(LL) {
    if(LL.next === null) return LL
  let slow = LL;
  let fast = LL;
  let LL1Last = null;
  // find middle element
  while (fast !== null && fast.next !== null) {
    LL1Last = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse list from middle element
  LL1Last.next = null;
  let current = slow;
  let prev = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // merge 2 lists
  let x = LL;
  let y = prev;
  let k = LL;
  while (x && y) {
    const temp = x.next;
    x.next = y;
    x = temp;
    const yTemp = y.next;
    y.next = x;
    y = yTemp;
    if (x === null && y !== null) {
      y.next = yTemp;
    }
  }
  return LL;
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
