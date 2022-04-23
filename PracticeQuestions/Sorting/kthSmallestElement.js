/*
Kth Smallest Element

Problem Description
Find the Bth smallest element in given array A .

NOTE: Users should try to solve it in less than equal to B swaps.



Problem Constraints
1 <= |A| <= 100000

1 <= B <= min(|A|, 500)

1 <= A[i] <= 109



Input Format
The first argument is an integer array A.

The second argument is integer B.



Output Format
Return the Bth smallest element in given array.



Example Input
Input 1:

A = [2, 1, 4, 3, 2]
B = 3
Input 2:

A = [1, 2]
B = 2


Example Output
Output 1:

 2
Output 2:

 2


Example Explanation
Explanation 1:

 3rd element after sorting is 2.
Explanation 2:

 2nd element after sorting is 2.
*/

function solve(A, B){
    let it = 0
    let st = 0
    let end = A.length-1
    let minIndex = st
    while(it<B) {
        while(st<=end){
            if(A[st]<A[minIndex]){
                minIndex = st
            }
            st++
        }
        [A[it], A[minIndex]] = [A[minIndex], A[it]]
        it++
        st = it
        minIndex = st
    }
    return A[it-1]
}

// const A = [2, 1, 4, 3, 2]
// const B = 3

const A = [1, 2]
const B = 2

console.log(solve(A, B))