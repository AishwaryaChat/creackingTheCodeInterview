// 1307. Verbal Arithmetic Puzzle
// Attempted
// Hard
// Topics
// Companies
// Hint
// Given an equation, represented by words on the left side and the result on the right side.

// You need to check if the equation is solvable under the following rules:

// Each character is decoded as one digit (0 - 9).
// No two characters can map to the same digit.
// Each words[i] and result are decoded as one number without leading zeros.
// Sum of numbers on the left side (words) will equal to the number on the right side (result).
// Return true if the equation is solvable, otherwise return false.

// Example 1:

// Input: words = ["SEND","MORE"], result = "MONEY"
// Output: true
// Explanation: Map 'S'-> 9, 'E'->5, 'N'->6, 'D'->7, 'M'->1, 'O'->0, 'R'->8, 'Y'->'2'
// Such that: "SEND" + "MORE" = "MONEY" ,  9567 + 1085 = 10652
// Example 2:

// Input: words = ["SIX","SEVEN","SEVEN"], result = "TWENTY"
// Output: true
// Explanation: Map 'S'-> 6, 'I'->5, 'X'->0, 'E'->8, 'V'->7, 'N'->2, 'T'->1, 'W'->'3', 'Y'->4
// Such that: "SIX" + "SEVEN" + "SEVEN" = "TWENTY" ,  650 + 68782 + 68782 = 138214
// Example 3:

// Input: words = ["LEET","CODE"], result = "POINT"
// Output: false
// Explanation: There is no possible mapping to satisfy the equation, so we return false.
// Note that two different characters cannot map to the same digit.

// Constraints:

// 2 <= words.length <= 5
// 1 <= words[i].length, result.length <= 7
// words[i], result contain only uppercase English letters.
// The number of different characters used in the expression is at most 10.

// In below solution we are first getting all the unique characters including in all the words and result, finding out all combinations for these unique characters and digit and check for the sum equation, this solution throws time limit exceed, because for every  character we are having 9 posibilities and so the complexity goes exponential, O(9^n), where n is uniqueue characters
function checkIfEquate(words, result, lettersToDigit) {
  let allWords = words.concat([result]);
  let total = 0;
  let num;
  for (let i = 0; i < allWords.length; i++) {
    num = "";
    for (let s of allWords[i]) {
      num += lettersToDigit[s];
    }
    if (i < allWords.length - 1) {
      total += Number(num);
    }
  }
  return total === Number(num);
}

function backtrack(
  unique,
  index,
  letToDig,
  digToLet,
  words,
  result,
  firstLetters
) {
  if (index === unique.length) {
    return checkIfEquate(words, result, letToDig);
  }
  const ch = unique[index];
  let digit = firstLetters[ch] === undefined ? 0 : 1;
  for (; digit < 10; digit++) {
    if (digToLet[digit] === undefined) {
      if (letToDig[ch] === -1) {
        letToDig[ch] = digit;
        digToLet[digit] = ch;
        if (
          backtrack(
            unique,
            index + 1,
            letToDig,
            digToLet,
            words,
            result,
            firstLetters
          )
        )
          return true;
        letToDig[ch] = -1;
        digToLet[digit] = undefined;
      }
    }
  }
  return false;
}
/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function (words, result) {
  let unique = "";
  let letToDig = {};
  let firstLetters = {};
  for (let word of words) {
    if (word.length > result.length) return false;
    for (let i = 0; i < word.length; i++) {
      const s = word[i];
      if (i === 0 && word.length > 1) firstLetters[s] = true;
      if (letToDig[s] === undefined) {
        letToDig[s] = -1;
        unique += s;
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    const s = result[i];
    if (i === 0 && result.length > 1) firstLetters[s] = true;
    if (letToDig[s] === undefined) {
      letToDig[s] = -1;
      unique += s;
    }
  }
  if (unique.length > 10) return false;
  let digToLet = {};

  return backtrack(unique, 0, letToDig, digToLet, words, result, firstLetters);
};

// In below solution we will find the units digit for each words and then check if it is possible to get the result with that combination and we will proceed with all the bits like this. Return true only if at the end carry is 0
// TC - O(9^R), length of unique characters of result

var solution2 = function(words, result) {
    let firstLetters = {}
    let MAX_BIT = result.length
    let WORDS_COUNT = words.length
    for(let word of words) {
        if (word.length > MAX_BIT) return false;
        // Single character word can have 0 as first number, because it will be a valid number then
        if(word.length > 1) firstLetters[word[0]] = true
    }
    if(result.length > 1) firstLetters[result[0]] = true
    
    let digToLet = {}
    let letToDig = {}

    function backtrack(digit, wordIndex, carry) {
    if(digit>MAX_BIT) return carry === 0
    if(wordIndex === WORDS_COUNT) {
        const resultNum = carry % 10
        const resultChar = result[MAX_BIT-digit]
        const isUsed = letToDig[resultChar] !== undefined
        if(!isUsed && digToLet[resultNum] !== undefined // if result's char is not in letToDig, but carry's last digit is present in digToLet, this means this mapping is not valid
        || (isUsed && letToDig[resultChar] != resultNum) // if mapping is not equal to carry's last digit
        || (resultNum === 0 && firstLetters[resultChar]) // if carry last digit is zero and character mapped is on firstLetters
        ) return false
        letToDig[resultChar] = resultNum
        digToLet[resultNum] = resultChar
        if(backtrack(digit+1, 0, (carry-resultNum)/10)) return true
        if(!isUsed) {
         delete letToDig[resultChar]
         delete digToLet[resultNum]
        }
        return false
    }
    const charIndex = words[wordIndex].length - digit
    const ch = words[wordIndex][charIndex]
    // this bit is not present in curr word
    if(ch === undefined) return backtrack(digit, wordIndex+1, carry)
    if(letToDig[ch] !== undefined) return backtrack(digit, wordIndex+1, carry+letToDig[ch])
    for(let i=0; i<10; i++) {
        if(digToLet[i] !== undefined || (i===0 && firstLetters[ch])) continue
        letToDig[ch] = i
        digToLet[i] = ch
        if(backtrack(digit, wordIndex+1, carry+i)) return true
        delete letToDig[ch]
        delete digToLet[i]
    }
    return false
}
    
    return backtrack(1, 0, 0)
};

