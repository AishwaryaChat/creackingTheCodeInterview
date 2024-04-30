// https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/description/
// Find Number of Coins to Place in Tree Nodes
// Hard
// Topics
// Companies
// Hint
// You are given an undirected tree with n nodes labeled from 0 to n - 1, and rooted at node 0. You are given a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

// You are also given a 0-indexed integer array cost of length n, where cost[i] is the cost assigned to the ith node.

// You need to place some coins on every node of the tree. The number of coins to be placed at node i can be calculated as:

// If size of the subtree of node i is less than 3, place 1 coin.
// Otherwise, place an amount of coins equal to the maximum product of cost values assigned to 3 distinct nodes in the subtree of node i. If this product is negative, place 0 coins.
// Return an array coin of size n such that coin[i] is the number of coins placed at node i.

 

// Example 1:


// Input: edges = [[0,1],[0,2],[0,3],[0,4],[0,5]], cost = [1,2,3,4,5,6]
// Output: [120,1,1,1,1,1]
// Explanation: For node 0 place 6 * 5 * 4 = 120 coins. All other nodes are leaves with subtree of size 1, place 1 coin on each of them.
// Example 2:


// Input: edges = [[0,1],[0,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8]], cost = [1,4,2,3,5,7,8,-4,2]
// Output: [280,140,32,1,1,1,1,1,1]
// Explanation: The coins placed on each node are:
// - Place 8 * 7 * 5 = 280 coins on node 0.
// - Place 7 * 5 * 4 = 140 coins on node 1.
// - Place 8 * 2 * 2 = 32 coins on node 2.
// - All other nodes are leaves with subtree of size 1, place 1 coin on each of them.
// Example 3:


// Input: edges = [[0,1],[0,2]], cost = [1,2,-2]
// Output: [0,1,1]
// Explanation: Node 1 and 2 are leaves with subtree of size 1, place 1 coin on each of them. For node 0 the only possible product of cost is 2 * 1 * -2 = -4. Hence place 0 coins on node 0.
 

// Constraints:

// 2 <= n <= 2 * 104
// edges.length == n - 1
// edges[i].length == 2
// 0 <= ai, bi < n
// cost.length == n
// 1 <= |cost[i]| <= 104
// The input is generated such that edges represents a valid tree.

// Time complexity: O(N + E).
// O(N + E) to create children array, where N is the number of nodes, E is the number of edges.
// O(N + E) to traverse the tree.
// O(6^3) to calculate maximum product between 6 numbers. The product is calculated during each subtree traversal.
// Total time complexity is O(N + E) + O(N + E) * O(6^3) ~ O(N + E) + O(N + E) * O(1) ~ O(N + E).

// Space complexity: O(N + E).
// children array takes O(N + E), where N is the number of nodes, E is the number of edges.
// answer array takes O(N).
// seen set takes O(N).
// DFS call stack takes up to O(N) space depth (in case a tree is a straight line).
// Total space compexkty is O(N + E) + O(N) + O(N) + O(N) ~ O(N + E).
function getMaxProduct(...nums) {
    let maxP = Number.MIN_SAFE_INTEGER
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                maxP = Math.max(maxP, nums[i]*nums[j]*nums[k])
            }
        }
    }
    return maxP
}

function dfs(node, cost, children, output, seen) {
    let posMax1 = cost[node] > 0 ? cost[node] : 0
    let posMax2 = 0
    let posMax3 = 0
    let negMax1 = cost[node] < 0 ? cost[node] : 0
    let negMax2 = 0
    let negMax3 = 0
    for(let child of children[node]) {
        if(seen[child]) continue
        seen[child] = true
        const {positiveMaxs, negativeMaxs} = dfs(child, cost, children, output, seen)
        for(const max of positiveMaxs) {
            if(!max) continue
            if(max >= posMax1) {
                posMax3 = posMax2
                posMax2 = posMax1
                posMax1 = max
            } else if(max >= posMax2) {
                posMax3 = posMax2
                posMax2 = max
            } else if(max >= posMax3) {
                posMax3 = max
            }
        }

        for(const max of negativeMaxs) {
            if(!max) continue
            if(max <= negMax1) {
                negMax3 = negMax2
                negMax2 = negMax1
                negMax1 = max
            } else if(max <= negMax2) {
                negMax3 = negMax2
                negMax2 = max
            } else if(max <= negMax3) {
                negMax3 = max
            }
        }
    }
    const maxProduct = getMaxProduct(posMax1, posMax2, posMax3, negMax1, negMax2, negMax3)
    let maxCountValue = 0
    if(posMax1) maxCountValue++
    if(posMax2) maxCountValue++
    if(posMax3) maxCountValue++
    if(negMax1) maxCountValue++
    if(negMax2) maxCountValue++
    if(negMax3) maxCountValue++
    if(maxCountValue<3) {
        output[node] = 1
    } else {
        output[node] = maxProduct
    }
    return {
        positiveMaxs: [posMax1, posMax2, posMax3],
        negativeMaxs: [negMax1, negMax2, negMax3]
    }
}

/**
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number[]}
 */
var solve = function(edges, cost) {
    let children = []
    for (let i = 0; i < cost.length; i++) {
        children[i] = [];
    }
    for(let [from, to] of edges) {
        children[from].push(to)
        children[to].push(from)
    }
    let output = new Array(cost.length).fill(1)
    let seen = {0: true}
    dfs(0, cost, children, output, seen)
    return output
};

const edges = [[0,1],[0,2],[0,3],[0,4],[0,5]]
const cost = [1,2,3,4,5,6]
// Output: [120,1,1,1,1,1]


// const edges = [[0,1],[0,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8]]
// const cost = [1,4,2,3,5,7,8,-4,2]
// Output: [280,140,32,1,1,1,1,1,1]


// const edges = [[0,1],[0,2]]
// const cost = [1,2,-2]
// Output: [0,1,1]

console.log(solve(edges, cost))