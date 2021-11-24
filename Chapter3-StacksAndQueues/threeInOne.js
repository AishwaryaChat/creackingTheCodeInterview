// Discribe how you could use a singlee array to implement 3 stacks

class MultiSTack {
  constructor(numberOfStacks = 1, eachStackCapacity = 0) {
    this.numberOfStacks = numberOfStacks;
    this.eachStackCapacity = eachStackCapacity;
    this.items = [];
    this.sizes = [];
    this.initializeSize(this.numberOfStacks);
  }

  initializeSize(n) {
    for (let i = 0; i < n; i++) {
      this.sizes[i] = 0;
    }
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.eachStackCapacity;
  }

  getIndexOfTop(stackNum) {
    const offset = stackNum * this.eachStackCapacity;
    const size = this.sizes[stackNum];
    return offset + size;
  }

  push(stackNum, value) {
    //   if stack is full return error
    if (this.isFull(stackNum)) console.log("STACK IS FULL");
    // else push to top of that stack
    else {
      const topIndex = this.getIndexOfTop(stackNum);
      this.items[topIndex] = value;
      this.sizes[stackNum]++;
    }
  }

  pop(stackNum) {
    //   if stack is empty return error
    if (this.isEmpty(stackNum)) return "STACK IS EMPTY";
    // else remove one element from top of that stack
    const topIndex = this.getIndexOfTop(stackNum);
    const item = this.items[topIndex];
    this.items[topIndex] = 0;
    this.sizes[stackNum]--;
    return item;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) return "STACK IS EMPTY";
    else {
      const topIndex = this.getIndexOfTop(stackNum);
      return this.items[topIndex];
    }
  }
  print(stackNum) {
    const offset = stackNum * this.eachStackCapacity;
    const topIndex = this.getIndexOfTop(stackNum);
    let stackList = "";
    if (this.isEmpty(stackNum)) console.log("STACK IS EMPTY");
    else {
      for (let i = offset; i < topIndex; i++) {
        stackList += this.items[i] + " ";
      }
      console.log(stackList);
    }
  }
}

const multiStack = new MultiSTack(3, 3);
multiStack.push(0, 1);
multiStack.push(2, 10);
multiStack.push(2, 11);
multiStack.push(2, 12);
multiStack.push(2, 13);
console.log("pop from stack 1: ", multiStack.pop(1));
console.log("stack 1: ");
multiStack.print(0);
console.log("stack 2: ");
multiStack.print(1);
console.log("stack 3: ");
multiStack.print(2);
