/*
Ways to form Max Heap

Problem Description
Max Heap is a special kind of complete binary tree in which, for every node, the value present in that node is greater than the value present in its children nodes.

Find the number of distinct Max Heap that can be made from A distinct integers.

In short, you have to ensure the following properties for the max heap :

Heap has to be a complete binary tree ( A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.)
Every node is greater than all its children.
NOTE: If you want to know more about Heaps, please visit this link. Return your answer modulo 109 + 7.



Problem Constraints
1 <= A <= 100



Input Format
The first and only argument is an integer A.



Output Format
Return an integer denoting the number of distinct Max Heap.



Example Input
Input 1:

 A = 4
Input 2:

 A = 10


Example Output
Output 1:

 3
Output 2:

 3360


Example Explanation
Explanation 1:

 Let us take 1, 2, 3, 4 as our 4 distinct integers
 Following are the 3 possible max heaps from these 4 numbers :
      4           4                     4
    /  \         / \                   / \ 
   3    2   ,   2   3      and        3   1
  /            /                     /    
 1            1                     2
Explanation 2:

 Number of distinct heaps possible with 10 distinct integers = 3360.
*/

let MOD = Math.pow(10, 9) + 7;

function getWays(N, powersOfTwo, factorial, ways) {
  if (ways[N] !== undefined) return ways[N];
  const H = Math.floor(Math.log2(N));
  const L =
    powersOfTwo[H - 1] -
    1 +
    Math.min(powersOfTwo[H - 1], N - (powersOfTwo[H] - 1));
  const nCr = Math.floor(
    factorial[N - 1] / (factorial[L] * factorial[N - 1 - L])
  );
  ways[N] =
    ((nCr % MOD) *
      (getWays(L, powersOfTwo, factorial, ways) % MOD) *
      (getWays(N - L - 1, powersOfTwo, factorial, ways) % MOD)) %
    MOD;
  return ways[N];
}

function getFactorial(A, arr) {
  if (A === 1) {
    arr[A] = 1;
    return arr[A];
  }
  arr[A] = ((A * getFactorial(A - 1, arr)) ) ;
  return arr[A];
}

function calculatePowersOfTwo(H, arr) {
  if (H === 0) {
    arr[H] = 1;
    return arr[H];
  }
  arr[H] = (2 * (calculatePowersOfTwo(H - 1, arr)%MOD))%MOD;
  return arr[H];
}

function solve(A) {
  const H = Math.floor(Math.log2(A));
  let powersOfTwo = new Array(H + 1);
  calculatePowersOfTwo(H, powersOfTwo);
  const factorialTillA = new Array(A + 1);
  getFactorial(A, factorialTillA);
  let ways = new Array(A + 1);
  ways[1] = 1;
  ways[2] = 1;
  let ans = getWays(A, powersOfTwo, factorialTillA, ways);
  return ans;
}

// console.log(rFact(100))

// 1 - 1;
// 2 - 1;
// 3 - 2;
// 4 - 3;

// const A = 4;
// const A = 10;
const A = 100;
console.log(solve(A));
