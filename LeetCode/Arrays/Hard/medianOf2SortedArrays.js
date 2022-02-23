// Median of two Sorted Arrays of Different Sizes | Binary Search, complexity should be O(log(n+m))

const findMedian = (arr) => {
    const l = arr.length
    const mid = Math.floor(l/2)
    const median = l%2 === 0 ? (arr[mid] + arr[mid-1])/2 : arr[mid]
    return median
}

const findMedianSortedArrays = (nums1, nums2) => {
    const n1 = nums1.length
    const n2 = nums2.length
    if(n1==0 && n2==0) return 0
    else if(n1 === 0) return findMedian(nums2)
    else if(n2 === 0) return findMedian(nums1)
    if(n1 > n2) {
        findMedianSortedArrays(nums2,nums1)
    }
    let low = 0;
    let high = n1;
    while(low<=high){
        let cut1 = Math.floor((high-low)/2) + low
        let cut2 = Math.floor((n1+n2+1)/2) - cut1;
        let left1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[cut1-1]
        let left2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[cut2-1]
        let right1 = cut1 === n1 ? Number.MAX_SAFE_INTEGER : nums1[cut1]
        let right2 = cut2 === n2 ? Number.MAX_SAFE_INTEGER : nums2[cut2]
        if(left1 <= right2 && left2 <= right1){
            if((n1+n2)%2 === 0) {
                return (Math.max(left1,left2) + Math.min(right1, right2))/2
            } else {
                return Math.max(left1, left2)
            }
        } else if(left1 > right2) {
            high = cut1-1
        } else if(left2 > right1){
            low = cut1 + 1
        }
    }
    return 0.0
}

const findMedianSortedArrays2 = (nums1, nums2) => {
    const small = nums1.length < nums2.length ? nums1 : nums2;
    const large = nums1.length >= nums2.length ? nums1 : nums2;
  
    const sLength = small.length;
    const lLength = large.length;
    const totalSize = sLength + lLength;
    const isOdd = totalSize % 2 === 0;

    let start = 0;
    let end = sLength;
        
    while (start <= end) {
        const sMid = Math.floor((end - start) / 2) + start;
        const lMid = Math.floor((totalSize + 1) / 2) - sMid;

        const sLeftNum = sMid === 0 ? -Infinity : small[sMid - 1];
        const sRightNum = sMid === sLength ? Infinity : small[sMid];

        const lLeftNum = lMid === 0 ? -Infinity : large[lMid - 1];
        const lRightNum = lMid === lLength ? Infinity : large[lMid];

        // Positive terminal condition; found middle
        if (lLeftNum <= sRightNum && sLeftNum <= lRightNum) {
            const leftVal = Math.max(sLeftNum, lLeftNum);
            
            if (isOdd) {
                const rightVal = Math.min(sRightNum, lRightNum);
                return (leftVal + rightVal) / 2;
            }
            else {
                return leftVal;
            }
        }
        // otherwise continue binary search
        else if (sLeftNum > lRightNum) {
            end = sMid - 1;
        }
        else {
            start = sMid + 1;
        }
    }
    return 0.0
}

console.log(findMedianSortedArrays2([],[]))
