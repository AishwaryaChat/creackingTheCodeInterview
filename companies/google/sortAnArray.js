// Sort an Array
// Medium
// company
// Microsoft
// Google
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
// SC - O(N)
function merge(A, B) {
  let result = [];
  if (A.length > B.length) return merge(B, A);
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] <= B[j]) {
      result.push(A[i]);
      i++;
    } else {
      result.push(B[j]);
      j++;
    }
  }
  while (i < A.length) {
    result.push(A[i]);
    i++;
  }
  while (j < B.length) {
    result.push(B[j]);
    j++;
  }
  return result;
}

function mergeSort(nums) {
  if (nums.length === 1) return nums;
  let mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

// TC - O(NlogN)
// SC - O(logN), stack space
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function heapify(nums, N, i) {
  let largest = i;
  const LC = 2 * i + 1;
  const RC = 2 * i + 2;
  if (LC < N && nums[LC] > nums[largest]) largest = LC;
  if (RC < N && nums[RC] > nums[largest]) largest = RC;
  if (largest !== i) {
    swap(nums, i, largest);
    heapify(nums, N, largest);
  }
}

function heapSort(nums) {
  const N = nums.length;
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(nums, N, i);
  }
  for (let i = N - 1; i >= 0; i--) {
    swap(nums, i, 0);
    heapify(nums, i, 0);
  }
  return nums;
}

// const nums = [5, 2, 3, 1];
// Output: [1,2,3,5]

const nums = [5, 1, 1, 2, 0, 0];
// Output: [0,0,1,1,2,5]

console.log(heapSort(nums));
