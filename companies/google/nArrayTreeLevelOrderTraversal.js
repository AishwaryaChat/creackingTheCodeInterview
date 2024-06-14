// 429. N-ary Tree Level Order Traversal
// Solved
// Medium
// Topics
// Companies
// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

// Example 1:



// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]
// Example 2:



// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 

// Constraints:

// The height of the n-ary tree is less than or equal to 1000
// The total number of nodes is between [0, 104]

// Using dequeue
// TC - O(N)
// SC - O(n), max nodes at a level
var levelOrder = function(root) {
    let ans = []
    if(root === null) return ans
    let queue = new DeQueue()
    queue.enqueueRear(root)
    let last = root
    let levelNodes = []
    while(!queue.isEmpty()) {
        const node = queue.dequeueFront()
        levelNodes.push(node.val)
        if(node.children) {
            for(let child of node.children) {
                if(child) queue.enqueueRear(child)
            }
        }
        if(node === last) {
            ans.push(levelNodes.map(a => a))
            levelNodes = []
            last = queue.getRearElement()
        }
    }
    return ans
};

// recursive
// TC - O(N)
// SC - O(logn)- average case height of tree, O(N) worst case when all the nodes are at one side of tree
function traverse(root, level, result) {
    if(result[level] === undefined) result[level] = []
    result[level].push(root.val)
    for(let child of root.children) {
        traverse(child, level+1, result)
    }
 }

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var solveRecursive = function(root) {
    let ans = []
    if(root === null) return ans
    traverse(root, 0, ans)
    return ans
};