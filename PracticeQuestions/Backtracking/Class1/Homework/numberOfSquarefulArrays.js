// Number of Squareful Arrays

// Problem Description
// Given an array of integers A, the array is squareful if for every pair of adjacent elements, their sum is a perfect square.

// Find and return the number of permutations of A that are squareful. Two permutations A1 and A2 differ if and only if there is some index i such that A1[i] != A2[i].

// Problem Constraints
// 1 <= length of the array <= 12

// 1 <= A[i] <= 10^9

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return the number of permutations of A that are squareful.

// Example Input
// Input 1:

//  A = [2, 2, 2]
// Input 2:

//  A = [1, 17, 8]

// Example Output
// Output 1:

//  1
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  Only permutation is [2, 2, 2], the sum of adjacent element is 4 and 4 and both are perfect square.
// Explanation 2:

//  Permutation are [1, 8, 17] and [17, 8, 1].

// TC - O(!N) - since there are factorial N permutations, but the TC will be much less than this because we are not moving forward in a particular permutation if any of the element in that permutaion is not squareful
// SC - O(N) - frequency + state space tree(at any particular time the depth of the stack can go till N)

let finalAns = 0;

function check(A) {
  const N = A.length - 1;
  if (N < 1) return true;
  return Number.isInteger(Math.sqrt(A[N] + A[N - 1])) ? true : false;
}

function findPermutations(A, frq, pos, res) {
  if (pos === A.length) {
    if (res.length === A.length) finalAns += 1;

    return;
  }
  const keys = Object.keys(frq);
  for (let i = 0; i < keys.length; i++) {
    const freq = frq[keys[i]];
    if (freq === 0) continue;
    frq[keys[i]]--;
    res.push(Number(keys[i]));
    if (check(res)) {
      findPermutations(A, frq, pos + 1, res);
    }
    res.pop();
    frq[keys[i]]++;
  }
  return;
}

function solve(A) {
  let frq = {};
  for (let i = 0; i < A.length; i++) {
    if (!frq[A[i]]) frq[A[i]] = 0;
    frq[A[i]]++;
  }
  findPermutations(A, frq, 0, []);
  return finalAns;
}

// const A = [1, 17, 7, 4, 3, 10, ];
const A = [2, 2, 2, 2, 2];
// const A = [ 783000521, 766639918, 195102639, 230793946, 757604720, 77842679, 674858911, 496636809, 855231289 ]
console.log(solve(A));
