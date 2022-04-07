/*
Very Large Power

Problem Description
Given two Integers A, B. You have to calculate (A ^ (B!)) % (1e9 + 7).

"^" means power,

"%" means "mod", and

"!" means factorial.



Problem Constraints
1 <= A, B <= 5e5



Input Format
First argument is the integer A

Second argument is the integer B



Output Format
Return one integer, the answer to the problem



Example Input
Input 1:

A = 1
B = 1
Input 2:

A = 2
B = 2


Example Output
Output 1:

1
Output 2:

4


Example Explanation
Explanation 1:

 1! = 1. Hence 1^1 = 1.
Explanation 2:

 2! = 2. Hence 2^2 = 4.
*/

// Formula to find out very large powers of a
// (a ^ b) % p === ((a % p) ^ (B % (p-1))) % p
const mod = Math.pow(10, 9) + 7

function fact(B) {
    if(B === 1) return 1
    return ((B  % (mod-1)) * fact((B % (mod-1))-1)) % (mod-1)
}

function mult(A,B) {
    let val = A * B
    if(val<=Number.MAX_SAFE_INTEGER && val>= Number.MIN_SAFE_INTEGER)
        return val
    return Number(BigInt(A) * BigInt(B) % BigInt(mod))
}

function veryLargePower(A, B) {
    B = fact(B)
    A = A%mod
    B = B % (mod-1)
    let ans = 1
    while(B > 0) {
        if(B%2 === 1) ans = mult(ans * A) % mod
        A = mult(A, A) % mod
        B = (Math.floor(B/2)) % mod
    }
    return ans
}