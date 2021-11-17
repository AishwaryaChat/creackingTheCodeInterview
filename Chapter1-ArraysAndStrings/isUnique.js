// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = (str) => {
  let keys = {};
  for (let i = 0; i < str.length; i++) {
    if (keys[str[i]]) return false;
    else keys[str[i]] = 1;
  }
  return true;
};
// Complexity : O(S), where S is length of string

const isUniqueInPlace = (str) => {
  if (str.length > 128) return false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};
// Complexity : O(S^2), where S is length of string

console.log("isUniqueue: abcda: ", isUnique("abcda"));
console.log("isUniqueue: abcd: ", isUnique("abcd"));
console.log("isUniqueInPlace: abcda: ", isUniqueInPlace("abcda"));
console.log("isUniqueInPlace: abcd: ", isUniqueInPlace("abcd"));
