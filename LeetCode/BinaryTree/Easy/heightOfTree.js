/*
104. Maximum Depth of Binary Tree
Easy

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 10^4].
-100 <= Node.val <= 100
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }
    
 var maxDepth = function(root) {
    if(root === null) return 0
    let queue = []
    queue.push(root)
    let height = 0
    
    while(true) {
        let nodeCount = queue.length
        if(nodeCount === 0) return height
        height++
        
        while(nodeCount > 0) {
            let newNode = queue.shift()
            if(newNode.left !== null) queue.push(newNode.left)
            if(newNode.right !== null) queue.push(newNode.right)
            nodeCount--
        }
    }
};

// Recursion

var maxDepthRecursive = function(root) {
    if(root === null) return 0
    else {
        let lTree = maxDepthRecursive(root.left)
        let rTree = maxDepthRecursive(root.right)
        if(lTree > rTree) return lTree + 1
        else return rTree + 1
    }
};

let left = new TreeNode(9)
let rightR = new TreeNode(7)
let rightL = new TreeNode(15)
let right = new TreeNode(20, rightL, rightR)
let root = new TreeNode(3,left,right)
console.log(maxDepthRecursive(root))