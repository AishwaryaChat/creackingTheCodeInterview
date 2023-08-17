/*
Factorial Array

Problem Description
Groot has an array A of size N. Boring, right? Groot thought so too, so he decided to construct another array B of the same size and defined elements of B as:

B[i] = factorial of A[i] for every i such that 1<= i <= N.

factorial of a number X denotes (1 x 2 x 3 x 4......(X-1) x (X)).
Now Groot is interested in the total number of non-empty subsequences of array B such that every element in the subsequence has the same non-empty set of prime factors.

Since the number can be huge, return it modulo 10^9 + 7.

NOTE: A set is a data structure having only distinct elements. E.g : the set of prime factors of Y=12 will be {2,3} and not {2,2,3}



Problem Constraints
1 <= N <= 10^5
1 <= A[i] <= 10^6
Your code will run against a maximum of 5 test cases.



Input Format
Only argument is an integer array A of size N.



Output Format
Return an integer deonting the total number of non-empty subsequences of array B such that every element in the subsequence has the same set of prime factors modulo 109+7.



Example Input
Input 1:

 A = [2, 3, 2, 3]
Input 2:

 A = [2, 3, 4]


Example Output
Output 1:

 6
Output 2:

 4


Example Explanation
Explanation 1:

 Array B will be : [2, 6, 2, 6]
 The total possible subsequences are 6 : [2], [2], [2, 2], [6], [6], [6, 6].
Input 2:

 Array B will be : [2, 6, 24]
 The total possible subsequences are 4 : [2], [6], [24], [6, 24].
*/

function findPrimeFactors(N) {
    let P = []
    for(let i=0; i<=N+1; i++) {
        P.push([])
    }
    for(let i=2; i<=N; i++) {
        if(P[i].length <1) {
            for(let j=i; j<=N; j+=i){
                P[j].push(i)
            }
        }
    }
    return P
}

let P = {}
function findAllPrimeNumbersTillN(N) {
    if(P[N] !== undefined) {
        const ans = []
        for(let i=2; i<=N; i++) {
            if(P[i]) ans.push(i)
        }
        return ans
    }
    let i = Object.keys(P).length > 0 ? Object.keys(P).length + 1 : 2
    for(; i<=N; i++) {
        P[i] = true
    }
    for(let i=2; i*i<=N; i++) {
        if(!P[i]) continue
        for(j=i*i; j<=N; j+=i){
            P[j] = false
        }
    }
    const ans = []
        for(let i=2; i<=N; i++) {
            if(P[i]) ans.push(i)
        }
        return ans
}
function solve(A) {
    let map = {}
    for(let i=0; i<A.length; i++) {
        const Q = findAllPrimeNumbersTillN(A[i])
        map[Q] = (map[Q] || 0) + 1
    }
    // console.log("map", map)
    let ans = 0
    Object.keys(map).forEach((key) => {
        console.log("map[key]", map[key], "key", key)
            let pow = Math.pow(2, map[key]) - 1
        ans+=pow
    })
    return ans
}
// const A = [2,3,2,3];
// const A = [2,3,4];
// const A = [ 2, 2, 2, 2, 2 ]
// const A = [ 2, 3, 4, 5, 6 ]
const A = [ 251, 923, 561, 230, 100, 399, 542, 198, 548, 892, 721, 781, 174, 809, 9, 232, 165, 861, 36, 837, 377, 313, 475, 269, 210, 530, 940, 570, 24, 434, 764, 275, 709, 325, 505, 161, 724, 47, 359, 625, 291, 81, 406, 465, 242, 767, 698, 408, 629, 86, 597, 358, 399, 72, 979, 962, 603, 919, 884, 627, 353, 1, 254, 414, 678, 111, 575, 755, 511, 287, 380, 802, 720, 138, 620, 314, 905, 670, 74, 886, 756, 671, 244, 508, 744, 224, 822, 347, 495, 706, 326, 201, 707, 580, 615, 386, 43, 543, 141, 554 ]
console.log(solve(A));
// console.log(findAllPrimeNumbersTillN(13))
