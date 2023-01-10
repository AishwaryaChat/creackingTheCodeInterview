// Clone Graph

// Problem Description
// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

// Note: The test cases are generated in the following format (use the following format to use See Expected Output option):
// First integer N is the number of nodes.
// Then, N intgers follow denoting the label (or hash) of the N nodes.
// Then, N2 integers following denoting the adjacency matrix of a graph, where Adj[i][j] = 1 denotes presence of an undirected edge between the ith and jth node, O otherwise.

// Problem Constraints
// 1 <= Number of nodes <= 105

// Input Format
// First and only argument is a node A denoting the root of the undirected graph.

// Output Format
// Return the node denoting the root of the new clone graph.

// Example Input
// Input 1:

//       1
//     / | \
//    3  2  4
//         / \
//        5   6
// Input 2:

//       1
//      / \
//     3   4
//    /   /|\
//   2   5 7 6

// Example Output
// Output 1:

//  Output will the same graph but with new pointers:
//       1
//     / | \
//    3  2  4
//         / \
//        5   6
// Output 2:

//       1
//      / \
//     3   4
//    /   /|\
//   2   5 7 6

// Example Explanation
// Explanation 1:

//  We need to return the same graph, but the pointers to the node should be different.

function Node(data) {
  this.label = data;
  this.neighbours = [];
}

// class Node {
//   constructor(label, neighbours = []) {
//     this.label = label;
//     this.neighbours = neighbours;
//   }
// }

function printGraph(root) {
  const neighbours = root.neighbours;
  if (neighbours.length === 0) return;
  for (let i = 0; i < neighbours.length; i++) {
    printGraph(neighbours[i]);
  }
}

function dfs(root, originalRoot, visited) {
  const neighbours = originalRoot.neighbours;
  if (neighbours.length === 0) return [];

  for (let i = 0; i < neighbours.length; i++) {
    let newNeighbour = new Node(neighbours[i].label);
    if (!visited[newNeighbour.label]) {
      visited[originalRoot.label] = root;
      newNeighbour.neighbours = dfs(newNeighbour, neighbours[i], visited);
      root.neighbours[i] = newNeighbour;
    } else {
      root.neighbours[i] = visited[originalRoot.label];
    }
  }

  return root.neighbours;
}

function dfs2(root, visited) {
  if (root === null) return node;
  if (visited.has(root)) return visited.get(root);
  const cloneNode = new Node(root.label);
  visited.set(root, cloneNode);
  const neighbours = root.neighbours;
  for (let i = 0; i < neighbours.length; i++) {
    cloneNode.neighbours.push(dfs2(neighbours[i], visited));
  }
  return cloneNode;
}

function solve(root) {
  let visited = new Map();
  return dfs2(root, visited);
}

// ***************************************
// let n6 = new Node(6);
// let n5 = new Node(5);
// let n4 = new Node(4);
// n4.neighbours = [n5, n6];
// let n2 = new Node(2);
// let n3 = new Node(3);
// let root = new Node(1);
// root.neighbours = [n3, n2, n4];
// root.neighbours.push(root);
// ***************************************

// ***************************************
let n3 = new Node(279);
let n2 = new Node(43);
let root = new Node(703);
root.neighbours = [n2, n3, root];
n2.neighbours = [n3, root];
n3.neighbours = [n2, n3, root];
// ***************************************
// printGraph(root);
// console.log("root", root);
const ans = solve(root);
// printGraph(ans);
console.log("ans", ans);
