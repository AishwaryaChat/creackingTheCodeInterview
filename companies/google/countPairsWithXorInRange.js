// Count Pairs With XOR in a Range
// Hard
// Companies
// Google
// Vimeo
// Given a (0-indexed) integer array nums and two integers low and high, return the number of nice pairs.

// A nice pair is a pair (i, j) where 0 <= i < j < nums.length and low <= (nums[i] XOR nums[j]) <= high.

// Example 1:

// Input: nums = [1,4,2,7], low = 2, high = 6
// Output: 6
// Explanation: All nice pairs (i, j) are as follows:
//     - (0, 1): nums[0] XOR nums[1] = 5
//     - (0, 2): nums[0] XOR nums[2] = 3
//     - (0, 3): nums[0] XOR nums[3] = 6
//     - (1, 2): nums[1] XOR nums[2] = 6
//     - (1, 3): nums[1] XOR nums[3] = 3
//     - (2, 3): nums[2] XOR nums[3] = 5
// Example 2:

// Input: nums = [9,8,4,2,1], low = 5, high = 14
// Output: 8
// Explanation: All nice pairs (i, j) are as follows:
// ​​​​​    - (0, 2): nums[0] XOR nums[2] = 13
//     - (0, 3): nums[0] XOR nums[3] = 11
//     - (0, 4): nums[0] XOR nums[4] = 8
//     - (1, 2): nums[1] XOR nums[2] = 12
//     - (1, 3): nums[1] XOR nums[3] = 10
//     - (1, 4): nums[1] XOR nums[4] = 9
//     - (2, 3): nums[2] XOR nums[3] = 6
//     - (2, 4): nums[2] XOR nums[4] = 5

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 2 * 10^4
// 1 <= low <= high <= 2 * 10^4

function getCount(root) {
  if (root === null) return 0;
  return root.count;
}

class Trie {
  constructor() {
    this.children = new Array(2).fill(null);
    this.isEnd = false;
    this.count = 0;
  }

  insert(root, num) {
    let curr = root;
    for (let i = 14; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (curr.children[bit] === null) curr.children[bit] = new Trie();
      curr = curr.children[bit];
      curr.count += 1;
    }
    curr.isEnd = true;
    return root;
  }

  query(root, high, num, pos) {
    if (root === null) return 0;
    if(pos===-1) return getCount(root)
    const highBit = (high >> pos) & 1;
    const numBit = (num >> pos) & 1;
    if (numBit === 0) {
      if (highBit === 0)
        return this.query(root.children[0], high, num, pos - 1);
      else {
        return (
          getCount(root.children[0]) +
          this.query(root.children[1], high, num, pos - 1)
        );
      }
    } else {
      if (highBit === 0)
        return this.query(root.children[1], high, num, pos - 1);
      else {
        return (
          this.query(root.children[0], high, num, pos - 1) +
          getCount(root.children[1])
        );
      }
    }
  }
}

function solve(nums, low, high) {
  let trie = new Trie();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += trie.query(trie, high, nums[i], 14);
    count -= trie.query(trie, low - 1, nums[i], 14);
    trie = trie.insert(trie, nums[i]);
  }
  return count;
}

const nums = [1, 4, 2, 7];
const low = 2;
const high = 6;
// Output: 6

// const nums = [9, 8, 4, 2, 1];
// const low = 5;
// const high = 14;
// Output: 8

console.log(solve(nums, low, high));
