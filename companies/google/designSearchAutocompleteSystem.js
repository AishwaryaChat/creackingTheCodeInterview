// 642. Design Search Autocomplete System
// https://leetcode.com/problems/design-search-autocomplete-system
// Hard
// Topics
// Companies
// Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#').

// You are given a string array sentences and an integer array times both of length n where sentences[i] is a previously typed sentence and times[i] is the corresponding number of times the sentence was typed. For each input character except '#', return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed.

// Here are the specific rules:

// The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
// The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).
// If less than 3 hot sentences exist, return as many as you can.
// When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.
// Implement the AutocompleteSystem class:

// AutocompleteSystem(String[] sentences, int[] times) Initializes the object with the sentences and times arrays.
// List<String> input(char c) This indicates that the user typed the character c.
// Returns an empty array [] if c == '#' and stores the inputted sentence in the system.
// Returns the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than 3 matches, return them all.
 

// Example 1:

// Input
// ["AutocompleteSystem", "input", "input", "input", "input"]
// [[["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]], ["i"], [" "], ["a"], ["#"]]
// Output
// [null, ["i love you", "island", "i love leetcode"], ["i love you", "i love leetcode"], [], []]

// Explanation
// AutocompleteSystem obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
// obj.input("i"); // return ["i love you", "island", "i love leetcode"]. There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.
// obj.input(" "); // return ["i love you", "i love leetcode"]. There are only two sentences that have prefix "i ".
// obj.input("a"); // return []. There are no sentences that have prefix "i a".
// obj.input("#"); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
 

// Constraints:

// n == sentences.length
// n == times.length
// 1 <= n <= 100
// 1 <= sentences[i].length <= 100
// 1 <= times[i] <= 50
// c is a lowercase English letter, a hash '#', or space ' '.
// Each tested sentence will be a sequence of characters c that end with the character '#'.
// Each tested sentence will have a length in the range [1, 200].
// The words in each input sentence are separated by single spaces.
// At most 5000 calls will be made to input.

// Solution using string method starts with
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.sentencesMap = {}
    this.lastSentence = ""
    for(let i=0; i<sentences.length; i++) {
        this.sentencesMap[sentences[i]] = times[i]
    }
};

AutocompleteSystem.prototype.findHotSentences = function(sentence) {
    const sentencesKeys = Object.keys(this.sentencesMap)
    let couldBeAns = []
    for(let i=0; i<sentencesKeys.length; i++) {
        if(sentencesKeys[i].startsWith(sentence)) {
            couldBeAns.push(i)
        }
    }
    couldBeAns.sort((a, b) => {
        const key1 = sentencesKeys[a]
        const key2 = sentencesKeys[b]
        const freq1 = this.sentencesMap[key1]
        const freq2 = this.sentencesMap[key2]
        let sortA = freq2 - freq1;
            let sortB = key1 > key2? 1: -1;
            return sortA? sortA: sortB;

    })
    let ans = []
    for(let i = 0; i<couldBeAns.length; i++) {
        ans.push(sentencesKeys[couldBeAns[i]])
        if(ans.length === 3) return ans
    }
    return ans
}

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if(c === "#") {
        if(this.sentencesMap[this.lastSentence] === undefined) this.sentencesMap[this.lastSentence] = 0
        this.sentencesMap[this.lastSentence]+=1
        this.lastSentence = ""
        return []
    } else {
        this.lastSentence = this.lastSentence + c
    }
    return this.findHotSentences(this.lastSentence)
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

// Solution using Tries and heap
// given n as the length of sentences, k as the average length of all sentences, and m as the number of times input is called,
// TC - O(n⋅k+m⋅(n+m/k))
// SC -  O(k⋅(n⋅k+m))
class TrieNode {
    constructor() {
        this.sentences = {}
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(sentence, freq) {
        let curr = this.root
        for(let c of sentence) {
            if(curr.children[c] === undefined) curr.children[c] = new TrieNode()
            curr = curr.children[c]
            if(curr.sentences[sentence] === undefined) curr.sentences[sentence] = 0
            curr.sentences[sentence] += freq
        }
    }
    findSentences(prefix, k, ans) {
        let curr = this.root
        let i = 0
        while(curr && i<prefix.length) {
            curr = curr.children[prefix[i]]
            i++
        }
        if(curr && i===prefix.length) {
            const heap = new Heap({heap: Object.entries(curr.sentences), comparator: (a, b) => {
                if(a[1] == b[1]) {
                    return a[0] < b[0]
                }
                return a[1] > b[1]
            }})
            while(heap.getSize()>0 && k>0) {
                ans.push(heap.pop()[0])
                k--
            }
        }
        return ans
    }
}

class solution2 {
    /**
     * @param {string[]} sentences
     * @param {number[]} times
     */
    constructor(sentences, times) {
        this.sentencesMap = new Trie()
        this.lastSentence = ""
        for(let i=0; i<sentences.length; i++) {
            this.sentencesMap.insert(sentences[i], times[i])
        }
    }
    
    findHotSentences = function (sentence) {
        const hotSentences = []
        this.sentencesMap.findSentences(sentence, 3, hotSentences)
        return hotSentences
    }
    
    /** 
     * @param {character} c
     * @return {string[]}
     */
    input = function(c) {
        if(c === "#") {
            this.sentencesMap.insert(this.lastSentence, 1)
            this.lastSentence = ""
            return []
        } else {
            this.lastSentence = this.lastSentence + c
        }
        return this.findHotSentences(this.lastSentence)
    };
    
    /** 
     * Your AutocompleteSystem object will be instantiated and called as such:
     * var obj = new AutocompleteSystem(sentences, times)
     * var param_1 = obj.input(c)
     */
}