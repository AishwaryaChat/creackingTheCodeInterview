// Minimum largest element

// Problem Description
// Given an array A of N numbers, you have to perform B operations. In each operation, you have to pick any one of the N elements and add the original value(value stored at the index before we did any operations) to its current value. You can choose any of the N elements in each operation.

// Perform B operations in such a way that the largest element of the modified array(after B operations) is minimized.
// Find the minimum possible largest element after B operations.

// Problem Constraints
// 1 <= N <= 106
// 0 <= B <= 105
// -105 <= A[i] <= 105

// Input Format
// The first argument is an integer array A.
// The second argument is an integer B.

// Output Format
// Return an integer denoting the minimum possible largest element after B operations.

// Example Input
// Input 1:

//  A = [1, 2, 3, 4]
//  B = 3
// Input 2:

//  A = [5, 1, 4, 2]
//  B = 5

// Example Output
// Output 1:

//  4
// Output 2:

//  5

// Example Explanation
// Explanation 1:

//  Apply operation on element at index 0, the array would change to [2, 2, 3, 4]
//  Apply operation on element at index 0, the array would change to [3, 2, 3, 4]
//  Apply operation on element at index 0, the array would change to [4, 2, 3, 4]
//  Minimum possible largest element after 3 operations is 4.
// Explanation 2:

//  Apply operation on element at index 1, the array would change to [5, 2, 4, 2]
//  Apply operation on element at index 1, the array would change to [5, 3, 4, 2]
//  Apply operation on element at index 1, the array would change to [5, 4, 4, 2]
//  Apply operation on element at index 1, the array would change to [5, 5, 4, 2]
//  Apply operation on element at index 3, the array would change to [5, 5, 4, 4]
//  Minimum possible largest element after 5 operations is 5.

const Heap = require("../../heapGeneralisedImplementation");

// TC - O(NlogN)
// SC - O(N)
function solve(A, B) {
  const minHeap = new Heap({ comparator: (a, b) => a[0] < b[0] });
  const currState = A.map((a) => a);
  for (let i = 0; i < A.length; i++) {
    minHeap.push([A[i]+A[i], i]);
  }
    for (let i = 0; i <B; i++) {
    const [min, minI] = minHeap.pop();
    const newEle = min + A[minI];
    currState[minI] = currState[minI] + A[minI];
    minHeap.push([newEle, minI]);
  }
  return Math.max(...currState);
}

// const A = [1, 2, 3, 4];
// const B = 3;

// const A = [5, 1, 4, 2];
// const B = 5;

// const A = [5, 7, 8];
// const B = 9;

const A = [8, 6, 4, 2];
const B = 8;

console.log(solve(A, B));
