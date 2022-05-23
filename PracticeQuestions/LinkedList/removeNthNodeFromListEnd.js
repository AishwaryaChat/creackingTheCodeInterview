/*
Remove Nth Node from List End

Problem Description
Given a linked list A, remove the B-th node from the end of the list and return its head.

For example, Given linked list: 1->2->3->4->5, and B = 2. After removing the second node from the end, the linked list becomes 1->2->3->5.

NOTE: If B is greater than the size of the list, remove the first node of the list.

NOTE: Try doing it using constant additional space.



Problem Constraints
1 <= |A| <= 106



Input Format
The first argument of input contains a pointer to the head of the linked list.

The second argument of input contains the integer B.



Output Format
Return the head of the linked list after deleting the B-th element from the end.



Example Input
Input 1:

A = [1, 2, 3, 4, 5]
B = 2
Input 2:

A = [1]
B = 1


Example Output
Output 1:

[1, 2, 3, 5]
Output 2:

 [] 


Example Explanation
Explanation 1:

In the first example, 4 is the second last element.
Explanation 2:

In the second example, 1 is the first and the last element.
*/

// TC - O(N)

class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function printLL(LL) {
  let x = LL;
  while (x) {
    console.log("x", x.data);
    x = x.next;
  }
}

function solve(LL, B) {
    let x = LL
    let count = 0
    while(x){
        x = x.next
        count++
    }
    let j = count - B
    x = LL

    if(B>count || j===0) {
        LL = LL.next
    } else {
        let i=0
        while(i<j-1){
           x = x.next 
           i++
        }
        x.next = x.next.next
    }
    return LL
}
const L6 = new Node(6);
const L5 = new Node(5, L6);
const L4 = new Node(4, L5);
const L3 = new Node(3, L4);
const L2 = new Node(2, L3);
const L1 = new Node(1, L2);
// printLL(L4);
const LLFinal = solve(L5, 1);
console.log();
printLL(LLFinal);

// const L
