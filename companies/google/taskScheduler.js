// 621. Task Scheduler
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

// ​Return the minimum number of intervals required to complete all tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8

// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

// Example 2:

// Input: tasks = ["A","C","A","B","D","B"], n = 1

// Output: 6

// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:

// Input: tasks = ["A","A","A", "B","B","B"], n = 3

// Output: 10

// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 

// Constraints:

// 1 <= tasks.length <= 104
// tasks[i] is an uppercase English letter.
// 0 <= n <= 100

// Coudnt understand this solution much
// TC - O(N)
// SC - O(26) === O(1)
var leastInterval = function(tasks, n) {
    let freqMap = {}
    for(let task of tasks) {
        if(freqMap[task] === undefined) freqMap[task] = 0
        freqMap[task]+=1
    }
    let maxHeap = new Heap({comparator: (a, b) => a>b})
    for(let freq of Object.values(freqMap)) {
        maxHeap.push(freq)
    }
    let t =0
    while(maxHeap.getSize()>0) {
        let cycle = n+1
        let store = []
        let taskCount = 0
        while(cycle-- > 0 && maxHeap.getSize()>0) {
            const freq = maxHeap.pop()
            if(freq>1) store.push(freq-1)
            taskCount++
        }
        for(let st of store) maxHeap.push(st)
        t += maxHeap.getSize() > 0 ? n+1 : taskCount
    }
    return t
};

// Using maxheap and queue
// TC - O(N)
// SC - O(26) === O(1)
var Solution2 = function(tasks, n) {
    let freqMap = {}
    for(let task of tasks) {
        if(freqMap[task] === undefined) freqMap[task] = 0
        freqMap[task]+=1
    }
    let maxHeap = new Heap({comparator: (a, b) => a>b})
    for(let freq of Object.values(freqMap)) {
        maxHeap.push(freq)
    }
    let t =0
    let queue = new MyQueue()
    while(maxHeap.getSize() > 0 || !queue.isEmpty()) {
            t++
        if(maxHeap.getSize() > 0) {
            let freq = maxHeap.pop()
            freq -= 1
            if(freq>0) queue.enqueue([freq, t+n])
        }
        if(!queue.isEmpty() && queue.frontElement()[1]<=t) {
            const ele = queue.dequeue()
            maxHeap.push(ele[0])
        }
    }
    return t
}