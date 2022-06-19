class Node {
  constructor() {
    this.next = new Array(2).fill(null);
    this.isEnd = false;
  }
}

function insert(root, s) {
  let curr = root;
  for (let i = 0; i < s.length; i++) {
    const ch = Number(s[i]);
    if (curr.next[ch] === null) {
      curr.next[ch] = new Node();
    }
    if (i === s.length - 1) {
      curr.isEnd = true;
    }
    curr = curr.next[ch];
  }
  return root;
}

module.exports = {
  Node,
  insert,
};
