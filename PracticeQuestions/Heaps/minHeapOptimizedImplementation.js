/*
Inplace Heap implementation
Given an array, create Min heap using bottom up approach
TC - O(N)
SC - O(1)
*/

function heapify(A, N, i) {
  let smallest = i;
  let lc = 2 * i + 1;
  let rc = 2 * i + 2;
  if (lc < N && A[lc] < A[smallest]) smallest = lc;
  if (rc < N && A[rc] < A[smallest]) smallest = rc;
  if (smallest !== i) {
    let temp = A[i];
    A[i] = A[smallest];
    A[smallest] = temp;
    heapify(A, N, smallest);
  }
}

function createMinHeap(A) {
  const N = A.length;
  for (i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(A, N, i);
  }
  return A;
}

let A = [7, 3, 5, 1, 6, 8, 10, 2, 13, 14, 2, 7];

// console.log(createMinHeap(A))

module.exports = createMinHeap;
