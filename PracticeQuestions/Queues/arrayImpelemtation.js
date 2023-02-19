class Queue {
  constructor({ maxLength = 100000000 } = {}) {
    this.queue = [];
    this.front = 0;
    this.rear = -1;
    this.maxLength = maxLength;
  }

  enqueue(x) {
    if (this.rear + 1 < this.maxLength) {
      this.queue[++this.rear] = x;
    } else {
      console.log("full")
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      let ele = this.queue[this.front];
      this.front += 1;
      return ele;
    }
    return null;
  }

  isEmpty() {
    return this.front > this.rear;
  }

  printQueue() {
    return this.queue;
  }

  getRear() {
    return this.rear;
  }

  rearElement() {
    return this.queue[this.rear];
  }

  getFront() {
    return this.front;
  }

  frontElement() {
    return this.queue[this.front];
  }

  getQueue() {
    return this.queue;
  }
}

module.exports = Queue;
