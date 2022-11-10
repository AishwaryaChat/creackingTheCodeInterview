// Next Palindrome Using Same Digits

// Add to List

// You are given a numeric string num, representing a very large palindrome.

// Return the smallest palindrome larger than num that can be created by rearranging its digits. If no such palindrome exists, return an empty string "".

// A palindrome is a number that reads the same backward as forward.

// Example 1:

// Input: num = "1221"
// Output: "2112"
// Explanation: The next palindrome larger than "1221" is "2112".
// Example 2:

// Input: num = "32123"
// Output: ""
// Explanation: No palindromes larger than "32123" can be made by rearranging the digits.
// Example 3:

// Input: num = "45544554"
// Output: "54455445"
// Explanation: The next palindrome larger than "45544554" is "54455445".

// Constraints:

// 1 <= num.length <= 105
// num is a palindrome.

// The soluiton below goes through 4 steps
// 1. Tke the first half of the string
// 2. Fild next permutation for this first half
//  Steps to find next permutations
//      a. from right side of the string find first element where str[i] < str[i+1], mark this index as triggerI
//      b. again traverse from right and find the minimum higher element greater than str[i], mark this element as triggerJ
//      c. swap elements at triggerI and triggerJ
//      d. reverse elements from position triggerI + 1 till end of string
//      e. return this next permutation
        // Note - from step (a.) we might not any element with given index, this means this is no greater permutation available, so we will return empty string ""
// 3. If original string has odd elements then answer will be [nextPermutation] + [element at mid] + [reverse of nextPermutation]
// 4. otherwise return [nextPermutation] + [reverse of nextPermutation]

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums;
}

function reverse(nums, i) {
  const numLength = nums.length;
  const end = i + Math.floor((numLength - i) / 2);
  for (let j = nums.length - 1, k = i; j >= end; j--, k++) {
    swap(nums, j, k);
  }
  return nums;
}

function nextPermutation(nums) {
  let triggerI = -1;
  let i = nums.length - 2;
  while (i >= 0) {
    let num1 = nums[i];
    let num2 = nums[i + 1];
    if (num1 < num2) {
      triggerI = i;
      break;
    }
    i--;
  }
  if (triggerI == -1) return false;
  let triggerJ = -1;
  let j = nums.length - 1;
  const num1 = nums[triggerI];
  let minVal = Number.MAX_SAFE_INTEGER;
  while (j > triggerI) {
    const num2 = nums[j];
    if (num2 > num1 && num2 < minVal) {
      minVal = num2;
      triggerJ = j;
    }
    j--;
  }
  swap(nums, triggerI, triggerJ);
  reverse(nums, triggerI + 1);
  return true;
}

function solve(numStr) {
  const numLength = numStr.length;
  if (numLength === 1) return "";
  let mid = Math.floor(numLength / 2);
  let firstPart = numStr
    .slice(0, mid)
    .split("")
    .map((a) => Number(a));
  let nextPer = nextPermutation(firstPart);
  if (!nextPer) return "";
  if (numLength % 2 == 1) {
    return [...firstPart, numStr[mid], ...firstPart.reverse()].join("");
  }
  return [...firstPart, ...firstPart.reverse()].join("");
}

// const numStr = "0110";
// const numStr="4809889084"
// const numStr="23143034132"
// const numStr="32123"
const numStr = "77359395377";
console.log(solve(numStr));

