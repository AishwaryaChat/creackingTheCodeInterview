const LinkedList = require("./singlyLinkedListImplementation");

// Find if the elements in the linked list make a pallindrome or not
const isPalindrome = (head) => {
  let current = head;
  if (current === null || current.next === null) return true;
  let size = 0;
  while (current !== null) {
    current = current.next;
    size++;
  }
  const mid = Math.floor(size / 2);
  const rem = size % 2;
  // reverse half list, get first half in previous, get second half which is not reversed in next
  const [previous, next] = reverseLinkedListTillMid(
    head,
    rem === 0 ? mid - 1 : mid
  );
  let left = previous;
  let right = next;
  //   dont check mid element if length of Linked List is an odd number
  if (rem !== 0) {
    left = previous.next;
  }
  let i = 1,
    j = rem === 0 ? size : size - 1;
  // compare each elemant of left and half
  while (i < j) {
    if (left.data !== right.data) {
      return false;
    }
    left = left.next;
    right = right.next;
    i++;
    j--;
  }
  return true;
};

// Complexity: O(N+N/2+N === 5N/2) === O(N)

const reverseLinkedListTillMid = (head, mid) => {
  let current = head;
  let previous = null;
  let next = null;
  let count = 0;
  while (count <= mid) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    count++;
  }

  return [previous, next];
};

const ll = new LinkedList();
// ll.insertAtBeginning(6);
// ll.insertAtBeginning(4);
ll.insertAtBeginning(1);
ll.insertAtBeginning(2);
// ll.insertAtBeginning(2);
ll.insertAtBeginning(1);
// ll.insertAtBeginning(4);
ll.printList();
const isPalindromeList = isPalindrome(ll.getHead());
console.log(`LL is a palindrome Linked List: `, isPalindromeList);
