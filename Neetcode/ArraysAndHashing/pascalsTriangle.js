// Pascal's Triangle
// Easy
// company
// Adobe
// Amazon
// Bloomberg
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

// TC - O(N^2)
function solve(numRows) {
  let ans = [[1]];
  for (let i = 1; i < numRows; i++) {
    let ansMid = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) ansMid.push(1);
      else {
        ansMid.push(ans[i - 1][j - 1] + ans[i - 1][j]);
      }
    }
    ans.push(ansMid);
  }
  return ans;
}

const numRows = 5;
console.log(solve(numRows));
// console.log([1, 1].splice(0, 1))
// console.log([1,1].splice(1))
