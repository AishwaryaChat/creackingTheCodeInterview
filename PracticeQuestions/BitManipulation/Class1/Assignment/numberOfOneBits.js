// Number of 1 Bits
// Problem Description
// Write a function that takes an integer and returns the number of 1 bits it has.


// Problem Constraints
// 1 <= A <= 109


// Input Format
// First and only argument contains integer A


// Output Format
// Return an integer as the answer


// Example Input
// Input 1:
// 11
// Input 2:
// 6


// Example Output
// Output 1:
// 3
// Output 2:
// 2


// Example Explanation
// Explaination 1:
// 11 is represented as 1011 in binary.
// Explaination 2:
// 6 is represented as 110 in binary.

function solve(A){
    let ans = 0
    while(A>0) {
        ans++
        A = A & (A-1)
    }
    return ans
}

// const A = 11
// Output: 3

// const A = 6
// Output: 2



console.log(solve(solve(A)))