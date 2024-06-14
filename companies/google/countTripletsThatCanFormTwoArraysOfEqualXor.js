// 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an array of integers arr.

// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

// Let's define a and b as follows:

// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.

// Return the number of triplets (i, j and k) Where a == b.

 

// Example 1:

// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
// Example 2:

// Input: arr = [1,1,1,1,1]
// Output: 10
 

// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[i] <= 108

// We are using the XOR property a ^ b = 0, if a === b, we are doing end - start because we are just counting the number of pairs between start and end, why pairs and not triplets? because as per the question 0 <= i < j <= k, so essentially j can be equal to k, hence pairs and not only triplets
var countTriplets = function(arr) {
    const n = arr.length
    let count = 0
    for(let start=0; start<n-1; start++) {
        let axor = arr[start]
            for(let end=start+1; end<n; end++) {
                axor ^= arr[end]
                if(axor===0) {
                    count += end - start
                }
            }
    }
    return count
};