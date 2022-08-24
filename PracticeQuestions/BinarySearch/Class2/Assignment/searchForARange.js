/*
Search for a Range

Problem Description
Given a sorted array of integers A(0 based index) of size N, find the starting and the ending position of a given integer B in array A.

Your algorithm's runtime complexity must be in the order of O(log n).

Return an array of size 2, such that the first element = starting position of B in A and the second element = ending position of B in A, if B is not found in A return [-1, -1].



Problem Constraints
1 <= N <= 106

1 <= A[i], B <= 109



Input Format
The first argument given is the integer array A.
The second argument given is the integer B.



Output Format
Return an array of size 2, such that the first element = starting position of B in A and the second element = the ending position of B in A if B is not found in A return [-1, -1].



Example Input
Input 1:

 A = [5, 7, 7, 8, 8, 10]
 B = 8
Input 2:

 A = [5, 17, 100, 111]
 B = 3


Example Output
Output 1:

 [3, 4]
Output 2:

 [-1, -1]


Example Explanation
Explanation 1:

 The first occurence of 8 in A is at index 3.
 The second occurence of 8 in A is at index 4.
 ans = [3, 4]
Explanation 2:

 There is no occurence of 3 in the array.
*/

// TC = O(log N)
// TC = S(1)

function solve(A, B) {
    let L = 0
    let R = A.length-1
    let start=-1, end=-1
    while(L<=R) {
        let mid = Math.floor((R+L)/2)
        
        if(A[mid] === B && (mid-1<0 || A[mid-1]!==B) ) {
            start = mid
            break
        }
        if(A[mid]>=B) R=mid-1
        else L = mid+1

    }
    L = 0
    R = A.length-1
     while(L<=R) {
        let mid = Math.floor((R+L)/2)
        if(A[mid] === B && (mid+1>A.length || A[mid+1]!==B) ) {
            end = mid
            break
        }
        if(A[mid]>B) R=mid-1
        else L = mid+1

    }
    return [start, end]
}

const A = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
const B = 10

console.log(solve(A, B))