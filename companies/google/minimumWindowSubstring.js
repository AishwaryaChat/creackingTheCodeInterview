// 76. Minimum Window Substring
// Hard
// Companies
// Amazon
// Adobe
// Yandex
// Facebook
// Google
// TikTok
// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 10^5
// s and t consist of uppercase and lowercase English letters.


// Follow up: Could you find an algorithm that runs in O(m + n) time?

// TC - O(S+T)
// SC - O(1)
function solve(s, t) {
    if (t.length > s.length) return ""
    let map = {}
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] == undefined) map[t[i]] = 0
        map[t[i]] += 1
    }
    let l = 0
    let r = 0
    let finalMap = {}
    let formed = 0
    const required = Object.keys(map).length
    let ans = [Number.MAX_SAFE_INTEGER, 0, 0]
    while (r < s.length) {
        let letter = s[r]
        if (finalMap[letter] === undefined) finalMap[letter] = 0
        finalMap[letter] += 1
        if (map[letter] !== undefined && map[letter] == finalMap[letter]) formed += 1
        while (l <= r && formed === required) {
            letter = s[l]
            if (r - l + 1 < ans[0]) {
                ans[0] = r - l + 1
                ans[1] = l
                ans[2] = r
            }

            finalMap[letter] -= 1
            if (map[letter] !== undefined && finalMap[letter] < map[letter]) formed -= 1
            l++
        }
        r++
    }
    return ans[0] === Number.MAX_SAFE_INTEGER ? "" : s.substring(ans[1], ans[2] + 1)
}

const s = "ADOBECODEBANC"
const t = "ABC"
// Output: "BANC"

// const s = "a"
// const t = "a"
// Output: "a"

// const s = "a"
// const t = "aa"
// Output: ""

console.log(solve(s, t))