// Smallest String With Swaps
// Medium
// company
// Google
// Amazon
// Microsoft
// You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

// You can swap the characters at any pair of indices in the given pairs any number of times.

// Return the lexicographically smallest string that s can be changed to after using the swaps.

// Example 1:

// Input: s = "dcab", pairs = [[0,3],[1,2]]
// Output: "bacd"
// Explaination:
// Swap s[0] and s[3], s = "bcad"
// Swap s[1] and s[2], s = "bacd"
// Example 2:

// Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
// Output: "abcd"
// Explaination:
// Swap s[0] and s[3], s = "bcad"
// Swap s[0] and s[2], s = "acbd"
// Swap s[1] and s[2], s = "abcd"
// Example 3:

// Input: s = "cba", pairs = [[0,1],[1,2]]
// Output: "abc"
// Explaination:
// Swap s[0] and s[1], s = "bca"
// Swap s[1] and s[2], s = "bac"
// Swap s[0] and s[1], s = "abc"

// Constraints:

// 1 <= s.length <= 10^5
// 0 <= pairs.length <= 10^5
// 0 <= pairs[i][0], pairs[i][1] < s.length
// s only contains lower case English letters.

// TC - O((E+V)*@(V) + Vlog V), where E is the number of pairs and V is the number of vertices i.e length of string, @ is inverse ackerman function for union find, V log V because we are sorting the indices, at worst, everything can be one component and in that case complexity will be V log V
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill().map((a, i) => i);
    this.rank = new Array(n).fill(1);
  }
  find(x) {
    if (this.parent[x] === x) return x;
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] >= this.rank[py]) {
      this.parent[py] = px;
      this.rank[px] += this.rank[py];
    } else {
      this.parent[px] = py;
      this.rank[py] += this.rank[px];
    }
    return true;
  }
}

function solve(s, pairs) {
  const uf = new UnionFind(s.length);
  for (let [x, y] of pairs) {
    uf.union(x, y);
  }
  const rootToComponentMap = {};
  for (let i = 0; i < s.length; i++) {
    const parent = uf.find(i);
    if (rootToComponentMap[parent] === undefined)
      rootToComponentMap[parent] = [];
    rootToComponentMap[parent].push(i);
  }
  let smallestString = [];
  for (let [, indices] of Object.entries(rootToComponentMap)) {
    const characters = [];
    for (let index of indices) {
      characters.push(s[index]);
    }
    characters.sort();
    for (let i = 0; i < indices.length; i++) {
      smallestString[indices[i]] = characters[i];
    }
  }
  return smallestString.join("");
}

const s = "dcab";
const pairs = [
  [0, 3],
  [1, 2],
];
// Output: "bacd"

// const s = "dcab"
// const pairs = [[0,3],[1,2],[0,2]]
// Output: "abcd"

// const s = "cba"
// const pairs = [[0,1],[1,2]]
// Output: "abc"

console.log(solve(s, pairs));
