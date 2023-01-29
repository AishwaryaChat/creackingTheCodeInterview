// Sentence Screen Fitting
// Medium
// company
// Google
// Uber
// Given a rows x cols screen and a sentence represented as a list of strings, return the number of times the given sentence can be fitted on the screen.

// The order of words in the sentence must remain unchanged, and a word cannot be split into two lines. A single space must separate two consecutive words in a line.

// Example 1:

// Input: sentence = ["hello","world"], rows = 2, cols = 8
// Output: 1
// Explanation:
// hello---
// world---
// The character '-' signifies an empty space on the screen.
// Example 2:

// Input: sentence = ["a", "bcd", "e"], rows = 3, cols = 6
// Output: 2
// Explanation:
// a-bcd-
// e-a---
// bcd-e-
// The character '-' signifies an empty space on the screen.
// Example 3:

// Input: sentence = ["i","had","apple","pie"], rows = 4, cols = 5
// Output: 1
// Explanation:
// i-had
// apple
// pie-i
// had--
// The character '-' signifies an empty space on the screen.

// Constraints:

// 1 <= sentence.length <= 100
// 1 <= sentence[i].length <= 10
// sentence[i] consists of lowercase English letters.
// 1 <= rows, cols <= 2 * 10^4

// TC - O(sentence.length * rows)
function wordsTyping(sentence, rows, cols) {
  let i = 0;
  let n = sentence.length;
  let times = 0;
  let j = cols;
  while (true) {
    if (i === n) times += 1;
    i = i % n;
    const wordLength = sentence[i].length;
    if (rows > 0) {
      if (j >= wordLength) {
        j = j - wordLength - 1;
        i++;
      } else if (rows - 1 > 0) {
        rows = rows - 1;
        j = cols;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return times;
}

// The below solution is given using dp, for every word we keep a track, if this is a starting word on any row then what is the count of number of sentences completing on this row and also what will be the next first word for the next row
// TC - O(rows * cols)
// SC - O(words)
function getNext(i, cols, wordLens) {
  let left = cols;
  let fitCount = 0;

  while (true) {
    while (i < wordLens.length) {
      if (left < wordLens[i]) return [i, fitCount];
      left -= wordLens[i] + 1;
      i++;
    }
    i = 0;
    fitCount++;
  }
}

function solveOptimised(sentence, rows, cols) {
  const wordLens = sentence.map((word) => word.length);
  const maxLen = Math.max(...wordLens);
  if (cols < maxLen) return 0;

  const memo = new Map();
  let currIdx = 0;
  let numOfSentences = 0;

  while (rows--) {
    if (!memo.has(currIdx))
      memo.set(currIdx, getNext(currIdx, cols, wordLens));
    const [next, count] = memo.get(currIdx);
    currIdx = next;
    numOfSentences += count;
  }
  return numOfSentences;
}

// const sentence = ["hello", "world"],
//   rows = 2,
//   cols = 8;

// const sentence = ["a", "bcd", "e"],
//   rows = 3,
//   cols = 6;

// const sentence = ["i", "had", "apple", "pie"],
//   rows = 10,
//   cols = 5;

  const sentence = ["ni","hao","wo","hen","hao"],
  rows = 10,
  cols = 22

  

console.log(solveOptimised(sentence, rows, cols));
