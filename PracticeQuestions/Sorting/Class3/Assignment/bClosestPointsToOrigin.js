/*
B Closest Points to Origin

Problem Description
We have a list A of points (x, y) on the plane. Find the B closest points to the origin (0, 0).

Here, the distance between two points on a plane is the Euclidean distance.

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)

NOTE: Euclidean distance between two points P1(x1, y1) and P2(x2, y2) is sqrt( (x1-x2)2 + (y1-y2)2 ).



Problem Constraints
1 <= B <= length of the list A <= 105
-10^5 <= A[i][0] <= 10^5
-10^5 <= A[i][1] <= 10^5



Input Format
The argument given is list A and an integer B.



Output Format
Return the B closest points to the origin (0, 0) in any order.



Example Input
Input 1:

 A = [ 
       [1, 3],
       [-2, 2] 
     ]
 B = 1
Input 2:

 A = [
       [1, -1],
       [2, -1]
     ] 
 B = 1


Example Output
Output 1:

 [ [-2, 2] ]
Output 2:

 [ [1, -1] ]


Example Explanation
Explanation 1:

 The Euclidean distance will be sqrt(10) for point [1,3] and sqrt(8) for point [-2,2].
 So one closest point will be [-2,2].
Explanation 2:

 The Euclidean distance will be sqrt(2) for point [1,-1] and sqrt(5) for point [2,-1].
 So one closest point will be [1,-1].
*/

// TC - (NlogN)

function solve(A, B) {
  A.sort((a, b) => {
    const x1 = a[0];
    const y1 = a[1];
    const x2 = b[0];
    const y2 = b[1];
    let distA = x1 * x1 + y1 * y1;
    let distB = x2 * x2 + y2 * y2;
    if (distA > distB) return 1;
    else return -1;
  });
  return A.slice(0, B);
}

const A = [
  [1, 3],
  [-2, 2],
  [1, 1],
];
const B = 2;

console.log(solve(A, B));
