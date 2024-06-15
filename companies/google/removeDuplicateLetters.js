// 316. Remove Duplicate Letters
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
// the smallest in lexicographical order
//  among all possible results.

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

// Solution using monotonic stack
// TC - O(N)
// SC - O(1), stack and seen will only contain any element for once which is also at max 26 hence O(1)
var removeDuplicateLetters = function(s) {
    let stack = []
    let lastOccurance = {}
    let seen = {}
    for(let i=0; i <s.length; i++) lastOccurance[s[i]] = i
    for(let i=0; i<s.length; i++) {
        const c = s[i]
        if(!seen[c]) {
            while(stack.length>0 && c<stack[stack.length-1] && lastOccurance[stack[stack.length-1]] > i) delete seen[stack.pop()]
            stack.push(c)
            seen[c] = true
        }
    }
    return stack.join("")
};