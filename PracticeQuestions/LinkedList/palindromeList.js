/*
Palindrome List
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given a singly linked list A, determine if it's a palindrome. Return 1 or 0, denoting if it's a palindrome or not, respectively.



Problem Constraints
1 <= |A| <= 10^5



Input Format
The first and the only argument of input contains a pointer to the head of the given linked list.



Output Format
Return 0, if the linked list is not a palindrome.

Return 1, if the linked list is a palindrome.



Example Input
Input 1:

A = [1, 2, 2, 1]
Input 2:

A = [1, 3, 2]


Example Output
Output 1:

 1 
Output 2:

 0 


Example Explanation
Explanation 1:

 The first linked list is a palindrome as [1, 2, 2, 1] is equal to its reversed form.
Explanation 2:

 The second linked list is not a palindrom as [1, 3, 2] is not equal to [2, 3, 1].
*/

// TC = O(N)

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

function getMid(LL) {
  let slow = LL;
  let fast = LL;
  let prev
  while (fast.next && fast.next.next) {
      prev = slow
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseLL(LL) {
    let prev = null
    let curr = LL
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

function solve(LL) {
    let mid = getMid(LL)
    let x = LL
    let y = reverseLL(mid.next)
    mid.next = null
    while(x) {
        if(y && x.data == y.data) {
            x = x.next
            y = y.next
        } else {
            if(y===null) return true
            return false
        }
    }
    return true
}

const L8 = new Node(3);
const L7 = new Node(2, L8);
const L6 = new Node(1, L7);
const L5 = new Node(2, L6);
const L4 = new Node(2, L5);
const L3 = new Node(1, L4);
const L2 = new Node(2, L3);
const L1 = new Node(3, L2);

printLL(L1);
const result = solve(L1);
console.log("IsPalindrome", result)
