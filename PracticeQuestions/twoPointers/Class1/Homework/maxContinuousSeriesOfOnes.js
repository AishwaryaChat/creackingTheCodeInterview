// Max Continuous Series of 1s

// Problem Description
// Given a binary array A, find the maximum sequence of continuous 1's that can be formed by replacing at-most B zeroes.

// For this problem, return the indices of maximum continuous series of 1s in order.

// If there are multiple possible solutions, return the sequence which has the minimum start index.

// Problem Constraints
// 0 <= B <= 10^5

// 1 <= size(A) <= 10^5

// 0 <= A[i] <= 1

// Input Format
// First argument is an binary array A.

// Second argument is an integer B.

// Output Format
// Return an array of integers denoting the indices(0-based) of 1's in the maximum continuous series.

// Example Input
// Input 1:

//  A = [1 1 0 1 1 0 0 1 1 1 ]
//  B = 1
// Input 2:

//  A = [1, 0, 0, 0, 1, 0, 1]
//  B = 2

// Example Output
// Output 1:

//  [0, 1, 2, 3, 4]
// Output 2:

//  [3, 4, 5, 6]

// Example Explanation
// Explanation 1:

//  Flipping 0 present at index 2 gives us the longest continous series of 1's i.e subarray [0:4].
// Explanation 2:

//  Flipping 0 present at index 3 and index 5 gives us the longest continous series of 1's i.e subarray [3:6].

// TC - O(N)
// SC - O(1)
function solve(A, B) {
  let ans = [];
  let minLow = -1;
  let maxHigh = -1;
  let max = 0;
  let p1 = 0;
  let p2 = 0;
  let k = 0;
  while (p2 < A.length) {
    if (A[p2] === 1) {
      p2 += 1;
    } else {
      if (k + 1 <= B) {
        k += 1;
        p2 += 1;
      } else {
        if (p2 - p1 - 1 > max) {
          minLow = p1;
          maxHigh = p2 - 1;
          max = p2 - p1 - 1;
        }
        if (A[p1] === 0) {
          k--;
        }
        p1 += 1;
      }
    }
  }
  if (p2 >= A.length && k <= B && p2 - p1 - 1 > max) {
    minLow = p1;
    maxHigh = p2 - 1;
  }
  for (let i = 0, j = minLow; j <= maxHigh; j++, i++) {
    ans[i] = j;
  }
  return ans;
}

// const A = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1];
// const B = 1;
// Output: [0, 1, 2, 3, 4]

const A = [1, 0, 0, 0, 1, 0, 1];
const B = 2;
// Output: [3, 4, 5, 6]

// const A = [1, 1,0];
// const B = 2;

console.log(solve(A, B));
