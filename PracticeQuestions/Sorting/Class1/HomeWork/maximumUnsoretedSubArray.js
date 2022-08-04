/*
Maximum Unsorted Subarray

Problem Description
Given an array A of non-negative integers of size N. Find the minimum sub-array Al, Al+1 ,..., Ar such that if we sort(in ascending order) that sub-array, then the whole array should get sorted. If A is already sorted, output -1.



Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000000



Input Format
First and only argument is an array of non-negative integers of size N.



Output Format
Return an array of length two where the first element denotes the starting index(0-based) and the second element denotes the ending index(0-based) of the sub-array. If the array is already sorted, return an array containing only one element i.e. -1.



Example Input
Input 1:

A = [1, 3, 2, 4, 5]
Input 2:

A = [1, 2, 3, 4, 5]


Example Output
Output 1:

[1, 2]
Output 2:

[-1]


Example Explanation
Explanation 1:

If we sort the sub-array A1, A2, then the whole array A gets sorted.
Explanation 2:

A is already sorted.
*/

// Complexity: O(n)

function solve(A){
    let i = 0;
    let j = A.length-1
    let res = []
    while(i<A.length && A[i]<=A[i+1]) {
        i++
    }
    if(i===A.length-1) return [-1]
    while(j>0 && A[j] >= A[j-1]) {
        j--
    }
    let min = A[i+1]
    let max = A[i+1]
    for(let k=i; k<=j; k++) {
        min = Math.min(min, A[k])
        max = Math.max(max, A[k])
    }
    let l = 0, r = A.length-1
    while(l<=i && A[l]<=min) l++
    while(r>=j && A[r] >= max) r--
    res.push(l)
    res.push(r)
    return res
}

// const A = [1, 3, 2, 1, , 6, 4, 5]
// const A = [ 1, 1]
// const A = [ 4, 15, 4, 4, 15, 18, 20 ]
const A = [ 1, 1 ]
// const A = [ 13, 13, 15 ]
// const A = [ 1, 2, 3, 5, 6, 13, 15, 16, 17, 13, 13, 15, 17, 17, 17, 17, 17, 19, 19 ]
console.log(solve(A))