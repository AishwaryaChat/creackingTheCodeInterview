// Odd and Even Levels

// Problem Description
// Given a binary tree of integers. Find the difference between the sum of nodes at odd level and sum of nodes at even level.

// NOTE: Consider the level of root node as 1.



// Problem Constraints
// 1 <= Number of nodes in binary tree <= 100000

// 0 <= node values <= 109



// Input Format
// First and only argument is a root node of the binary tree, A



// Output Format
// Return an integer denoting the difference between the sum of nodes at odd level and sum of nodes at even level.



// Example Input
// Input 1:

//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
//   /
//  8 
// Input 2:

//         1
//        / \
//       2   10
//        \
//         4


// Example Output
// Output 1:

//  10
// Output 2:

//  -7


// Example Explanation
// Explanation 1:

//  Sum of nodes at odd level = 23
//  Sum of ndoes at even level = 13
// Explanation 2:

//  Sum of nodes at odd level = 5
//  Sum of ndoes at even level = 12

const Queue = require("../../../Queues/arrayImpelemtation")

function solve(root){
    let queue = new Queue() 
    queue.enqueue(root)
    let last = root
    level = 1
    let sumEven = 0
    let sumOdd = 0
    while(!queue.isEmpty()) {
        const ele = queue.dequeue()
        if(level%2==1) {
            sumOdd+=ele.data
        } else {
            sumEven+=ele.data
        }
        if(ele.left) queue.enqueue(ele.left)
        if(ele.right) queue.enqueue(ele.right)
        if(ele===last) {
            last = queue.rearElement()
            level+=1
        }
    }
    return   sumOdd - sumEven
}