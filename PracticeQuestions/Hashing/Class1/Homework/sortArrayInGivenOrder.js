/*
Sort Array in given Order

Problem Description
Given two arrays of integers A and B, Sort A in such a way that the relative order among the elements will be the same as those are in B.
For the elements not present in B, append them at last in sorted order.

Return the array A after sorting from the above method.

NOTE: Elements of B are unique.



Problem Constraints
1 <= length of the array A <= 100000

1 <= length of the array B <= 100000

-10^9 <= A[i] <= 10^9



Input Format
The first argument given is the integer array A.

The second argument given is the integer array B.



Output Format
Return the array A after sorting as described.



Example Input
Input 1:

A = [1, 2, 3, 4, 5]
B = [5, 4, 2]
Input 2:

A = [5, 17, 100, 11]
B = [1, 100]


Example Output
Output 1:

[5, 4, 2, 1, 3]
Output 2:

[100, 5, 11, 17]


Example Explanation
Explanation 1:

 Simply sort as described.
Explanation 2:

 Simply sort as described.

*/

// SC - O(N)
// TC - O(N)

function solve(A, B) {
  let map = {};
  for (let i = 0; i < B.length; i++) {
    map[B[i]] = i;
  }
  let mapA = {};
  for (let i = 0; i < A.length; i++) {
    mapA[A[i]] = mapA[A[i]] ? mapA[A[i]] + 1 : 1;
  }
  let ans = [];
  let j = 0;
  for (let i = 0; i < B.length; i++) {
    let val = mapA[B[i]];
    if (val !== undefined) {
      while (val > 0) {
        ans.push(B[i]);
        mapA[B[i]]--;
        val--;
      }
    }
  }
  let rest = [];
  Object.keys(mapA).forEach((key) => {
    let val = mapA[key];
    if (val > 0) {
      while (val > 0) {
        rest.push(Number(key));
        val--;
      }
    }
  });
  rest.sort((a, b) => a - b);
  return [...ans, ...rest]
}

const A = [1, 2, 3, 4, 5];
const B = [5, 4, 2];

// const A = [5, 17, 100, 11];
// const B = [1, 100];

// const A = [10, 2, 18, 16, 16, 16];
// const B = [3, 13, 2, 16, 4, 19];

console.log(solve(A, B));
