/*
Longest Consecutive Sequence

Problem Description
Given an unsorted integer array A of size N.

Find the length of the longest set of consecutive elements from array A.



Problem Constraints
1 <= N <= 10^6

-10^6 <= A[i] <= 10^6



Input Format
First argument is an integer array A of size N.



Output Format
Return an integer denoting the length of the longest set of consecutive elements from the array A.



Example Input
Input 1:

A = [100, 4, 200, 1, 3, 2]
Input 2:

A = [2, 1]


Example Output
Output 1:

 4
Output 2:

 2


Example Explanation
Explanation 1:

 The set of consecutive elements will be [1, 2, 3, 4].
Explanation 2:

 The set of consecutive elements will be [1, 2].
*/
// TC = O(N)
// The idea here is for every element check if 1 smaller element for it is present in the array
// If it is present then dont do anything(this means current number is not the starting of the biggest sequence, it is somewhere in between)
// If 1 smaller number is not present then run a while loop if 1 greater elemtn is present until it is not and keep the count and update the max count
// In this case the inside while loop is only going to run for the number which is starting of any sequence
// In this way in total only N times we will iterate even if we have written a loop inside loop

function solve(A) {
  let map = {};
  for (let i = 0; i < A.length; i++) {
    if (map[A[i]]) {
      map[A[i]] += 1;
    } else {
      map[A[i]] = 1;
    }
  }
  let max = 1;
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    let numMinus1 = num - 1;
    if (map[numMinus1]) continue;
    else {
      let count = 1;
      let numPlus1 = num + 1;
      let numPlus1Val = map[numPlus1];
      while (numPlus1Val) {
        numPlus1 += 1;
        numPlus1Val = map[numPlus1];
        count += 1;
      }
      max = Math.max(count, max);
    }
  }
  return max;
}

// Above solution can also be written as
function longestConsecutive(A) {
  const set = new Set(A);
  let ans = 0;
  for (let num of A) {
    if (!set.has(num - 1)) {
      let l = 0;
      while (set.has(num++)) {
        ++l;
      }
      ans = Math.max(ans, l);
    }
  }
  return ans;
}

const A = [100, 4, 3, 6, 10, 20, 11, 5, 101];

console.log(longestConsecutive(A));
