class Heap {
  constructor() {
    this._heap = [];
  }
  size() {
    return this._heap.length;
  }
  peek() {
    return this._heap[0];
  }
  push(data) {
    this._heap.push(data);
    let index = this._heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this._heap[parentIndex];
    while (parent !== undefined && data.data > parent.data) {
      let temp = this._heap[index];
      this._heap[index] = this._heap[parentIndex];
      this._heap[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      parent = this._heap[parentIndex];
      console.log("parent", parent);
    }
  }
  pop() {
    if (this._heap.length === 0) return;
    let n = this.size();
    let popped = this._heap[0];
    this._heap[0] = this._heap[n - 1];
    this._heap.pop();
    let i = 0;
    let LC = 2 * i + 1;
    let RC = 2 * i + 2;
    while (true) {
      let ele = this._heap[i];
      if (
        this._heap[LC] !== undefined &&
        this._heap[LC].data >= ele &&
        (this._heap[RC] === undefined ||
          this._heap[LC].data >= this._heap[RC].data)
      ) {
        let temp = this._heap[i];
        this._heap[i] = this._heap[LC];
        this._heap[LC] = temp;
        i = LC;
      } else if (
        this._heap[RC] !== undefined &&
        this._heap[RC].data >= ele &&
        this._heap[RC].data >= this._heap[LC].data
      ) {
        let temp = this._heap[i];
        this._heap[i] = this._heap[RC];
        this._heap[RC] = temp;
        i = RC;
      } else {
        break;
      }
      LC = 2 * i + 1;
      RC = 2 * i + 2;
    }
    return popped;
  }
}

function solve(A, B) {
    let aDup = A.map(a => a)
  const heap = new Heap();
  for (let i = 0; i < B.length; i++) {
    heap.push({ data: B[i], index: i });
  }
  for (let i = A.length - 1; i >= 0; i--) {
    const top = heap.pop();
    B[i] = top.data;
    A[i] = aDup[top.index];
  }
  return [A, B]
}

const A = [3, 2, 6];
const B = [9, 8, 9];
console.log(solve(A, B));
[6, 2, 3]
[6, 1, 2]
