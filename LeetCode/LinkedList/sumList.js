// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

function ListNode (val = 0, next = null) {
        this.val = val
        this.next = next
}

function addNode(val, head) {
    const newNode = new ListNode(val)
    if(head === null) {
        head = newNode
    } else {
        newNode.next = head
        head = newNode
    }
    return head
}

function reverse(head) {
    let current = head
    let prev = null;
    let next = null;
    while(current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev
}

// Store the sum in a string variable, then read the string in reverse order and store in the linked list

var addTwoNumbersUsingAStringBuffer = function(l1, l2) {
    let carry = 0
    let headNode = null
    let strSum = ''
  let rem = 0;
  while(l1 || l2 || carry>0) {

    let sum = carry
    carry = 0
    if (l1 !== null) {
        sum += l1.val;
        l1=l1.next
      }
      if (l2 !== null) {
        sum += l2.val;
        l2=l2.next
      }
      if (sum > 9) {
        carry = Math.floor(sum / 10);
        rem = sum % 10;
        strSum+=rem
      } else {
        strSum+=sum
      }
  }
        if(strSum==='0') {
            headNode = addNode(Number(strSum), headNode)
            return headNode
        }
  for(let i = strSum.length-1; i>=0; i--) {
        headNode = addNode(Number(strSum[i]), headNode)
  }
    
    return headNode
};

// Store the sum in a linked list and reverse the list in the end

var addTwoNumbersReverseLinkedListAtEnd = function(l1, l2) {
    let carry = 0
    let finalSum = null
  while(l1 || l2 || carry>0) {

    let sum = carry
    carry = 0
    if (l1 !== null) {
        sum += l1.val;
        l1=l1.next
      }
      if (l2 !== null) {
        sum += l2.val;
        l2=l2.next
      }
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      }
    finalSum = addNode(sum, finalSum)
  }
    
    return reverse(finalSum)
};

// let l1 = new ListNode(6)
// l1a = addNode(5, l1)
// // l1b = addNode(9, l1a)
// // l1c = addNode(9, l1b)
// // l1d = addNode(9, l1c)
// // l1e = addNode(9, l1d)
// // l1f = addNode(9, l1e)
// // l1g = addNode(9, l1f)
// let l2 = new ListNode(9)
// l2a = addNode(4, l2)
// l2b = addNode(5, l2a)
// // l2c = addNode(9, l2b)
// // l2d = addNode(9, l2c)
// // console.log("l1a", l1a)
// // console.log("l2", l2b)
// const result = addTwoNumbers(l1a,l2b)
// console.log(result)

// Store the result recuresively in a linked list, so that the result is already a reversed linked list

var addTwoNumbersUsingRecursion = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbersUsingRecursion(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

let l1 = new ListNode(7)
l1a = addNode(8, l1)
// l1b = addNode(9, l1a)
// l1c = addNode(9, l1b)
// l1d = addNode(9, l1c)
// l1e = addNode(9, l1d)
// l1f = addNode(9, l1e)
// l1g = addNode(9, l1f)
let l2 = new ListNode(9)
l2a = addNode(9, l2)
l2b = addNode(2, l2a)
l2c = addNode(7, l2b)
l2d = addNode(9, l2c)
// console.log("l1a", l1a)
// console.log("l2", l2b)
const result = addTwoNumbersUsingRecursion(l1a,l2d)
console.log(result)