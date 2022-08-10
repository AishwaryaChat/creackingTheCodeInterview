/*
Boring substring

Problem Description
You are given a string A of lowercase English alphabets. Rearrange the characters of the given string A such that there is no boring substring in A.

A boring substring has the following properties:

Its length is 2.
Both the characters are consecutive, for example - "ab", "cd", "dc", "zy" etc.(If the first character is C then the next character can be either (C+1) or (C-1)).
Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.



Problem Constraints
1 <= |A| <= 10^5



Input Format
The only argument given is a string A.



Output Format
Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.



Example Input
Input 1:

 A = "abcd"
Input 2:

 A = "aab"


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 String A can be rearranged into "cadb" or "bdac" 
Explanation 2:

 No arrangement of string A can make it free of boring substrings.
*/

// The idea here is to divide the string into two subarrays
// One with letter whose ascii value is odd number and other with even number
// now we will sort them seperately
// this makes sure that characters in odd and even will not have any boring pairs because their ascii values are already with atleast diff greater than 1
// now we will have to check 2 pairs
// one which will be with last letter of odd array and  with first letter od even array, if theire diff is not 1 that means we have atleast 1 permutation which doesnt have boring pair
// and vice-versa for last letter of even and first letter of odd
// else we will return 0
// TC = O(NlogN)
// SC = O(N)

function solve(A) {
  let even = [];
  let odd = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i].charCodeAt(0) % 2 === 0) even.push(A[i]);
    else odd.push(A[i]);
  }
  even.sort();
  odd.sort();
  if (
    Math.abs(even[even.length - 1].charCodeAt(0) - odd[0].charCodeAt(0)) !==
      1 ||
    Math.abs(odd[odd.length - 1].charCodeAt(0) - even[0].charCodeAt(0)) !== 1
  )
    return 1;
  return 0;
}
const A = "bcdaa";
// const A = "ajafafgja";

console.log(solve(A));
