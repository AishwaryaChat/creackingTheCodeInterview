// 2982. Find Longest Special Substring That Occurs Thrice II
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a string s that consists of lowercase English letters.

// A string is called special if it is made up of only a single character. For example, the string "abc" is not special, whereas the strings "ddd", "zz", and "f" are special.

// Return the length of the longest special substring of s which occurs at least thrice, or -1 if no special substring occurs at least thrice.

// A substring is a contiguous non-empty sequence of characters within a string.

// Example 1:

// Input: s = "aaaa"
// Output: 2
// Explanation: The longest special substring which occurs thrice is "aa": substrings "aaaa", "aaaa", and "aaaa".
// It can be shown that the maximum length achievable is 2.
// Example 2:

// Input: s = "abcdef"
// Output: -1
// Explanation: There exists no special substring which occurs at least thrice. Hence return -1.
// Example 3:

// Input: s = "abcaba"
// Output: 1
// Explanation: The longest special substring which occurs thrice is "a": substrings "abcaba", "abcaba", and "abcaba".
// It can be shown that the maximum length achievable is 1.

// Constraints:

// 3 <= s.length <= 5 * 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
// for all 26 letters, we are finding the length of 3 maximum contiguous length special strings
// then at end we are checking which maximum is possible,
// if a string is of length 5 eg 'aaaaa', this can have 3 groups of max 5-2 length string, since more than that, i.e 4 and 5 can not repeat thrice in a length of 5, so max 3 answer is possible
// TC - O(N)
// SC - O(1)
var maximumLength = function (s) {
  const n = s.length;
  let counts = new Array(26).fill().map(() => new Array(3).fill(0));
  let prev;
  let count = 0;

  function save() {
    const ind = prev.charCodeAt(0) - 97;
    if (counts[ind][0] < count) {
      counts[ind][2] = counts[ind][1];
      counts[ind][1] = counts[ind][0];
      counts[ind][0] = count;
    } else if (counts[ind][1] < count) {
      counts[ind][2] = counts[ind][1];
      counts[ind][1] = count;
    } else if (counts[ind][2] < count) {
      counts[ind][2] = count;
    }
  }

  for (let i = 0; i <= n; i++) {
    if (prev === s[i]) {
      count += 1;
    } else {
      if (count > 0) save();
      prev = s[i];
      count = 1;
    }
  }
  let result = -1;
  for (let i = 0; i < 26; i++) {
    count = Math.min(...counts[i]);
    if (count > 0) result = Math.max(result, count);
    count = Math.min(counts[i][0] - 1, counts[i][1]);
    if (count > 0) result = Math.max(result, count);
    count = counts[i][0] - 2;
    if (count > 0) result = Math.max(result, count);
  }
  return result;
};
