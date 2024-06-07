// 1820. Maximum Number of Accepted Invitations
// https://leetcode.com/problems/maximum-number-of-accepted-invitations/description/
// Medium
// Topics
// Companies
// Hint
// There are m boys and n girls in a class attending an upcoming party.

// You are given an m x n integer matrix grid, where grid[i][j] equals 0 or 1. If grid[i][j] == 1, then that means the ith boy can invite the jth girl to the party. A boy can invite at most one girl, and a girl can accept at most one invitation from a boy.

// Return the maximum possible number of accepted invitations.

// Example 1:

// Input: grid = [[1,1,1],
//                [1,0,1],
//                [0,0,1]]
// Output: 3
// Explanation: The invitations are sent as follows:
// - The 1st boy invites the 2nd girl.
// - The 2nd boy invites the 1st girl.
// - The 3rd boy invites the 3rd girl.
// Example 2:

// Input: grid = [[1,0,1,0],
//                [1,0,0,0],
//                [0,0,1,0],
//                [1,1,1,0]]
// Output: 3
// Explanation: The invitations are sent as follows:
// -The 1st boy invites the 3rd girl.
// -The 2nd boy invites the 1st girl.
// -The 3rd boy invites no one.
// -The 4th boy invites the 2nd girl.

// Constraints:

// grid.length == m
// grid[i].length == n
// 1 <= m, n <= 200
// grid[i][j] is either 0 or 1.

function dfs(i, girl, partner, grid, n) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1 && !girl[j]) {
      girl[j] = true;
      if (partner[j] === -1 || dfs(partner[j], girl, partner, grid, n)) {
        partner[j] = i;
        return true;
      }
    }
  }
  return false;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumInvitations = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let girPartner = new Array(n).fill(-1);
  let ans = 0;
  for (let i = 0; i < m; i++) {
    let girl = new Array(n).fill(false);
    if (dfs(i, girl, girPartner, grid, n)) ans += 1;
  }
  return ans;
};
