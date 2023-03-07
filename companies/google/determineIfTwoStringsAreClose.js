// Determine if Two Strings Are Close
// Medium
// company
// Google
// Postmates
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// Constraints:

// 1 <= word1.length, word2.length <= 10^5
// word1 and word2 contain only lowercase English letters.

// The idea here is, 
// Deduction 1: As per Operation1  we can deduce that in both the words, the distinct characters should be same, i.e if word1 has letter "a" then word2 should also have "a"
// Deduction 2: As per Operation2  we can deduce that, for a letter of a certain frequency in word1, should have a matching character in word2 with same frequency letter can be different
// for example if freq of "a" is 3 in word1, then there should be atleast 1 character in word2 that has frequency 3
// TC - O(N)

function solve(word1, word2) {
    if(word1.length !== word2.length) return false;
    
    const ws1 = [...new Set(word1)].sort().join('')
    const ws2 = [...new Set(word2)].sort().join('')
    if(ws1 !== ws2) return false;
    
    const freq1 = Array(26).fill(0);
    const freq2 = Array(26).fill(0);
    
    for(let i = 0; i < word1.length; i++) {
        const idx1 = word1[i].charCodeAt() - 'a'.charCodeAt();
        const idx2 = word2[i].charCodeAt() - 'a'.charCodeAt();
        freq1[idx1]++;
        freq2[idx2]++;
    }
    const str1 = freq1.filter(x => x).sort().join()
    const str2 = freq2.filter(x => x).sort().join()
    return str1 === str2;
}

// const word1 = "abc";
// const word2 = "bca";
// Output: true

// const word1 = "a"
// const word2 = "aa"
// Output: false

const word1 = "cabbba"
const word2 = "abbccc"
// Output: true

console.log(closeStrings(word1, word2));
