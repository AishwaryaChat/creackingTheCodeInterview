// Fizz Buzz
// Easy
// company
// Google
// Amazon
// Cisco
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:

// 1 <= n <= 10^4

// TC - O(N)
function solve(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    let currAns;
    if (i % 3 == 0 && i % 5 === 0) currAns = "FizzBuzz";
    else if (i % 3 == 0) currAns = "Fizz";
    else if (i % 5 == 0) currAns = "Buzz";
    else currAns = String(i);
    ans[i - 1] = currAns;
  }
  return ans;
}

// const n = 3;
// Output: ["1","2","Fizz"]

// const n = 5
// Output: ["1","2","Fizz","4","Buzz"]

const n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

console.log(solve(n));
