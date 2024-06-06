// 1642. Furthest Building You Can Reach
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

// You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

// While moving from building i to building i+1 (0-indexed),

// If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
// If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
// Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

 

// Example 1:


// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.
// Example 2:

// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7
// Example 3:

// Input: heights = [14,3,19,3], bricks = 17, ladders = 0
// Output: 3
 

// Constraints:

// 1 <= heights.length <= 105
// 1 <= heights[i] <= 106
// 0 <= bricks <= 109
// 0 <= ladders <= heights.length

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")

// Using minHeap
// TC - O(NlogL), where L is number of ladders
var furthestBuilding = function(heights, bricks, ladders) {
    let i = 0
    let minHeap = new Heap({comparator: (a, b) => a<b})
    while(i<heights.length-1) {
            const diff = heights[i+1] - heights[i]
            if(diff>0) {
                if(ladders>0) {
                    minHeap.push(diff)
                    ladders--
                    i++
                } else {
                    const minLadderClimb = minHeap.peek()
                    if(minLadderClimb < diff) {
                        bricks-=minLadderClimb
                        minHeap.pop()
                        minHeap.push(diff)
                    } else {
                        bricks-=diff
                    }
                    if(bricks>=0) i++
                    else return i
                }
            } else i++
    }
    return i
};

// Using maxHeap
// Unlike above solution where we were allocating the ladders first, in this one we are allocating the bricks first
// TC - O(Nlog B), where B is number of bricks
var maxHeapSoltuion = function(heights, bricks, ladders) {
    let i = 0
    let maxHeap = new Heap({comparator: (a, b) => a>b})
    while(i<heights.length-1) {
            const diff = heights[i+1] - heights[i]
            if(diff>0) {
                maxHeap.push(diff)
                bricks-=diff
                if(bricks<0 && ladders===0) return i
                if(bricks<0) {
                    bricks += maxHeap.pop()
                    ladders-=1
                }
            }
            i++
    }
    return i
};

// Using Binary search index

// Here on the full array we apply binary search, and check if an index is reachable or not, if an index is reachable and an index after that is either greater than last index or is not reachable then we return mid
// IsReachable function, takes all climbs into account up until that
// It then sort all the climbs in ascending order and assigns all the bricks first and then all the ladders to higher climbs, at any point if bricks and ladders are exhausted we willr eturn false

// TC - O(NlogN * logN) ~ O(n log^2 N), Binary search takes log N and in each binary search we are performing N log N for sorting the climbs,
// TC - O(N)
function isReachable(index, heights, bricks, ladders) {
    let climbs = []
    for(let i=0; i<index; i++) {
        const diff = heights[i+1] - heights[i]
        if(diff>0) climbs.push(diff)
    }
    climbs.sort((a, b) => a - b)
    for(let climb of climbs) {
        if(bricks>=climb) {
            bricks-=climb
        } else if(ladders>0) ladders--
        else return false
    }
    return true
}

function binarySearchSolution(bricks, ladders) {
    const n = heights.length
    let low = 0
    let high = heights.length-1
    while(low<=high) {
        const mid = low + Math.floor((high-low)/2)
        const midReachable = isReachable(mid, heights, bricks, ladders)
        if(midReachable && (mid+1===n || !isReachable(mid+1, heights, bricks, ladders))) {
            return mid
        } else if(midReachable) {
            low = mid+1
        }
        else high = mid - 1
    }
    return low
}

function isReachable2(index, climbs, bricks, ladders) {
    for(let [climb, climbIndex] of climbs) {
        if(climbIndex<=index) {
            if(bricks>=climb) bricks-=climb
            else if(ladders>0) ladders--
            else return false 
        }
    }
    return true
}

// Improving isReachable function complexity to O(N)
function improvedBinarySearchSolution(heights, bricks, ladders) {
    let climbs = []
    for(let i=0; i<heights.length-1; i++) {
        const diff = heights[i+1] - heights[i]
        if(diff>0) climbs.push([diff, i+1])
    }
    climbs.sort((a, b) => a[0] - b[0])
    const n = heights.length
    let low = 0
    let high = heights.length-1
    while(low<=high) {
        const mid = low + Math.floor((high-low)/2)
        const midReachable = isReachable(mid, climbs, bricks, ladders)
        if(midReachable && (mid+1===n || !isReachable(mid+1, heights, bricks, ladders))) {
            return mid
        } else if(midReachable) {
            low = mid+1
        }
        else high = mid - 1
    }
    return low
}

