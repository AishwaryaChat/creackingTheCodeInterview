// Sum of Two Integers
// Medium
// company
// Microsoft
// Adobe
// Apple
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

// Constraints:

// -1000 <= a, b <= 1000

// a ^ b actually adds two numbers, but it doesnt put forwards the carry
// so a ^ b will give us the addition
// and a & b will give us the carry
// why are we doing a left shift on a & b? this is because the carry needs to be added to the next bit and not current bit
// so in every iteration we add a and b using a ^ b, and we calculate carry from this addition using (a & b) << 1, and in the next iteration we add this carry and update the carry
// We keep doing this until the carry becomes 0
// Negative numbers will be covered in this
// TC - O(1)
function solve(a, b) {
  while (b) {
    let temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }
  return a;
}

// const a = 1;
// const b = 2;
// Output: 3

// const a = 2;
// const b = 3;
// Output: 5

const a = 7;
const b = 6;

// const a = -1;
// const b = 1;

console.log(solve(a, b));
