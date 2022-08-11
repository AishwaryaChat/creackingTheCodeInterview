/*
Given a string s of lowercase english alphabets(a-z)
Find z(k) for a given index k
Z(k) -> Length of longest substring of s starting from index k which is also a prefix of s
Find Z(k) for all k from 1 - N-1

Input1
s = "abcabcaa"


Output1 - [0, 0, 0 , 4, 0, 0, 1, 1]


*/

// Idea here is to also use the already computed values if we can
// we have to find z[k] for all k from 1 ---- N-1
// TC = O(N)
// SC = O(1), z is output so that is not considered as space

function solve(s) {
  let z = [0];
  let L = 0;
  let R = 0;
  let N = s.length;
  for (let i = 1; i < N; i++) {
    if (i > R) {
      L = R = i;
      while (R < N && s[R] === s[R - L]) R++;
      z[i] = R - L;
      R--;
    } else {
      if (i + z[i - L] <= R) z[i] = z[i - L];
      else {
        L = i;
        while (R < N && s[R] === s[R - L]) R++;
        z[i] = R - L;
        R--;
      }
    }
  }
  return z;
}

const s = "abcabcaa";

console.log(solve(s));
