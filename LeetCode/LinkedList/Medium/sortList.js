/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const divideList = (head, slow = head, fast = head, prev = head) => {
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return [head, slow];
};

const mergeTwoLists = (left, right) => {
    if(left==null) return right
    else if(right==null) return left
    else {
        if(left.val<right.val){
            left.next = mergeTwoLists(left.next, right)
            return left
        } else {
            right.next = mergeTwoLists(left, right.next)
            return right
        } 
    }
};

var sortList = function (head) {
  if (!head || !head.next) return head;
  const [left, right] = divideList(head);
  return mergeTwoLists(sortList(left), sortList(right));
};

let l3 = new ListNode(3);
let l1 = new ListNode(1, l3);
let l2 = new ListNode(2, l1);
let l4 = new ListNode(4, l2);

console.log(sortList(l4));
