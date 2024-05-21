// 1168. Optimize Water Distribution in a Village
// Solved
// Hard
// Topics
// Companies
// Hint
// There are n houses in a village. We want to supply water for all the houses by building wells and laying pipes.

// For each house i, we can either build a well inside it directly with cost wells[i - 1] (note the -1 due to 0-indexing), or pipe in water from another well to it. The costs to lay pipes between houses are given by the array pipes where each pipes[j] = [house1j, house2j, costj] represents the cost to connect house1j and house2j together using a pipe. Connections are bidirectional, and there could be multiple valid connections between the same two houses with different costs.

// Return the minimum total cost to supply water to all houses.

 

// Example 1:


// Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
// Output: 3
// Explanation: The image shows the costs of connecting houses using pipes.
// The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.
// Example 2:

// Input: n = 2, wells = [1,1], pipes = [[1,2,1],[1,2,2]]
// Output: 2
// Explanation: We can supply water with cost two using one of the three options:
// Option 1:
//   - Build a well inside house 1 with cost 1.
//   - Build a well inside house 2 with cost 1.
// The total cost will be 2.
// Option 2:
//   - Build a well inside house 1 with cost 1.
//   - Connect house 2 with house 1 with cost 1.
// The total cost will be 2.
// Option 3:
//   - Build a well inside house 2 with cost 1.
//   - Connect house 1 with house 2 with cost 1.
// The total cost will be 2.
// Note that we can connect houses 1 and 2 with cost 1 or with cost 2 but we will always choose the cheapest option. 
 

// Constraints:

// 2 <= n <= 104
// wells.length == n
// 0 <= wells[i] <= 105
// 1 <= pipes.length <= 104
// pipes[j].length == 3
// 1 <= house1j, house2j <= n
// 0 <= costj <= 105
// house1j != house2j

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")

// TC - O((N+M)log(N+M)), where N is number of pipes, M is number of wells, this hanppened because of sorting
// SC - O(N+M), space for Union find data structure, parent array

// Kruskal's algorithms
class UnionFind {
    constructor(n) {
        this.n = n
        this.parent = this.initParent()
    }
    initParent() {
        let parent = new Array(this.n+1)
        for(let i=0; i<=this.n; i++) {
            parent[i] = i
        }
        return parent
    }
    findParent(x) {
        if(x!==this.parent[x]) this.parent[x] = this.findParent(this.parent[x])
        return this.parent[x]
    }
    union(x, y) {
        const px = this.findParent(x)
        const py = this.findParent(y)
        if(px === py) return false
        this.parent[px] = py
        return true
    }
}

/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
    for(let i=0; i<wells.length; i++) {
        pipes.push([0, i+1, wells[i]])
    }
    pipes.sort((a,b) => a[2] - b[2])
    let dsu = new UnionFind(n+1)
    let ans = 0
    for(let i=0; i<pipes.length; i++) {
        const [x, y, weight] = pipes[i]
        if(dsu.union(x, y)) ans+=weight
    }
    return ans
};

// Prim's algorithm
// TC - O((N+M)log(N+M))
// SC - O(N+M)

function getAdjList(n, edges) {
    let map = {}
    for(let i=0; i<=n; i++) {
        map[i] = []
    }
    for(let i=0; i<edges.length; i++) {
        const [x, y, weight] = edges[i]
        map[x].push([y, weight])
        map[y].push([x, weight])
    }
    return map
}

function pushAllNeighbours(neighbours, minHeap, visited) {
    for(let [neighbour, weight] of neighbours) {
        if(!visited[neighbour])minHeap.push([neighbour, weight])
    }
}

function solve(n, wells, pipes) {
    for(let i=0; i<wells.length; i++) {
        pipes.push([0, i+1, wells[i]])
    }
    const adjList = getAdjList(n, pipes)
    let visited = {}
    let ans = 0
    let minHeap = new Heap({comparator: (a, b) => a[1] < b[1]})
    for(let i=0; i<adjList[0].length; i++) {
        const [y, weight] = adjList[0][i]
        minHeap.push([y, weight])
    }
    visited[0] = true
    minHeap.push([0, 0])
    while(minHeap.getSize()>0) {
        const [y, weight] = minHeap.pop()
        if(visited[y]) continue
        ans+=weight
        visited[y] = true
        pushAllNeighbours(adjList[y], minHeap, visited)
    }
return ans
}


// const n = 3
// const wells = [1,2,2]
// const pipes = [[1,2,1],[2,3,1]]
// Output: 3

const n = 2
const wells = [1,1]
const pipes = [[1,2,1],[1,2,2]]
// Output: 2

console.log(solve(n, wells, pipes))