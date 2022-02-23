/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    const arrLength = height.length
    let maxArea = 0
    for(let i=0, j=arrLength-1; i<j && i<arrLength;) {
            let a= Math.min(height[i], height[j]) * (j-i)
            maxArea = Math.max(maxArea, a)
        if(height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }
    return maxArea
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))