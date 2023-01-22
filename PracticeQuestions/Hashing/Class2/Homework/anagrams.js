// Anagrams

// Problem Description
// Given an array A of N strings, return all groups of strings that are anagrams.

// Represent a group by a list of integers representing the index(1-based) in the original list. Look at the sample case for clarification.

// NOTE: Anagram is a word, phrase, or name formed by rearranging the letters, such as 'spar', formed from 'rasp'.

// Problem Constraints
// 1 <= N <= 10^4

// 1 <= |A[i]| <= 10^4

// Each string consists only of lowercase characters.

// The sum of the length of all the strings doesn't exceed 107

// Input Format
// The first and only argument is an integer array A.

// Output Format
// Return a two-dimensional array where each row describes a group.

// Note:

// Ordering of the result :
// You should not change the relative ordering of the strings within the group suppose within a group containing A[i] and A[j], A[i] comes before A[j] if i < j.

// Example Input
// Input 1:

//  A = [cat, dog, god, tca]
// Input 2:

//  A = [rat, tar, art]

// Example Output
// Output 1:

//  [ [1, 4],
//    [2, 3] ]
// Output 2:

//  [ [1, 2, 3] ]

// Example Explanation
// Explanation 1:

//  "cat" and "tca" are anagrams which correspond to index 1 and 4 and "dog" and "god" are another set of anagrams which correspond to index 2 and 3.
//  The indices are 1 based ( the first element has index 1 instead of index 0).
// Explanation 2:

//  All three strings are anagrams.

// TC - O(NlogN)
// SC - O(N)
function solve(A) {
  let freq = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    freq[i] = {};
    for (let j = 0; j < A[i].length; j++) {
      freq[i][A[i][j]] = freq[i][A[i][j]] ? freq[i][A[i][j]] + 1 : 1;
    }
  }
  let ans = [];
  let visited = new Array(A.length + 1).fill(false);
  for (let i = 0; i < A.length; i++) {
    let mid = [];
    if (!visited[i]) {
      for (let j = i + 1; j < A.length; j++) {
        if (check(i, j, freq)) {
          mid.push(j + 1);
          visited[j] = true;
        }
      }
      if (mid.length > 0) {
        ans.push([i + 1, ...mid]);
      } else {
        ans.push([i + 1]);
      }
      visited[i] = true;
    }
  }
  return ans;
}
function check(i, j, map) {
  const freqI = map[i];
  const freqJ = map[j];
  const keysI = Object.keys(freqI);
  for (let k = 0; k < keysI.length; k++) {
    if (freqI[keysI[k]] != freqJ[keysI[k]]) return false;
  }
  return true;
}

function solveSimple(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    const letter = A[i].split("").sort().join("");
    obj[letter] ? obj[letter].push(i + 1) : (obj[letter] = [i + 1]);
  }
  return Object.values(obj);
}

const A = ["cat", "dog", "god", "tca"];

// const A = ["rat", "tar", "art"]

console.log(solveSimple(A));
