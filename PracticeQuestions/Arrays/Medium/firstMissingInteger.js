/*
 First Missing Integer

Problem Description
Given an unsorted integer array, A of size N. Find the first missing positive integer.

Note: Your algorithm should run in O(n) time and use constant space.



Problem Constraints
1 <= N <= 1000000

-109 <= A[i] <= 109



Input Format
First argument is an integer array A.



Output Format
Return an integer denoting the first missing positive integer.



Example Input
Input 1:

[1, 2, 0]
Input 2:

[3, 4, -1, 1]
Input 3:

[-8, -7, -6]


Example Output
Output 1:

3
Output 2:

2
Output 3:

1


Example Explanation
Explanation 1:

A = [1, 2, 0]
First positive integer missing from the array is 3.
*/

function findFirstMissingPositiveInteger(A) {
    let i=0
    let n = A.length
    while(i<n) {
        if(A[i]>0 && A[i]<= n) {
            if(A[i]!==i+1 && A[A[i]-1] !== A[i]) {
                [A[A[i]-1], A[i] ] = [A[i], A[A[i]-1]]
            } else {
                i++
            }
        } else {
            i++
        }
    }

    for(let i=0; i<n; i++) {
        if(A[i] !== i+1) {
            return i+1
        }
    }
    return A[n-1]+1
}

const A = [3, 4, -1, 1]
console.log(findFirstMissingPositiveInteger(A))

const B = [-8, -7, -6]
console.log(findFirstMissingPositiveInteger(B))

const C = [1, 2, 0]
console.log(findFirstMissingPositiveInteger(C))

const D = [ 2, 3, 1, 2 ]
console.log(findFirstMissingPositiveInteger(D))

const E = [1]
console.log(findFirstMissingPositiveInteger(E))

const F = [ 1, 2, 3, 4, 5, 6 ]
console.log(findFirstMissingPositiveInteger(F))

const G = [ 2, 3, 1, 2, 2 ]
console.log(findFirstMissingPositiveInteger(G))


