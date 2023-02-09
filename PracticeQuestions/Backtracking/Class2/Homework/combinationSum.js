// Combination Sum

// Problem Description
// Given an array of candidate numbers A and a target number B, find all unique combinations in A where the candidate numbers sums to B.

// The same repeated number may be chosen from A unlimited number of times.

// Note:

// 1) All numbers (including target) will be positive integers.

// 2) Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).

// 3) The combinations themselves must be sorted in ascending order.

// 4) CombinationA > CombinationB iff (a1 > b1) OR (a1 = b1 AND a2 > b2) OR ... (a1 = b1 AND a2 = b2 AND ... ai = bi AND ai+1 > bi+1)

// 5) The solution set must not contain duplicate combinations.

// Problem Constraints
// 1 <= |A| <= 20

// 1 <= A[i] <= 50

// 1 <= B <= 500

// Input Format
// The first argument is an integer array A.

// The second argument is integer B.

// Output Format
// Return a vector of all combinations that sum up to B.

// Example Input
// Input 1:

// A = [2, 3]
// B = 2
// Input 2:

// A = [2, 3, 6, 7]
// B = 7

// Example Output
// Output 1:

// [ [2] ]
// Output 2:

// [ [2, 2, 3] , [7] ]

// Example Explanation
// Explanation 1:

// All possible combinations are listed.
// Explanation 2:

// All possible combinations are listed.

// TC - O(2^n)
function dfs(A, target, pos, ans, midAns, sum) {
  if (sum === target) {
    ans.push(midAns.map((a) => a));
    return;
  }
  for (let i = pos; i < A.length; i++) {
    if (sum + A[i] <= target) {
      dfs(A, target, i, ans, midAns.concat(A[i]), sum + A[i]);
    }
  }
  return ans;
}

function solve(A, B) {
  let freq = {};
  for (let i = 0; i < A.length; i++) {
    if (!freq[A[i]]) freq[A[i]] = 0;
    freq[A[i]] += 1;
  }
   return dfs(Object.keys(freq).map(a => Number(a)), B, 0, ans, [], 0);
}

// const A = [2, 3]
// const B = 2
// Output: [ [2] ]

// const A = [2, 3, 6, 7];
// const B = 7;
// Output: [ [2, 2, 3] , [7] ]

const A = [ 8, 10, 6, 11, 1, 16, 8 ]
const B = 28


console.log(solve(A, B));
