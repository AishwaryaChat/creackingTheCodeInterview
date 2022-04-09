/*
Delete one

Problem Description

Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

Find the maximum value of GCD.



Problem Constraints

2 <= N <= 105
1 <= A[i] <= 109



Input Format

First argument is an integer array A.



Output Format

Return an integer denoting the maximum value of GCD.



Example Input

Input 1:

 A = [12, 15, 18]
Input 2:

 A = [5, 15, 30]


Example Output

Output 1:

 6
Output 2:

 15


Example Explanation

Explanation 1:

 
 If you delete 12, gcd will be 3.
 If you delete 15, gcd will be 6.
 If you delete 18, gcd will 3.
 Maximum vallue of gcd is 6.
Explanation 2:

 If you delete 5, gcd will be 15.
 If you delete 15, gcd will be 5.
 If you delete 30, gcd will be 5.
*/

function getGCD(a, b) {
    if(a==0 || b===0) return Math.max(a, b)
    if(a === b) return b
    if(a<b) return getGCD(a, b%a)
    else return getGCD(b, a%b)
}

function getPrefixGCD(A) {
    let prefixGCD = [A[0]]
    for(let i=1; i<A.length; i++) {
        let gcd = getGCD(prefixGCD[i-1], A[i])
        prefixGCD.push(gcd)
    }
    return prefixGCD
}

function getSuffixGCD(A) {
    let suffixGCD = []
    suffixGCD[A.length-1] = A[A.length-1]
    for(let i=A.length-2; i>=0; i--) {
        suffixGCD[i] = getGCD(suffixGCD[i+1], A[i])
    }
    return suffixGCD
}

function deleteOne(A) {
    let prefixGCD = getPrefixGCD(A)
    let suffixGCD = getSuffixGCD(A)
        let maxGCD = suffixGCD[1]
    for(let i=1; i<A.length; i++) {
        let gcd
        if(i === 0) gcd = suffixGCD[1]
        else if(i === A.length -1) gcd = prefixGCD[i]
        else gcd = getGCD(prefixGCD[i-1], suffixGCD[i+1])
        maxGCD = Math.max(maxGCD, gcd)
    }
    return maxGCD
}

// const A = [9, 18, 14, 12, 30]

// const A = [12, 15, 18]

// const A = [5, 15, 30]

const A = [ 12, 15, 24, 36 ]

console.log(deleteOne(A))