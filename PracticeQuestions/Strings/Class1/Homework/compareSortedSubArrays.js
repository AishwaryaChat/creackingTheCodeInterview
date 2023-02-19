/*
Compare Sorted Subarrays

Problem Description
Given an array A of length N. You have to answer Q queries.

Each query will contain four integers l1, r1, l2, and r2. If sorted segment from [l1, r1] is the same as the sorted segment from [l2 r2], then the answer is 1 else 0.

NOTE The queries are 0-indexed.

Problem Constraints
0 <= A[i] <= 100000
1 <= N <= 100000
1 <= Q <= 100000

Input Format
The first argument is an array A.
The second is a 2D array B denoting queries with dimension Q * 4.
Consider ith query as l1 = B[i][0], r1 = B[i][1], l2 = A[i][2], r2 = B[i][3].

Output Format
Return an array of length Q with answers to the queries in the same order as the input.

Example Input
Input 1:

 A = [1, 7, 11, 8, 11, 7, 1]
 B = [
       [0, 2, 4, 6]
     ]
Input 2:

 A = [1, 3, 2]
 B = [
       [0, 1, 1, 2]
     ]

Example Output
Output 1:

 [1]
Output 2:

 [0]

Example Explanation
Explanation 1:

 (0, 2) -> [1, 7, 11]
 (4, 6) -> [11, 7, 1]
 Both are same when sorted hence 1.
Explanation 2:

 (0, 1) -> [1, 3]
 (1, 2) -> [3, 2]
 Both are different when sorted hence 0.
*/

// TC - O(N)
// SC - O(N)
function hashFun() {
  let ret = 0;
  ret |= Math.floor(Math.random() * 2 ** 15);
  ret |= Math.floor(Math.random() * 2 ** 15) << 15;
  return ret;
}

function setHash(A) {
  let hash = {};
  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]] === undefined) {
      hash[A[i]] = hashFun();
    }
  }
  return hash;
}

function solve(A, B) {
  const hash = setHash(A);
  let acc = 0;
  const prefixSum = A.map((a) => {
    acc += hash[a];
    return acc;
  });
  let output = [];
  for (let i = 0; i < B.length; i++) {
    const [l1, r1, l2, r2] = B[i];
    const sum1 = prefixSum[r1] - (l1 > 0 ? prefixSum[l1 - 1] : 0);
    const sum2 = prefixSum[r2] - (l2 > 0 ? prefixSum[l2 - 1] : 0);
    if (sum1 === sum2) output.push(1);
    else output.push(0);
  }
  return output;
}

const A = [1, 7, 11, 8, 11, 7, 1];
const B = [[0, 2, 4, 6]];
// Output: [1]

// const A = [1, 3, 2];
// const B = [[0, 1, 1, 2]];
// Output: [0]

console.log(solve(A, B));
