// 1639. Number of Ways to Form a Target String Given a Dictionary
// Hard
// company
// Google
// AppDynamics
// Atlassian
// You are given a list of strings of the same length words and a string target.

// Your task is to form target using the given words under the following rules:

// target should be formed from left to right.
// To form the ith character (0-indexed) of target, you can choose the kth character of the jth string in words if target[i] = words[j][k].
// Once you use the kth character of the jth string of words, you can no longer use the xth character of any string in words where x <= k. In other words, all characters to the left of or at index k become unusuable for every string.
// Repeat the process until you form the string target.
// Notice that you can use multiple characters from the same string in words provided the conditions above are met.

// Return the number of ways to form target from words. Since the answer may be too large, return it modulo 109 + 7.

 

// Example 1:

// Input: words = ["acca","bbbb","caca"], target = "aba"
// Output: 6
// Explanation: There are 6 ways to form target.
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")
// Example 2:

// Input: words = ["abba","baab"], target = "bab"
// Output: 4
// Explanation: There are 4 ways to form target.
// "bab" -> index 0 ("baab"), index 1 ("baab"), index 2 ("abba")
// "bab" -> index 0 ("baab"), index 1 ("baab"), index 3 ("baab")
// "bab" -> index 0 ("baab"), index 2 ("baab"), index 3 ("baab")
// "bab" -> index 1 ("abba"), index 2 ("baab"), index 3 ("baab")
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// All strings in words have the same length.
// 1 <= target.length <= 1000
// words[i] and target contain only lowercase English letters.

// TC - O(T*K + W*K), where T is target length, K is single word length from dictionary, W is number of words in dictionary
// W*K - TC to create charMap
// T*K - TC to calculate number of ways to form target
// SC - O(26*K)(charmap space) + O(T*K)(recursion stack space) + O(T*K)(dp space)
function solve(words, target) {
    const wordLength = words[0].length
    const targetLength = target.length
    const MOD = 1e9+7
    let dp = {}
    let charMap = new Array(26).fill().map(() => new Array(wordLength).fill(0))
    for(let i=0; i<wordLength; i++) {
        for(let word of words) {
            const currChar = word[i].charCodeAt(0) - 97
            charMap[currChar][i]+=1
        }
    }
    function dfs(pos, col) {
        if(pos === targetLength) return 1
        if(col === wordLength) return 0
        const key = `${pos}_${col}`
        if(dp[key] !== undefined) return dp[key]

        const letter = target[pos]
        dp[key] = dfs(pos, col+1) // not considering current col position
        dp[key]+= charMap[letter.charCodeAt(0) - 97][col] * dfs(pos+1, col+1)
        return dp[key]%MOD
    }
    return dfs(0, 0)
}

const words = ["acca","bbbb","caca"]
const target = "aba"
// Output: 6

// const words = ["abba","baab"]
// const target = "bab"
// Output: 4

console.log(solve(words, target))