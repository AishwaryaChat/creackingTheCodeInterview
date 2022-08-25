/*
Median of Array

Problem Description
There are two sorted arrays A and B of sizes N and M respectively.

Find the median of the two sorted arrays ( The median of the array formed by merging both the arrays ).

NOTE:

The overall run time complexity should be O(log(m+n)).
IF the number of elements in the merged array is even, then the median is the average of (n/2)th and (n/2+1)th element. For example, if the array is [1 2 3 4], the median is (2 + 3) / 2.0 = 2.5.


Problem Constraints
1 <= N + M <= 2*10^6



Input Format
The first argument is an integer array A of size N.
The second argument is an integer array B of size M.



Output Format
Return a decimal value denoting the median of two sorted arrays.



Example Input
Input 1:

 A = [1, 4, 5]
 B = [2, 3]
Input 2:

 A = [1, 2, 3]
 B = [4]


Example Output
Output 1:

 3.0
Output 2:

 2.5


Example Explanation
Explanation 1:

 The median of both the sorted arrays will be 3.0.
Explanation 2:

 The median of both the sorted arrays will be (2+3)/2 = 2.5.
*/

// The bruteforce way to do this is merged both the arrays and calculate the median, TC for which is O(N), but it's mentioned that we have to complete in O(log(N*M)) complexity
// So we will hv to optimize it
// The idea here is imagine there are 2 arrays with equal sizes
// We can get this equal sizes array from total number of elements in both the array
// Now start taking the elements from array A
// Basically we have to decide how many elements we have to take in first half from A and how many in first half from B
// We will run a binary search on number of elements to be take from A
// TC - O(log(n*m))

function solve(A, B) {
  if (A.length > B.length) {
    return solve(B, A)
  }
  let n = A.length;
  let m = B.length;
  let low = 0;
  let high = n;
  while (low <= high) {
    const cut1 = Math.floor((low + high) / 2); // calculating cut1
    const cut2 =  Math.floor((n+m) / 2) - cut1;
    const l1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : A[cut1 - 1];
    const l2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : B[cut2 - 1];
    const r1 = cut1 < n ? A[cut1] : Number.MAX_SAFE_INTEGER;
    const r2 = cut2 < m ? B[cut2] : Number.MAX_SAFE_INTEGER;
    if (l1 > r2) {
      high = cut1 - 1;
    } else if (l2 > r1) {
      low = cut1 + 1;
    } else {
      return (n + m) % 2 === 0
        ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2
        : Math.min(r1, r2);
    }
  }
}

// const A = [2, 3, 3, 8, 9];
// const B = [1, 4, 5, 6];

// const A = [];
// const B = [1, 4, 5, 6];

// const A = [0, 23];
// const B = [];

const A = [1, 5, 8, 10, 18, 20];
const B = [2, 3, 6, 7];
// 1 2 3 5 6 7 8 10 18 20
console.log(solve(A, B));
