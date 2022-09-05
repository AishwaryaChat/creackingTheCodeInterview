/*
Remove Duplicates from Sorted List

Problem Description
Given a sorted linked list, delete all duplicates such that each element appears only once.



Problem Constraints
0 <= length of linked list <= 106



Input Format
First argument is the head pointer of the linked list.



Output Format
Return the head pointer of the linked list after removing all duplicates.



Example Input
Input 1:

 1->1->2
Input 2:

 1->1->2->3->3


Example Output
Output 1:

 1->2
Output 2:

 1->2->3


Example Explanation
Explanation 1:

 Each element appear only once in 1->2.
*/

class Node {
    constructor(data = 0, next = null) {
        this.data = data
        this.next = next
    }
}

function printLL(LL) {
    let temp = LL;
    let flag = 0;
    while (temp != null) {
      if (flag == 0) {
        process.stdout.write(temp.data.toString());
        flag = 1;
      } else process.stdout.write(" " + temp.data.toString());
      temp = temp.next;
    }
    process.stdout.write("\n");
  }

function solve(LL) {
    let x = LL
    while(x && x.next) {
        if(x.data === x.next.data) {
            x.next = x.next.next
        } else {
            x = x.next
        }
    }
    return LL
}

const L6 = new Node(3);
const L5 = new Node(3, L6);
const L4 = new Node(3, L5);
const L3 = new Node(2, L4);
const L2 = new Node(1, L3);
const L1 = new Node(1, L2);
printLL(L1);
const LLFinal = solve(L2);
console.log("Printing final LL")
printLL(LLFinal)
