// Symmetric Binary Tree
// Solved
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description
// Given a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



// Problem Constraints
// 1 <= number of nodes <= 10^5



// Input Format
// First and only argument is the root node of the binary tree.



// Output Format
// Return 0 / 1 ( 0 for false, 1 for true ).



// Example Input
// Input 1:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// Input 2:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Example Output
// Output 1:

//  1
// Output 2:

//  0


// Example Explanation
// Explanation 1:

//  The above binary tree is symmetric. 
// Explanation 2:

// The above binary tree is not symmetric.

// TC - O(N)
// SC - O(1)
function checkSymmetric(rootA, rootB) {
    if(rootA===null && rootB === null) return 1
    if(rootA===null && rootB!==null || rootA!==null && rootB===null) return 0
    if(rootA.data===rootB.data && checkSymmetric(rootA.left, rootB.right) && checkSymmetric(rootA.right, rootB.left)) return 1
    else return 0
}

function solve(root) {
    return checkSymmetric(root, root)
}