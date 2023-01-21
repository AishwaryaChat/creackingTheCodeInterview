/*
Count Rectangles

Problem Description
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in a 2-D Cartesian plane.

Find and return the number of unordered quadruplet (i, j, k, l) such that (A[i], B[i]), (A[j], B[j]), (A[k], B[k]) and (A[l], B[l]) form a rectangle with the rectangle having all the sides parallel to either x-axis or y-axis.



Problem Constraints
1 <= N <= 2000
0 <= A[i], B[i] <= 10^9



Input Format
The first argument given is the integer array A.
The second argument given is the integer array B.



Output Format
Return the number of unordered quadruplets that form a rectangle.



Example Input
Input 1:

 A = [1, 1, 2, 2]
 B = [1, 2, 1, 2]
Input 1:

 A = [1, 1, 2, 2, 3, 3]
 B = [1, 2, 1, 2, 1, 2]


Example Output
Output 1:

 1
Output 2:

 3


Example Explanation
Explanation 1:

 All four given points make a rectangle. So, the answer is 1.
Explanation 2:

 3 quadruplets which make a rectangle are: (1, 1), (2, 1), (2, 2), (1, 2)
                                           (1, 1), (3, 1), (3, 2), (1, 2)
                                           (2, 1), (3, 1), (3, 2), (2, 2)
*/

// TC = O(N*N)
// SC = O(N)
// Check if diagonal is there and add ans+1, at end divide by 2 because we will be considering 2 diagonals of same rectangle
function solve (A, B) {
    let m = new Map();
    for (let i = 0; i < A.length; i++) {
        m[[A[i], B[i]]] = (m[[A[i], B[i]]] || 0) + 1;
    }
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if(A[j]!==A[i] && B[j]!==B[i]) {
                if(m[[A[i], B[j]]] && m[[A[j], B[i]]]) {
                    ans++
                }
            }
        }
    }
    ans = Math.floor(ans / 2);
    return ans;
}

const A = [1, 1, 2, 2]
const B = [1, 2, 1, 2]
console.log(solve(A, B))