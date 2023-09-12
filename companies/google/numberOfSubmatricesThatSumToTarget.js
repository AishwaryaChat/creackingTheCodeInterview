// 1074. Number of Submatrices That Sum to Target
// Hard
// Companies
// Google
// Quora
// Amazon
// Given a matrix and a target, return the number of non-empty submatrices that sum to target.

// A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

// Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

// Example 1:


// Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
// Output: 4
// Explanation: The four 1x1 submatrices that only contain 0.
// Example 2:

// Input: matrix = [[1,-1],[-1,1]], target = 0
// Output: 5
// Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
// Example 3:

// Input: matrix = [[904]], target = 0
// Output: 0
 

// Constraints:

// 1 <= matrix.length <= 100
// 1 <= matrix[0].length <= 100
// -1000 <= matrix[i] <= 1000
// -10^8 <= target <= 10^8

// TC - O(n * n * m)
// SC - O(n * m)
function solve(matrix, target) {
    const n = matrix.length
    const m = matrix[0].length
    let ps = new Array(n+1).fill().map(() => new Array(m+1).fill(0))
    for(let i=1; i<n+1; i++) {
        for(let j=1; j<m+1; j++) {
            ps[i][j] = ps[i-1][j] + ps[i][j-1] - ps[i-1][j-1] + matrix[i-1][j-1]
        }
    }
    let ans = 0
    let map = {}
    for(let r1=1; r1<n+1; r1++) {
        for(let r2 = r1; r2<n+1; r2++) {
            map = {}
            map[0] = 1
            for(let col=1; col<m+1; col++) {
                currSum = ps[r2][col] - ps[r1-1][col]
                ans += (map[currSum-target] || 0)
                map[currSum] = (map[currSum] || 0) + 1 
            }
        }
    }
    return ans
}