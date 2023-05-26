// Paint House III
// Hard
// company
// Google
// DE Shaw
// Apple
// There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.

// A neighborhood is a maximal group of continuous houses that are painted with the same color.

// For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].
// Given an array houses, an m x n matrix cost and an integer target where:

// houses[i]: is the color of the house i, and 0 if the house is not painted yet.
// cost[i][j]: is the cost of paint the house i with the color j + 1.
// Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return -1.

 

// Example 1:

// Input: houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
// Output: 9
// Explanation: Paint houses of this way [1,2,2,1,1]
// This array contains target = 3 neighborhoods, [{1}, {2,2}, {1,1}].
// Cost of paint all houses (1 + 1 + 1 + 1 + 5) = 9.
// Example 2:

// Input: houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
// Output: 11
// Explanation: Some houses are already painted, Paint the houses of this way [2,2,1,2,2]
// This array contains target = 3 neighborhoods, [{2,2}, {1}, {2,2}]. 
// Cost of paint the first and last house (10 + 1) = 11.
// Example 3:

// Input: houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n = 3, target = 3
// Output: -1
// Explanation: Houses are already painted with a total of 4 neighborhoods [{3},{1},{2},{3}] different of target = 3.
 

// Constraints:

// m == houses.length == cost.length
// n == cost[i].length
// 1 <= m <= 100
// 1 <= n <= 20
// 1 <= target <= m
// 0 <= houses[i] <= n
// 1 <= cost[i][j] <= 10^4

// TC: O(M⋅T⋅N^2)
//     Each state is defined by the values currIndex, neighborhoodCount, and prevHouseColor. Hence, there will be (M⋅T⋅N) possible states, and in the worst-case scenario, we must visit most of the states to solve the original problem. Each recursive call requires O(N) time as we might need to iterate over all the colors. Thus, the total time complexity is equal to O(M⋅T⋅N^2)
    
// SC: O(M⋅T⋅N)
    
// The memoization results are stored in the table memo with size (M⋅T⋅N). Also, stack space in the recursion is equal to the maximum number of active functions. The maximum number of active functions will be at most M i.e., one function call for every house. Hence, the space complexity is O(M⋅T⋅N)

function findMinCost(houses, cost, target, currHouseIndex, neighbourhoodCount, prevColor, dp) {
    if(currHouseIndex === houses.length) return neighbourhoodCount === target ? 0 : Number.MAX_SAFE_INTEGER
    if(neighbourhoodCount > target) return Number.MAX_SAFE_INTEGER
    const key = `${currHouseIndex}_${neighbourhoodCount}_${prevColor}`
    if(dp[key]!==undefined) return dp[key]
     dp[key] = Number.MAX_SAFE_INTEGER
    if(houses[currHouseIndex]!==0) {
        const newNeighbourhoodCount = neighbourhoodCount + (houses[currHouseIndex] !==prevColor ? 1 : 0)
        dp[key] = findMinCost(houses, cost, target, currHouseIndex+1, newNeighbourhoodCount, houses[currHouseIndex], dp)
    } else {
        const n = cost[0].length
        for(let color=1; color<=n; color++) {
            const newNeighbourhoodCount = neighbourhoodCount + (prevColor===color ? 0 : 1)
            const currCost = cost[currHouseIndex][color-1] + findMinCost(houses, cost, target, currHouseIndex+1, newNeighbourhoodCount, color, dp)
            dp[key] = Math.min(dp[key], currCost)
        }
    }
    return dp[key]
}

function solve(houses, cost, m, n, target) {
    const minCost = findMinCost(houses, cost, target, 0, 0, 0, {})
    return minCost === Number.MAX_SAFE_INTEGER ? -1 : minCost
}

// const houses = [0,0,0,0,0]
// const cost = [[1,10],[10,1],[10,1],[1,10],[5,1]]
// const m = 5
// const n = 2
// const target = 3
// Output: 9

// const houses = [0,2,1,2,0]
// const cost = [[1,10],[10,1],[10,1],[1,10],[5,1]]
// const m = 5
// const n = 2
// const target = 3
// Output: 11

const houses = [3,1,2,3]
const cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]]
const m = 4
const n = 3
const target = 3
// Output: -1

console.log(solve(houses, cost, m, n, target))