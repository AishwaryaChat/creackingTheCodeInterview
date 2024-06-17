// 861. Score After Flipping Matrix
// Solved
// Medium
// Topics
// Companies
// You are given an m x n binary matrix grid.

// A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

// Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

// Return the highest possible score after making any number of moves (including zero moves).

 

// Example 1:


// Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
// Example 2:

// Input: grid = [[0]]
// Output: 1
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 20
// grid[i][j] is either 0 or 1.

// We are trying to maximise the answre and hence we are trying to make the most significant bit 1, so for every row if first element is zero we are flipping that row
// Then we check the columns, if a column has more 0's than 1's we flip that column
// In the last pass for every row, we ad the contribution of 1 bit to the score

// TC - O(N * M)
// SC - O(1), since we are using the given grid
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const n = grid.length
    const m = grid[0].length
    for(let i=0; i<n; i++) {
        if(grid[i][0] === 0) {
            for(let j=0; j<m; j++) {
                grid[i][j] = !grid[i][j]
            }
        }
    }
    for(let j=0; j<m; j++) {
        let c = 0
        for(let i=0; i<n; i++) {
            c+=grid[i][j]
        }
        if(n-c>c) {
            for(let i=0; i<n; i++) {
                grid[i][j] = !grid[i][j]
            }
        }
    }
    let score = 0
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            score += (grid[i][j] << (m-j-1))
        }
    }
    return score
};