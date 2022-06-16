/*
Equal Tree Partition

Problem Description
Given a binary tree A. Check whether it is possible to partition the tree to two trees which have equal sum of values after removing exactly one edge on the original tree.



Problem Constraints
1 <= size of tree <= 100000

0 <= value of node <= 109



Input Format
First and only argument is head of tree A.



Output Format
Return 1 if the tree can be partitioned into two trees of equal sum else return 0.



Example Input
Input 1:

 
                5
               /  \
              3    7
             / \  / \
            4  6  5  6
Input 2:

 
                1
               / \
              2   10
                  / \
                 20  2


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Remove edge between 5(root node) and 7: 
        Tree 1 =                                               Tree 2 =
                        5                                                     7
                       /                                                     / \
                      3                                                     5   6    
                     / \
                    4   6
        Sum of Tree 1 = Sum of Tree 2 = 18
Explanation 2:

 The given Tree cannot be partitioned.
 */

//  TC = O(N)
// SC = O(H)
//  Idea is to find the total sum of the tree
// then in another loop check if any subtree has sum equal to totalSum/2, return true

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// function solve(root) {
//   let map = {};
//   function totalSum(root) {
//     if (root === null) return 0;
//     let sum = root.data + totalSum(root.left) + totalSum(root.right);
//     map[root.data] = sum;
//     return sum;
//   }
//   totalSum(root);
//   return map;
// }

function calculateTotalSum(root) {
  if (root === null) return 0;
  const sum =
    root.data + calculateTotalSum(root.left) + calculateTotalSum(root.right);
  return sum;
}

function solve(root) {
  let curr = root;
  let totalSum = calculateTotalSum(curr);
  let flag = false;
  function getSum(root) {
    if (root === null) return 0;
    let sum = root.data + getSum(root.left) + getSum(root.right);
    if (sum === totalSum / 2) {
      flag = true;
    }
    return sum;
  }
  getSum(root);
  return flag;
}

let N3 = new TreeNode(3);
let N2 = new TreeNode(2);
let N1 = new TreeNode(1, N2, N3);

console.log(solve(N1));
