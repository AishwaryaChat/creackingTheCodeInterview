/*
K reverse linked list

Problem Description
Given a singly linked list A and an integer B, reverse the nodes of the list B at a time and return the modified linked list.



Problem Constraints
1 <= |A| <= 10^3

B always divides A



Input Format
The first argument of input contains a pointer to the head of the linked list.

The second arugment of input contains the integer, B.



Output Format
Return a pointer to the head of the modified linked list.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5, 6]
 B = 2
Input 2:

 A = [1, 2, 3, 4, 5, 6]
 B = 3


Example Output
Output 1:

 [2, 1, 4, 3, 6, 5]
Output 2:

 [3, 2, 1, 6, 5, 4]


Example Explanation
Explanation 1:

 For the first example, the list can be reversed in groups of 2.
    [[1, 2], [3, 4], [5, 6]]
 After reversing the K-linked list
    [[2, 1], [4, 3], [6, 5]]
Explanation 2:

 For the second example, the list can be reversed in groups of 3.
    [[1, 2, 3], [4, 5, 6]]
 After reversing the K-linked list
    [[3, 2, 1], [6, 5, 4]]
*/

const  { printLL } = require("./implementation");

class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function solve(LL, B) {
    let current = LL
    let prev = null
    let flag = false
    let tail = current
    let j = 0
    let prevTail
    while(current){
        let i = B
        while(i>0 && current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
            i--
        }
        if(!flag) {
            LL = prev
            flag = true
            prevTail = current
        } else {
            tail.next = prev
            tail = prevTail
            prevTail = current
        }
        prev = null
        j++
    }
    return LL
}

const LL9 = new Node(9);
const LL8 = new Node(8, LL9);
const LL7 = new Node(7, LL8);
const LL6 = new Node(6, LL7);
const LL5 = new Node(5, LL6);
const LL4 = new Node(4, LL5);
const LL3 = new Node(3, LL4);
const LL2 = new Node(2, LL3);
const LL1 = new Node(1, LL2);
printLL(LL1)
const newLL = solve(LL1, 3)
console.log("newLL", newLL)
printLL(newLL)