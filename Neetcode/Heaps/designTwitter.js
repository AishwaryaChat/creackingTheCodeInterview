// Design Twitter
// company
// Google
// Microsoft
// Yahoo
// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

// Implement the Twitter class:

// Twitter() Initializes your twitter object.
// void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
// List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
// void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
// void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

// Example 1:

// Input
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// Explanation
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

// Constraints:

// 1 <= userId, followerId, followeeId <= 500
// 0 <= tweetId <= 10^4
// All the tweets have unique IDs.
// At most 3 * 10^4 calls will be made to postTweet, getNewsFeed, follow, and unfollow.

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(K log L)- for get feed, L is limit of tweets, K is number of followers of a person
var Twitter = function () {
  this.userDatabase = {};
  this.time = 0;
  this.limit = 10;
};
const User = function (userID) {
  this.userID = userID;
  this.tweets = {};
  this.following = new Set();
  this.following.add(userID);
};
/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.userDatabase[userId]) {
    this.userDatabase[userId] = new User(userId);
  }
  this.userDatabase[userId].tweets[tweetId] = this.time;
  this.time++;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let pq = new Heap({ comparator: (a, b) => a[1] < b[1] });
  if (!this.userDatabase[userId]) {
    return [];
  }
  this.userDatabase[userId].following.forEach((i) => {
    for (let id in this.userDatabase[i].tweets) {
      const time = this.userDatabase[i].tweets[id];
      pq.push([id, time]);
      if (pq.getSize() > this.limit) {
        pq.pop();
      }
    }
  });
  let ans = [];
  while (pq.getSize()) {
    ans.push(Number(pq.pop()[0]));
  }
  return ans.reverse();
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.userDatabase[followerId]) {
    this.userDatabase[followerId] = new User(followerId);
  }
  if (!this.userDatabase[followeeId]) {
    this.userDatabase[followeeId] = new User(followeeId);
  }
  this.userDatabase[followerId].following.add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
     this.userDatabase[followerId].following.delete(followeeId);
};

function solve(operations, input) {
  const twitter = new Twitter();
  let output = [null];
  for (let i = 1; i < operations.length; i++) {
    switch (operations[i]) {
      case "postTweet":
        twitter.postTweet(...input[i]);
        output.push(null);
        continue;
      case "getNewsFeed":
        output.push(twitter.getNewsFeed(...input[i]));
        continue;
      case "follow":
        twitter.follow(...input[i]);
        output.push(null);
        continue;
      case "unfollow":
        twitter.unfollow(...input[i]);
        output.push(null);
        continue;
    }
  }
  return output;
}

// const operations = [
//   "Twitter",
//   "postTweet",
//   "getNewsFeed",
//   "follow",
//   "postTweet",
//   "getNewsFeed",
//   "unfollow",
//   "getNewsFeed",
// ];
// const input = [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]];
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// const operations = [
//   "Twitter",
//   "postTweet",
//   "getNewsFeed",
//   "follow",
//   "getNewsFeed",
//   "unfollow",
//   "getNewsFeed",
// ];
// const input = [[], [1, 1], [1], [2, 1], [2], [2, 1], [2]];
// Output
// [null,null,[1],null,[1],null,[]]

const operations = [
  "Twitter",
  "postTweet",
  "postTweet",
  "unfollow",
  "follow",
  "getNewsFeed",
];

const input = [[], [1, 4], [2, 5], [1, 2], [1, 2], [1]];

console.log(solve(operations, input));
