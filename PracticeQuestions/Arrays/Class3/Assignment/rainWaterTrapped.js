/*
Rain Water Trapped

Problem Description

Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.



Problem Constraints

1 <= |A| <= 100000



Input Format

First and only argument is the vector A



Output Format

Return one integer, the answer to the question



Example Input

Input 1:

A = [0, 1, 0, 2]
Input 2:

A = [1, 2]


Example Output

Output 1:

1
Output 2:

0


Example Explanation

Explanation 1:

1 unit is trapped on top of the 3rd element.
Explanation 2:

No water is trapped.
*/
// TC = O(N)
// SC = O(N)
const trap = (A) => {
  let rMax = [];
  let n = A.length;
  rMax[n - 1] = A[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(rMax[i + 1], A[i]);
  }
  let lMax = A[0];
  let area = 0;
  for (let i = 1; i < n; i++) {
    lMax = Math.max(lMax, A[i]);
    area += Math.min(rMax[i], lMax) - A[i];
  }
  return area;
};

function solveSpaceOptimised(A) {
  let n = A.length;
  let left = 0;
  let right = n - 1;
  let res = 0;
  let maxleft = 0;
  let maxright = 0;
  while (left <= right) {
    // When height of left side is lower, calculate height of water trapped in left bin else calculate for right bin
    if (A[left] <= A[right]) {
      if (A[left] >= maxleft)
        //This index wont store any water as there is no index towards the left whose height is greater than this.
        maxleft = A[left];
      else res += maxleft - A[left];
      left++;
    } else {
      if (A[right] >= maxright)
        //This index wont store any water as there is no index towards the right whose height is greater than this.
        maxright = A[right];
      else res += maxright - A[right];
      right--;
    }
  }
  return res;
}

const A = [6, 3, 2, 4, 1, 3, 5, 3, 4];
// const A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log("Area ", solveSpaceOptimised(A));
