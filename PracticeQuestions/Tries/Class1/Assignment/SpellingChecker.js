/*
Spelling Checker

Problem Description
Given an array of words A (dictionary) and another array B (which contain some words).

You have to return the binary array (of length |B|) as the answer where 1 denotes that the word is present in the dictionary and 0 denotes it is not present.

Formally, for each word in B, you need to return 1 if it is present in Dictionary and 0 if not.

Such problems can be seen in real life when we work on any online editor (like Google Documnet), if the word is not valid it is underlined by a red line.

NOTE: Try to do this in O(n) time complexity.



Problem Constraints
1 <= |A| <= 1000

1 <= sum of all strings in A <= 50000

1 <= |B| <= 1000



Input Format
First argument is array of strings A.

First argument is array of strings B.



Output Format
Return the binary array of integers according to the given format.



Example Input
Input 1:

A = [ "hat", "cat", "rat" ]
B = [ "cat", "ball" ]
Input 2:

A = [ "tape", "bcci" ]
B = [ "table", "cci" ]


Example Output
Output 1:

[1, 0]
Output 2:

[0, 0]


Example Explanation
Explanation 1:

Only "cat" is present in the dictionary.
Explanation 2:

None of the words are present in the dictionary.
*/

// This is solved using a trie, where a node has 26 children (characters from a - z)
// TC = O(N*Length of words in B)
// SC = O(N*Length of words in A)

const { search, insert } = require("../../implementationUsingArray");

class Node {
  constructor(maxLength = 26) {
    this.isEnd = false;
    this.next = new Array(maxLength).fill(null);
  }
}

function constructTrie(A) {
  let trie = new Node();
  for (let i = 0; i < A.length; i++) {
    trie = insert(trie, A[i]);
  }
  return trie;
}

function solve(A, B) {
  const trie = constructTrie(A);
  const ans = [];
  for (let i = 0; i < B.length; i++) {
    const found = search(trie, B[i]);
    ans.push(found === true ? 1 : 0);
  }
  return ans;
}

const A = ["hat", "cat", "rat"];
const B = ["cat", "ball"];
console.log(solve(A, B));

// const A = ["ab", "abc", "abcd", "abcde", "abcdef", "abcdefg"];
// const B = ["a", "b", "ab", "abcd"];

// console.log(solve(A, B));
