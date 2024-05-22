// https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/description/
// 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
// Medium
// Topics
// Companies
// Hint
// You are given an integer n. There is an undirected graph with n nodes, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.

// Return the number of pairs of different nodes that are unreachable from each other.

 

// Example 1:


// Input: n = 3, edges = [[0,1],[0,2],[1,2]]
// Output: 0
// Explanation: There are no pairs of nodes that are unreachable from each other. Therefore, we return 0.
// Example 2:


// Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
// Output: 14
// Explanation: There are 14 pairs of nodes that are unreachable from each other:
// [[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
// Therefore, we return 14.
 

// Constraints:

// 1 <= n <= 105
// 0 <= edges.length <= 2 * 105
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no repeated edges.

// Below solution will give TLE, because TC - N*(N+E)
// for each node we are running a fresh DFS
function getAdjList(n, edges) {
    let map ={}
    for(let i=0; i<n; i++) {
        map[i] = []
    }
    for(let i=0; i<edges.length; i++) {
        const [a, b] = edges[i]
        map[a].push(b)
        map[b].push(a)
    }
    return map
}

function dfs(node, visited, adjList) {
    let count = 1
    visited[node] = true
    if(adjList[node].length===0) return count
    for(let neighbour of adjList[node]) {
        if(!visited[neighbour]) {
            count+=dfs(neighbour, visited, adjList)
        }
    }
    return count
}

function solve(n, edges) {
    if(edges.length===0) return (n*(n-1))/2
    let ans = 0
    const adjList = getAdjList(n, edges)
    let visited = {}
    let remainingNodes = n
    let sizeOfComponent = 0
    for(let i =0; i<n ;i++) {
        if(!visited[i]){
        sizeOfComponent = dfs(i, visited, adjList)
        ans += sizeOfComponent * (remainingNodes-sizeOfComponent)
        remainingNodes -= sizeOfComponent

        }
    }
    return ans
}

// Using union find

class UnionFind {
    constructor(n) {
        this.n = n
        this.parents = new Array(n)
        this.rank = new Array(n)
        this.init()
    }
    init() {
        for(let i=0; i<this.n; i++) {
            this.parents[i] = i
        }
    }
    findParent(x) {
        if(x!==this.parents[x]) this.parents[x] = this.findParent(this.parents[x])
        return this.parents[x]
    }
    union(x, y){
        const px = this.findParent(x)
        const py = this.findParent(y)
        if(px===py) return false
        this.parents[px] = py
        return true
    }
}


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    if(edges.length===0) return (n*(n-1))/2
    let dsu = new UnionFind(n)
    for(let i =0; i<edges.length ;i++) {
        const [x, y] = edges[i]
        dsu.union(x, y, dsu.parents)
    }
    for(let i =0; i<n ;i++) {
        dsu.parents[i] = dsu.findParent(i)
    }

    let map = {}
    for(let i=0; i<n; i++) {
        if(map[dsu.parents[i]]===undefined) map[dsu.parents[i]] = 0
        map[dsu.parents[i]]+=1
    }
    let ans = 0
    let remainingNodes = n
    for(let [key, val] of Object.entries(map)) {
        ans += val * (remainingNodes - val)
        remainingNodes-= val
    }
    
    return ans
};