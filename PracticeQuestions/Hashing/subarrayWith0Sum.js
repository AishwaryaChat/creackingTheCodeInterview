/*
Sub-array with 0 sum

Problem Description
Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

If the given array contains a sub-array with sum zero return 1, else return 0.



Problem Constraints
1 <= |A| <= 100000

-10^9 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return whether the given array contains a subarray with a sum equal to 0.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [-1, 1]


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 No subarray has sum 0.
Explanation 2:

 The array has sum 0.
*/

// TC = O(N)
// SC = O(N)

function solve(A) {
    let hashMap = {}
    let ans = 0
    let prefixSum = [0]
    for(let i=1, j = 0; i<A.length+1 && j<A.length ; i++, j++) {
        prefixSum[i] = prefixSum[i-1] + A[j]
    }
    for(let i=0; i<prefixSum.length; i++) {
        let value = hashMap[prefixSum[i]]
        if(value === undefined) {
            hashMap[prefixSum[i]] = i
        } else {
            let dist = i - value
            ans = Math.max(ans, dist)
        }
        
    }
    return ans !== 0 ? 1 : ans
}

// const A = [1, 2, 3, 4, 5]
// console.log(solve(A))

// const A = [-1, 1]
// console.log(solve(A))

const A = [1, -2, 2, 0, -2, -3, -1, 4, 1, 3]
console.log(solve(A))

// const A = [1, 2, -3]
// console.log(solve(A))
