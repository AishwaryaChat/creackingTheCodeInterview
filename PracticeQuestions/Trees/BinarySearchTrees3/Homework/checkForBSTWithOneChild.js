// Check for BST with One Child

// Problem Description

// Given preorder traversal of a binary tree, check if it is possible that it is also a preorder traversal of a Binary Search Tree (BST), where each internal node (non-leaf nodes) have exactly one child.



// Problem Constraints

// 1 <= number of nodes <= 100000



// Input Format

// First and only argument is an integer array denoting the preorder traversal of binary tree.



// Output Format

// Return a string "YES" if true else "NO".



// Example Input

// Input 1:

//  A : [4, 10, 5, 8]
// Input 2:

//  A : [1, 5, 6, 4]


// Example Output

// Output 1:

//  "YES"
// Output 2:

//  "NO"


// Example Explanation

// Explanation 1:

//  The possible BST is:
//             4
//              \
//              10
//              /
//              5
//               \
//               8
// Explanation 2:

//  There is no possible BST which have the above preorder traversal.

function solve(preorder){
    let L = Number.MIN_SAFE_INTEGER
    let R = Number.MAX_SAFE_INTEGER
    let root = preorder[0]
    for(let i=1;i<preorder.length;i++) {
        if(preorder[i]>root) {
            L = root
        } else {
            R = root
        }
        if(preorder[i]<L || preorder[i] > R) return "NO"
        root = preorder[i]
    } 
    return "YES"
}

const A = [4, 10, 5, 8]
// Output - "YES"

// const A = [1, 5, 6, 4]
// Output - "NO"

console.log(solve(A))
