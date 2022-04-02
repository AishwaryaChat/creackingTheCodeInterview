/*
Maximum AND Pair

Problem Description
Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j].


Problem Constraints
1 <= len(A) <= 10^5
1 <= A[i] <= 10^9


Input Format
The first argument is an integer array A.


Output Format
Return a single integer that is the maximum A[i] & A[j].


Example Input
Input 1:-
A = [53, 39, 88]
Input 2:-
A = [38, 44, 84, 12] 


Example Output
Output 1:-
37
Output 2:-
36


Example Explanation
Explanation 1:-
53 & 39 = 37
39 & 88 = 0
53 & 88 = 16
Maximum among all these pairs is 37
Explanation 2:-
Maximum bitwise and among all pairs is (38, 44) = 36
*/

function maximumAndPair(A) {
    let V = A.map(a => a)
    for(let b=31; b>=0; b--) {
        let keep = []
        let n = V.length
        for(let i=0; i< n; i++) {
            // checcking if the bth bit is set
            if(BigInt(V[i]>>b) & BigInt(1)) {
                keep.push(V[i])
            } 
        }
        if(keep.length >= 2) V = keep
    }
    return V[0] & V[1]
}

// const A = [ 13, 18, 23, 56, 81, 20, 4, 24, 93 ]

const A = [ 98, 12, 44, 24, 1, 34, 70, 74, 67, 18, 54, 14 ]

console.log(maximumAndPair(A))