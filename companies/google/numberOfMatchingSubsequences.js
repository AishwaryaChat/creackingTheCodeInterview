// 792. Number of Matching Subsequences
// Solved
// Medium
// Topics
// Companies
// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
 

// Example 1:

// Input: s = "abcde", words = ["a","bb","acd","ace"]
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
// Example 2:

// Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// Output: 2
 

// Constraints:

// 1 <= s.length <= 5 * 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 50
// s and words[i] consist of only lowercase English letters.

// Using a tri is totally unnecessary here, I was doing it for POC purpose
// TC - O(N^2), where N is length of S
// Below solution is bad because it is given thst Length of S can go till 10^4, and while inserting into triw we are iterating through the string S again and again

class TrieNode {
    constructor() {
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    putInAllChildren(curr, str) {
        for(let [key, val] of Object.entries(curr.children)) {
            this.putInAllChildren(val, str)
            if(!val.children[str]) {
                val.children[str] = new TrieNode()
            }
        }
    }
    insert(s) {
        let curr = this.root
        for(let i=0; i<s.length; i++) {
            this.putInAllChildren(curr, s[i])
            if(!curr.children[s[i]]) {
                curr.children[s[i]] = new TrieNode()
            }
        }
    }
    checkIfExist(str) {
        let curr = this.root
        for(let s of str) {
            if(!curr.children[s]) return false
            curr = curr.children[s]
        }
        return true
    }
}

function bruteForceUsingTrie(S, words) {
    let trie = new Trie()
    trie.insert(s)
    let count = 0
    for(let word of words) {
        if(trie.checkIfExist(word)) count+=1
    }
    return count
}

// TC - O(N + summation of each word length in words), where N is length of S
// SC - O(W*w), where W is length of words array and w is length of each word
// The idea here is make a an array for dictionary where in starting we will add all the words to an index based on their first letter
// Then we iterate through letters of S and in each iteration we check the words in dictory for that letter at any point of time if the word is finished that means it is present as a subsequence in wird, and we will increment the count then

var numMatchingSubseq = function(S, words) {
    let count = 0
    let heads = Array.from({length: 26}, () => [])
    for(let word of words) {
        heads[word[0].charCodeAt(0) - 97].push({word: word, index: 0})
    }
    for(let s of S) {
        let wordsBucket = heads[s.charCodeAt(0)-97]
        heads[s.charCodeAt(0)-97] = []
        for(let word of wordsBucket) {
            word.index++
            if(word.index === word.word.length) count+=1
            else heads[word.word.charCodeAt(word.index)-97].push(word)
        }
        wordsBucket.length = 0
    }
    return count
};