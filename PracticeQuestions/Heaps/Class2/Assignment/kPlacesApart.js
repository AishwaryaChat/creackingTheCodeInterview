/*
K Places Apart

Problem Description
N people having different priorities are standing in a queue.

The queue follows the property that each person is standing at most B places away from its position in the sorted queue.

Your task is to sort the queue in the increasing order of priorities.

NOTE:

No two persons can have the same priority.
Use the property of the queue to sort the queue with complexity O(NlogB).


Problem Constraints
1 <= N <= 100000
0 <= B <= N



Input Format
The first argument is an integer array A representing the priorities and initial order of N persons.
The second argument is an integer B.



Output Format
Return an integer array representing the sorted queue.



Example Input
Input 1:

 A = [1, 40, 2, 3]
 B = 2
Input 2:

 A = [2, 1, 17, 10, 21, 95]
 B = 1


Example Output
Output 1:

 [1, 2, 3, 40]
Output 2:

 [1, 2, 10, 17, 21, 95]


Example Explanation
Explanation 1:

 Given array A = [1, 40, 2, 3]
 After sorting, A = [1, 2, 3, 40].
 We can see that difference between initial position of elements amd the final position <= 2.
Explanation 2:

 After sorting, the array becomes [1, 2, 10, 17, 21, 95].


*/

const { Heap } = require("../../maxheapImplementation");
const { Heap: MinHeap } = require("../../minheapImplementation");

// the below function has TC - O(NlogN)
// This is heap sort, not using B, so increasing complexity

function solve(A, B) {
    const heap = new Heap()
    for(let i=0; i<A.length; i++) {
        heap.push(A[i])
    }
    for(let i=A.length-1; i>=0; i--) {
        const top = heap.pop()
        A[i] = top
    }
    return A
}

// the below function has TC - O(NlogB)
// SC - O(B) (B for minHeap)

function solveNLogB(A, B) {
    const heap = new MinHeap()
    for(let i=0; i<=B; i++) {
        heap.push(A[i])
    }
    for(let j=0; j<A.length; j++) {
        let ele = heap.pop()
        A[j] = ele
        if(A[j+B+1]) heap.push(A[j+B+1])
        
    }
    return A
}

const A = [2, 1, 17, 10, 21, 95];
const B = 1;

console.log(solve(A, B));
console.log(solveNLogB(A, B));
