/*
Min XOR value

Problem Description
Given an integer array A of N integers, find the pair of integers in the array which have minimum XOR value. Report the minimum XOR value.



Problem Constraints
2 <= length of the array <= 100000
0 <= A[i] <= 109



Input Format
First and only argument of input contains an integer array A.



Output Format
Return a single integer denoting minimum xor value.



Example Input
Input 1:

 A = [0, 2, 5, 7]
Input 2:

 A = [0, 4, 7, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 0 xor 2 = 2
*/

// Since for XOR
// A bit is set when bits differ
// And bit is unset when bits are same
// if we observe, the adjascent numbers have only 1 different bit in most of the cases
// so if we try to find out the xor for all adjascent numbers and calculate min XOR for them then itself we will get the desired answer, we are not required to check XOR of all the pairs in the array

function solve(A) {
    A.sort((a, b) => a-b)
    let minXor = Number.MAX_SAFE_INTEGER
    for(let i=0; i<A.length-1; i++) {
        Math.min(minXor, (A[i] ^ A[i+1]))
    }
    return minXor
}