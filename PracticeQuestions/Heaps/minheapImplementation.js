class Heap {
  constructor() {
    this._heap = [];
  }
  size() {
    return this._heap.length
  }
  peek() {
    return this._heap[0];
  }
  push(data) {
    this._heap.push(data);
    let index = this._heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this._heap[parentIndex];
    while (data < parent) {
      let temp = this._heap[index];
      this._heap[index] = this._heap[parentIndex];
      this._heap[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      parent = this._heap[parentIndex];
    }
  }
  pop() {
    if (this._heap.length === 0) return 
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
        this._heap[LC] <= ele &&
        (this._heap[RC] === undefined || this._heap[LC] <= this._heap[RC])
      ) {
        let temp = this._heap[i];
        this._heap[i] = this._heap[LC];
        this._heap[LC] = temp;
        i = LC;
      } else if (
        this._heap[RC] !== undefined &&
        this._heap[RC] <= ele &&
        this._heap[RC] <= this._heap[LC]
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

// let heap = [];
// heap = insert(heap, 1);
// heap = insert(heap, -1);
// heap = insert(heap, -2);
// console.log("heap", heap);
// heap = insert(heap, -3);
// console.log("heap", heap);
// heap = deleteMin(heap);
// heap = deleteMin(heap);
// heap = insert(heap, 4);
// heap = insert(heap, 2);
// heap = deleteMin(heap);
// console.log("heap", heap);

module.exports = { Heap };
