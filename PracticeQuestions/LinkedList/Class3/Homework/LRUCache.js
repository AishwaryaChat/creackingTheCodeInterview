// LRU Cache

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// set(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting the new item.
// The LRUCache will be initialized with an integer corresponding to its capacity. Capacity indicates the maximum number of unique keys it can hold at a time.

// Definition of "least recently used" : An access to an item is defined as a get or a set operation of the item. "Least recently used" item is the one with the oldest access time.

// NOTE: If you are using any global variables, make sure to clear them in the constructor.

// Example :

// Input :
//          capacity = 2
//          set(1, 10)
//          set(5, 12)
//          get(5)        returns 12
//          get(1)        returns 10
//          get(10)       returns -1
//          set(6, 14)    this pushes out key = 5 as LRU is full.
//          get(5)        returns -1

class Node {
  constructor(key = 0, data = 0, next = null, previous = null) {
    this.key = key;
    this.data = data;
    this.next = next;
    this.previous = previous;
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

  printLL() {
    let LL = this.head;
    while (LL) {
      console.log(LL.data);
      LL = LL.next;
    }
  }
}

function LRUCache(capacity) {
  this.capacity = capacity;
  this.filled = 0;
  this.cacheMap = {};
  const then = this;
  let LL = new DLL();
  return {
    // get function returns an integer
    get: function (key) {
      let existingNode = then.cacheMap[key];
      if (existingNode !== undefined) {
        const newNode = new Node(key, existingNode.data);
        LL.deleteNode(existingNode);
        LL.insertAtTail(newNode);
        then.cacheMap[key] = newNode;
        return existingNode.data;
      }
      return -1;
    },
    // set returns nothing
    set: function (key, value) {
      let existingNode = then.cacheMap[key];
      let newNode = new Node(key, value);
      // already exist
      if (existingNode !== undefined) {
        LL.deleteNode(existingNode);
        LL.insertAtTail(newNode);
        then.cacheMap[key] = newNode;
      } else {
        // does not exist in cache
        // if capacity full, delete least recently used element from head and insert new element at tail
        if (then.filled === then.capacity) {
          let deletedNode = LL.deleteFromHead();
          LL.insertAtTail(newNode);
          delete then.cacheMap[deletedNode.key];
          then.cacheMap[key] = newNode;
        } else {
          // if capicity still left then simply insert new node at Tail
          LL.insertAtTail(newNode);
          then.cacheMap[key] = newNode;
          then.filled++;
        }
      }
    },
  };
}

const S = "S";
const G = "G";

function execute(capacity, operations) {
  const LRU = new LRUCache(capacity);
  for (let i = 0; i < operations.length; i++) {
    const [op, key, value] = operations[i];
    if (op === G) {
      const val = LRU.get(key);
    } else {
      LRU.set(key, value);
    }
  }
}

// const operations = [
//   [S, 5, 13],
//   [S, 9, 6],
//   [S, 4, 1],
//   [G, 4],
//   [S, 6, 1],
//   [S, 8, 11],
//   [G, 13],
//   [G, 1],
//   [S, 12, 12],
//   [G, 10],
//   [S, 15, 13],
//   [S, 2, 13],
//   [S, 7, 5],
//   [S, 10, 3],
//   [G, 6],
//   [G, 10],
//   [S, 15, 14],
//   [S, 5, 12],
//   [G, 5],
//   [G, 7],
//   [G, 15],
//   [G, 5],
//   [G, 6],
//   [G, 10],
//   [S, 7, 13],
//   [G, 14],
//   [S, 8, 9],
//   [G, 4],
//   [S, 6, 11],
//   [G, 9],
//   [S, 6, 12],
//   [G, 3],
// ];
// const capacity = 4

const operations = [
  [S, 2, 1],
  [S, 2, 2],
  [G, 2],
  [S, 1, 1],
  [S, 4, 1],
  [G, 2],
];
const capacity = 1;

execute(capacity, operations);
