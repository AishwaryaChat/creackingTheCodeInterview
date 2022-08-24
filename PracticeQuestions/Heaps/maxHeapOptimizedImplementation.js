/*
Inplace Heap implementation
Given an array, create Max heap using bottom up approach
TC - O(N)
SC - O(1)
*/

function heapify(A, N, i) {
  let lc = 2 * i + 1;
  let rc = 2 * i + 2;
  let largest = i;
  if (lc < N && A[lc] > A[largest]) largest = lc;
  if (rc < N && A[rc] > A[largest]) largest = rc;
  if (largest !== i) {
    let temp = A[i];
    A[i] = A[largest];
    A[largest] = temp;
    heapify(A, N, largest);
  }
}

function createMaxHeap(A) {
  const N = A.length;
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(A, N, i);
  }
  return A;
}

let A = [7, 3, 5, 1, 6, 8, 10, 2, 13, 14, 2, 7]
// OP - [14, 13, 10, 7, 6, 8, 5, 2, 1, 3, 2, 7];
// console.log(createMaxHeap(A));

module.exports = createMaxHeap
