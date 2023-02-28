// Verifying an Alien Dictionary
// Easy
// company
// Facebook
// Amazon
// Uber
// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

// Time complexity analysis
// N - total number of letters including all words in words array
// M - number of letters in order - 26 here
// TC - O(N)
// SC - O(M) ~ O(1)

function getOrderCode(order) {
  let lexoOrderCode = {};
  for (let i = 0; i < order.length; i++) {
    lexoOrderCode[order[i]] = i;
  }
  return lexoOrderCode;
}

function solve(words, order) {
  const lexoOrderCode = getOrderCode(order);
  for (let i = 0; i < words.length - 1; i++) {
    let a = words[i];
    let b = words[i + 1];
    if (a.length > b.length && a.startsWith(b)) return false;
    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      const l1 = lexoOrderCode[a[j]];
      const l2 = lexoOrderCode[b[j]];
      if (a[j] && b[j] && a[j] !== b[j]) {
        if (l1 > l2) {
          return false;
        }
        break;
      }
    }
  }
  return true;
}

// const words = ["hello", "leetcode"];
// const order = "hlabcdefgijkmnopqrstuvwxyz";
// Output: true

// const words = ["word","world","row"]
// const order = "worldabcefghijkmnpqstuvxyz"
// Output: false

const words = ["apple", "app"];
const order = "abcdefghijklmnopqrstuvwxyz";
// Output: false

console.log(solve(words, order));
