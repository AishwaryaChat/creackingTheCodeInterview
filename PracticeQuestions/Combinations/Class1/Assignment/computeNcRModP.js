// Compute nCr % p
// Problem Description
// Given three integers A, B, and C, where A represents n, B represents r, and C represents p and p is a prime number greater than equal to n, find and return the value of nCr % p where nCr % p = (n! / ((n-r)! * r!)) % p.

// x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

// NOTE: For this problem, we are considering 1 as a prime.

// Problem Constraints
// 1 <= A <= 10^6
// 1 <= B <= A
// A <= C <= 10^9+7

// Input Format
// The first argument given is the integer A ( = n).
// The second argument given is the integer B ( = r).
// The third argument given is the integer C ( = p).

// Output Format
// Return the value of nCr % p.

// Example Input
// Input 1:

//  A = 5
//  B = 2
//  C = 13
// Input 2:

//  A = 6
//  B = 2
//  C = 13

// Example Output
// Output 1:

//  10
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  nCr( n=5 and r=2) = 10.
//  p=13. Therefore, nCr%p = 10.

// function calculateFactorial(n, factorial, p) {
//   if (n == 0) {
//     factorial[n] = 1;
//     return factorial[n];
//   }
//   if (factorial[n] !== undefined) return factorial[n];
//   factorial[n] = (n * calculateFactorial(n - 1, factorial, p)) % p;
//   return factorial[n];
// }

function calculateFactorial(n, p) {
  let factorial = new Array(n + 1);
  factorial[0] = 1;
  for (let i = 1; i <= n; i++) {
    factorial[i] = (i * factorial[i - 1]) % p;
  }
  return factorial;
}

function fastPowerFunction(a, b, m) {
  a = a % m;
  let ans = 1;
  while (b > 0) {
    if (b % 2) ans = (ans * a) % m;
    a = (a * a) % m;
    b = Math.floor(b / 2);
  }
  return ans;
}

function solve(n, r, p) {
  //   const factorial = [];
  const factorial = calculateFactorial(n, p);
  let ans = factorial[n];
  //   console.log("factorial", factorial)
  //   console.log("n-r", n-r)
  //   console.log("factorial[n - r]", factorial[n - r], "p - 2", p - 2, "fastPowerFunction", fastPowerFunction(factorial[n - r], p - 2, p))
  ans = (((ans % p) * fastPowerFunction(factorial[r], p - 2, p)) % p) % p;
  ans = (((ans % p) * fastPowerFunction(factorial[n - r], p - 2, p)) % p) % p;
  return ans;
}

// const A = 5;
// const B = 2;
// const C = 13;
// Output: 10

// const A = 6;
// const B = 2;
// const C = 13;
// Output: 2

const A = 1000000;
const B = 1;
const C = 1000000007;

console.log(solve(A, B, C));
