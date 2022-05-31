/*
Longest Palindromic List

Problem Description
Given a linked list of integers. Find and return the length of the longest palindrome list that exists in that linked list.

A palindrome list is a list that reads the same backward and forward.

Expected memory complexity : O(1)



Problem Constraints
1 <= length of the linked list <= 2000

1 <= Node value <= 100



Input Format
The only argument given is head pointer of the linked list.



Output Format
Return the length of the longest palindrome list.



Example Input
Input 1:

 2 -> 3 -> 3 -> 3
Input 2:

 2 -> 1 -> 2 -> 1 ->  2 -> 2 -> 1 -> 3 -> 2 -> 2


Example Output
Output 1:

 3
Output 2:

 5


Example Explanation
Explanation 1:

 3 -> 3 -> 3 is largest palindromic sublist
Explanation 2:

 2 -> 1 -> 2 -> 1 -> 2 is largest palindromic sublist.
*/

// TC - O(N^2)
// Idea is to keep revesing the linked list on the go and keep checking for palindrome
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

function getLength(x, y) {
  let l = 0;
  while (x !== null && y !== null && x.data === y.data) {
    x = x.next;
    y = y.next;
    l++;
  }
  return l;
}

function solve(LL) {
  let curr = LL;
  let prev = null;
  let ans = 0;

  while (curr && curr.next) {
    let next = curr.next;
    curr.next = prev;
    let l1 = getLength(prev, next);
    let l2 = getLength(curr, next);
    ans = Math.max(ans, 2 * l1 + 1, 2 * l2);
    prev = curr;
    curr = next;
  }
  return ans;
}

// const L8 = new Node(3);
// const L7 = new Node(2, L8);
const L6 = new Node(1);
const L5 = new Node(2, L6);
const L4 = new Node(2, L5);
const L3 = new Node(1, L4);
// const L2 = new Node(2, L3);
// const L1 = new Node(3, L2);
printLL(L3);
const result = solve(L3);
console.log(result);
