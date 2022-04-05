/*
Prime Modulo Inverse

Problem Description

Given two integers A and B. Find the value of A-1 mod B where B is a prime number and gcd(A, B) = 1.

A-1 mod B is also known as modular multiplicative inverse of A under modulo B.



Problem Constraints

1 <= A <= 109
1<= B <= 109
B is a prime number



Input Format

First argument is an integer A.
Second argument is an integer B.



Output Format

Return an integer denoting the modulor inverse



Example Input

Input 1:

 A = 3
 B = 5
Input 2:

 A = 6
 B = 23


Example Output

Output 1:

 2
Output 2:

 4


Example Explanation

Explanation 1:

 Let's say A-1 mod B = X, then (A * X) % B = 1.
 3 * 2 = 6, 6 % 5 = 1.
Explanation 2:

 Similarly, (6 * 4) % 23 = 1.
*/

function mult(a, b, M) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
    return val % M;
    return Number((BigInt(a) * BigInt(b)) % BigInt(M));
}

function solve(A, M){
    
    let c = M-2
    A = A % M
    let ans = 1
    while(c>0) {
        if(c%2 === 1) ans = mult(ans, A, M)
        A = mult(A, A, M)
        c = Math.floor(c/2)
    }
    return ans
}

function solve(A, B, M) {
    let ans = 1
    A = A % M
    while(B>0) {
            if(B%2 === 1) {
            ans = (ans * A) % M
        }
        A = A * A
        B = Math.floor(B/2)
    }
    return ans
}

const A = 5
const B = 8
const M = 3

console.log(solve(A, B, M))