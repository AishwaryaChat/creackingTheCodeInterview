// Find the kth largest element in a number stream
// Problem Statement: Design a class to efficiently find the Kth largest element in a stream of numbers. The class should have the following two things:
// ● The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// ● The class should expose a function add(int num) which will store the given number and return the Kth largest number.

const { A } = require("./constants");

class KthLargest {
  constructor(k, nums = []) {
    this.k = k;
    this.data = nums.slice(0, this.k);
    this.bubble();
    this.init(nums);
  }
  init(nums) {
    let i = this.k;
    while (i < nums.length) {
      this.add(nums[i]);
      i++;
    }
  }
  /*********************************************** */
// This is the start of O(n) hepify, when we have the whole array
  heapify(i) {
    const lc = 2 * i + 1;
    const rc = 2 * i + 2;
    let smallest = i;
    if (lc < this.k && this.data[lc] < this.data[smallest]) smallest = lc;
    if (rc < this.k && this.data[rc] < this.data[smallest]) smallest = rc;
    if (smallest !== i) {
      let temp = this.data[i];
      this.data[i] = this.data[smallest];
      this.data[smallest] = temp;
      this.heapify(smallest);
    }
  }
  bubble() {
    let N = this.data.length;
    if (N < 3) {
      if (this.data[0] > this.data[1]) {
        [this.data[0], this.data[1]] = [this.data[1], this.data[0]];
      }
    } else {
      let i = Math.floor(N / 2) - 1;
      for (; i >= 0; i--) {
        this.heapify(i);
      }
    }
  }
//   *********** End of O(n) heapify *************
  insert(ele) {
    this.data.push(ele);
  }
//   ********* Start of O(log N) heapify when inserting an element ******
  push(ele) {
    this.data.push(ele);
    let index = this.k - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.data[parentIndex] > this.data[index]) {
      let temp = this.data[parentIndex];
      this.data[parentIndex] = this.data[index];
      this.data[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
//   ********* Start of O(log N) heapify when inserting an element ******

//   ********* End of O(log N) heapify when deleting an element ******
  pop() {
    this.data[0] = this.data[this.k - 1];
    this.data.pop();
    let parentIndex = 0;
    let lc = 2 * parentIndex + 1;
    let rc = 2 * parentIndex + 2;
    let smallest = parentIndex;
    while (true) {
      if (lc < this.k && this.data[smallest] > this.data[lc]) {
        smallest = lc;
      }
      if (rc < this.k && this.data[smallest] > this.data[rc]) {
        smallest = rc;
      }
      if (smallest !== parentIndex) {
        [this.data[smallest], this.data[parentIndex]] = [
          this.data[parentIndex],
          this.data[smallest],
        ];
        parentIndex = smallest
        lc = 2 * parentIndex + 1;
        rc = 2 * parentIndex + 2;
      } else {
        break
      }
    }
  }
//   ********* End of O(log N) heapify when deleting an element ******

  remove() {
    this.data.shift();
  }
  peak() {
    return this.data[0];
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (ele) {
  if (this.data.length < this.k) {
    this.push(ele)
    return this.peak();
  }
  if (ele < this.peak()) return this.peak();
  else {
    this.pop();
    this.push(ele);
    return this.peak();
  }
};

function kthLargestElement(A) {
  var obj = new KthLargest(A[0][0], A[0][1]);
  let j = 1;
  let ans = [];
  while (j < A.length) {
    ans.push(obj.add(A[j][0]));
    j++;
  }
  return ans;
}

console.log(kthLargestElement(A));

// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
