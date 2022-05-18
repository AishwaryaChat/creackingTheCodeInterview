/*
Q2. Linked-List
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Design and implement a Linked List data structure.
A node in a linked list should have the following attributes - an integer value and a pointer to the next node. It should support the following operations:

insert_node(position, value) - To insert the input value at the given position in the linked list.
delete_node(position) - Delete the value at the given position from the linked list.
print_ll() - Print the entire linked list, such that each element is followed by a single space.
Note:

If an input position does not satisfy the constraint, no action is required.
Each print query has to be executed in a new line.


Problem Constraints
1 <= position <= n where, n is the size of the linked-list.



Input Format
First line contains an integer denoting number of cases, let's say t.
Next t line denotes the cases.


Output Format
When there is a case of print_ll(),  Print the entire linked list, such that each element is followed by a single space.
NOTE: You don't need to return anything.


Example Input
5
i 1 23
i 2 24
p
d 1
p


Example Output
23 24
24


Example Explanation
After first two cases linked list contains two elements 23 and 24.
At third case print: 23 24.
At fourth case delete value at first position, only one element left 24.
At fifth case print: 24.

*/

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0
    }
  
    insertAtBeginning(no) {
      let newNode = new Node(no);
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    insertAtPosition(pos, no) {
      let newNode = new Node(no);
      let i = 1;
      let prev = this.head;
      while (i < pos-1) {
          prev = prev.next;
          i++;
      }
          newNode.next = prev.next
          prev.next = newNode
    }
  
    insert_node(pos, no) {
      if (this.head === null || pos === 1) {
        this.insertAtBeginning(no);
      } else {
        this.insertAtPosition(pos, no);
      }
      this.size++
    }
  
    deleteFromBeginning() {
        if(this.head===null) return
        else {
            this.head = this.head.next
        }
    }
  
    deleteFromPos(pos) {
        let i = 1
        let previous = this.head
      while(i<pos-1 ) {
          previous = previous.next
          i++
      }
          previous.next = previous.next.next
    }
  
    delete_node(pos) {
      if(pos <= this.size) {
          if(this.head === null || pos === 1) {
              this.deleteFromBeginning()
          } else {
              this.deleteFromPos(pos)
          }
          this.size--
      }
    }
  
    print_ll() {
      let temp = this.head;
      let flag = 0;
      while (temp != null) {
          if (flag == 0) {
              process.stdout.write(temp.data.toString());
              flag = 1;
          } else
              process.stdout.write(" " + temp.data.toString());
          temp = temp.next;
      }
      process.stdout.write("\n");
  }
  }



let LL = new LinkedList()
LL.insert_node(1, 2)
LL.insert_node(1, 3)
LL.insert_node(2, 4)
LL.insert_node(2, 5)
console.log("printing")
LL.print_ll()
LL.delete_node(2)
console.log("printing")
LL.print_ll()
LL.delete_node(2)
console.log("printing")
LL.print_ll()
LL.delete_node(4)
console.log("printing")
LL.print_ll()


