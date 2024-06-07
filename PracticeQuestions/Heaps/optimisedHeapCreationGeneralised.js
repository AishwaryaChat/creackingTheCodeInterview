const cloneArray = (arr) => {
  const newArr = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      newArr.push(cloneArray(ele));
    } else if (typeof ele === "object") {
      newArr.push(cloneObject(ele));
    } else {
      newArr.push(ele);
    }
  });
  return newArr;
};

function cloneObject(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      newObj[key] = cloneArray(newObj[key]);
    } else if (typeof obj[key] === "object") {
      newObj[key] = cloneObject(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

function cloneValue(val) {
  if (Array.isArray(val)) return cloneArray(val);
  else if (typeof obj === "object") return cloneObject(val);
  return val;
}

const defaultHeap = {
  heap: [],
  comparator: (a, b) => a < b,
};
class Heap {
  constructor({ heap = [], comparator = (a, b) => a < b } = defaultHeap) {
    this._heap = heap;
    this.comparator = comparator;
    this.createHeap();
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
    this._heap[index2] = cloneValue(index1Value);
    this._heap[index1] = cloneValue(index2Value);
  }

  createHeap() {
    const N = this._heap.length;
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
    return this._heap;
  }
  heapify(i) {
    const N = this._heap.length;
    let lc = this.left(i);
    let rc = this.right(i);
    let largest = i;
    if (lc < N && this.comparator(this._heap[lc], this._heap[largest]))
      largest = lc;
    if (rc < N && this.comparator(this._heap[rc], this._heap[largest]))
      largest = rc;
    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
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

  push(data) {
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
      LCI < N &&
      highestOrSmallest >= 0 &&
      highestOrSmallest < N &&
      this.comparator(this._heap[LCI], this._heap[highestOrSmallest])
    )
      highestOrSmallest = LCI;
    if (
      RCI >= 0 &&
      RCI < N &&
      highestOrSmallest >= 0 &&
      highestOrSmallest < N &&
      this.comparator(this._heap[RCI], this._heap[highestOrSmallest])
    )
      highestOrSmallest = RCI;
    if (highestOrSmallest !== i && i >= 0 && highestOrSmallest >= 0) {
      this.swap(highestOrSmallest, i);
      this.topDownheapify(N, highestOrSmallest);
    }
  }

  pop() {
    const N = this.getSize();
    if (!N) throw new Error("Can not delete, Heap is empty");
    const removed = this._heap[0];
    const data = this._heap[N - 1];
    this._heap[0] = data;
    this._heap.pop();
    this.topDownheapify(this.getSize(), 0);
    return removed;
  }
  getHeap() {
    return this._heap;
  }
}

module.exports = Heap