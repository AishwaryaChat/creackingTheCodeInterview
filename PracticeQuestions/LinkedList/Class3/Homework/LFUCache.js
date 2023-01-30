// LFU Cache
// company
// Amazon
// Microsoft
// VMware
// Google
// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[4,3], cnt(4)=2, cnt(3)=3

// Constraints:

// 0 <= capacity <= 10^4
// 0 <= key <= 10^5
// 0 <= value <= 10^9
// At most 2 * 10^5 calls will be made to get and put.

class Node {
  constructor(key = 0, data = 0, next = null, previous = null, frequency = 1) {
    this.key = key;
    this.data = data;
    this.next = next;
    this.previous = previous;
    this.frequency = frequency;
  }
}

class DLL {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.size = 0;
  }
  insertAtHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
    this.size++;
    return;
  }

  deleteFromHead() {
    if (this.head === null) return "empty";
    const deleted = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.previous = null;
      this.head = this.head.next;
      deleted.next = null;
    }
    this.size--;
    return deleted;
  }

  insertAtTail(node) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return this.tail;
    }
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.size++;
    return this.tail;
  }

  deleteFromTail() {
    if (this.tail === null) return "empty";
    const deleted = this.tail;
    if (this.size == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail.previous.next = null;
      this.tail = deleted.previous;
      deleted.previous = null;
    }
    this.size--;
    return deleted;
  }

  deleteNode(node) {
    if (node == this.head) {
      this.deleteFromHead();
    } else if (node == this.tail) {
      this.deleteFromTail();
    } else {
      node.previous.next = node.next;
      node.next.previous = node.previous;
      this.size--;
    }
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.freq = {};
  this.minFreq = 0;
  this.cache = {};
  this.filled = 0;
  return this;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const node = this.cache[key];
  if (node !== undefined) {
    this.updateNode(node);
    return node.data;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return null;
  const existing = this.cache[key];
  if (existing) {
    existing.data = value;
    this.updateNode(existing);
  } else {
    // Cache is full
    if (this.filled === this.capacity) {
      const minFreqLL = this.freq[this.minFreq];
      const deletedNode = minFreqLL.deleteFromTail();
      delete this.cache[deletedNode.key];
    } else {
      this.filled += 1;
    }
    let newNode = new Node(key, value);
    this.minFreq = 1;
    const minFreqList = this.freq[this.minFreq] || new DLL();
    minFreqList.insertAtHead(newNode);
    this.freq[this.minFreq] = minFreqList;
    this.cache[key] = newNode;
  }
  return null;
};

LFUCache.prototype.updateNode = function (node) {
  const nodeFrequency = node.frequency;
  const currFreqList = this.freq[nodeFrequency];
  currFreqList.deleteNode(node);
  if (nodeFrequency == this.minFreq && currFreqList.getSize() === 0) {
    this.minFreq += 1;
  }
  node.frequency += 1;
  const newFreqList = this.freq[node.frequency] || new DLL();
  newFreqList.insertAtHead(node);
  this.freq[node.frequency] = newFreqList;
};

function solve(operations, inputs) {
  let output = [null];
  let lfuCache = new LFUCache(...inputs[0]);
  for (let i = 1; i < operations.length; i++) {
    switch (operations[i]) {
      case "put":
        output.push(lfuCache.put(...inputs[i]));
        continue;
      case "get":
        output.push(lfuCache.get(...inputs[i]));
        continue;
      default:
        continue;
    }
  }
  return output;
}

// const operations = ["LFUCache","put","put","get","put","get","get","put","get","get","get"]

// const inputs = [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]

// const operations = ["LFUCache", "put", "get"];
// const inputs = [[0], [0, 0], [0]];
// Output: [ null, null, -1 ]

// const operations = ["LFUCache","put","put","get","get","put","get","get","get"]
// const inputs = [[2],[2,1],[3,2],[3],[2],[4,3],[2],[3],[4]]

const operations = ["LFUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
const inputs = [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]

console.log(solve(operations, inputs));
