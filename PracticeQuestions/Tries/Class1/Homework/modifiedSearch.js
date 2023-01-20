// Modified Search

// Problem Description

// Given two arrays of strings A of size N and B of size M.

// Return a binary string C where C[i] = '1' if B[i] can be found in dictionary A using exactly one modification in B[i], Else C[i] = '0'.

// NOTE: modification is defined as converting a character into another character.

// Problem Constraints

// 1 <= N <= 30000

// 1 <= M <= 2500

// 1 <= length of any string either in A or B <= 20

// strings contains only lowercase alphabets

// Input Format

// First argument is the string arrray A.

// Second argument is the string array B.

// Output Format

// Return a binary string C where C[i] = '1' if B[i] can be found in dictionary A using one modification in B[i], Else C[i] = '0'.

// Example Input

// Input 1:

//  A = [data, circle, cricket]
//  B = [date, circel, crikket, data, circl]
// Input 2:

//  A = [hello, world]
//  B = [hella, pello, pella]

// Example Output

// Output 1:

//  "10100"
// Output 2:

//  "110"

// Example Explanation

// Explanation 1:

//  1. date = dat*(can be found in A)
//  2. circel =(cannot be found in A using exactly one modification)
//  3. crikket = cri*ket(can be found in A)
//  4. data = (cannot be found in A using exactly one modification)
//  5. circl = (cannot be found in A using exactly one modification)
// Explanation 2:

//  Only pella cannot be found in A using only one modification.

class Node {
  constructor(maxLength = 26) {
    this.isEnd = false;
    this.next = new Array(maxLength).fill(null);
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(s) {
    let curr = this.root;
    for (let i = 0; i < s.length; i++) {
      const charCode = s[i].charCodeAt(0) - 97;
      if (curr.next[charCode] === null) curr.next[charCode] = new Node();
      curr = curr.next[charCode];
      this.count++;
    }
    curr.isEnd = true;
  }

  searchModified(cur, pos, word, modification) {
    if (pos == word.length) return modification == 1 && cur.isEnd ? 1 : 0;
    let ans = 0;
    for (let i = 0; i < 26; i++) {
      let val = modification + (word[pos].charCodeAt(0) - 97 == i ? 0 : 1);
      if (val <= 1 && cur.next[i]) {
        ans |= this.searchModified(cur.next[i], pos + 1, word, val);
      }
    }
    return ans;
  }

  getRoot() {
    return this.root;
  }
}

function solve(A, B) {
  let trie = new Trie();
  for (let i = 0; i < A.length; i++) {
    trie.insert(A[i]);
  }
  let finalAns = [];
  for (let i = 0; i < B.length; i++) {
    let ans = trie.searchModified(trie.getRoot(), 0, B[i], 0);
    finalAns.push(ans ? 1 : 0);
  }
  return finalAns.join("");
}

const A = ["data", "circle", "cricket"];
const B = ["date"];
// const B = ["date", "circel", "crikket", "data", "circl"];

// const A = ["hello", "world"];
// const B = ["hell"];
// const B = ["hella", "pello", "pella", "hell"];

console.log(solve(A, B));

