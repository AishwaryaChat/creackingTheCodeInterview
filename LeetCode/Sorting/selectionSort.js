/*
Principle: The idea is to start with an empty sorted array 
this is the same as given array, find smallest element from rest of 
the array and replace it with the left most element of the unsorted array
In this way the sorted array size will start increasing and elements from
unsorted array will keep decreasing until the unsorted array has only 
1 element left in it, which is sorted in itself since only 1 element is left
*/

// complexity: Worst case: O(n^2)

function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let minIndex = -1
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[minIndex]) {
                minIndex = j
            }
        }
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
const arr = [99, 15, 1,98, 4, 7]

console.log(selectionSort(arr))