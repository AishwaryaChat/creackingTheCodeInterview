// 900. RLE Iterator
// Solved
// Medium
// Topics
// Companies
// We can use run-length encoding (i.e., RLE) to encode a sequence of integers. In a run-length encoded array of even length encoding (0-indexed), for all even i, encoding[i] tells us the number of times that the non-negative integer value encoding[i + 1] is repeated in the sequence.

// For example, the sequence arr = [8,8,8,5,5] can be encoded to be encoding = [3,8,2,5]. encoding = [3,8,0,9,2,5] and encoding = [2,8,1,8,2,5] are also valid RLE of arr.
// Given a run-length encoded array, design an iterator that iterates through it.

// Implement the RLEIterator class:

// RLEIterator(int[] encoded) Initializes the object with the encoded array encoded.
// int next(int n) Exhausts the next n elements and returns the last element exhausted in this way. If there is no element left to exhaust, return -1 instead.
 

// Example 1:

// Input
// ["RLEIterator", "next", "next", "next", "next"]
// [[[3, 8, 0, 9, 2, 5]], [2], [1], [1], [2]]
// Output
// [null, 8, 8, 5, -1]

// Explanation
// RLEIterator rLEIterator = new RLEIterator([3, 8, 0, 9, 2, 5]); // This maps to the sequence [8,8,8,5,5].
// rLEIterator.next(2); // exhausts 2 terms of the sequence, returning 8. The remaining sequence is now [8, 5, 5].
// rLEIterator.next(1); // exhausts 1 term of the sequence, returning 8. The remaining sequence is now [5, 5].
// rLEIterator.next(1); // exhausts 1 term of the sequence, returning 5. The remaining sequence is now [5].
// rLEIterator.next(2); // exhausts 2 terms, returning -1. This is because the first term exhausted was 5,
// but the second term did not exist. Since the last term exhausted does not exist, we return -1.
 

// Constraints:

// 2 <= encoding.length <= 1000
// encoding.length is even.
// 0 <= encoding[i] <= 109
// 1 <= n <= 109
// At most 1000 calls will be made to next.

/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
    this.encoding = this.getEncoding(encoding)
    this.iterator = -1
    this.curr = 0
};

RLEIterator.prototype.getEncoding = function(sequence) {
    let i = 0
    let j = 0
    let count = 0
    while(i<sequence.length) {
        if(sequence[i]>0) {
            count += sequence[i]
            sequence[j] = count-1
        } else {
            sequence[j] = -1
        }
        i+=2
        j+=2
    }
    return sequence
}

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    if(this.curr > this.encoding.length-2 || this.iterator===this.encoding[this.encoding.length-2]) return -1
    let prev
    while(n>0 && this.curr<=this.encoding.length-2) {
        if(this.encoding[this.curr]===-1) {
            this.curr+=2
            continue
        }
        prev = this.encoding[this.curr+1]
        if(this.iterator+n<this.encoding[this.curr]) {
            this.iterator+=n
            return prev
        } else {
            const sub = this.encoding[this.curr]-this.iterator
            this.iterator+= sub
            this.curr+=2
            n-=sub
        }
    }
    return this.curr> this.encoding.length-2 && n>0 ? -1 : prev
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */