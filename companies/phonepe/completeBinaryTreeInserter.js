// Complete Binary Tree Inserter
// Medium
// company
// PhonePe
// Google
// Facebook
// A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

// Design an algorithm to insert a new node to a complete binary tree keeping it complete after the insertion.

// Implement the CBTInserter class:

// CBTInserter(TreeNode root) Initializes the data structure with the root of the complete binary tree.
// int insert(int v) Inserts a TreeNode into the tree with value Node.val == val so that the tree remains complete, and returns the value of the parent of the inserted TreeNode.
// TreeNode get_root() Returns the root node of the tree.

// Example 1:

// Input
// ["CBTInserter", "insert", "insert", "get_root"]
// [[[1, 2]], [3], [4], []]
// Output
// [null, 1, 2, [1, 2, 3, 4]]

// Explanation
// CBTInserter cBTInserter = new CBTInserter([1, 2]);
// cBTInserter.insert(3);  // return 1
// cBTInserter.insert(4);  // return 2
// cBTInserter.get_root(); // return [1, 2, 3, 4]

// Constraints:

// The number of nodes in the tree will be in the range [1, 1000].
// 0 <= Node.val <= 5000
// root is a complete binary tree.
// 0 <= val <= 5000
// At most 10^4 calls will be made to insert and get_root.

// TC - for heap build - O(N logN), where N is current number of nodes which have 1 or 0 children
// TC - for insert - O(log N)
// SC - O(N)

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation")
const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var CBTInserter = function(root) {
    this.root = root
    this.heap = new Heap({comparator: (a,b) => a.num<b.num})
    let queue = new Queue()
    queue.enqueue(root)
    this.num = 0
    while(!queue.isEmpty()) {
        const node = queue.dequeue()
        if(node.left===null || node.right===null) {
            this.heap.push({node, num: this.num++})
        }
        if(node.left) queue.enqueue(node.left)
        if(node.right) queue.enqueue(node.right)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    const newNode = new TreeNode(val)
    const {node} = this.heap.peek()
    if(node.left === null) {
        node.left = newNode
    } else {
        node.right = newNode
        this.heap.pop()
    }
    this.heap.push({node: newNode, num: this.num++})
return node.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root
};

function solve(operations, input) {
    const inserter = new CBTInserter(input[0])
    let output = [null]
    for(let i=1; i<operations.length; i++) {
        switch(operations[i]) {
            case 'insert':
                output.push(inserter.insert(...input[i]))
                continue
            case 'get_root':
                output.push(inserter.get_root())
                continue
            default:
                continue
        }
    }
    return output
}

const operations = ["CBTInserter", "insert", "insert", "get_root"]
const n2 = new TreeNode(2)
const root = new TreeNode(1, n2)
const input = [root, [3], [4], []]
// Output
// [null, 1, 2, [1, 2, 3, 4]]
console.log(solve(operations, input))

