/*
Pair Sum divisible by M

Problem Description

Given an array of integers A and an integer B, find and return the number of pairs in A whose sum is divisible by B.

Since the answer may be large, return the answer modulo (109 + 7).



Problem Constraints

1 <= length of the array <= 100000
1 <= A[i] <= 10^9
1 <= B <= 10^6



Input Format

The first argument given is the integer array A.
The second argument given is the integer B.



Output Format

Return the total number of pairs for which the sum is divisible by B modulo (10^9 + 7).



Example Input

Input 1:

 A = [1, 2, 3, 4, 5]
 B = 2
Input 2:

 A = [5, 17, 100, 11]
 B = 28


Example Output

Output 1:

 4
Output 2:

 1


Example Explanation

Explanation 1:

 All pairs which are divisible by 2 are (1,3), (1,5), (2,4), (3,5). 
 So total 4 pairs.
*/

function solve(A, M) {
    let mod = 1000000007

    let fq = {}
    for(let i=0 ;i<A.length; i++) {
        let modAns = A[i] % M
        A[i] = modAns
        fq[modAns] = fq[modAns] ? fq[modAns] + 1 : 1
    }

    let ans = fq[0] ? (fq[0]* (fq[0]-1)) / 2 : 0

    let mid = M % 2 === 0 ? M/2 : (Math.floor(M/2))+1

    if(M % 2 === 0) {
        ans+= fq[mid] ?  (fq[mid] * (fq[mid]-1))/ 2 : 0
    }

    for(let i=1; i<mid; i++) {
        let aFq = fq[i] 
        let bFq = fq[M-i]
        if(aFq && bFq) {
            ans += (aFq * bFq)
        }
    }
    return ans % mod
}

   

// const A = [5, 17, 100, 11]
// const B = 28

// const A = [1, 2, 3, 4, 5]
// const B = 2

// const A = [ 93, 9, 46, 79, 56, 24, 10, 26, 9, 93, 31, 93, 75, 7, 4, 80, 19, 67, 49, 84, 62, 100, 17, 40, 35, 84, 14, 81, 99, 31, 100, 66, 70, 2, 11, 84, 60, 89, 13, 57, 47, 60, 59, 60, 42, 67, 89, 29, 85, 83, 42, 47, 66, 80, 88, 85, 83, 82, 16, 23, 21, 55, 26, 2, 21, 92, 85, 26, 46, 3, 7, 95, 50, 22, 84, 52, 57, 44, 4, 23, 25, 55, 41, 49 ]
// const B = 37

const A = [1]
const B = 1

console.log(solve(A, B))