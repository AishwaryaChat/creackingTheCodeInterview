// Richest Customer Wealth
// Easy
// 3.3K
// 320
// company
// Google
// company
// Amazon
// company
// Apple
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

// Constraints:

// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100

// TC - O(N*M)
var maximumWealth = function (accounts) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[0].length; j++) {
      sum += accounts[i][j];
    }
    max = Math.max(max, sum);
  }
  return max;
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
// Output: 6

// const accounts = [[1,5],[7,3],[3,5]]
// Output: 10

console.log(maximumWealth(accounts));
