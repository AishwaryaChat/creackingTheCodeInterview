/*
Problem Description
Given a 2D Matrix A of dimensions N*N, we need to return the sum of all possible submatrices.



Problem Constraints
1 <= N <=30

0 <= A[i][j] <= 10



Input Format
Single argument representing a 2-D array A of size N x N.



Output Format
Return an integer denoting the sum of all possible submatrices in the given matrix.



Example Input
A = [ [1, 1]
      [1, 1] ]


Example Output
16
*/

function sumOfAllSubMatrices(A) {
    let sum = 0
    for(let i=0; i<A.length; i++) {
        for(let j=0; j<A[0].length; j++) {
            sum+= (A[i][j]*(i+1)*(j+1)*(A.length-i)*(A[0].length-j))
        }
    }
    return sum
}

const A = [ [1, 1],
[1, 1] ]

console.log(sumOfAllSubMatrices(A))

