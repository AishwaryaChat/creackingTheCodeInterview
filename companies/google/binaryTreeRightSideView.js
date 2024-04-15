// 199. Binary Tree Right Side View
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const DeQueue = require('../../PracticeQuestions/Queues/deQueueArrayImplementation')

// TC - O(N)
// SC - O(D), diameter of tree, because we are doing BFS (level wise)
var rightSideView = function(root) {
    let queue = new DeQueue()
    let ans = []
    if(root === null) return ans
    queue.enqueueRear(root)
    ans.push(root.val)
    while(!queue.isEmpty()) {
        const newQueue = new DeQueue()
        while(!queue.isEmpty()) {
            const ele = queue.dequeueFront()
            if(ele.left) newQueue.enqueueRear(ele.left)
            if(ele.right) newQueue.enqueueRear(ele.right)
        }
        if(!newQueue.isEmpty())ans.push(newQueue.getRearElement().val)
        queue = newQueue
    }
    return ans
};

// TC - O(N)
// SC - O(H)
function rightSideView(root) {
    let ans = []
    function helper(node, level) {
        if(ans.length === level) ans.push(node.val)
        if(node.right) helper(node.right, level + 1)
        if(node.left) helper(node.left, level + 1)
    }
    if(root === null) return ans
    helper(root, 0)
    return ans
}
