// Word Search
// Medium
// 12.9K
// 524
// company
// Amazon
// company
// Bloomberg
// company
// Uber
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?

// TC - O(N. 3^L), N is total number of cells on board, L is length search word, 3 because for each cell we have 3 routes to explore
// SC - O(L), L is length of search word, this is for recursion stack
const cx = [0, 1, 0, -1];
const cy = [1, 0, -1, 0];

function dfs(x, y, target, board, visited, pos, M, N) {
  if (pos === target.length - 1) return true;
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let k = 0; k < 4; k++) {
      const m = x + cx[k];
      const n = y + cy[k];
      if (
        m >= 0 &&
        m < M &&
        n >= 0 &&
        n < N &&
        !visited[m][n] &&
        pos + 1 < target.length &&
        target[pos + 1] === board[m][n]
      ) {
        if (dfs(m, n, target, board, visited, pos + 1, M, N)) return true;
      }
    }
    visited[x][y] = false;
  }
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      visited = new Array(m).fill().map(() => new Array(n).fill(false));
      if (board[i][j] === word[0] && dfs(i, j, word, board, visited, 0, m, n))
        return true;
    }
  }
  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
// Output: true

// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// const word = "SEE"
// Output: true

// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// const word = "ABCB"
// Output: false

console.log(exist(board, word));
