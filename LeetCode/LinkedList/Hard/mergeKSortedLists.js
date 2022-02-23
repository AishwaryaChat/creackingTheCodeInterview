/*
23. Merge k Sorted Lists
Hard

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Complexity O(kN)
 var mergeKLists = function(lists) {
    let newList
    const listsLength = lists.length
    if(lists.length === 0) return null
    if(lists.length === 1) return lists[0]
    let i=0
    while(i<lists.length) {
        if(i==0) {
            newList = mergeTwoLists(lists[i], lists[i+1])
            i+=2
        } else {
            if(lists[i] !== null) newList = mergeTwoLists(newList, lists[i])
        i++
            
        }
    }
    return newList
};

var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(Number.MIN_SAFE_INTEGER)
    let head = newList
    while(list1&&list2) {
        if(list1.val<list2.val) {
            head.next = list1
            list1 = list1.next
        } else {
            head.next = list2
            list2 = list2.next
        }
        head= head.next
    }
    if(list1===null && list2!==null) {
            head.next=list2
        }
    if(list2===null && list1!==null) {
            head.next=list1
        }
    return newList.next
};