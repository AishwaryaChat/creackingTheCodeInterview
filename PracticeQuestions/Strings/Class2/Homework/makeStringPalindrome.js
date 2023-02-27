// Make String Palindrome
// Problem Description
// Given a string A of size N consisting only of lowercase alphabets. The only operation allowed is to insert characters in the beginning of the string.

// Find and return how many minimum characters are needed to be inserted to make the string a palindrome string.

// Problem Constraints
// 1 <= N <= 10^6

// Input Format
// The only argument given is a string A.

// Output Format
// Return an integer denoting the minimum characters needed to be inserted in the beginning to make the string a palindrome string.

// Example Input
// Input 1:

//  A = "abc"
// Input 2:

//  A = "bb"

// Example Output
// Output 1:

//  2
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  Insert 'b' at beginning, string becomes: "babc".
//  Insert 'c' at beginning, string becomes: "cbabc".
// Explanation 2:

//  There is no need to insert any character at the beginning as the string is already a palindrome.

function checkPallindrome(A) {}

// TC - O(N)
function solve(A) {
  let i = 0;
  let j = A.length - 1;
  let minChars = 0;
  //   We are keeping buffer, so that suppose we find matching characters, but then in between we again found non matching characters, in this case we will have to add these left out characters in our minCharsCount
  let buffer = 0;
  while (i < j) {
    if (A[i] !== A[j]) {
      i = 0;
      minChars += buffer + 1;
      buffer = 0;
    } else {
      buffer += 1;
      i++;
    }
    j--;
  }
  return minChars;
}

// const A = "abc";
// Output: 2

//const  A = "bb"
// Output: 0

const A = "abacbb";

// const A = "hqghumeaylnlfdxfi";
// Output: 16
console.log(solve(A));
