// Points on same line

// Problem Description
// Given two arrays of integers A and B describing a pair of (A[i], B[i]) coordinates in a 2D plane. A[i] describe x coordinates of the ith point in the 2D plane, whereas B[i] describes the y-coordinate of the ith point in the 2D plane.

// Find and return the maximum number of points that lie on the same line.

// Problem Constraints
// 1 <= (length of the array A = length of array B) <= 1000

// -10^5 <= A[i], B[i] <= 10^5

// Input Format
// The first argument is an integer array A.
// The second argument is an integer array B.

// Output Format
// Return the maximum number of points which lie on the same line.

// Example Input
// Input 1:

//  A = [-1, 0, 1, 2, 3, 3]
//  B = [1, 0, 1, 2, 3, 4]
// Input 2:

//  A = [3, 1, 4, 5, 7, -9, -8, 6]
//  B = [4, -8, -3, -2, -1, 5, 7, -4]

// Example Output
// Output 1:

//  4
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  The maximum number of point which lie on same line are 4, those points are {0, 0}, {1, 1}, {2, 2}, {3, 3}.
// Explanation 2:

//  Any 2 points lie on a same line.

// TC - O(n^2)
// SC - O(X) - number of different groups on same line
function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

function solve(A, B) {
  let N = A.length;
  if (N < 2) {
    return N;
  }
  let maxPoint = 0;
  let curMax = 0;

  // Creating a map for storing the data.
  let slopeMap = new Map();

  // looping for each point
  for (let i = 0; i < N; i++) {
    const x1 = A[i];
    const y1 = B[i];
    curMax = 0;
    overlapPoints = 0;

    // looping from i + 1 to ignore same pair again
    for (let j = i + 1; j < N; j++) {
      const x2 = A[j];
      const y2 = B[j];
      // If both point are equal then just
      // increase overlapPoint count
      if (x1 === x2 && y1 === y2) {
        overlapPoints++;
      }
      // If x co-ordinate is same, then both
      // point are vertical to each other
      {
        let yDif = y2 - y1;
        let xDif = x2 - x1;
        let g = gcd(xDif, yDif);

        // reducing the difference by their gcd
        yDif = Math.floor(yDif / g);
        xDif = Math.floor(xDif / g);

        // increasing the frequency of current slope.
        let tmp = [yDif, xDif];
        if (slopeMap.has(tmp.join(""))) {
          slopeMap.set(tmp.join(""), slopeMap.get(tmp.join("")) + 1);
        } else {
          slopeMap.set(tmp.join(""), 1);
        }

        curMax = Math.max(curMax, slopeMap.get(tmp.join("")));
      }
    }

    // updating global maximum by current point's maximum
    maxPoint = Math.max(maxPoint, curMax + overlapPoints + 1);
    slopeMap.clear();
  }

  return maxPoint;
}

// const A = [-1, 0, 1, 2, 3, 3];
// const B = [1, 0, 1, 2, 3, 4];

const A = [3, 1, 4, 5, 7, -9, -8, 6];
const B = [4, -8, -3, -2, -1, 5, 7, -4];
console.log(solve(A, B));
