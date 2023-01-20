/*
Maximum XOR

Problem Description
Given an array of integers A, find and return the maximum result of A[i] XOR A[j], where i, j are the indexes of the array.



Problem Constraints
1 <= length of the array <= 100000
0 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return an integer denoting the maximum result of A[i] XOR A[j].



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [5, 17, 100, 11]


Example Output
Output 1:

 7
Output 2:

 117


Example Explanation
Explanation 1:

 Maximum XOR occurs between element of indicies(0-based) 1 and 4 i.e. 2 ^ 5 = 7.
Explanation 2:

 Maximum XOR occurs between element of indicies(0-based) 1 and 2 i.e. 17 ^ 100 = 117.
*/

// The below solution is using Trie to get the maxXor for any i & j pair in the given array
// The idea is to create a trie and simultaneously keep checking for numbers in trie for the maxXor for that number
// So if we have 20 and 50 in trie, and we want to find out among 20 and 50 which will give bigger Xor with 15, so we will first insert 15 in trie and then after this we will find out the num in trie which will give greater Xor with 15
// How we will find out this? Basically to get a bigger Xor with anynumber we have to get the max possible diffirent bits in numbers and the MSB of result we should try to make it 1
// So when we will will check for 15 in trie, for every bit we travel of 15 we will navigate to opposite bit of 15 and at the end whcihever number we will reach we will return the Xor of that number with 15
// We will keep a track of MaxXor in our answer and return the result in end

function getBinary(num, k) {
  let s = [];
  while (num !== 0) {
    const bit = num % 2;
    num = Math.floor(num / 2);
    s.push(bit);
  }
  const diff = k - s.length;
  let binary = s.reverse().join("");
  if (k && diff > 0) {
    const p = new Array(diff).fill("0");
    binary = p.join("") + binary;
  }
  return binary;
}

class Node {
  constructor() {
    this.next = new Array(2).fill(null);
    this.isEnd = false;
    this.num;
  }
}

function insert(root, s, num) {
  let curr = root;
  for (let i = 0; i < s.length; i++) {
    const ch = Number(s[i]);
    if (curr.next[ch] === null) {
      curr.next[ch] = new Node();
    }
    curr = curr.next[ch];
    if (i === s.length - 1) {
      curr.isEnd = true;
      curr.num = num;
    }
  }
  return root;
}

function checkMaxXor(root, bits, num) {
  let curr = root;
  for (let i = 0; i < bits.length; i++) {
    let ch = Number(bits[i]);
    let changeBit = ch === 0 ? 1 : 0;
    if (curr.next[changeBit] !== null) {
      curr = curr.next[changeBit];
    } else {
      curr = curr.next[ch];
    }
  }
  return num ^ curr.num;
}

function solve(A) {
  let root = new Node();
  let max = Math.max(...A);
  const k = getBinary(max).length;
  let maxXor = -1;
  for (let i = 0; i < A.length; i++) {
    const res = getBinary(A[i], k);
    root = insert(root, res, A[i]);
    const check = checkMaxXor(root, res, A[i]);
    maxXor = Math.max(maxXor, check);
  }
  return maxXor;
}

const A = [0, 0];
console.log(solve(A));

// Dont understand much the below solution
function solveOther(nums) {
  var max = 0;
  var mask = 0;
  for (let i = 31; i >= 0; i--) {
    mask = mask | (1 << i);
    const set = new Set();
    for (let n of nums) {
      set.add(n & mask);
    }
    let temp = max | (1 << i);
    for (let prefix of set) {
      if (set.has(temp ^ prefix)) {
        max = temp;
        break;
      }
    }
  }
  return max;
}

const B = [5, 17, 100, 11];
console.log(solveOther(B));
