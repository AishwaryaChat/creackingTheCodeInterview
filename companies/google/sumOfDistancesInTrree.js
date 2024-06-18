// 834. Sum of Distances in Tree
// https://leetcode.com/problems/sum-of-distances-in-tree/description/
// Hard
// Topics
// Companies
// There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

// You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

// Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.

 

// Example 1:


// Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// Output: [8,12,6,10,10,10]
// Explanation: The tree is shown above.
// We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
// equals 1 + 1 + 2 + 2 + 2 = 8.
// Hence, answer[0] = 8, and so on.
// Example 2:


// Input: n = 1, edges = []
// Output: [0]
// Example 3:


// Input: n = 2, edges = [[1,0]]
// Output: [1,1]
 

// Constraints:

// 1 <= n <= 3 * 104
// edges.length == n - 1
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// The given input represents a valid tree.

// TC - O(N)
// SC - O(N)
function getAdjList(n, edges) {
    let adj = {}
    for(let i=0; i<n; i++) {
        adj[i] = []
    }

    for(let i=0; i<edges.length; i++) {
        const [n1, n2] = edges[i]
        adj[n1].push(n2)
        adj[n2].push(n1)
    }
    return adj
}

function postOrder(node, parent, adj, subtreeNodeCount, ans) {
    for(let child of adj[node]) {
        if(child!==parent) {
            postOrder(child, node, adj, subtreeNodeCount, ans)
            subtreeNodeCount[node] += subtreeNodeCount[child]
            ans[node] += ans[child] + subtreeNodeCount[child]
        }
    }
}

function preOrder(node, parent, adj, subtreeNodeCount, ans, N) {
    for(let child of adj[node]) {
        if(child !== parent) {
            ans[child] = ans[node] - subtreeNodeCount[child] + N - subtreeNodeCount[child]
            preOrder(child, node, adj, subtreeNodeCount, ans, N)
        }
    }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const adj = getAdjList(n, edges)
    let subtreeNodeCount = new Array(n).fill(1)
    let ans = new Array(n).fill(0)
    postOrder(0, -1, adj, subtreeNodeCount, ans)
    preOrder(0, -1, adj, subtreeNodeCount, ans, n)
    return ans
};