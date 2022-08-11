/*
Given a string s of lowercase english alphabets(a-z)
Find z(k) for a given index k
Z(k) -> Length of longest substring of s starting from index k which is also a prefix of s

Input1
s = "abcabcaa"
k = 3

Input2
s = "abcabcaa"
k = 2

Output1 - 4

Output2 - 0

*/

// Idea here is to keep comparing the letter starting from k with starting of string
// keep moving until either the letter are not equal or when end of string is reached
// TC = O(N)
// SC = O(1)

function solve(s, k) {
  for (let j = k; j < s.length; j++) {
    if (s[j] !== s[j - k]) return j - k;
  }
  return N - k;
}

const s = "abcabcaa";
const k = 3;

console.log(solve(s, k));
