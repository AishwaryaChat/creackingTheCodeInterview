/*
Count of divisors

Problem Description
Given an array of integers A, find and return the count of divisors of each element of the array.

NOTE: The order of the resultant array should be the same as the input array.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 10^6



Input Format
The only argument given is the integer array A.



Output Format
Return the count of divisors of each element of the array in the form of an array.



Example Input
Input 1:

 A = [2, 3, 4, 5]
Input 2:

 A = [8, 9, 10]


Example Output
Output 1:

 [2, 2, 3, 2]
Output 1:

 [4, 3, 4]


Example Explanation
Explanation 1:

 The number of divisors of 2 : [1, 2], 3 : [1, 3], 4 : [1, 2, 4], 5 : [1, 5]
 So the count will be [2, 2, 3, 2].
Explanation 2:

 The number of divisors of 8 : [1, 2, 4, 8], 9 : [1, 3, 9], 10 : [1, 2, 5, 10]
 So the count will be [4, 3, 4].
*/

// This solution is to find divisors for all the numbers from 1 to N
function solve(A) {
  let D = Array(A + 1).fill(0);
  for (let i = 1; i * i <= A; i++) {
    D[i * i]++;
    for (let j = i * i + i; j <= A; j += i) {
      D[j] += 2;
    }
  }
  return D;
}
// console.log(solve(13))

// We can use above function to solve our question, below is the implementation
// But this is inefficient coz we are finding the divisors from 1 to N, even when it is not needed
// Also we are finding Math.max(...A) which will again take some computation
function countDivisors(A) {
  let N = Math.max(...A);
  let D = solve(N);
  let res = [];
  for (let i = 0; i < A.length; i++) {
    res.push(D[A[i]]);
  }
  return res;
}

// const A = [2, 3, 4, 5]
// const A = [8, 9, 10];
// console.log(countDivisors(A));

// Below is the more efficient solution
// The idea is to create a map and store calculated divisors for a number in that map, if the number will be repeating then we will directly return answer for it
// The idea to calculate factors is starting from 1 till the Number(A)
// keep checking if the remainder is zero, add it to answer
// also add for A/i
// but not when A/i === i, coz this will be square case
// TC = O(NlogN)
// SC = O(N) // for Map not for array, coz array we need for answer
let st = new Map();
function getMe(A) {
  if (st.has(A)) return st.get(A);
  let ans = 0;
  for (let i = 1; i * i <= A; i++) {
    if (A % i) continue;
    ans++;
    if (A / i == i) continue;
    ans++;
  }
  st.set(A, ans);
  return ans;
}
function solve2 (A) {
    let ret = [];
    A.forEach((ele) => ret.push(getMe(ele)));
    return ret;
  }


// const A = [2, 3, 4, 5]
const A = [8, 9, 10];
console.log(solve2(A));
