/* Principal: Consider a sorted Array(which can be an empty array), 
and then the given array which is unsorted, 
keep taking 1 element from unsorted array and keep adding it to the sorted 
array by comparing that elemnt with each element in the sorted array.
Keep reeating this until the unsorted array is empty
*/

/*
-> Efficient for small data
-> Practicaly more  efficient than bubble sort and solection sort although all have O(n^2) complexity
*/

// Complexity: O(n^2)

const insertionSort = (arr) => {
for(let i=1; i<arr.length; i++) {
    const temp = arr[i]
    // we are treversing the sorted array each time, to compare each element of sorted array with the slected element from the unsorted array and swap them if selected element is smaller than the current element of sorted array
    for(let j=i-1; j>=0; j--) {
        if(temp < arr[j]) {
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
        } else {
            // this means element is already placed at it's correct position
            break
        }
    }
}
return arr
}

const arr = [99,40,21,4,6,100,1,0]

console.log(insertionSort(arr))