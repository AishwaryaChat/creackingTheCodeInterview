/*
 Subarray with given sum

Problem Description
Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

If the answer does not exist return an array with a single element "-1".

First sub-array means the sub-array for which starting index in minimum.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 109
1 <= B <= 109



Input Format
The first argument given is the integer array A.

The second argument given is integer B.



Output Format
Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
 B = 5
Input 2:

 A = [5, 10, 20, 100, 105]
 B = 110


Example Output
Output 1:

 [2, 3]
Output 2:

 -1


Example Explanation
Explanation 1:

 [2, 3] sums up to 5.
Explanation 2:

 No subarray sums up to required number.
*/
// TC = O(N)
// Concept: As sson as sum increased the target subtract A[i] and increase iponter
// If sum is less than target keep incrementing j pointer

function solve(A, B){
    let i=0, j=0
    let sum = A[j]
    while(j<A.length) {
        if(sum === B) break
        else if(sum < B) {
            j++
            sum += A[j]
        }
        else {
            sum-=A[i]
            i++
        }
    }
    if(sum!==B) return -1
    else {
        let ans = []
        for(let k=i; k<=j; k++){
            ans.push(A[k])
        }
        return ans
    }
}

const A = [1, 2, 3, 4, 5]
const B = 5

// const A = [5, 10, 20, 100, 105]
// const B = 110

// const A = [ 42, 9, 38, 36, 48, 33, 36, 50, 38, 8, 13, 37, 33, 38, 17, 25, 50, 50, 41,]
// const B = 100

// const A = [ 15, 2, 5, 6, 9 ]
// const B = 7
console.log(solve(A, B))