// Maximum Number of Balloons
// Easy
// company
// Tesla
// Adobe
// Microsoft
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

// Constraints:

// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

// TC - O(N)
// SC - O(26) ~ O(1)
function solve(text) {
  let map = {};
  const balloon = "balloon";
  const balloonMap = {};
  for (let i = 0; i < balloon.length; i++) {
    balloonMap[balloon[i]] = balloonMap[balloon[i]]
      ? balloonMap[balloon[i]] + 1
      : 1;
  }
  for (let i = 0; i < text.length; i++) {
    if (balloonMap[text[i]]) {
      map[text[i]] = map[text[i]] ? map[text[i]] + 1 : 1;
    }
  }
  let ballonKeys = Object.keys(balloonMap);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < ballonKeys.length; i++) {
    const key = ballonKeys[i];
    const freq = balloonMap[key];
    if (!map[key] || map[key] < freq) return 0;
    const freqInWord = map[key];
    ans = Math.min(Math.floor(freqInWord / freq), ans);
  }
  return ans;
}

// const text = "nlaebolko"
// Output: 1

const text = "loonbalxballlpn";
// Output: 2

// const text = "leetcode"
// Output: 0

console.log(solve(text));
