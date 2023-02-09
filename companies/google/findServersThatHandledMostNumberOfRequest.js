// Find Servers That Handled Most Number of Requests
// Hard

// company
// Google
// Apple
// Wish
// You have k servers numbered from 0 to k-1 that are being used to handle multiple requests simultaneously. Each server has infinite computational capacity but cannot handle more than one request at a time. The requests are assigned to servers according to a specific algorithm:

// The ith (0-indexed) request arrives.
// If all servers are busy, the request is dropped (not handled at all).
// If the (i % k)th server is available, assign the request to that server.
// Otherwise, assign the request to the next available server (wrapping around the list of servers and starting from 0 if necessary). For example, if the ith server is busy, try to assign the request to the (i+1)th server, then the (i+2)th server, and so on.
// You are given a strictly increasing array arrival of positive integers, where arrival[i] represents the arrival time of the ith request, and another array load, where load[i] represents the load of the ith request (the time it takes to complete). Your goal is to find the busiest server(s). A server is considered busiest if it handled the most number of requests successfully among all the servers.

// Return a list containing the IDs (0-indexed) of the busiest server(s). You may return the IDs in any order.

// Example 1:

// Input: k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3]
// Output: [1]
// Explanation:
// All of the servers start out available.
// The first 3 requests are handled by the first 3 servers in order.
// Request 3 comes in. Server 0 is busy, so it's assigned to the next available server, which is 1.
// Request 4 comes in. It cannot be handled since all servers are busy, so it is dropped.
// Servers 0 and 2 handled one request each, while server 1 handled two requests. Hence server 1 is the busiest server.
// Example 2:

// Input: k = 3, arrival = [1,2,3,4], load = [1,2,1,2]
// Output: [0]
// Explanation:
// The first 3 requests are handled by first 3 servers.
// Request 3 comes in. It is handled by server 0 since the server is available.
// Server 0 handled two requests, while servers 1 and 2 handled one request each. Hence server 0 is the busiest server.
// Example 3:

// Input: k = 3, arrival = [1,2,3], load = [10,12,11]
// Output: [0,1,2]
// Explanation: Each server handles a single request, so they are all considered the busiest.

// Constraints:

// 1 <= k <= 10^5
// 1 <= arrival.length, load.length <= 10^5
// arrival.length == load.length
// 1 <= arrival[i], load[i] <= 10^9
// arrival is strictly increasing.
const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(nlogk)
// SC - O(k)
var solve = function (k, arrival, load) {
  let serverHeap = new Heap({ comparator: (a, b) => a < b });
  let count = new Array(k).fill(0);
  let maxCount = 0;
  for (let i = 0; i < k; i++) {
    serverHeap.push(i);
  }
    let tasksHeap = new Heap({ comparator: (a, b) => a[1] < b[1] });
  for (let i = 0; i < arrival.length; i++) {
    const currTime = arrival[i];
    while (tasksHeap.getSize() > 0 && tasksHeap.peek()[1] <= currTime) {
      const [server] = tasksHeap.pop();
    //   not completely sure about this calculation
      serverHeap.push(((server-i)%k + k)%k+i);
    }
    if (serverHeap.getSize()>0) {
      const server = serverHeap.pop();
      tasksHeap.push([server % k, arrival[i] + load[i]]);
      count[server % k] += 1;
      maxCount = Math.max(maxCount, count[server % k]);
    }
  }
  let ans = [];
  for (let i = 0; i < k; i++) {
    if (count[i] === maxCount) ans.push(i);
  }
  return ans;
};

// const k = 3,
//   arrival = [1, 2, 3, 4, 5],
//   load = [5, 2, 3, 3, 3];
// Output: [1]

// const k = 3, arrival = [1,2,3,4], load = [1,2,1,2]
// Output: [0]

// const k = 3,
//   arrival = [1, 2, 3],
//   load = [10, 12, 11];
// Output: [0,1,2]

const k = 7;
//   0  1   2   3  4  5   6   7   8   9   10  11  12  13  14  15
arrival = [1, 3, 4, 5, 6, 11, 12, 13, 15, 19, 20, 21, 23, 25, 31, 32];
load = [9, 16, 14, 1, 5, 15, 6, 10, 1, 1, 7, 5, 11, 4, 4, 6];

console.log(solve(k, arrival, load));
