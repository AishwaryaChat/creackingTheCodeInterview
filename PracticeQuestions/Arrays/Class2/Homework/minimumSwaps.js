/*
Q3. Minimum Swaps

Problem Description

Given an array of integers A and an integer B, find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.

Note: It is possible to swap any two elements, not necessarily consecutive.



Problem Constraints

1 <= length of the array <= 100000
-10^9 <= A[i], B <= 10^9



Input Format

The first argument given is the integer array A.
The second argument given is the integer B.



Output Format

Return the minimum number of swaps.



Example Input

Input 1:

 A = [1, 12, 10, 3, 14, 10, 5]
 B = 8
Input 2:

 A = [5, 17, 100, 11]
 B = 20


Example Output

Output 1:

 2
Output 2:

 1
*/
// The solution is based on sliding window concept
// Since all the small elements have to be together so our window length will be equal to the number of smaller elements present in the array, smaller than B
// we will count the numbers greater than Target(B) in thw window and name them as badNos.
// every time we will slide the window we will update or badNos count
// we will do this till the end of the array
// We will update the answer with minimum badNos in a window
// return minimumBadNos at the end
function minimumSwaps(A, B) {
  let goodNos = 0;
  let arrLength = A.length;
  for (let i = 0; i < arrLength; i++) {
    if (A[i] <= B) goodNos++;
  }
  if(goodNos<=1) return 0
  let L = 0;
  let R = 0;
  let badNos = 0;
  while (R<goodNos) {
    if (A[R] > B) badNos++;
    R++
  }
  let swaps = Number.MAX_SAFE_INTEGER;
  while (R < arrLength) {
    if (A[L] > B) badNos--;
    if (A[R] > B) badNos++;
    swaps = Math.min(swaps, badNos);
    L++;
    R++;
  }

  return swaps;
}

const A = [5, 17, 100, 11];
const B = 20;

// const A = [
//   52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5,
//   84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29,
//   7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70,
// ];
// const B = 19;

console.log(minimumSwaps(A, B));
