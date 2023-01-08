/*
Given an integer N find the number of Prime Numbers from 1 to N
*/
// TC = O(Nlog(log(N))) === O(N)
// The is solved using Sieve of Eratosthenes Theorem
// Sieve's Theorem
function solve(N) {
    let P = Array(N).fill(true)
    P[0] = false 
    P[1] = false
    for(let i=2; i*i<=N; i++) {
        if(!P[i]) continue
        for(let j=i*i; j<=N; j+= i) {
            P[j] = false
        }
    }
    return P.map((p, i) => p ? i : p)
    .filter(p => p)
}

const N = 18
console.log(solve(N))