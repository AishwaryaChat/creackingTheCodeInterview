// 51. N-Queens
// Hard
// company
// Amazon
// Adobe
// Bloomberg

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]
 

// Constraints:

// 1 <= n <= 9
// TC - O(!N), placing each queen 
// It takes O(N^2) to build a single solution, and we have to give all possible solutions, ets say it is equal to S(N), so complexity for each solution is S(N)*N^2
// TC - O(!N + S(N)*N^2) ~ O(!N)
// SC - O(N^2) - stack space
function getBoard(cols, N) {
    const ansMid = new Array(N).fill().map(() => new Array(N).fill("."))
    for(let i=0;i<N;i++) {
        ansMid[i][cols[i]] = "Q"
    }
    return ansMid.map(row => row.reduce((acc, col) => {
        acc += col
        return acc
    }, ""))
}

function isValid(row, c, cols) {
    for(let i=0;i<=row;i++) {
        const j = cols[i]
        if(c===j || Math.abs(row-i)===Math.abs(c-j)) return false
    }
    return true
}

function nQueens(row, cols, N, ans) {
    if(row===N) {
        ans.push(getBoard(cols, N))
        return
    }
    for(let c=0; c<N; c++) {
        if(!isValid(row, c, cols)) continue
        cols[row] = c
        nQueens(row+1, cols, N, ans)
        cols[row] = -1
    }
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = []
    nQueens(0, [], n, ans)
    return ans
};