// 2290. Minimum Obstacle Removal to Reach Corner
// Hard
// Topics
// Companies
// Hint
// You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:

// 0 represents an empty cell,
// 1 represents an obstacle that may be removed.
// You can move up, down, left, or right from and to an empty cell.

// Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).

 

// Example 1:


// Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
// Output: 2
// Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
// It can be shown that we need to remove at least 2 obstacles, so we return 2.
// Note that there may be other ways to remove 2 obstacles to create a path.
// Example 2:


// Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
// Output: 0
// Explanation: We can move from (0, 0) to (2, 4) without removing any obstacles, so we return 0.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 105
// 2 <= m * n <= 105
// grid[i][j] is either 0 or 1.
// grid[0][0] == grid[m - 1][n - 1] == 0

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")

// Leading to TLE, since all the paths are tracong
function solve(grid) {
    const m = grid.length
    const n = grid[0].length
    let visited = new Array(m).fill().map(() => new Array(n).fill(false))
    let minCount = Number.MAX_SAFE_INTEGER
    function dfs(i, j, count) {
        if(i<0 || i>=m || j<0 || j>=n || visited[i][j]) return 
        if(i===m-1 && j===n-1) {
            minCount = Math.min(minCount, count)
            return
        }
        visited[i][j] = true
        if(grid[i][j] === 1) count+=1
        dfs(i+1, j, count, visited)
        dfs(i, j+1, count, visited)
        dfs(i-1, j, count, visited)
        dfs(i, j-1, count, visited)
        visited[i][j] = false
    }
    dfs(0, 0, 0)
    return minCount
}

// Below is a faster solution with BFS and different version of queue, if we find a point where there are no obstacles, we push that point to front of queue rather than rear of queue


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue1 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueueRear(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    enqueueFront(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.head) return null;
        const dequeued = this.head;
        this.head = this.head.next;
        dequeued.next = null;
        this.size--;
        return dequeued.val;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const cx = [0, 1, 0, -1]
const cy = [1, 0, -1, 0]

function inBounds(x, y, m, n) {
    return x>=0 && x<m && y>=0 && y<n
}

function solveFaster(grid) {
let queue = new Queue()
    const m = grid.length
    const n = grid[0].length
    queue.enqueueRear([0, 0, 0])
    let obstaclesMatrix = new Array(m).fill().map(() => new Array(n).fill(Infinity))
    while(!queue.isEmpty()) {
        const [x, y, obstacles] = queue.dequeue()
        if(x === m-1 && y === n-1) return obstacles
        for(let i=0; i<cx.length; i++) {
            const a = x+cx[i]
            const b = y+cy[i]
            if(inBounds(a, b, m, n)) {
                if(grid[a][b] === 1 && obstacles+1<obstaclesMatrix[a][b]) {
                    queue.enqueueRear([a, b, obstacles+1])
                    obstaclesMatrix[a][b] = obstacles+1
                } else if(grid[a][b] === 0 && obstacles<obstaclesMatrix[a][b]) {
                    queue.enqueueRear([a, b, obstacles])
                    obstaclesMatrix[a][b] = obstacles
                }
            }
        }
    }
}

var solveMinHeap = function(grid) {
    let minHeap = new Heap({comparator: (a, b) => a[2] < b[2]})
    const m = grid.length
    const n = grid[0].length
    let minObstacles = Number.MAX_SAFE_INTEGER
    minHeap.push([0, 0, 0])
    let visited = new Array(m).fill().map(() => new Array(n).fill(Infinity))
    while(minHeap.getSize()>0) {
        const [x, y, obstacles] = minHeap.pop()
        if(x === m-1 && y === n-1) {
            return obstacles
        }
        for(let i=0; i<cx.length; i++) {
            const a = x+cx[i]
            const b = y+cy[i]
            if(inBounds(a, b, m, n) ) {
            const newObstacles = obstacles + grid[a][b]
            if(newObstacles < visited[a][b]) {
                visited[a][b] = newObstacles
                minHeap.push([a, b, newObstacles])
            }
            }
        }
    }
    return minObstacles
};

const grid = [[0,1,1],[1,1,0],[1,1,0]]
// Output: 2
console.log(solve(grid))