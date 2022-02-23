/* 
This sorting method is based on the concept of divide and conquer
It happens with below 2 steps followed recursively
1. Selection: Divide the array into 2 parts, sort the 2 individual parts
2. Merging: merge the two sorted arrays to get a bigger sorted array
*/

// Complexity: O(nlogn)

function merge(leftArr, rightArr) {
    let merged = []
    let i=0; j=0
    while(i<leftArr.length && j<rightArr.length) {
        if(rightArr[j]<leftArr[i]) {
            merged.push(rightArr[j])
            j++
        } else {
            merged.push(leftArr[i])
            i++
        }
    }
        while(j<rightArr.length) {
            merged.push(rightArr[j])
            j++
        }
        while(i<leftArr.length) {
            merged.push(leftArr[i])
            i++
        } 
    return merged
}

function mergeSort(arr) {
    if(arr.length ===1) return arr
    let mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const arr = [99,40,21,4,100,1,0]

console.log(mergeSort(arr))