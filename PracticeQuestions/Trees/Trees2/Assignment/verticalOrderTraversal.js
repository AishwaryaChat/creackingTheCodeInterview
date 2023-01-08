/*
Vertical Order traversal

Problem Description
Given a binary tree, return a 2-D array with vertical order traversal of it. Go through the example and image for more details.


NOTE: If 2 Tree Nodes shares the same vertical level then the one with lesser depth will come first.



Problem Constraints
0 <= number of nodes <= 10^5



Input Format
First and only arument is a pointer to the root node of binary tree, A.



Output Format
Return a 2D array denoting the vertical order traversal of tree as shown.



Example Input
Input 1:

      6
    /   \
   3     7
  / \     \
 2   5     9
Input 2:

      1
    /   \
   3     7
  /       \
 2         9


Example Output
Output 1:

 [
    [2],
    [3],
    [6, 5],
    [7],
    [9]
 ]
Output 2:

 [
    [2],
    [3],
    [1],
    [7],
    [9]
 ]


Example Explanation
Explanation 1:

 First row represent the verical line 1 and so on.
*/

const Queue = require("../../../Queues/arrayImpelemtation");

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
  let queue = new Queue({});
  let map = {};
  queue.enqueue([root, 0]);
  let iMin = 0;
  let iMax = 0;
  while (!queue.isEmpty()) {
    let [ele, i] = queue.dequeue();
    if(map[i]) {
        map[i].push(ele.data)
    } else {
        map[i] = [ele.data]
    }
    if (ele.left) {
      queue.enqueue([ele.left, i - 1]);
      iMin = Math.min(iMin, i - 1);
    }
    if (ele.right) {
      queue.enqueue([ele.right, i + 1]);
      iMax = Math.max(iMax, i + 1);
    }
  }
  let ans = [];
  for (let j = iMin; j <= iMax; j++) {
    ans.push(map[j]);
  }
  return ans;
}

const N9 = new TreeNode(9);
const N5 = new TreeNode(5);
const N2 = new TreeNode(2);
const N7 = new TreeNode(7, N9);
const N3 = new TreeNode(3, N2, N5);
const N6 = new TreeNode(6, N3, N7);

console.log(solve(N6));
