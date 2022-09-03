/*
Window String

Problem Description
Given a string A and a string B, find the window with minimum length in A, which will contain all the characters in B in linear time complexity.
Note that when the count of a character c in B is x, then the count of c in the minimum window in A should be at least x.

Note:

If there is no such window in A that covers all characters in B, return the empty string.
If there are multiple such windows, return the first occurring minimum window ( with minimum start index and length )


Problem Constraints
1 <= size(A), size(B) <= 106



Input Format
The first argument is a string A.
The second argument is a string B.



Output Format
Return a string denoting the minimum window.



Example Input
Input 1:

 A = "ADOBECODEBANC"
 B = "ABC"
Input 2:

 A = "Aa91b"
 B = "ab"


Example Output
Output 1:

 "BANC"
Output 2:

 "a91b"


Example Explanation
Explanation 1:

 "BANC" is a substring of A which contains all characters of B.
Explanation 2:

 "a91b" is the substring of A which contains all characters of B.
*/

function solve(A, B) {
  let mapB = {};
  for (let i = 0; i < B.length; i++) {
    mapB[B[i]] = mapB[B[i]] ? mapB[B[i]] + 1 : 1;
  }
  let i = 0;
  let j = 0;
  let count = 0;
  let totalCount = B.length;
  let finali = -1;
  let finalj = -1;
  let dist = A.length + 1;
  while (i < A.length && j <= A.length) {
    if (count === totalCount) {
      const newDist = j - i;
      if (newDist < dist) {
        dist = newDist;
        finali = i;
        finalj = j;
      }
    }
    if (count === totalCount && mapB[A[i]] === undefined) i++;
    else if (
      count === totalCount &&
      mapB[A[i]] !== undefined &&
      mapB[A[i]] < 0
    ) {
      mapB[A[i]] += 1;
      i++;
    } else {
      if (mapB[A[j]] != undefined) {
        mapB[A[j]] -= 1;
        if (mapB[A[j]] >= 0) count++;
        j++;
      } else {
        j++;
      }
    }
  }
  if (count === totalCount) return A.substring(finali, finalj);
  return "";
}

const A = "DOBECODEBANCD";
const B = "ABC";

// const A = "ADOBECODEBANCD"
// const B = "ZAC"

// const A = "ADOBECOZDEBANCDNKZKABC"
// const B = "ZAC"

// const A = "Aa91b"
// const B = "ab"

// const A = "w"
// const B = "o"

console.log(solve(A, B));
