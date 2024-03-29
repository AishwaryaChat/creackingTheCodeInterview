class Node {
  constructor(maxLength = 26) {
    this.isEnd = false;
    this.next = new Array(maxLength).fill(null);
    this.count = 0;
    this.prefixWords = []
  }
}

function insert(root, s, weight) {
  let curr = root;
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0) - 97;
    if (curr.next[charCode] === null) curr.next[charCode] = new Node();
    curr = curr.next[charCode];
    curr.count += 1;
    curr.prefixWords.push({word: s, weight})
  }
  curr.isEnd = true;
  if (weight) {
    curr.weight = weight;
  }
  return root;
}

function search(root, s) {
  let curr = root;
  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].charCodeAt(0) - 97;
    if (curr.next[charCode] === null) return 0;
    curr = curr.next[charCode];
  }
  return curr.isEnd;
}

module.exports = {
  search,
  insert,
  Node,
};
