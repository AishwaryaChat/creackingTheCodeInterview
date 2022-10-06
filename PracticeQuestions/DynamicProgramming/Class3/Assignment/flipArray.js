// Flip Array

// Problem Description

// Given an array A of positive elements, you have to flip the sign of some of its elements such that the resultant sum of the elements of array should be minimum non-negative(as close to zero as possible).

// Return the minimum number of elements whose sign needs to be flipped such that the resultant sum is minimum non-negative.

// Problem Constraints

// 1 <= length of(A) <= 100

// Sum of all the elements will not exceed 10,000.

// Input Format

// First and only argument is an integer array A.

// Output Format

// Return an integer denoting the minimum number of elements whose sign needs to be flipped.

// Example Input

// Input 1:

//  A = [15, 10, 6]
// Input 2:

//  A = [14, 10, 4]

// Example Output

// Output 1:

//  1
// Output 2:

//  1

// Example Explanation

// Explanation 1:

//  Here, we will flip the sign of 15 and the resultant sum will be 1.
// Explanation 2:

//  Here, we will flip the sign of 14 and the resultant sum will be 0.
//  Note that flipping the sign of 10 and 4 also gives the resultant sum 0 but flippings there sign are not minimum.
// S = sum of all elements
// TC - O(N* (S/2))
// SC - O(N* (S/2))

function compare(first, second) {
  if (first.sum == second.sum) {
    return first.items < second.items ? first : second;
  } else if (first.sum < second.sum) {
    return second;
  } else {
    return first;
  }
}

function solve(A) {
  const sum = A.reduce((acc, key) => acc + key, 0);
  const weight = Math.floor(sum / 2);
  let dp = [];
  for (let i = 0; i <= A.length; i++) {
    dp[i] = [];
    for (let w = 0; w <= weight; w++) {
      dp[i][w] = { sum: 0, items: 0 };
    }
  }

  for (let i = 0; i <= A.length; i++) {
    for (let w = 0; w <= weight; w++) {
      if (i !== 0 && w !== 0) {
        if (A[i - 1] <= w) {
          const include = {
            sum: A[i - 1] + dp[i - 1][w - A[i - 1]].sum,
            items: 1 + dp[i - 1][w - A[i - 1]].items,
          };
          const exclude = dp[i - 1][w];
          dp[i][w] = compare(include, exclude);
        }
      }
    }
  }
  return dp[A.length][weight];
}

// SC = O(S/2)
// TC = O(N * (S/2))

function solveOptimised(A) {
  const sum = A.reduce((acc, key) => acc + key, 0);
  const weight = Math.floor(sum / 2);
  let dpIthRow = new Array(weight + 1).fill({ sum: 0, items: 0 });
  let dpIMinus1ThRow = new Array(weight + 1).fill({ sum: 0, items: 0 });

  for (let i = 0; i <= A.length; i++) {
    for (let w = 0; w <= weight; w++) {
      if (i !== 0 && w !== 0) {
        if (A[i - 1] <= w) {
          const include = {
            sum: A[i - 1] + dpIMinus1ThRow[w - A[i - 1]].sum,
            items: 1 + dpIMinus1ThRow[w - A[i - 1]].items,
          };
          const exclude = dpIMinus1ThRow[w];
          dpIthRow[w] = compare(include, exclude);
        }
      }
    }
    dpIMinus1ThRow = dpIthRow.map((ele) => ({
      sum: ele.sum,
      items: ele.items,
    }));
  }
  return dpIthRow[weight].items;
}

// const A = [15, 10, 6];

const A = [14, 10, 4];

console.log(solveOptimised(A));
