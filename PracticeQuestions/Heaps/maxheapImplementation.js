function insert(heap, data) {
  if (heap.length === 0) {
    heap.push(data);
    return heap;
  }
  heap.push(data);
  let index = heap.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);
  let parent = heap[parentIndex];
  while (data > parent) {
    [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
    parent = heap[parentIndex];
  }
  return heap;
}

function deleteMax(heap) {
  if (heap.length === 0) return heap;
  let n = heap.length;
  heap[0] = heap[n - 1];
  heap.pop();
  let i = 0;
  let LC = 2 * i + 1;
  let RC = 2 * i + 2;
  while (heap[LC] || heap[RC]) {
    let ele = heap[i];
    if (
      heap[LC] &&
      heap[LC] >= ele &&
      (heap[RC] === undefined || heap[LC] >= heap[RC])
    ) {
      [heap[i], heap[LC]] = [heap[LC], heap[i]];
      i = LC;
    } else if (
      heap[RC] &&
      heap[RC] >= ele &&
      (heap[LC] === undefined || heap[RC] >= heap[LC])
    ) {
      [heap[i], heap[RC]] = [heap[RC], heap[i]];
      i = RC;
    } else {
      break;
    }
    LC = 2 * i + 1;
    RC = 2 * i + 2;
  }
  return heap;
}

module.exports = { insert, deleteMax };
