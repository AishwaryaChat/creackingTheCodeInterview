// Word Search II
// Hard
// company
// Amazon
// Uber
// Bloomberg
// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
// Example 2:

// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 10^4
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

// TC - O(M.(4.3^L-1)), where M is total number of cells in grid(m * n), L is the length of longest word, for every cell we have atmost 4 directions to explose, for these 4 we have atmost 3 exploration for each, so 4.3^L-1
// SC - O(N), total number of letters in trie
class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let letter of word) {
      if (curr.children[letter] === undefined)
        curr.children[letter] = new Node();
      curr = curr.children[letter];
    }
    curr.isEnd = true;
  }
}

const cx = [0, 1, 0, -1];
const cy = [1, 0, -1, 0];

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var solve = function (board, words) {
  let ans = [];
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  const m = board.length;
  const n = board[0].length;
  function dfs(x, y, word, root) {
    const letter = board[x][y];
    board[x][y] = "#";
    if (root && root.children[letter]) {
      if (root.children[letter].isEnd) {
        ans.push(word);
        root.children[letter].isEnd = false;
      }
      for (let k = 0; k < 4; k++) {
        const i = x + cx[k];
        const j = y + cy[k];
        if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] !== "#") {
          if (root.children[letter].children[board[i][j]] !== undefined) {
            dfs(i, j, word + board[i][j], root.children[letter]);
          }
        }
      }
      if (Object.keys(root.children[letter].children).length === 0) {
        delete root.children[letter];
      }
    }
    board[x][y] = letter;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, board[i][j], trie.root);
    }
  }
  return ans;
};

const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words = ["oath", "pea", "eat", "rain"];
// Output: ["eat","oath"]

// const board = [["a","b"],["c","d"]]
// const words = ["abcb"]
// Output: []

console.log(solve(board, words));
