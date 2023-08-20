// 315. Count of Smaller Numbers After Self
// Hard
// company
// Google
// Apple
// Amazon
// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
// Example 2:

// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]

// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

// TC - O(NlogM), where N is length of given array, M is difference between maximum and minimum element of array
// SC - O(2M + 2) for saving the segment tree
// The idea here is store the segment tree with a min and max of min and max of given array
// now for every element in array check for that element how many smaller number exists and return the count
class Node {
  constructor(l, r, count = 0) {
    this.l = l;
    this.r = r;
    this.left = null;
    this.right = null;
    this.count = count;
  }
}

class SegmentTree {
  constructor(min, max) {
    this.root = this.buildTree(min, max);
  }

  buildTree(min, max) {
    if (min === max) {
      return new Node(min, max);
    }
    const mid = Math.floor((min + max) / 2);
    const newNode = new Node(min, max);
    newNode.left = this.buildTree(min, mid);
    newNode.right = this.buildTree(mid + 1, max);
    return newNode;
  }
  query(min, max, root = this.root) {
    if (!root || min > root.r || max < root.l) return 0;
    if (root.l === min && root.r === max) return root.count;
    const mid = Math.floor((root.l + root.r) / 2);
    let count = 0;
    if (min <= mid) count += this.query(min, Math.min(mid, max), root.left);
    if (max > mid) count += this.query(Math.max(min, mid + 1), max, root.right);
    return count;
  }
  insert(num, root = this.root) {
    if (root.r === num && root.l === num) {
      root.count += 1;
      return;
    }
    const mid = Math.floor((root.l + root.r) / 2);
    if (num <= mid) this.insert(num, root.left);
    else this.insert(num, root.right);
    root.count = root.left.count + root.right.count;
  }
}

function solve(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const segmentTree = new SegmentTree(min, max);
  let counts = [];
  counts[nums.length - 1] = 0;
  segmentTree.insert(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    const count = segmentTree.query(min, nums[i] - 1);
    segmentTree.insert(nums[i]);
    counts[i] = count;
  }
  return counts;
}

// TC - O(NlogN)
// SC - O(N)
// Idea here is to solve using inversion count
function solveUsingMergeSort(nums) {
    const n = nums.length
    let inversion = new Array(n).fill(0)
    let numsIndex = nums.map((num, index) => [num, index])
    function merge(arr) {
        if(arr.length===1) return arr
        const mid = Math.floor((arr.length)/2)
        const left = merge(arr.slice(0, mid))
        const right = merge(arr.slice(mid))
        let inversionCount = 0
        let li = 0
        let ri = 0
        let sorted = []
        while(li<left.length) {
            if(ri<right.length && left[li][0] > right[ri][0]) {
                inversionCount+=1
                sorted.push(right[ri++])
            } else {
                inversion[left[li][1]] += inversionCount
                sorted.push(left[li++])
            }
        }
        const result = [...sorted, ...right.slice(ri)]
        return result
    }

    merge(numsIndex)
    return inversion
}

const nums = [8, 5, 2, 6, 1];
// Output: [2,1,1,0]

// const nums = [-1]
// Output: [0]
// Example 3:

// const nums = [-1,-1]
// Output: [0,0]

console.log(solveUsingMergeSort(nums));
