// 1756. Design Most Recently Used Queue
// Solved
// Medium
// Topics
// Companies
// Hint
// Design a queue-like data structure that moves the most recently used element to the end of the queue.

// Implement the MRUQueue class:

// MRUQueue(int n) constructs the MRUQueue with n elements: [1,2,3,...,n].
// int fetch(int k) moves the kth element (1-indexed) to the end of the queue and returns it.
 

// Example 1:

// Input:
// ["MRUQueue", "fetch", "fetch", "fetch", "fetch"]
// [[8], [3], [5], [2], [8]]
// Output:
// [null, 3, 6, 2, 2]

// Explanation:
// MRUQueue mRUQueue = new MRUQueue(8); // Initializes the queue to [1,2,3,4,5,6,7,8].
// mRUQueue.fetch(3); // Moves the 3rd element (3) to the end of the queue to become [1,2,4,5,6,7,8,3] and returns it.
// mRUQueue.fetch(5); // Moves the 5th element (6) to the end of the queue to become [1,2,4,5,7,8,3,6] and returns it.
// mRUQueue.fetch(2); // Moves the 2nd element (2) to the end of the queue to become [1,4,5,7,8,3,6,2] and returns it.
// mRUQueue.fetch(8); // The 8th element (2) is already at the end of the queue so just return it.
 

// Constraints:

// 1 <= n <= 2000
// 1 <= k <= n
// At most 2000 calls will be made to fetch.
 

// Follow up: Finding an O(n) algorithm per fetch is a bit easy. Can you find an algorithm with a better complexity for each fetch call?

// TC - O(N) for each fetch
class LLNode {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class LL {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    insert(data) {
        let tailRef
        if(this.head === null) {
            this.head = new LLNode(data)
            this.tail = this.head
        } else {
            const newNode = new LLNode(data)
            this.tail.next = newNode
            newNode.prev = this.tail
            tailRef = this.tail
            this.tail = newNode
        }
    }

    fetch(n) {
        let curr = this.head
        while(curr && n>1) {
            curr = curr.next
            n--
        }
        let fetched
        if(curr === this.tail) {
            return curr.data
        }
        else if(curr === this.head) {
            fetched = this.head
            this.head= fetched.next
            this.head.prev = null

            // insert
            fetched.next = null
            this.tail.next= fetched
            fetched.prev= this.tail
            this.tail = fetched
        } else {
             fetched = curr
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
            fetched.next = null
            this.tail.next= fetched
            fetched.prev= this.tail
            this.tail = fetched
            
        }
        return fetched.data
    }

    printll() {
        let curr = this.head
        let str = ""
        while(curr) {
            str += curr.data + "->"
            curr = curr.next
        }
        console.log(str)
    }

}

/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.n = n
    this.queue = new LL()
    this.nodeMap = {}
    this.insert(n)
};

MRUQueue.prototype.insert = function(n) {
    for(let i=1; i<=n; i++) {
        const ref = this.queue.insert(i)
    }
}

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    return this.queue.fetch(k)
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */