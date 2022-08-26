/*
Count Subarrays

Problem Description

Misha likes finding all Subarrays of an Array. Now she gives you an array A of N elements and told you to find the number of subarrays of A, that have unique elements.

Since the number of subarrays could be large, return value % 109 +7.



Problem Constraints

1 <= N <= 10^5

1 <= A[i] <= 10^6



Input Format

The only argument given is an Array A, having N integers.



Output Format

Return the number of subarrays of A, that have unique elements.



Example Input

Input 1:

 A = [1, 1, 3]
Input 2:

 A = [2, 1, 2]


Example Output

Output 1:

 4
Output 1:

 5


Example Explanation

Explanation 1:

 Subarrays of A that have unique elements only:
 [1], [1], [1, 3], [3]
Explanation 2:

 Subarrays of A that have unique elements only:
 [2], [1], [2, 1], [1, 2], [2]
*/

// We are using tow pointer technique here
// We will keep moving and enter the index of every element in map
// Every time we will check if element is already encountered that is map[A[j]] !== undefined, Also we will have to check that the last index of this element should be greater than or equal to current value of i
// An example of this scenaio is this [25, 96, 1, 30, 73, 91, 70, 65, 53, 75, 5, 19, 65, 6, 96]
// If you see 96 is encountedred once, after that allelements are unique till 2nd occurence of 65, so in this case our value of i will become 8, then when we will come to 96, this condition map[A[j]] !== undefined (map[A[j]] is 1 for 96 when j comes to next 96)  will be true, but i is already past this value, so we will have to ignore this and dont increment our value of i with respect to this, but we will have to calculate the number of sub arrays for current 96, after the current i value
// TC - O(N)
// SC - O(range)

function solve(A) {
  const MOD = Math.pow(10, 9) + 7;
  let map = {};
  let i = 0;
  let j = 0;
  let count = 0;
  while (i <= j && j < A.length) {
    if (map[A[j]] !== undefined && map[A[j]] >= i) {
      i = map[A[j]] + 1;
    }
    map[A[j]] = j;
    count = ((count % MOD) + j - i + 1) % MOD;
    j++;
  }
  return count;
}

// const A = [1, 1, 3];
// const A = [2, 1, 2];
// const A = [2, 1, 3, 2, 2, 2];
// const A = [
//   93, 9, 12, 32, 97, 75, 32, 77, 40, 79, 61, 42, 57, 19, 64, 16, 86, 47, 41, 67,
//   76, 63, 24, 10, 25, 96, 1, 30, 73, 91, 70, 65, 53, 75, 5, 19, 65, 6, 96, 33,
//   73, 55, 4, 90, 72, 83, 54, 78, 67, 56, 8, 70, 43, 63,
// ];

const A = [
  54, 5, 31, 87, 45, 35, 59, 71, 18, 66, 79, 39, 46, 24, 91, 95, 63, 51, 34, 47,
  33, 48, 56, 27, 23, 4, 3, 74, 81, 57, 23, 71, 83, 53, 90, 31, 34, 75, 15, 81,
  10, 71, 82, 71, 3, 100, 43, 100, 67, 16, 59, 45, 73, 57, 76, 40, 45, 38, 37,
  20, 24, 72, 10, 53, 29, 77, 99, 98, 59, 85, 89, 20, 53, 73,
];

// const A = [
//   79, 78, 46, 36, 51, 56, 84, 85, 4, 26, 38, 23, 76, 62, 98, 41, 8, 79, 98, 84,
//   81, 14, 77,
// ];

console.log(solve(A));
