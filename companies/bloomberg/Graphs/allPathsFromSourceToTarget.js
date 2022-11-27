// All Paths From Source to Target
// Medium

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
// Example 2:

// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

// Constraints:

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.

function dfs(source, graph, result, target, temp) {
  if (source === target) {
    temp.push(source);
    return temp;
  }
  temp.push(source);
  const routes = graph[source];
  if (routes.length > 0) {
    for (let i = 0; i < routes.length; i++) {
      const tempResult = dfs(routes[i], graph, result, target, temp);
      const tempLength = tempResult.length;
      if (tempLength > 0 && tempResult[tempLength - 1] === target) {
        result.push(temp.map((a) => a));
      }
      temp.pop();
    }
  }
  return result;
}

function solve(graph, source = 0) {
  const target = graph.length - 1;
  let result = [];
  dfs(source, graph, result, target, []);
  return result;
}

const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];

console.log("solve", solve(graph));
