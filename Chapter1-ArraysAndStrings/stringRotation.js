// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings s1 and s2, write code to check is s2 is a rotation of s1
// using only 1 call to isSubString

const stringRotation = (s1, s2) => {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  const sub1 = [];
  const sub2 = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) sub1.push(s2[i]);
    else sub2.push(s2[i]);
  }
  const finalSub = sub2.join("") + sub1.join("");
  if (finalSub === s2) return true;

  return false;
};

// Complexity: O(N+N),  second N is for the string concatenation O(N), N is length of s1 and S2,

const s1 = "waterbottle";
const s2 = "erbottlewat";

console.log(`s2 ${s2} is rotation of s1 ${s1}: `, stringRotation(s1, s2));

const s3 = "bottle";
const s4 = "lebtto";

console.log(`s2 ${s3} is rotation of s1 ${s4}: `, stringRotation(s3, s4));

// Straighfwd solution

const stringRotationSimple = (s1, s2) => {
  const len = s1.length;
  if (len === s2.length && len > 0) {
    let s1s1 = s1 + s1;
    return s1s1.indexOf(s2) !== -1;
  }
  return false;
};

console.log(
  `s2 ${s3} is rotation of s1 ${s4} using stringRotationSimple: `,
  stringRotationSimple(s3, s4)
);

console.log(
  `s2 ${s2} is rotation of s1 ${1} using stringRotationSimple: `,
  stringRotationSimple(s2, s1)
);
