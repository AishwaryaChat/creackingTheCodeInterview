/*
Divide Integers

Problem Description
Divide two integers without using multiplication, division and mod operator.

Return the floor of the result of the division.

Also, consider if there can be overflow cases i.e output is greater than INT_MAX, return INT_MAX.

NOTE: INT_MAX = 2^31 - 1



Problem Constraints
-231 <= A, B <= 231-1

B != 0



Input Format
The first argument is an integer A denoting the dividend.
The second argument is an integer B denoting the divisor.



Output Format
Return an integer denoting the floor value of the division.



Example Input
Input 1:

 A = 5
 B = 2
Input 2:

 A = 7
 B = 1


Example Output
Output 1:

 2
Output 2:

 7


Example Explanation
Explanation 1:

 floor(5/2) = 2
*/

function divideIntegers(A, B) {
    let INT_MAX = Math.pow(2, 31)-1
    let sign = 1
    if(A<0) sign = -sign
    if(B<0) sign = -sign
    A = Math.abs(A)
    B = Math.abs(B)
    let result = 0
    console.log("A", A)
  
    for(let i=31; i>=0; i--) {
        console.log("BigInt(B<<i)", BigInt(B<<i))
        if(BigInt(B<<i) <= BigInt(A)) {
            A -= (B<<i)
            result += (1<<i)
        }
    }
    console.log("result", result)
    if(sign<0) result = -result
    if(result>INT_MAX) return INT_MAX
    return result
}

const A = 5
const B = 2

// const A = 2147483647
// const B = 1

// const A = -2147483648
// const B = -1

console.log(divideIntegers(A,B))