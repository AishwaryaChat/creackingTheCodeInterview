/*
Problem Description
Given a 2D integer matrix A of size N x N, find a B x B submatrix where B<= N and B>= 1, such that the sum of all the elements in the submatrix is maximum.



Problem Constraints
1 <= N <= 103.

1 <= B <= N

-102 <= A[i][j] <= 102.



Input Format
First arguement is an 2D integer matrix A.

Second argument is an integer B.



Output Format
Return a single integer denoting the maximum sum of submatrix of size B x B.



Example Input
Input 1:

 A = [
        [1, 1, 1, 1, 1]
        [2, 2, 2, 2, 2]
        [3, 8, 6, 7, 3]
        [4, 4, 4, 4, 4]
        [5, 5, 5, 5, 5]
     ]
 B = 3
Input 2:

 A = [
        [2, 2]
        [2, 2]
    ]
 B = 2


Example Output
Output 1:

 48
Output 2:

 8


Example Explanation
Explanation 1:

    Maximum sum 3 x 3 matrix is
    8 6 7
    4 4 4
    5 5 5
    Sum = 48
Explanation 2:

 Maximum sum 2 x 2 matrix is
  2 2
  2 2
  Sum = 8
*/

function findSolution(A, B) {
    function prefixSum(A) {
        for(let i=0; i<A.length; i++) {
            for(let j=0; j<A.length; j++) {
                if(i===0 && j===0) continue
                if(i === 0) {
                    A[i][j] += A[i][j-1]
                } else if (j===0) {
                    A[i][j] += A[i-1][j]
                } else {
                    A[i][j] += A[i-1][j] + A[i][j-1] - A[i-1][j-1]
                }
            }
        }
    }

    function getSubArraySum(A, i, j, k, l) {
        if (i == 0 && j == 0 && k == 0 && l == 0) return A[i][j];
        else if (i == 0) {
          if (j == 0) {
            return A[k][l];
          } else {
            return A[k][l] - A[k][j - 1];
          }
        } else if (j === 0) {
          return A[k][l] - A[i - 1][l]
        }
        return A[k][l] - A[k][j - 1] - A[i - 1][l] + A[i - 1][j - 1]
      }

    prefixSum(A)
    let maxSum = Number.MIN_SAFE_INTEGER
    for(let i=0; i<A.length-B+1; i++) {
        let start = 0
        let end = start+B-1
        while(end<A.length && start <= end) {
            maxSum = Math.max(maxSum, getSubArraySum(A, i, start, i+B-1, end))
            start++
            end++
        }
    }
    return maxSum
}

const A = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 8, 6, 7, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5],
 ]
B = 3

console.log(findSolution(A, B))