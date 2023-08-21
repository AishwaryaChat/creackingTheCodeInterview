// Merge k Sorted Lists
// Hard
// company
// Amazon
// Microsoft
// Facebook
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 10^4.
class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLL(root) {
  let curr = root;
  let ans = "";
  while (curr) {
    ans += curr.val + " ";
    curr = curr.next;
  }
  console.log(ans);
}

function mergeTwoLists(l1, l2) {
  const newLL = new Node();
  let curr = newLL;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l2 == null && l1 !== null) {
    curr.next = l1;
  }
  if (l1 == null && l2 !== null) {
    curr.next = l2;
  }
  return newLL.next;
}

// TC - O(N*k)
// SC - O(1)
function solve(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  let i = 0;
  let newList = new Node();
  while (i < lists.length) {
    if (i == 0) {
      newList.next = mergeTwoLists(lists[0], lists[1]);
      i += 2;
    } else {
      newList.next = mergeTwoLists(newList.next, lists[i]);
      i++;
    }
  }
  return newList.next;
}

// TC - O(NlogK), where K is number of lists and N is total number of nodes including all lists. In this aproach we are not traversing most nodes many times. In previous approach we were traversing each node k times
// SC - O(1)
var solveOptimised = function(lists) {
    const n = lists.length;
    let interval = 1;

    while (interval < n) {
      for (let i = 0; i < n - interval; i += interval * 2) {
        lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
      }

      interval *= 2;
    }

    return n > 0 ? lists[0] : null;
};

const n19 = new Node(19);
const n13 = new Node(13, n19);
const n8 = new Node(8, n13);
const root1 = new Node(2, n8);

const n15 = new Node(15);
const n12 = new Node(12, n15);
const n4 = new Node(8, n12);
const root2 = new Node(3, n4);

const n20 = new Node(20);
const n7 = new Node(8, n20);
const n6 = new Node(6, n7);
const n5 = new Node(5, n6);
const root3 = new Node(1, n5);

const y6 = new Node(5)
const root4 = new Node(6, y6)

const lists = [root1, root2, root3, root4];
const merged = solveOptimised(lists);
printLL(merged);
