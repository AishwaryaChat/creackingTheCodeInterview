class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //   Add element to top of stack
  push(item) {
    this.items[this.count] = item;
    console.log(`${item} is pushed at position ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  //   Remove element from top of stack
  pop() {
    if (this.count === 0) return "Stack is empty";
    const deletedItem = this.items[this.count - 1];
    console.log(`Item deleted from stack: ${deletedItem}`);
    this.count -= 1;
    return deletedItem;
  }

  peek() {
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }

  //  Empties stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack emptied");
    return this.items;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.print();
stack.pop();
console.log(`Peek element is: ${stack.peek()}`);
console.log(`Size of stack is: ${stack.size()}`);
stack.clear();
