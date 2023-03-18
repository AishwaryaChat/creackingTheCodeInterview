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
    this.isEnd = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let curr = this.root;
    for (let char of word) {
      if (curr.children[char] === undefined) curr.children[char] = new Node();
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }

  checkPrefixAndIsEnd(prefix) {
    let curr = this.root;
    for (let char of word) {
      if (curr.children[char] === undefined) return [false, false];
      curr = curr.children[char];
    }
    if (curr.isEnd === true) return [true, true];
    return [true, false];
  }
}

const cx = [0, 1, 0, -1];
const cy = [1, 0, -1, 0];

function dfs(i, j, visited, board, word, letter, root, ans, M, N) {
  if (!visited[i][j]) {
    visited[i][j] = true;
    if (root && root.children[letter]) {
      if (root.children[letter].isEnd) {
        ans[word] = true;
        root.children[letter].isEnd = false;
      }
      for (let k = 0; k < 4; k++) {
        const m = i + cx[k];
        const n = j + cy[k];
        if (m >= 0 && m < M && n >= 0 && n < N) {
          if (!visited[m][n] && root.children[letter].children[board[m][n]]) {
            dfs(
              m,
              n,
              visited,
              board,
              word + board[m][n],
              board[m][n],
              root.children[letter],
              ans,
              M,
              N
            );
          }
        }
      }
    }
    visited[i][j] = false;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var solve = function (board, words) {
  const m = board.length;
  const n = board[0].length;
  let trie = new Trie();
  let map = new Map();
  for (let word of words) {
    trie.addWord(word);
    map.set(word, false);
  }
  let ans = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let visited = new Array(m).fill().map(() => new Array(n).fill(false));
      const word = dfs(
        i,
        j,
        visited,
        board,
        board[i][j],
        board[i][j],
        trie.root,
        ans,
        m,
        n
      );
      map[word] = true;
    }
  }
  return Object.keys(ans);
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
