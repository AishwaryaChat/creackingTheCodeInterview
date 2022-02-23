// Principal: At end of each pass highest element will bubble to the end of the array
// Worst case complexity: O(n^2)
// Best case complexity: O(n^2)
let bubbleSort = (arr) => {
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i-1; j++) {
        if(arr[j+1]<arr[j]) {
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
        }
    }
}
return arr
}

// better version
// Worst case complexity: O(n^2)
// Best case complexity: O(n)
let bubbleSortOptimised = (arr) => {
    for(let i=0; i<arr.length; i++) {
        /* by keeping this flag we are ensuring that, during any pass if 
        there is no swap that means the array is already sorted 
        and so we will break our loop and return */
        let swapped = 0
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j+1]<arr[j]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                swapped = 1
            }
        }
        if(swapped === 0) break
    }
    return arr
    }


let arr = [99, 15, 1,98, 4, 7]

console.log(bubbleSort(arr))