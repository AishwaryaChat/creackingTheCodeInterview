// 1094. Car Pooling
// https://leetcode.com/problems/car-pooling/description/
// Medium
// Topics
// Companies
// Hint
// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

 

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
 

// Constraints:

// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation")

// TC - O(NlogN)
// SC - O(N)
var carPooling = function(trips, capacity) {
    trips.sort((a, b) => a[1] - b[1])
    let vacancy = capacity
    let heap = new Heap({comparator: (a, b) => {
        if(a.end === b.end) a.seats > b.seats
        return a.end < b.end
    }})
    let tripsDone = 0
    for(let [seats, start, end] of trips) {
        while(heap.getSize()>0 && heap.peek().end<=start) {
            const ele = heap.pop()
            vacancy+=ele.seats
        }
        if(vacancy>=seats) {
            heap.push({seats, end, start})
            vacancy-=seats
            tripsDone+=1
        }
    }
    return tripsDone === trips.length
};

// Bucket sort
// TC - O(N)
// SC - O(1001) ~ O(1)
var solution2 = function(trips, capacity) {
    trips.sort((a, b) => a[1] - b[1])
    let vacancy = capacity
    let buckets = new Array(1001).fill(0)
    for(let [seats, from, to] of trips) {
        buckets[from] += seats
        buckets[to] -= seats
    }
    let usedCapacity = 0
    for(let capacityNeeded of buckets) {
        usedCapacity += capacityNeeded
        if(usedCapacity > capacity) return false
    }
    return true
};