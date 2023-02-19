// Design A Leaderboard
// Medium

// 614

// 84

// Add to List

// Share
// Design a Leaderboard class, which has 3 functions:

// addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
// top(K): Return the score sum of the top K players.
// reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
// Initially, the leaderboard is empty.

// Example 1:

// Input:
// ["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
// [[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
// Output:
// [null,null,null,null,null,null,73,null,null,null,141]

// Explanation:
// Leaderboard leaderboard = new Leaderboard ();
// leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
// leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
// leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
// leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
// leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
// leaderboard.top(1);           // returns 73;
// leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
// leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
// leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
// leaderboard.top(3);           // returns 141 = 51 + 51 + 39;

// Constraints:

// 1 <= playerId, K <= 10000
// It's guaranteed that K is less than or equal to the current number of players.
// 1 <= score <= 100
// There will be at most 1000 function calls.

var Leaderboard = function () {
  this.studentScore = {};
  // this.studentScoreIndex = new Map()
  // this.count = 0
  // this.top = []
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
    if(this.studentScore[playerId]!==undefined) {
        this.studentScore[playerId] = this.studentScore[playerId] + score
    } else {
        this.studentScore[playerId] = score;
    }
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  let topK = Object.keys(this.studentScore)
    .map((key) => ({
      key,
      score: this.studentScore[key],
    }))
    .sort((a, b) => b.score - a.score);
  if (topK.length === 0) return 0;
  let ans = 0;
  for (let i = 0; i < K; i++) {
    ans += topK[i].score;
  }
  return ans;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  delete this.studentScore[playerId];
};

function createOutput(A, B) {
  const leadershopBorad = new Leaderboard();
  let ans = [];
  for (let i = 0; i < A.length; i++) {
    const action = A[i];
    console.log("action", action)
    const [id, score] = B[i];
    switch (action) {
      case "addScore":
        const a = leadershopBorad.addScore(id, score);
        ans.push(a);
        break
      case "reset":
        const b = leadershopBorad.reset(id);
        ans.push(b);
        break
      case "top":
        const c = leadershopBorad.top(id);
        ans.push(c);
        break
    }
  }
  return ans;
}

const A = [
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "addScore",
  "top",
  "reset",
  "reset",
  "addScore",
  "addScore",
  "top",
  "reset",
  "reset",
  "addScore",
  "reset",
];
const B = [
  [1, 13],
  [2, 93],
  [3, 84],
  [4, 6],
  [5, 89],
  [6, 31],
  [7, 7],
  [8, 1],
  [9, 98],
  [10, 42],
  [5],
  [1],
  [2],
  [3, 76],
  [4, 68],
  [1],
  [3],
  [4],
  [2, 70],
  [2],
];

// let leadershopBorad = new Leaderboard();
// leadershopBorad.addScore(1, 23);
// leadershopBorad.addScore(2, 12);
// leadershopBorad.addScore(3, -1);
// leadershopBorad.addScore(4, 18);
// leadershopBorad.reset(4);
// console.log(leadershopBorad.top(3));
console.log(createOutput(A, B));
