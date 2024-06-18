// . Tushar's Birthday Party
// Unsolved
// feature icon
// Get your doubts resolved blazing fast with Chat GPT Help
// Check Chat GPT
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description
// As it is Tushar's Birthday on March 1st, he decided to throw a party to all his friends at TGI Fridays in Pune. Given are the eating capacity of each friend, filling capacity of each dish and cost of each dish. A friend is satisfied if the sum of the filling capacity of dishes he ate is equal to his capacity. Find the minimum cost such that all of Tushar's friends are satisfied (reached their eating capacity).

// NOTE:

// Each dish is supposed to be eaten by only one person. Sharing is not allowed.

// Each friend can take any dish unlimited number of times.

// There always exists a dish with filling capacity 1 so that a solution always exists.

// Problem Constraints
// |A| <= 1000

// |B| <= 1000

// |C| <= 1000

// Input Format
// First Argument is vector A, denoting eating capacities

// Second Argument is vector B, denoting filling capacities

// Third Argument is vector C, denoting cost

// Output Format
// Return a single integer, the answer to the problem

// Example Input
// Input 1:

// A = [2, 4, 6]
// B = [2, 1, 3]
// C = [2, 5, 3]
// Input 2:

// A = [2]
// B = [1]
// C = [2]

// Example Output
// Output 1:

// 12
// Output 2:

// 4

// Example Explanation
// Explanation 1:

// First friend takes dish 1, Second friend takes dish 1 twice and third friend takes dish 3 twice.
// So 2 + 2*2 + 3*2 = 12.
// Explanation 2:

// Only way is to take 2 dishes of cost 2, hence 4.

// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
// Arg 1: An Integer Array, For e.g [1,2,3]
// Enter Input Here
// Arg 2: An Integer Array, For e.g [1,2,3]
// Enter Input Here
// Arg 3: An Integer Array, For e.g [1,2,3]
// Enter Input Here

function ifAllSatiated(n, satiated) {
  for (let i = 0; i < n; i++) if (!satiated[i]) return false;
  return true;
}

function dfs(i, A, B, C, dp, left) {
    if(dp[left] !== undefined) return dp[left]
  if (left === 0) return 0;
  let cost = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < B.length; j++) {
    if (left - B[j] >= 0) {
      cost = Math.min(cost, C[j] + dfs(i, A, B, C, dp, left - B[j]));
    }
  }
  return dp[left] = cost;
}

function solve(A, B, C) {
  let ans = 0;
  let dp = {};
  for (let i = 0; i < A.length; i++) {
    ans += dfs(i, A, B, C, dp, A[i]);
  }
  return ans;
}

// const A = [2, 4, 6]
// const B = [2, 1, 3]
// const C = [2, 5, 3]
// Output - 12

const A = [2,3,1,5,4]
const B = [3,2,4,1]
const C = [1,2,5,10]

// const A = [2];
// const B = [1];
// const C = [2];
// Output - 4

console.log(solve(A, B, C));
