class Stack {
    constructor() {
      this.st = [];
      this.top = -1;
    }
    push(ele) {
      this.st.push(ele);
      this.top += 1;
    }
  
    pop() {
      const ele = this.st.pop();
      this.top -= 1;
      return ele;
    }
    peak() {
      return this.st[this.top];
    }
  
    isEmpty() {
      return this.top === -1;
    }
  }

  module.exports = Stack