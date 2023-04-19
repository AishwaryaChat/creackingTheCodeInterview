// Sort an Array
// Medium
// 4.8K
// 683
// company
// Microsoft
// company
// Apple
// company
// Amazon
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:

// 1 <= nums.length <= 5 * 10^4
// -5 * 10^4 <= nums[i] <= 5 * 10^4

// TC - O(NlogN)
// SC - O(logN)
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
  return;
}

class Heap {
  constructor(arr) {
    this._heap = arr;
    this.createHeap();
  }

  heapify(N, i) {
    let largest = i;
    const LC = 2 * i + 1;
    const RC = 2 * i + 2;
    if (LC < N && this._heap[LC] > this._heap[largest]) largest = LC;
    if (RC < N && this._heap[RC] > this._heap[largest]) largest = RC;
    if (largest !== i) {
      swap(this._heap, largest, i);
      this.heapify(N, largest);
    }
  }

  createHeap() {
    const N = this._heap.length;
    const leaves = Math.floor(N / 2) - 1;
    for (let i = leaves; i >= 0; i--) {
      this.heapify(N, i);
    }
  }
}

function solve(arr) {
  const heap = new Heap(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(heap._heap, i, 0);
    heap.heapify(i, 0);
  }
  return arr;
}

// const nums = [5, 2, 3, 1];
// Output: [1,2,3,5]

const nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

console.log(solve(nums));
