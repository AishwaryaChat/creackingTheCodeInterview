/*
Sort stack using another stack

Problem Description
Given a stack of integers A, sort it using another stack.

Return the array of integers after sorting the stack using another stack.



Problem Constraints
1 <= |A| <= 5000

0 <= A[i] <= 10^9



Input Format
The only argument is a stack given as an integer array A.



Output Format
Return the array of integers after sorting the stack using another stack.



Example Input
Input 1:

 A = [5, 4, 3, 2, 1]
Input 2:

 A = [5, 17, 100, 11]


Example Output
Output 1:

 [1, 2, 3, 4, 5]
Output 2:

 [5, 11, 17, 100]


Example Explanation
Explanation 1:

 Just sort the given numbers.
Explanation 2:

 Just sort the given numbers.
*/

// Solving using insertion sort, can also be solved using merge sort
// TC = O(N^2)
// SC = O(N)

function solve(A) {
  let st = [];
  let top1 = A.length - 1;
  let top2 = -1;
  while (A.length !== 0) {
    let ele = A.pop();
    top1 -= 1;
    if (top2 === -1) {
      st.push(ele);
      top2 += 1;
    } else {
      if (st[top2] > ele) {
        while (st[top2] > ele && top2 > -1) {
          let stTop = st.pop();
          top2 -= 1;
          A.push(stTop);
          top1 += 1;
        }
        st.push(ele);
        top2 += 1;
      } else {
        st.push(ele);
        top2 += 1;
      }
    }
  }
  return st;
}

const A = [5, 4, 3, 2, 1]
// const A = [5, 17, 100, 11];
console.log(solve(A));
