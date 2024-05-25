// 2184. Number of Ways to Build Sturdy Brick Wall
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given integers height and width which specify the dimensions of a brick wall you are building. You are also given a 0-indexed array of unique integers bricks, where the ith brick has a height of 1 and a width of bricks[i]. You have an infinite supply of each type of brick and bricks may not be rotated.

// Each row in the wall must be exactly width units long. For the wall to be sturdy, adjacent rows in the wall should not join bricks at the same location, except at the ends of the wall.

// Return the number of ways to build a sturdy wall. Since the answer may be very large, return it modulo 109 + 7.

 

// Example 1:


// Input: height = 2, width = 3, bricks = [1,2]
// Output: 2
// Explanation:
// The first two walls in the diagram show the only two ways to build a sturdy brick wall.
// Note that the third wall in the diagram is not sturdy because adjacent rows join bricks 2 units from the left.
// Example 2:

// Input: height = 1, width = 1, bricks = [5]
// Output: 0
// Explanation:
// There are no ways to build a sturdy wall because the only type of brick we have is longer than the width of the wall.
 

// Constraints:

// 1 <= height <= 100
// 1 <= width <= 10
// 1 <= bricks.length <= 10
// 1 <= bricks[i] <= 10
// All the values of bricks are unique.

function countSturdyWalls(width, bricks, widthReached, mask, ans) {
    for(let brick of bricks) {
        const joint = widthReached+brick
        if(joint>width) continue
        if(joint === width) ans.push(mask)
        const newMask = mask | (1 << (joint))
        countSturdyWalls(width, bricks, joint, newMask, ans)
    }
}

const MOD = 1000000007

function buildWallFinal(row, height, masks, prevMask, dp) {
    if(row === height) return 1
    const key = `${prevMask}_${row}`
    if(dp[key] !== undefined) return dp[key]
    let result = 0
    for(let i=0; i<masks.length; i++) {
        const mask = masks[i]
        if((mask & prevMask) == 0) {
            result += (buildWallFinal(row+1, height, masks, mask, dp))
        }
    }
    
     dp[key] = (result % MOD)
    return result
}

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
var buildWall = function(height, width, bricks) {
    let newBricks = bricks.filter(brick => brick<=width)
    let possibleCombinations = []
    countSturdyWalls(width, newBricks, 0, 0, possibleCombinations)
    let dp = {}
    const res = (buildWallFinal(0, height, possibleCombinations, 0, dp));
    return res % MOD
};