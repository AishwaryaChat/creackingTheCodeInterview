function cloneObject(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      newObj[key] = cloneObject(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

const defaultHeap = {
  heap: [],
  comparator: (a, b) => a < b,
};
class Heap {
  constructor({ heap = [], comparator = (a, b) => a < b } = defaultHeap) {
    this._heap = heap;
    this.comparator = comparator;
    this.dataType;
  }
  // Math.floor((parentIndex - 1) / 2)
  parent = (i) => ((i + 1) >>> 1) - 1;
  // let LCI = 2 * i + 1;
  left = (i) => (i << 1) + 1;
  // let RCI = 2 * i + 2;
  right = (i) => (i + 1) << 1;
  getSize() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  swap(index1, index2) {
    const index1Value = this._heap[index1];
    const index2Value = this._heap[index2];
    if (this.dataType === "object") {
      this._heap[index2] = cloneObject(index1Value);
      this._heap[index1] = cloneObject(index2Value);
    } else {
      this._heap[index1] = index2Value;
      this._heap[index2] = index1Value;
    }
  }

  bottomUpHeapify(index, parentIndex) {
    if (
      index >= 0 &&
      index < this.getSize() &&
      parentIndex >= 0 &&
      parentIndex < this.getSize() &&
      this.comparator(this._heap[index], this._heap[parentIndex])
    ) {
      this.swap(index, parentIndex);
      const newParentIndex = this.parent(parentIndex);
      this.bottomUpHeapify(parentIndex, newParentIndex);
    }
  }

  setType(type) {
    this.dataType = type;
  }

  push(data) {
    if (Array.isArray(data)) throw new Error("Array types not allowed");
    if (this.dataType || typeof data === "object") {
      this.setType("object");
    }
    this._heap.push(data);
    let dataIndex = this._heap.length - 1;
    let parentIndex = Math.floor((dataIndex - 1) / 2);
    this.bottomUpHeapify(dataIndex, parentIndex);
    return this._heap;
  }

  topDownheapify(N, i) {
    let highestOrSmallest = i;
    let LCI = this.left(i);
    let RCI = this.right(i);
    if (
      LCI >= 0 &&
      LCI < this.getSize() &&
      highestOrSmallest >= 0 &&
      highestOrSmallest < this.getSize() &&
      this.comparator(this._heap[LCI], this._heap[highestOrSmallest])
    )
      highestOrSmallest = LCI;
    if (
      RCI >= 0 &&
      RCI < this.getSize() &&
      highestOrSmallest >= 0 &&
      highestOrSmallest < this.getSize() &&
      this.comparator(this._heap[RCI], this._heap[highestOrSmallest])
    )
      highestOrSmallest = RCI;
    if (highestOrSmallest !== i && i >= 0 && highestOrSmallest >= 0) {
      this.swap(highestOrSmallest, i);
      this.topDownheapify(N, highestOrSmallest);
    }
  }

  pop() {
    if (!this.getSize()) throw new Error("Can not delete, Heap is empty");
    const removed = this._heap[0];
    const N = this.getSize();
    const data = this._heap[N - 1];
    this._heap[0] = data;
    this._heap.pop();
    this.topDownheapify(N, 0);
    return removed;
  }
  getHeap() {
    return this._heap;
  }
}

// const heap = new Heap((a, b) => a > b);
// heap.push(10)
// heap.push(4)
// heap.push(2)
// console.log(heap.getHeap())
module.exports = Heap;
