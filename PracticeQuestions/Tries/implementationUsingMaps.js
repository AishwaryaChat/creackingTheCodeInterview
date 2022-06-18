class Trie {
  constructor() {
    for (let i = 1; i <= 26; i++) {
      this[String.fromCharCode(i + 96)] = null;
    }
  }
}

function insert(root, s) {
  let curr = root;
  for (let j = 0; j < s.length; j++) {
    const c = A[i][j];
    if (curr[c] === null) curr[c] = new Trie();
    curr = curr[c];
  }
  curr.isEnd = true;
  return trie;
}

function searchTrie(trie, w) {
  let temp = trie;
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    if (temp[ch] === null) return false;
    temp = temp[ch];
  }
  return temp.isEnd;
}
