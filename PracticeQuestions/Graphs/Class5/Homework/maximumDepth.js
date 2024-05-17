// Maximum Depth
// Unsolved
// feature icon
// Get your doubts resolved blazing fast with Chat GPT Help
// Check Chat GPT
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// Given a Tree of A nodes having A-1 edges. Each node is numbered from 1 to A where 1 is the root of the tree.

// You are given Q queries. In each query, you will be given two integers L and X. Find the value of such node which lies at level L mod (MaxDepth + 1) and has value greater than or equal to X.

// Answer to the query is the smallest possible value or -1, if all the values at the required level are smaller than X.

// NOTE:

// Level and Depth of the root is considered as 0.
// It is guaranteed that each edge will be connecting exactly two different nodes of the tree.
// Please read the input format for more clarification.


// Problem Constraints

// 2 <= A, Q(size of array E and F) <= 105

// 1 <= B[i], C[i] <= A

// 1 <= D[i], E[i], F[i] <= 106



// Input Format

// The first argument is an integer A denoting the number of nodes.

// The second and third arguments are the integer arrays B and C where for each i (0 <= i < A-1), B[i] and C[i] are the nodes connected by an edge.

// The fourth argument is an integer array D, where D[i] denotes the value of the (i+1)th node

// The fifth and sixth arguments are the integer arrays E and F where for each i (0 <= i < Q), E[i] denotes L and F[i] denotes X for ith query.



// Output Format

// Return an array of integers where the ith element denotes the answer to ith query.



// Example Input

// Input 1:

//  A = 5
//  B = [1, 4, 3, 1]
//  C = [5, 2, 4, 4]
//  D = [7, 38, 27, 37, 1]
//  E = [1, 1, 2]
//  F = [32, 18, 26]
// Input 2:

//  A = 3
//  B = [1, 2]
//  C = [3, 1]
//  D = [7, 15, 27]
//  E = [1, 10, 1]
//  F = [29, 6, 26]


// Example Output

// Output 1:

//  [37, 37, 27]
// Output 2:

//  [-1, 7, 27]


// Example Explanation

// Explanation 1:

//       1[7]
//      /    \
//    5[1]  4[37]
//         /    \
//        2[38]  3[27]

//  Query 1: 
//     L = 1, X = 32
//     Nodes for level 1 are 5, 4
//     Value of Node 5 = 1 < 32
//     Value of Node 4 = 37 >= 32
//     Ans = 37
// Explanation 2:

//       1[7]
//      /    \
//    2[15]  3[27]

//  Query 1: 
//     L = 1, X = 6
//     Nodes for level 1 are 2, 3 having value 15 and 27 respectively.
//     Answer = -1 (Since no node is greater or equal to 29).
//  Query 1: 
//     L = 10 % 2 = 0, X = 6
//     Nodes for level 0 is 1 having value 7.
//     Answer = 7.     


// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
// Arg 1: A single Integer, For e.g 9
// Enter Input Here
// Arg 2: An Integer Array, For e.g [1,2,3]
// Enter Input Here
// Arg 3: An Integer Array, For e.g [1,2,3]
// Enter Input Here
// Arg 4: An Integer Array, For e.g [1,2,3]
// Enter Input Here
// Arg 5: An Integer Array, For e.g [1,2,3]
// Enter Input Here
// Arg 6: An Integer Array, For e.g [1,2,3]

// TC - O(N+E + LlogL) + O(Q * log(V))
// SC - O(N+E) // adjacency matrix, levels, queue
const Queue = require("../../../Queues/arrayImpelemtation")

function getAdjList(B, C) {
    let adj = {}
    for(let i=0; i<B.length; i++) {
        const [x, y] = [B[i], C[i]]
        if(adj[x]===undefined) adj[x] = []
        if(adj[y]===undefined) adj[y] = []
        adj[x].push(y)
        adj[y].push(x)
    }
    return adj
}

function getCorrectWeight(weights, maxWeight) {
    let low = 0;
    let high = weights.length-1
    while(low<=high) {
        const mid = low + Math.floor((high-low)/2)
        if(weights[mid] === maxWeight) return maxWeight
        if(weights[mid]<maxWeight) {
            low = mid+1
        } else if(mid-1>=0 && weights[mid-1]<maxWeight) return weights[mid]
        else high = mid-1
    }
    return weights[low]
}

function solve(A, B, C, D, E, F){
    const adj = getAdjList(B, C)
    let queue = new Queue()
    let levels = {}
    queue.enqueue([1, 0])
    let visited = {1: true}
    let maxDepth = 0
    while(!queue.isEmpty()) {
        const [node, level] = queue.dequeue()
        maxDepth = Math.max(maxDepth, level)
        if(levels[level]===undefined) levels[level] = []
        levels[level].push(D[node-1])
        if(adj[node]===undefined) continue
        for(let i=0; i<adj[node].length; i++) {
            if(!visited[adj[node][i]]) {
                visited[adj[node][i]] = true
                queue.enqueue([adj[node][i], level+1])
            }
            
        }
    }
    Object.keys(levels).forEach(level => {
        levels[level].sort((a, b) => a - b)
    })
        let ans = []
    for(let i=0; i<E.length; i++) {
        const [L, X] = [E[i], F[i]]
        const depth = L%(maxDepth+1)
        const currwntLevelsWeights = levels[depth]
        const n = currwntLevelsWeights.length
        if(currwntLevelsWeights[n-1]<X) ans[i] = -1
        else {
            const weight = getCorrectWeight(currwntLevelsWeights, X)
            ans[i] = weight
        }
    }
    return ans
}

const  A = 5
const  B = [1, 4, 3, 1]
const  C = [5, 2, 4, 4]
const  D = [7, 38, 27, 37, 1]
const  E = [1, 1, 2]
const  F = [32, 18, 26]

console.log(solve(A, B, C, D, E, F))
