// Largest Coprime Divisor

// Problem Description

// You are given two positive numbers A and B . You need to find the maximum valued integer X such that:

// X divides A i.e. A % X = 0
// X and B are co-prime i.e. gcd(X, B) = 1

// Problem Constraints

// 1 <= A, B <= 109

// Input Format

// First argument is an integer A.
// Second argument is an integer B.

// Output Format

// Return an integer maximum value of X as descibed above.

// Example Input

// Input 1:

//  A = 30
//  B = 12
// Input 2:

//  A = 5
//  B = 10

// Example Output

// Output 1:

//  5
// Output 2:

//  1

// Example Explanation

// Explanation 1:

//  All divisors of A are (1, 2, 3, 5, 6, 10, 15, 30).
//  The maximum value is 5 such that A%5 == 0 and gcd(5,12) = 1
// Explanation 2:

//  1 is the only value such that A%5 == 0 and gcd(1,10) = 1

function getFactors(A) {
  let i = 2;
  let map = new Map();
  while (i <= A) {
    if (map.has(i)) {
      i++;
      continue;
    }
    if (A % i === 0) {
      const other = A / i;
      map.set(i);
      map.set(other);
    }
    i++;
  }
  return map.keys();
}

function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

function solve(A, B) {
  const factors = getFactors(A);
  let max = -1;
  return gcd(A,B)
  console.log("factors")
  for (factor of factors) {
    const currGcd = gcd(factor, B);
    if (currGcd == 1) max = Math.max(max, factor);
  }
  return max;
}

// const A = 30
// const B = 12
// Output - 5

// const A = 5
// const B = 10
// Output - 1

const A = 2
const B = 3

console.log(solve(A, B))
