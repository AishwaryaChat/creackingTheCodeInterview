// Word Ladder
// Hard
// company
// Amazon
// Google
// Bloomberg
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function getAllCombinations(L, wordList) {
  let allComboDict = {};
  wordList.forEach((word) => {
    for (let i = 0; i < L; i++) {
      let newWord = word.substring(0, i) + "*" + word.substring(i + 1, L);
      let transformations = allComboDict[newWord] ? allComboDict[newWord] : [];
      transformations.push(word);
      allComboDict[newWord] = transformations;
    }
  });
  return allComboDict;
}

// TC - Time Complexity: O(M^2×N)O(M 2×N), where M is the length of words and N is the total number of words in the input word list. Takes O(M^2×N) time for finding out all the transformations. 
// SC - Space Complexity: O(M^2×N), to store all M transformations for each of the N words in the all_combo_dict dictionary. 
function solve(beginWord, endWord, wordList) {
  const L = beginWord.length;

  // Dictionary to hold combination of words that can be formed,
  // from any given word. By changing one letter at a time.
  let allComboDict = getAllCombinations(L, wordList);

  const queue = new Queue();
  const visited = {};
  queue.enqueue([beginWord, 1]);
  while (!queue.isEmpty()) {
    const [word, diff] = queue.dequeue();
    visited[word] = true;
    for (let i = 0; i < L; i++) {
      const newWord = word.substring(0, i) + "*" + word.substring(i + 1);
      const adjacentWords = allComboDict[newWord] || [];
      for (let j = 0; j < adjacentWords.length; j++) {
        if (adjacentWords[j] === endWord) return diff + 1;
        else if (!visited[adjacentWords[j]]) {
          queue.enqueue([adjacentWords[j], diff + 1]);
          visited[adjacentWords[j]] = true;
        }
      }
    }
  }
  return 0;
}

function visitWordNode(Q, visited, othersVisited, L, allComboDict) {
  for (let j = Q.getSize(); j > 0; j--) {
    const [word, level] = Q.dequeue();

    for (let i = 0; i < L; i++) {
      // letermediate words for current word
      const newWord = word.substring(0, i) + "*" + word.substring(i + 1, L);
      const adjacentWords = allComboDict[newWord] || [];
      // Next states are all the words which share the same letermediate state.
      for (let adjacentWord of adjacentWords) {
        // If at any point we find a word in another queues's visited list, then we return, this means the endqueue and start queue both will have beginWord and endWord
        if (othersVisited[adjacentWord]!==undefined) {
          return level + othersVisited[adjacentWord];
        }

        if (visited[adjacentWord]===undefined) {
          // Save the level as the value of the dictionary, to save number of hops.
          visited[adjacentWord] = level + 1;
          Q.enqueue([adjacentWord, level + 1]);
        }
      }
    }
  }
  return -1;
}

// The below solution is given using bidirection bfs
// TC - Time Complexity: O(M^2×N)O(M 2×N), where M is the length of words and N is the total number of words in the input word list. Similar to one directional, bidirectional also takes O(M^2×N) time for finding out all the transformations. But the search time reduces to half, since the two parallel searches meet somewhere in the middle.
// SC - Space Complexity: O(M^2×N), to store all M transformations for each of the N words in the all_combo_dict dictionary, same as one directional. But bidirectional reduces the search space. It narrows down because of meeting in the middle.
function ladderLength(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord)===-1) {
    return 0;
  }
  // Since all words are of same length.
  const L = beginWord.length;
  const allComboDict = getAllCombinations(L, wordList);
  // Queues for birdirectional BFS
  // BFS starting from beginWord
  const Q_begin = new Queue();
  // BFS starting from endWord
  const Q_end = new Queue();
  Q_begin.enqueue([beginWord, 1]);
  Q_end.enqueue([endWord, 1]);

  // Visited to make sure we don't repeat processing same word.
  let visitedBegin = {beginWord: 1};
  let visitedEnd = {endWord: 1};
  let ans = -1;

  while (!Q_begin.isEmpty() && !Q_end.isEmpty()) {
    // Progress forward one step from the shorter queue
    if (Q_begin.getSize() <= Q_end.getSize()) {
      ans = visitWordNode(Q_begin, visitedBegin, visitedEnd, L, allComboDict);
    } else {
      ans = visitWordNode(Q_end, visitedEnd, visitedBegin, L, allComboDict);
    }

    if (ans > -1) {
      return ans;
    }
  }

  return 0;
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
// Output: 5

// const beginWord = "hit"
// const endWord = "cog"
// const wordList = ["hot","dot","dog","lot","log"]
// Output: 0

console.log(ladderLength(beginWord, endWord, wordList));
