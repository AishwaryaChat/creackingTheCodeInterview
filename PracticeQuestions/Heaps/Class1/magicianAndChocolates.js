/*
Magician and Chocolates

Problem Description
Given N bags, each bag contains Bi chocolates. There is a kid and a magician.
In a unit of time, the kid can choose any bag i, and eat Bi chocolates from it, then the magician will fill the ith bag with floor(Bi/2) chocolates.

Find the maximum number of chocolates that the kid can eat in A units of time.

NOTE:

floor() function returns the largest integer less than or equal to a given number.
Return your answer modulo 10^9+7


Problem Constraints
1 <= N <= 100000
0 <= B[i] <= INT_MAX
0 <= A <= 10^5



Input Format
The first argument is an integer A.
The second argument is an integer array B of size N.



Output Format
Return an integer denoting the maximum number of chocolates the kid can eat in A units of time.



Example Input
Input 1:

 A = 3
 B = [6, 5]
Input 2:

 A = 5
 b = [2, 4, 6, 8, 10]


Example Output
Output 1:

 14
Output 2:

 33


Example Explanation
Explanation 1:

 At t = 1 kid eats 6 chocolates from bag 0, and the bag gets filled by 3 chocolates. 
 At t = 2 kid eats 5 chocolates from bag 1, and the bag gets filled by 2 chocolates. 
 At t = 3 kid eats 3 chocolates from bag 0, and the bag gets filled by 1 chocolate. 
 so, total number of chocolates eaten are 6 + 5 + 3 = 14
Explanation 2:

 Maximum number of chocolates that can be eaten is 33.
*/
// TC = O(A log N)
// Where A is k in the code
// A is the time given

const { insert, deleteMax } = require("../maxheapImplementation");

function solve(A, k) {
  const MOD = Math.pow(10, 9) + 7;
  let heap = [];
  for (let i = 0; i < A.length; i++) {
    heap = insert(heap, A[i]);
  }
  let ans = 0;
  for (let i = 1; i <= k; i++) {
    let maxEle = heap[0];
    heap = deleteMax(heap);
    heap = insert(heap, Math.floor(maxEle / 2));
    ans += maxEle % MOD;
  }
  return ans % MOD;
}

// const A = [2, 4, 6, 8, 10];
// console.log(solve(A, 5));

const A = [6, 5];
console.log(solve(A, 3));
