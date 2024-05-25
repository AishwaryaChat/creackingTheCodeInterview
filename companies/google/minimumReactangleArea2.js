// 963. Minimum Area Rectangle II
// Solved
// Medium
// Topics
// Companies
// You are given an array of points in the X-Y plane points where points[i] = [xi, yi].

// Return the minimum area of any rectangle formed from these points, with sides not necessarily parallel to the X and Y axes. If there is not any such rectangle, return 0.

// Answers within 10-5 of the actual answer will be accepted.

 

// Example 1:


// Input: points = [[1,2],[2,1],[1,0],[0,1]]
// Output: 2.00000
// Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.
// Example 2:


// Input: points = [[0,1],[2,1],[1,1],[1,0],[2,0]]
// Output: 1.00000
// Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0], with an area of 1.
// Example 3:


// Input: points = [[0,3],[1,2],[3,1],[1,3],[2,1]]
// Output: 0
// Explanation: There is no possible rectangle to form from these points.
 

// Constraints:

// 1 <= points.length <= 50
// points[i].length == 2
// 0 <= xi, yi <= 4 * 104
// All the given points are unique.

// Solution

// The key insight is that four points point1, point2, point3, point4 can form a rectangle if and only if

// the distance between point1 and point2 equals the distance between point3 and point4
// the midpoint of point1 and point2 equals the midpoint of point3 and point4.

// So first we 



function generateDistinctPairs(items) {
    let ans = []
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                ans.push([items[i], items[j]]);
            }
        }
        return ans
    }

function getMidpoint(point1, point2) {
        let [x1, y1] = point1;
        let [x2, y2] = point2;
        return [(x1 + x2) / 2, (y1 + y2) / 2];
    }

function getArea(pair1, pair2) {
        let [[point1,], [point3, point4]] = [pair1, pair2];
        return getDistance(point1, point3) * getDistance(point1, point4);
    }

function getDistance(point1, point2) {
        let [x1, y1] = point1;
        let [x2, y2] = point2;
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
     let diagonalAndMidpoints = {};
        for (let [point1, point2] of generateDistinctPairs(points)) {
            let diagonal = getDistance(point1, point2);
            let midpoint = getMidpoint(point1, point2);
            if (!diagonalAndMidpoints[diagonal + ',' + midpoint]) {
                diagonalAndMidpoints[diagonal + ',' + midpoint] = []
            }
            diagonalAndMidpoints[diagonal + ',' + midpoint].push([point1, point2]);
        }
        let minArea = Infinity;
        for (let [key, pairs] of Object.entries(diagonalAndMidpoints)) {
            for (let [pair1, pair2] of generateDistinctPairs(pairs)) {
                let area = getArea(pair1, pair2);
                if (area < minArea) {
                    minArea = area;
                }
            }
        }
        return minArea === Infinity ? 0 : minArea;
};