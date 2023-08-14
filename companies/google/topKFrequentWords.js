// Top K Frequent Words
// Medium
// company
// Amazon
// Bloomberg
// Google
// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Constraints:

// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]

// Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// Can achive better TC - O(N), using bucket sort
// TC - O(Nlogk)
// SC - O(N)
function solve(words) {
  let minHeap = new Heap({
    comparator: (a, b) => {
      if (a[1] === b[1]) {
        return a[0] > b[0];
      }
      return a[1] < b[1];
    },
  });
  let map = {};
  for (let word of words) {
    if (!map[word]) map[word] = 0;
    map[word] += 1;
  }
  const keys = Object.keys(map);
  minHeap.push([keys[0], map[keys[0]]]);
  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];
    const value = map[key];
    if (minHeap.getSize() >= k) {
      if (value === minHeap.peek()[1]) {
        if (key < minHeap.peek()[0]) {
          minHeap.pop();
          minHeap.push([key, value]);
        }
      } else if (value > minHeap.peek()[1]) {
        minHeap.pop();
        minHeap.push([key, value]);
      }
    } else minHeap.push([key, value]);
  }
  let result = [];
  while (minHeap.getSize() > 0) {
    result.push(minHeap.pop()[0]);
  }
  return result.reverse();
}

// Let N be the length of words.

// Time Complexity: O(N). We take O(N)time to count frequencies and enumerate all buckets. Since we only need to get k words from tries, we traverse k paths in tries, and each path is neglectable in length (≤10), O(k)time is required to generate all those words from tries. Besides, it takes O(N) time to put N words in tries. As k≤N, O(N+k)=O(N)
// Space Complexity: O(N), like other approaches, our counter cnt needs O(N) space. Besides, tries to store at most N words also need O(n) space.
class Trie {
  constructor() {
    this.children = new Array(26);
    this.end = false;
  }
  insert(word) {
    let curr = this;
    for (let letter of word) {
      const charIndex = letter.charCodeAt(0) - 97;
      if (curr.children[charIndex] === undefined)
        curr.children[charIndex] = new Trie();
      curr = curr.children[charIndex];
    }
    curr.end = true;
  }
  getTrieWords(trie, k, word, words) {
    if (trie.end) {
      words.push(word);
      k.k -= 1;
    }
    for (let i = 0; i < trie.children.length && k.k > 0; i++) {
      const letter = String.fromCharCode(i + 97);
      if (trie.children[i]) {
        this.getTrieWords(trie.children[i], k, `${word}${letter}`, words);
      }
    }
    return words;
  }

  getWords(trie, k) {
    return this.getTrieWords(trie, { k }, "", []);
  }
}

function solveUsingTrieAndBucketSort(words, k) {
  let map = {};
  for (let word of words) {
    if (!map[word]) map[word] = 0;
    map[word] += 1;
  }
  let bucket = new Array(words.length + 1).fill().map(() => new Trie());
  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    const value = map[keys[i]];
    const bucketTrie = bucket[value];
    bucketTrie.insert(keys[i]);
  }
  let ans = [];
  for (let i = bucket.length - 1; i >= 0 && k > 0; i--) {
    const words = bucket[i].getWords(bucket[i], k);
    k -= words.length;
    ans = ans.concat(words);
  }
  return ans;
}

// const words = ["i","love","leetcode","i","love","coding"]
// const k = 2
// Output: ["i","love"]

// const words = [
//   "the",
//   "day",
//   "is",
//   "sunny",
//   "the",
//   "the",
//   "the",
//   "sunny",
//   "is",
//   "is",
// ];
// const k = 4;
// Output: ["the","is","sunny","day"]

// const words = ["i","love","leetcode","i","love","coding"]
// const k = 3

const words = ["a", "aa", "aaa"];
const k = 2;

console.log(solveUsingTrieAndBucketSort(words, k));
