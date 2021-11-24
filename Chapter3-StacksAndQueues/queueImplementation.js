class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  //   Adds item to the back of the queue
  enqueue(data) {
    const node = new Node(data);
    //  if queue is empty
    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.print();
  }

  // remove first element from queue
  dequeue() {
    if (this.isEmpty()) return "QUEUE EMPTY";
    else {
      let removedNode = this.front;
      this.front = this.front.next;
      removedNode.next = null;
      if (!this.front) this.back = null;
      return removedNode;
    }
  }

  getFront() {
    return this.front;
  }

  getBack() {
    return this.back;
  }

  print() {
    if (this.isEmpty()) console.log("QUEUE EMPTY");
    else {
      let temp = this.front;
      let tempArr = [];
      while (temp) {
        tempArr.push(temp.value);
        temp = temp.next;
      }
      console.log(tempArr.join(", "));
    }
  }
}

const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
// newQueue.print();
console.log("Front is: ", newQueue.getFront());
newQueue.dequeue();
newQueue.dequeue();
console.log("Item removed: ", newQueue.dequeue());
console.log("List after removing an element: ");
newQueue.print();
console.log("Back is: ", newQueue.getBack());
console.log("Front is: ", newQueue.getFront());
