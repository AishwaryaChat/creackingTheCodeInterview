// 149. Max Points on a Line
// Solved
// Hard
// Topics
// Companies
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

 

// Example 1:


// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3
// Example 2:


// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
 

// Constraints:

// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// All the points are unique.
// If three points have same slope they lie on same time, we will count all the points with same slope and that will be our answer
var maxPoints = function(points) {
    let max = 1
    for(let i=0; i<points.length; i++) {
        let slopeMap  = {}
        const [x1, y1] = points[i]
        for(let j=0; j<points.length; j++)  {
            if(i===j) continue
            const [x2, y2] = points[j]
            const slope = (y2-y1)/(x2-x1)
            if(slopeMap[slope] === undefined) slopeMap[slope] = 0
            slopeMap[slope]+=1
            // we are doing plus one in slopeMap[slope]+1
            // because in every two points we are adding up only 1 point
            max = Math.max(max, slopeMap[slope]+1)
        }
    }
    return max
};