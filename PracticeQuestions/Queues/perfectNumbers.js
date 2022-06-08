/*
Perfect Numbers

Problem Description
Given an integer A, you have to find the Ath Perfect Number.

A Perfect Number has the following properties:

It comprises only 1 and 2.

The number of digits in a Perfect number is even.

It is a palindrome number.

For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.



Problem Constraints
1 <= A <= 100000



Input Format
The only argument given is an integer A.



Output Format
Return a string that denotes the Ath Perfect Number.



Example Input
Input 1:

 A = 2
Input 2:

 A = 3


Example Output
Output 1:

 22
Output 2:

 1111


Example Explanation
Explanation 1:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Explanation 2:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
*/

const Queue = require("./arrayImpelemtation");

function reseverNum(A) {
  const reverse = A.toString().split("").reverse().join("");
  return A.toString() + reverse;
}

// TC - O(N)
// SC - O(N)
// The Idea is to Nth number which includes only 1&2 and then reverse this Nth number and append to the Nth number, this wil be thw answer

function solve(N) {
  let queue = new Queue({maxLength: N});
  queue.enqueue(1);
  queue.enqueue(2);
  let i = 2;
  while (i <= N) {
    let pre = queue.dequeue();
    let num1 = pre * 10 + 1;
    let num2 = pre * 10 + 2;
    queue.enqueue(num1);
    queue.enqueue(num2);
    i += 2;
  }
  console.log(queue.printQueue());
  let rear = queue.rearElement();
  let result = reseverNum(rear);
  return result;
}

const N = 1;
// const N = 9
console.log(solve(N));
