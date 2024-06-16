// 2812. Find the Safest Path in a Grid
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

// A cell containing a thief if grid[r][c] = 1
// An empty cell if grid[r][c] = 0
// You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

// The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

// Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

// An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

// The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

 

// Example 1:


// Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
// Output: 0
// Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
// Example 2:


// Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.
// Example 3:


// Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
// - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.
 

// Constraints:

// 1 <= grid.length == n <= 400
// grid[i].length == n
// grid[i][j] is either 0 or 1.
// There is at least one thief in the grid.

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")

// The question is asking to find out the maximum answer for different paths from 0,0 to (n-1, m-1), and in a path each cell should represent the shortest distance of it from a one
// So the solution is divided int two parts, first find the distance of nearest 1 for each zero cell, this we do using multi source bfs
// Second part is to find the path from 0,0 to n-1, m-1, where we have to first find the minimum value of a path and then maximise this value with different paths, for this we will use max heap,
// At each node, we push its adjacent cells to heap, and so automatically  one having maximum value will then get selected in next pass
// Second part is a variation od dijiktra

// TC - O(N^2 * logn), log n for heap
// SC - O(N^2 * logn)

const cxy = [[0, 1], [1, 0], [-1, 0], [0, -1]]
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    if(grid[0][0] === 1) return 0
    const n = grid.length
    const m = grid[0].length
    let source = []
    let queue = new Queue()
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 1) {
                grid[i][j] = "X"
                source.push([i,j])
                queue.enqueue([i, j, 0])
            }
        }
    }
    while(!queue.isEmpty()) {
        const [i, j, dist] = queue.dequeue()
        if(grid[i][j] !== "X") grid[i][j] = dist
        for(let k=0; k<4; k++) {
            const x = i + cxy[k][0]
            const y = j + cxy[k][1]
            if(x>=0 && x<n && y>=0 && y<m && grid[x][y]===0) {
                grid[x][y] = dist + 1
                queue.enqueue([x, y, dist+1])
            }
        }
    }
    for(let i=0; i<source.length; i++) {
        const [x,y]= source[i]
        grid[x][y] = 0
    }
    let visited = new Array(n).fill().map(() => new Array(m).fill(false))
    let maxHeap = new Heap({comparator: (a, b) => a[2]>b[2]})
    maxHeap.push([0, 0, grid[0][0]])
    visited[0][0] = true
    while(maxHeap.getSize()>0) {
        const [i, j, factor] = maxHeap.pop()
        if(i === n-1 && j === m-1) return factor 
            for(let k=0; k<4; k++) {
            const x = i + cxy[k][0]
            const y = j + cxy[k][1]
            if(x>=0 && x<n && y>=0 && y<m && !visited[x][y] && grid[x][y]!==0) {
                visited[x][y] = true
                const min = Math.min(grid[x][y], factor || grid[x][y])
                maxHeap.push([x, y, min])
            }
        }
    }
    return 0
};