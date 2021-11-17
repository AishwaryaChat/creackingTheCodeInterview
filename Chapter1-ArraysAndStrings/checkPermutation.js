// Given two strings decide if one is a permutaion of other

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const keys1 = createMap(str1);
  for (let i = 0; i < str2.length; i++) {
    if (!keys1[str2[i]]) return false;
    else {
      keys1[str2[i]] -= 1;
      if (str2[i] < 0) return false;
    }
  }
  return true;
};

// Complexity: O(S1+S2) === O(S), where S1 and S2 are length ofstrings

const createMap = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]] += 1;
    else obj[str[i]] = 1;
  }
  return obj;
};

const str1 = "akad";
const str2 = "kada";
console.log(
  `str1: ${str1} is permutation of str2 ${str2}: `,
  checkPermutation(str1, str2)
);
