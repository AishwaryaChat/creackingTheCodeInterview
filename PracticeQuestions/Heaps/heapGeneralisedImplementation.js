class Heap {
  constructor({ heap = [], comparator }) {
    this._heap = heap;
    this.comparator = comparator;
    this.dataType;
  }

  getSize() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  getDataValue(index) {
    if (index >= 0 && index < this.getSize()) {
      let value = this._heap[index];
      if (this.dataType === "object") {
        value = value.value;
      }
      return value;
    }
  }

  swap(index1, index2) {
    const index1Value = this._heap[index1];
    const index2Value = this._heap[index2];
    if (this.dataType === "object") {
      this._heap[index2] = { value: index1Value.value, key: index1Value.key };
      this._heap[index1] = { value: index2Value.value, key: index2Value.key };
    } else {
      this._heap[index1] = index2Value;
      this._heap[index2] = index1Value;
    }
  }

  bottomUpHeapify(index, parentIndex) {
    const dataAtIndex = this.getDataValue(index);
    const dataAtParent = this.getDataValue(parentIndex);
    if (
      dataAtIndex &&
      dataAtParent &&
      this.comparator(dataAtIndex, dataAtParent)
    ) {
      this.swap(index, parentIndex);
      const newParentIndex = Math.floor((parentIndex - 1) / 2);
      this.bottomUpHeapify(parentIndex, newParentIndex);
    }
  }

  setType(type) {
    this.dataType = type;
  }

  push(data) {
    if (Array.isArray(data)) throw new Error("Array types not allowed");
    let value = data;
    if (this.dataType || typeof data === "object") {
      this.setType("object");
      value = data.value;
    }
    this._heap.push(data);
    let dataIndex = this._heap.length - 1;
    let parentIndex = Math.floor((dataIndex - 1) / 2);
    this.bottomUpHeapify(dataIndex, parentIndex);
    return this._heap;
  }

  topDownheapify(N, i) {
    let highestOrSmallest = i;
    let LCI = 2 * i + 1;
    let RCI = 2 * i + 2;
    const LCIValue = this.getDataValue(LCI);
    const RCIValue = this.getDataValue(RCI);
    if (
      LCIValue &&
      this.comparator(LCIValue, this.getDataValue(highestOrSmallest))
    )
      highestOrSmallest = LCI;
    if (
      RCIValue &&
      this.comparator(RCIValue, this.getDataValue(highestOrSmallest))
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
