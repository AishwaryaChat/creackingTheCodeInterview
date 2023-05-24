// Break a Palindrome
// Medium
// company
// Paypal
// JPMorgan
// Goldman Sachs
// Walmart Global Tech
// Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.

// Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.

// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.

 

// Example 1:

// Input: palindrome = "abccba"
// Output: "aaccba"
// Explanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
// Of all the ways, "aaccba" is the lexicographically smallest.
// Example 2:

// Input: palindrome = "a"
// Output: ""
// Explanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string.
 

// Constraints:

// 1 <= palindrome.length <= 1000
// palindrome consists of only lowercase English letters.

// TC - O(N)
// SC - O(1)
// intution - 
// 1. single character string can never be converted to non-palindrome so return ''
// 2. for any palindrome string greater than length 1, change least most element in left part of palindrome to 'a' if it is not equal to 'a', because this is the lexographically smallest string
// 3. if all the elements in left part is 'a' then string must be like aaa or aaaa, so change last character to 'b' since that is the lexicographically smallest non-palindrome
function solve(palindrome) {
    palindrome = palindrome.split("")
    const N = palindrome.length
    if(N===1) return ''
    for(let i=0; i<Math.floor(N/2); i++) {
        if(palindrome[i]!=="a") {
            palindrome[i] = "a"
            return palindrome.join("")
        }
    }
    palindrome[N-1] = "b"
    return palindrome.join("")
}

const palindrome = "abccba"
// Output: "aaccba"

// const palindrome = "a"
// Output: ""

console.log(solve(palindrome))