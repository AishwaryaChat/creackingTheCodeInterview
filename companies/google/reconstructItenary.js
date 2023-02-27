// Reconstruct Itinerary
// Hard
// company
// Netflix
// Bloomberg
// Google
// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Example 1:

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Example 2:

// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.

// Constraints:

// 1 <= tickets.length <= 300
// tickets[i].length == 2
// fromi.length == 3
// toi.length == 3
// fromi and toi consist of uppercase English letters.
// fromi != toi

// TC - O((N+E)^2)- square because we are backtracing, so its in the worst case
// SC -O(E), for adjacency list and recursion stack
function getAdjacencyList(tickets) {
  tickets.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] < b[1] ? -1 : 1;
    }
    return a[0] < b[0] ? -1 : 1;
  });
  const map = {};
  for (let i = 0; i < tickets.length; i++) {
    const [src, dest] = tickets[i];
    if (map[src] === undefined) map[src] = [];
    map[src].push(dest);
  }
  return map;
}

function dfs(src, graph, ans, visited, n) {
  if (ans.length === n + 1) return true;
  const neighbours = graph[src];
  if (neighbours) {
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      const visitedKey = `${src}_${neighbour}_${i}`;
      if (!visited[visitedKey]) {
        visited[visitedKey] = true;
        ans.push(neighbour);
        if (dfs(neighbour, graph, ans, visited, n)) return ans;
        else {
          ans.pop();
        }
        visited[visitedKey] = false;
      }
    }
  }
  return false;
}

function solve(tickets) {
  const graph = getAdjacencyList(tickets);
  let visited = {};
  let ans = ["JFK"];
  dfs("JFK", graph, ans, visited, tickets.length);
  return ans;
}

// const tickets = [
//   ["MUC", "LHR"],
//   ["JFK", "MUC"],
//   ["SFO", "SJC"],
//   ["LHR", "SFO"],
// ];
// Output: ["JFK","MUC","LHR","SFO","SJC"]

// const tickets = [
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
// ];
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]

// const tickets = [
//   ["JFK", "KUL"],
//   ["JFK", "NRT"],
//   ["NRT", "JFK"],
// ];
// Output: ["JFK", "NRT", "JFK", "KUL"];
// const tickets = [["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]
// Output: ["JFK", "ANU", "EZE", "AXA", "TIA", "ANU", "JFK", "TIA", "ANU", "TIA", "JFK"];

const tickets = [
  ["EZE", "TIA"],
  ["EZE", "HBA"],
  ["AXA", "TIA"],
  ["JFK", "AXA"],
  ["ANU", "JFK"],
  ["ADL", "ANU"],
  ["TIA", "AUA"],
  ["ANU", "AUA"],
  ["ADL", "EZE"],
  ["ADL", "EZE"],
  ["EZE", "ADL"],
  ["AXA", "EZE"],
  ["AUA", "AXA"],
  ["JFK", "AXA"],
  ["AXA", "AUA"],
  ["AUA", "ADL"],
  ["ANU", "EZE"],
  ["TIA", "ADL"],
  ["EZE", "ANU"],
  ["AUA", "ANU"],
];

//Output: ["JFK","AXA","AUA","ADL","ANU","AUA","ANU","EZE","ADL","EZE","ANU","JFK","AXA","EZE","TIA","AUA","AXA","TIA","ADL","EZE","HBA"]
console.log(solve(tickets));
