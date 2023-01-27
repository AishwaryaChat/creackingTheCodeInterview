// Matrix Median

// Problem Description
// Given a matrix of integers A of size N x M in which each row is sorted.

// Find and return the overall median of matrix A.

// NOTE: No extra memory is allowed.

// NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.

// Problem Constraints
// 1 <= N, M <= 10^5

// 1 <= N*M <= 10^6

// 1 <= A[i] <= 10^9

// N*M is odd

// Input Format
// The first and only argument given is the integer matrix A.

// Output Format
// Return the overall median of matrix A.

// Example Input
// Input 1:

// A = [   [1, 3, 5],
//         [2, 6, 9],
//         [3, 6, 9]   ]
// Input 2:

// A = [   [5, 17, 100]    ]

// Example Output
// Output 1:

//  5
// Output 2:

//  17

// Example Explanation
// Explanation 1:

// A = [1, 2, 3, 3, 5, 6, 6, 9, 9]
// Median is 5. So, we return 5.
// Explanation 2:

// Median is 17.

// TC - O(log(n*m) * n * log(m))
// n * log(m) - for finding out the counts for each element
function findNumberOfSmallerElements(A, x) {
  const n = A.length;
  const m = A[0].length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let ans = -1;
    let low = 0;
    let high = m-1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (A[i][mid] > x) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    console.log("x", x, "ans", ans)
    ans = ans === -1 ? m : ans;
    count += ans;
  }
  return count;
}

function solve(A) {
  let l = Number.MAX_SAFE_INTEGER;
  let r = Number.MIN_SAFE_INTEGER;
  for(let i=0;i<A.length;i++) {
    A.sort((a,b) => a-b)
  }
  console.log("A", A)
  const n = A.length;
  const m = A[0].length;
  for (let i = 0; i < n; i++) {
    l = Math.min(l, Math.min(...A[i]));
    r = Math.max(r, Math.max(...A[i]));
  }
  const maxSmallerCount = Math.floor((n * m) / 2) + 1
  console.log("maxSmallerCount", maxSmallerCount)
  let ans = -1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const lesserElementsCount = findNumberOfSmallerElements(A, mid);
    console.log("mid", mid, "lesserElementsCount", lesserElementsCount)
    if (lesserElementsCount >= maxSmallerCount) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
}

// const A = [
//   [1, 3, 5],
//   [2, 6, 9],
//   [3, 6, 9],
// ];
// Output: 5

// const A = [   [5, 17, 100]    ]
// Output: 17

const A = [
  [1, 1, 2, 9, 10, 12, 12, 17, 21, 22, 30],
  [2, 3, 5, 7, 8, 12, 21, 25, 26, 27, 30],
  [1, 3, 12, 13, 13, 14, 17, 18, 21, 21, 23],
];

console.log(solve(A));
