// Alternate positive and negative elements

// Problem Description
// Given an array of integers A, arrange them in an alternate fashion such that every non-negative number is followed by negative and vice-versa, starting from a negative number, maintaining the order of appearance. The number of non-negative and negative numbers need not be equal.

// If there are more non-negative numbers, they appear at the end of the array. If there are more negative numbers, they also appear at the array's end.

// Note: Try solving with O(1) extra space.

// Problem Constraints
// 1 <= length of the array <= 7000
// -10^9 <= A[i] <= 10^9

// Input Format
// The first argument given is the integer array A.

// Output Format
// Return the modified array.

// Example Input
// Input 1:

//  A = [-1, -2, -3, 4, 5]
// Input 2:

//  A = [5, -17, -100, -11]

// Example Output
// Output 1:

//  [-1, 4, -2, 5, -3]
// Output 2:

//  [-17, 5, -100, -11]

// Example Explanation
// Explanation 1:

// A = [-1, -2, -3, 4, 5]
// Move 4 in between -1 and -2, A => [-1, 4, -2, -3, 5]
// Move 5 in between -2 and -3, A => [-1, 4, -2, 5, -3]

function solve(A) {
  let pos = 0;
  let neg = 0;
  let negative = []
  let positive = []
  for(let i=0;i<A.length;i++) {
    if(A[i]<0) negative.push(A[i])
    else positive.push(A[i])
  }
//   while (neg < A.length && A[neg] > 0) neg++;
//   while (pos < A.length && A[pos] < 0) pos++;
//   console.log("neg", neg)
//   console.log("pos", pos)
//   if (neg > pos) {
//     [A[neg], A[pos]] = [A[pos], A[neg]];
//     let temp = neg;
//     neg = pos;
//     pos = temp;
//   }
//   let j = neg+1;
//   let i = pos+1;
//   console.log("j", j, "i", i, A[i])
//   while (i < A.length && j < A.length) {
//     while (j < A.length && A[j] < 0) j++;
//     while (i < A.length && A[i] >= 0) i++;
//     console.log("i", i)
//     if (i < A.length && j < A.length) {
//       [A[i], A[j]] = [A[j], A[i]];
//       j++
//       i++
//     }
//   }
//   i = 0;
//   console.log("after sorting", A.toString())
//   while (i < A.length && A[i] < 0) i++;
//   j = i;
//   neg = j;
//   i = 0;

// while (j < A.length && i < neg) {
//     ans.push(A[i]);
//     ans.push(A[j]);
//     i++;
//     j++;
//   }
//   while (i < neg) {
//     ans.push(A[i]);
//     i++;
//   }
//   while (j < A.length) {
//     ans.push(A[j]);
//     j++;
//   }
  let ans = [];
  let i=0
  let j=0
  while (i < negative.length && j < positive.length) {
    ans.push(negative[i]);
    ans.push(positive[j]);
    i++;
    j++;
  }
  while (i < negative.length) {
    ans.push(negative[i]);
    i++;
  }
  while (j < positive.length) {
    ans.push(positive[j]);
    j++;
  }
  
  return ans;
}

// const A = [-1, 4, -2, -3, 5];
// Output 1:
//  [-1, 4, -2, 5, -3]

// const A = [5, -17, -100, -11]
// Output 2:
//  [-17, 5, -100, -11]

// const A = [
//   4, 20, -30, 55, 100, 122, 126, 130, 140, 189, 999, -1, 60, -10, -5, -5, -5, 4,
//   -2, -3, 5,
// ];

// const A = [ -1, -2, -3, 4, 5 ]
// const A = [
//   24, -8, 7, 20, -19, -13, -3, 25, -10, 10, -25, 7, 22, -15, 23, 6, -2, 26, 10,
//   -14, -8, 5, -7, 27, 19, 15, -28, -30, 9, -19, -30, -2, -27, -9, 4, 14, -8, -4,
//   15, 24, -8, -27, -16, -11, 1, 18, -2, -5, 9, 28, -23, 23, -26, 8, -17, 20, -7,
//   5, -18, 8, -24, -20, 20, -28, -3, -18, 1, -8, 26, 14, -6, 15, 9, 12, -1, 29,
//   -12, -3, 8, 23, -21, 0, -7, -4, -25, -18, -12, -17, -15, -11, -3, -29, -13,
//   10, 1, 11, 11, 15, -9, -29, 12, -21, -17, 1, 7, 11, 7, 15, 21, -4, -20, 17,
//   -8, 1, -3, 28, -8, -29, 9, 29, 26, -16, -21, -23, -5, 25, -13, -1, -29, 25,
//   17, 3, 11, 26, 14, -30, 12, -4, 29, 21, -25, 8, -4, 11, -28, -16, -26,
// ];

const A = [
    24, -8, 7, 20, -19, -13, -3, 25, -10, 10, -25, 7, 22, 
  ];
console.log(" ")
console.log(solve(A).toString());
// expected
// -8 24 -19 7 -13 20 -3 25 -10 10 -25 7 -15 22 -2 23 -14 6 -8 26 -7 10 -28 5 -30 27 -19 19 -30 15 -2 9 -27 4 -9 14 -8 15 -4 24 -8 1 -27 18 -16 9 -11 28 -2 23 -5 8 -23 20 -26 5 -17 8 -7 20 -18 1 -24 26 -20 14 -28 15 -3 9 -18 12 -8 29 -6 8 -1 23 -12 0 -3 10 -21 1 -7 11 -4 11 -25 15 -18 12 -12 1 -17 7 -15 11 -11 7 -3 15 -29 21 -13 17 -9 1 -29 28 -21 9 -17 29 -4 26 -20 25 -8 25 -3 17 -8 3 -29 11 -16 26 -21 14 -23 12 -5 29 -13 21 -1 8 -29 11 -30 -4 -25 -4 -28 -16 -26 

// -8 10 -19 8 -13 23 -3 5 -10 0 -25 7 -15 27 -2 1 -14 18 -8 19 -7 15 -28 9 -30 28 -19 7 -30 23 -2 22 -27 10 -9 1 -8 11 -4 11 -8 15 -27 8 -16 9 -11 12 -2 20 -5 20 -23 1 -26 7 -17 11 -7 7 -18 15 -24 21 -20 5 -28 23 -3 17 -18 8 -8 1 -6 6 -1 28 -12 25 -3 20 -21 9 -7 29 -4 26 -25 26 -18 4 -12 14 -17 1 -15 25 -11 10 -3 26 -29 14 -13 25 -9 17 -29 3 -21 11 -17 26 -4 14 -20 24 -8 12 -3 15 -8 29 -29 21 -16 9 -21 8 -23 12 -5 11 -13 15 -1 29 -29 24 -30 -4 -25 -4 -28 -16 -26
