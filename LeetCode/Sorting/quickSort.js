/* The idea behind this is divide and conquer technique
1. Take a pivot(we are taking 1st element, i.e left of every partition), keep moving from left side if u find element smaller than piviot, if not stop there
2. Keep moving from right side of the array if you find element greater than pivot, if not stop there
3. if(i<j) then swap the elements
4. once you have completed the outer loop, swap pivot and jth element
5. this process is called partitioning, after the first pass our pivot will be at it's correct position in the array, and we will divide the array into two parts. Left parth is elements before pivot, right part is after pivot
6. then we recursively partition the 2 parts and keep applying the same algo, until left < right
*/

// Complexity: O(nlogn)

function partition(items, left, right) {
    let pivot = items[left]
    let i = left
    let j = right
    while(i<j) {
        while(items[i]<= pivot) {
            i++
        }
        while(items[j]>pivot) {
            j--
        }
        if(i<j) {
            [items[i], items[j]] = [items[j], items[i]]
            i++
            j--
        }
        [items[j], items[left]] = [items[left], items[j]]
    }
    return j
}

function quickSort(arr, left, right) {
    if(left<right) {
        const piviotIndex = partition(arr, left, right)
        quickSort(arr, left, piviotIndex-1)
        quickSort(arr, piviotIndex+1, right)
    }
    return arr
}

const arr = [99,40,21,4,100,1,0]

console.log(quickSort(arr, 0, arr.length-1))