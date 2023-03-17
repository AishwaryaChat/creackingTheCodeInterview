// Find All Possible Recipes from Given Supplies
// Medium
// company
// Amazon
// Google
// TikTok
// You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. Ingredients to a recipe may need to be created from other recipes, i.e., ingredients[i] may contain a string that is in recipes.

// You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them.

// Return a list of all the recipes that you can create. You may return the answer in any order.

// Note that two recipes may contain each other in their ingredients.

// Example 1:

// Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
// Output: ["bread"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// Example 2:

// Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// Example 3:

// Input: recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich","burger"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".

// Constraints:

// n == recipes.length == ingredients.length
// 1 <= n <= 100
// 1 <= ingredients[i].length, supplies.length <= 100
// 1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10
// recipes[i], ingredients[i][j], and supplies[k] consist only of lowercase English letters.
// All the values of recipes and supplies combined are unique.
// Each ingredients[i] does not contain any duplicate values.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// This question is solved using Topological sort
// TC - O(V + E), where V is (R + S), where R is number of recepies and S is number of supplies, and E is Number of ingredients for all recepies
// SC - O(V + E), for adjlist and indegree
function getAdjacencyList(recepies, ingredients) {
  let map = {};
  for (let i = 0; i < recepies.length; i++) {
    for (let ingredient of ingredients[i]) {
      if (!map[ingredient]) map[ingredient] = [];
      map[ingredient].push(recepies[i]);
    }
  }
  return map;
}

function getIndegree(recepies, ingredients) {
  let indegree = {};
  for (let i = 0; i < recepies.length; i++) {
    indegree[recepies[i]] = ingredients[i].length;
  }
  return indegree;
}

function solve(recepies, ingredients, supplies) {
  const adjList = getAdjacencyList(recepies, ingredients);
  const indegree = getIndegree(recepies, ingredients);
  let ans = [];
  const queue = new Queue();
  for (let supply of supplies) {
    queue.enqueue(supply);
  }
  while (!queue.isEmpty()) {
    const ele = queue.dequeue();
    const neighbours = adjList[ele];
    if (neighbours) {
      for (let neighbour of neighbours) {
        indegree[neighbour] -= 1;
        if (indegree[neighbour] === 0) {
          ans.push(neighbour);
          queue.enqueue(neighbour);
        }
      }
    }
  }
  return ans;
}

const recipes = ["bread"]
const ingredients = [["yeast","flour"]]
const supplies = ["yeast","flour","corn"]
// Output: ["bread"]

// const recipes = ["bread","sandwich"]
// const ingredients = [["yeast","flour"],["bread","meat"]]
// const supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich"]

// const recipes = ["bread", "sandwich", "burger"];
// const ingredients = [
//   ["yeast", "flour"],
//   ["bread", "meat"],
//   ["sandwich", "meat", "bread"],
// ];
// const supplies = ["yeast", "flour", "meat"];
// Output: ["bread","sandwich","burger"]

console.log(solve(recipes, ingredients, supplies));
