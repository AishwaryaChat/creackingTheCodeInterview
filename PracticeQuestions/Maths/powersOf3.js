/*
Powers of 3

Problem Description
Given a positive integer A. Return an array of minimum length whose elements represent the powers of 3, and the sum of all the elements is equal to A.



Problem Constraints
1 <= A <= 109



Input Format
Single argument is an integer A.



Output Format
Return an array of minimum length of powers of 3 whose elements sums to A.



Example Input
Input 1:

 13
Input 2:

 3


Example Output
Output 1:

 [1, 3, 9]
Output 2:

 [3]


Example Explanation
Explanation 1:

 30 = 1, 31 = 3, 32 = 9.
 Also, 1 + 3 + 9 = 13. Here A = 13 which can be represented as the sum of 1, 3 and 9.
*/

function solve(A){
    let result = []
    while(A !== 0) {
        let pow = Math.floor(Math.log(A)/Math.log(3))
        let res = Math.pow(3, pow)
        result.push(res)
        A = A - res
    }
    return result.reverse()
}

const A = 411

console.log(solve(A))