// 767. Reorganize String
// https://leetcode.com/problems/reorganize-string/description/
// Medium
// Topics
// Companies
// Hint
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

 

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")
const Queue = require("../../PracticeQuestions/Queues/deQueueArrayImplementation")

// TC - O(N log k), where k is 26, so TC - O(N)
// SC - O(k) ~ O(1)
var reorganizeString = function(s) {
    let map = {}
    let n = s.length
    for(let ch of s) {
        if(map[ch] === undefined) map[ch] = 0
        map[ch]+=1
    }
    let heap = new Heap({comparator: (a, b) => a.freq>b.freq})
    let queue = new Queue()
    for(let [key, freq] of Object.entries(map)) heap.push({key, freq})
    let last
    let output = ""
    while(heap.getSize()>0 || !queue.isEmpty()) {
        let flag = true
        if(heap.getSize()>0) {
            let {key, freq} = heap.peek()
            if(key !== last) {
                output = output + key
                freq-=1
                if(freq>0) queue.enqueue({key, freq})
                last = key
                heap.pop()
                flag = false
            }
            
        }
         if(queue.getSize()>0 && queue.frontElement().key !== last) {
            heap.push(queue.dequeue())
            flag = false
        } 
        if(flag) return ""
    }
    return output
};

// TC - O(N)
// SC - O(26) ~ O(1)
function sol2(s) {
    let map = {}
    let n = s.length
    let maxFreq = -1
    let maxFreqLetter
    for(let ch of s) {
        if(map[ch] === undefined) map[ch] = 0
        map[ch]+=1
        if(maxFreq<map[ch]) {
            maxFreq = map[ch]
            maxFreqLetter = ch
        }
    }
    if(maxFreq>Math.ceil(n/2)) return ""
    let ans = new Array(n)
    let i = 0
    while(maxFreq>0) {
        ans[i] = maxFreqLetter
        maxFreq--
        map[maxFreqLetter]-=1
        i+=2
    }
    let keys = Object.keys(map)
    for(let j=0; j<keys.length; j++) {
        while(map[keys[j]]>0) {
            if(i>=s.length) i = 1
            ans[i] = keys[j]
            map[keys[j]]-=1
            i+=2
        }
    }
    return ans.join("")
}
