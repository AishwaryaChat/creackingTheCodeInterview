/*
Stairs

Problem Description
You are climbing a staircase and it takes A steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Return the number of distinct ways modulo 1000000007



Problem Constraints
1 <= A <= 10^5



Input Format
The first and the only argument contains an integer A, the number of steps.



Output Format
Return an integer, representing the number of ways to reach the top.



Example Input
Input 1:

 A = 2
Input 2:

 A = 3


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Distinct ways to reach top: [1, 1], [2].
Explanation 2:

 Distinct ways to reach top: [1 1 1], [1 2], [2 1].

*/

// The idea here is we are seeing the solution for last step
// So there can be only 2 ways in which we can come to last step
// Either we can come from N-1th stair
// Or we can come from N-2nd stair
// And inreturn N-1th and N-2nd also have some ways to come
// So answer for Nth stair will be, Number of ways for N-1th star +
// Number of ways for N-2nd stair
// Which is nothing but fibonacci series, the only difference is
// in fibonacci f(0) = 0, but here f(0) = 1, since there is only 1 way 
// to move from 0 stair i.e not moving at all
// Also this question can be solved using DP, since we will be
// using the same answers multiple times, so we can save them in the array
// TC = O(N) - because we are saving some answers in array
// SC = O(N)

function fib(N, F) {
    if (N < 2) return 1
    if (F[N] > 0) return F[N]
    F[N] = fib(N - 1, F) + fib(N - 2, F)
    return F[N]
}

function solve(N) {
    let F = new Array(N+1).fill(0)
    return fib(N, F)
}

const A = 4
console.log(solve(A))

// iterative solution
function solveIterative(N) {
    let DP = new Array(N+1).fill(1)
    let MOD = 1000000007
    for(let i=2; i<=N; i++) {
        DP[i] = (DP[i-1] + DP[i-2])%MOD
    }
    return DP[N]
}

// const A = 4
// console.log(solveIterative(A))