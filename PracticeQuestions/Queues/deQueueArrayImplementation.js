// Doubly Ended queue Array Implementation

class DeQueue {
  constructor({ maxLength = 1000000 }) {
    this.queue = [];
    this.front = 0;
    this.rear = -1;
    this.N = maxLength;
  }

  isEmpty() {
    return this.rear === -1;
  }

  isFull() {
    return this.rear !== -1 && this.front === (this.rear + 1) % this.N;
  }

  enqueueRear(x) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }
    const rear = (this.rear + 1) % this.N;
    this.rear = rear;
    this.queue[this.rear] = x;
  }

  dequeueFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const element = this.queue[this.front];
    if (this.front === this.rear) {
      this.rear = -1;
      this.front = 0;
    } else {
      this.front = (this.front + 1) % this.N;
    }
    return element;
  }

  dequeueRear() {
    if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
    const element = this.queue[this.rear];
    if (this.front === this.rear) {
      this.rear = -1;
      this.front = 0;
    } else {
      this.rear = (this.rear - 1) % this.N;
    }
    return element;
  }

  getRear() {
    return this.rear;
  }

  getFront() {
    return this.front;
  }

  getQueue() {
    return this.queue;
  }

  getFrontElement() {
    return this.queue[this.front];
  }

  getRearElement() {
    return this.queue[this.rear];
  }
}

module.exports = DeQueue;
