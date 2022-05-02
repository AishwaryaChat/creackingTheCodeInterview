/*
Find a peak element

Problem Description
Given an array of integers A, find and return the peak element in it. An array element is peak if it is NOT smaller than its neighbors.

For corner elements, we need to consider only one neighbor. We ensure that answer will be unique.

NOTE: Users are expected to solve this in O(log(N)) time.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the peak element.



Example Input
Input 1:

A = [1, 2, 3, 4, 5]
Input 2:

A = [5, 17, 100, 11]


Example Output
Output 1:

 5
Output 2:

 100


Example Explanation
Explanation 1:

 5 is the peak.
Explanation 2:

 100 is the peak.
*/

function solve(A){
    let L = 0, R = A.length-1
    let mid
    while(L<=R) {
        mid=Math.floor((R+L)/2)
        if((mid-1<0 || A[mid]>=A[mid-1]) && (mid+1 >= A.length || A[mid]>=A[mid+1])) {
            return A[mid]
        }
        if(mid-1<0 || A[mid] > A[mid-1]) L = mid+1
        else R = mid-1
    }
}


// Better solution if multiple duplicates are present
function solve(A){
    let L = 0, R = A.length-1
    let mid
    while(L<R) {
        mid = Math.floor((L+R)/2)
        if(A[mid]>A[mid+1]) R = mid
        else L = mid+1
    }
    return A[L]
}

// const A = [ 2, 3 ]

const A = [ 1, 3, 3, 3, 1000000000, 1000000000 ]

console.log(solve(A))

// console.log(solve())