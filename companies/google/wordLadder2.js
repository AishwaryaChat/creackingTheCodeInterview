// 126. Word Ladder II
// Hard
// Topics
// Companies
// Amazon
// Box
// Apple
// Google
// Facebook
// Microsoft
// Lyft
// Snapchat
// Bloomberg
// Oracle
// Uber
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].



// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.


// Constraints:

// 1 <= beginWord.length <= 5
// endWord.length == beginWord.length
// 1 <= wordList.length <= 500
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
// The sum of all shortest transformation sequences does not exceed 10^5.
const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// Complexity Analysis

// Time complexity: O(NK2+α), where N is the number of words in wordList, K is the maximum length of a word, α is the number of possible paths from beginWord to endWord in the directed graph we have.

// Copying the wordList into the set will take O(N)

// In BFS, every word will be traversed and for each word, we will find the neighbors using the function findNeighbors which has a time complexity of O(K^2). Therefore the total complexity for all the N words will be O(NK^2) Also, each word will be enqueued and will be removed from the set hence it will take O(N). The total time complexity of BFS will therefore be equal to O(NK^2)

// While backtracking, we will essentially be finding all the paths from beginWord to
// endWord. Thus the time complexity will be equal to O(α)

// We can estimate the upper bound for α by assuming that every layer except the first and the last layer in the DAG has x number of words and is fully connected to the next layer. Let h represent the height of the DAG, so the total number of paths will be x^h (because we can choose any one word out of x words in each layer and each choice will be part of a valid shortest path that leads to the endWord). Here, h equals (N−2)/x. This would result in x^{(N-2)/x} total paths, which is maximized when x=2.718 which we will round to 3 because x must be an integer. Thus the upper bound for α is 3^{(N/3)} , however, this is a very loose bound because the nature of this problem precludes the possibility of a DAG where every layer is fully connected to the next layer.

// The total time complexity is therefore equal to O(NK^2 + α)

// Space complexity: O(NK)

// Here N is the Number of words in wordList, K is the Maximum length of a word.

// Storing the words in a set will take O(NK) space.

// To build the adjacency list O(N) space is required as the BFS will produce a directed
// graph and hence there will be at max (N−1) edges.

// In backtracking, stack space will be consumed which will be equal to the maximum number of active functions in the stack which is equal to the N as the path can have all the words in the wordList. Hence space required is O(N)

// The total space complexity is therefore equal to O(NK)

function findNeighbours(word, wordMap) {
    let neighbours = []
    const charArr = word.split("")
    for (let i = 0; i < word.length; i++) {
        let oldChar = charArr[i]
        for (let j = 0; j < 26; j++) {
            const newChar = String.fromCharCode(j + 97)
            charArr[i] = newChar
            if (newChar === oldChar) continue
            const newWord = charArr.join("")
            if (wordMap[newWord] === undefined) continue
            neighbours.push(newWord)
        }
        charArr[i] = oldChar
    }
    return neighbours
}

function backtrack(word, endWord, ans, temp, adjList) {
    if (word === endWord) {
        ans.push(temp.slice().reverse())
        return
    }
    if (adjList[word] !== undefined) {
        for (let newWord of adjList[word]) {
            temp.push(newWord)
            backtrack(newWord, endWord, ans, temp, adjList)
            temp.pop()
        }
    }


}

function bfs(beginWord, wordMap) {
    let adjList = {}
    let queue = new Queue()
    queue.enqueue(beginWord)
    if (wordMap[beginWord] !== undefined) {
        delete wordMap[beginWord]
    }
    let isEnqueued = { beginWord: 1 }
    while (!queue.isEmpty()) {
        const visited = {}
        let newQueue = new Queue()
        while (!queue.isEmpty()) {
            const currWord = queue.dequeue()
            const neighbours = findNeighbours(currWord, wordMap)
            for (let neighbour of neighbours) {
                visited[neighbour] = true
                if (adjList[neighbour] === undefined) adjList[neighbour] = []
                adjList[neighbour].push(currWord)
                if (isEnqueued[neighbour] === undefined) {
                    newQueue.enqueue(neighbour);
                    isEnqueued[neighbour] = 1
                }
            }



        }
        for (let key of Object.keys(visited)) {
            if (wordMap[key] !== undefined) {
                delete wordMap[key]
            }
        }
        queue = newQueue
    }
    return adjList
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var solve = function (beginWord, endWord, wordList) {
    let wordMap = {}
    for (let word of wordList) {
        wordMap[word] = 1
    }
    const adjList = bfs(beginWord, wordMap)
    let ans = []
    backtrack(endWord, beginWord, ans, [endWord], adjList)
    return ans
};

const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"
// Example 2:

// const beginWord = "hit"
// const endWord = "cog"
// const wordList = ["hot","dot","dog","lot","log"]
// Output: []

console.log(solve(beginWord, endWord, wordList))