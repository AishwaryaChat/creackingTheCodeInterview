/*
Pairs with given sum II

Problem Description
Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

Since the number of such pairs can be very large, return number of such pairs modulo (10^9 + 7).



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 10^9

1 <= B <= 10^9



Input Format
The first argument given is the integer array A.

The second argument given is integer B.



Output Format
Return the number of pairs for which sum is equal to B modulo (10^9+7).



Example Input
Input 1:

A = [1, 1, 1]
B = 2
Input 2:

 
A = [1, 1]
B = 2


Example Output
Output 1:

 3
Output 2:

 1


Example Explanation
Explanation 1:

 Any two pairs sum up to 2.
Explanation 2:

 only pair (1, 2) sums up to 2.
*/

// Below solution has a
// TC - O(N)
// SC - O(N)
// this is a wrong solution and done by me at 4th attempt
// Here I am using both 2 pointer technique and a hashmap
// So although TC is less but SC is unnecessary

function solve(A, B) {
  let MOD = Math.pow(10, 9) + 7
  let N = A.length - 1;
  let i = 0;
  let j = N;
  let count = 0;
  let map = {}
  for(let i=0; i<A.length; i++) {
    if(map[A[i]]) {
      map[A[i]] += 1
    } else {
      map[A[i]] = 1
    }
  }
  while (i < j) {
    let x = A[i];
    let y = A[j];
    let sum = x + y;
      let occurences = map[A[i]]
      if (sum === B) {
      count = (count + 1) % MOD;
      if(occurences > 1) {
        if(x==y) {
          count = (count + (occurences-2)) % MOD
          map[y] -=1
        } else {
          count = (count + (occurences-1)) % MOD
        }
      }
      j--
    } else if (sum < B) {
      map[x] -=1
      i++;
    } else {
      map[y] -=1
      j--;
    }
  }
  return count;
}

// This is the optimised solution
// TC - O(N)
// SC - O(1)
// 

function solveOptimised(A, B) {
  let MOD = Math.pow(10, 9) + 7;
  let N = A.length - 1;
  let i = 0;
  let j = N;
  let count = 0;
  while (i < j) {
    let x = A[i];
    let y = A[j];
    let sum = x + y;
    if (sum === B) {
      let xCount = 0;
      let yCount = 0;
      if (x == y) {
        xCount = j - i + 1;
        // when both numbers are equal count will be nothing but nC2
        count = (count + (((xCount * (xCount - 1)) / 2) % MOD)) % MOD;
        // If both numbers are equal that means in btw them there will be same number
        // We can count all of the using nC2 formula and can break from here
        break;
      } else {
        // When numbers are not equal in this case, we will count the number of x values
        while (i < j && A[i] === x) {
          xCount += 1;
          i++;
        }
        i--
        // Count the number of y values
        while (j > i && A[j] === y) {
          yCount += 1;
          j--;
        }
        // xCount * yCount will give us the total number of pairs for them
        count = (count + ((((xCount % MOD) * yCount) % MOD) % MOD)) % MOD;
      }
    } else if (sum < B) {
      i++;
    } else {
      j--;
    }
  }
  return count;
}

// const A = [1, 1, 1];
// const B = 2;

// const A = [1, 1]
// const B = 2

// const A = [1, 1, 2, 2, 3];
// const B = 3;

// const A = [1, 1, 2, 3, 4, 4, 6, 6]
// const B = 8

// const A = [1, 1, 1, 1, 1];
// const B = 2;

// const A = [ 1, 2, 6, 6, 7, 9, 9 ]
// const B = 13

const A = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 9, 10];
const B = 5;

console.log(solveOptimised(A, B));
