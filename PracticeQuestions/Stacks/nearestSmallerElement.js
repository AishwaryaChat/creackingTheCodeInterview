/*
Nearest Smaller Element

Problem Description
Given an array A, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

More formally,

G[i] for an element A[i] = an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Elements for which no smaller element exist, consider the next smaller element as -1.



Problem Constraints
1 <= |A| <= 100000

-10^9 <= A[i] <= 10^9



Input Format
The only argument given is integer array A.



Output Format
Return the integar array G such that G[i] contains the nearest smaller number than A[i]. If no such element occurs G[i] should be -1.



Example Input
Input 1:

 A = [4, 5, 2, 10, 8]
Input 2:

 A = [3, 2, 1]


Example Output
Output 1:

 [-1, 4, -1, 2, 2]
Output 2:

 [-1, -1, -1]


Example Explanation
Explanation 1:

index 1: No element less than 4 in left of 4, G[1] = -1
index 2: A[1] is only element less than A[2], G[2] = A[1]
index 3: No element less than 2 in left of 2, G[3] = -1
index 4: A[3] is nearest element which is less than A[4], G[4] = A[3]
index 4: A[3] is nearest element which is less than A[5], G[5] = A[3]
Explanation 2:

index 1: No element less than 3 in left of 3, G[1] = -1
index 2: No element less than 2 in left of 2, G[2] = -1
index 3: No element less than 1 in left of 1, G[3] = -1
*/

// TC - O(N)
// SC - O(N)
// Idea is to store only the indexes of smaller elements than current element
// If element at index is greater than current element then that index will never be the answer rather current index will be the potential answer for any other element
// So pop this index from stack

const Stack = require("./stack")

function solve(A) {
  let ans = [];
  let st = new Stack();
  for (let i = 0; i < A.length; i++) {
      while(!st.isEmpty() && A[st.peak()] >= A[i]) st.pop()
      if(st.isEmpty()) ans.push(-1)
      else ans.push(A[st.peak()])
      st.push(i)
  }
  return ans
}

const A = [4, 5, 2, 10, 8];
console.log(solve(A));
