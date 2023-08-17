function matchPairs(nuts, bolts, low, high) {
    if (low < high) {
      let pivotIndex = partition(nuts, low, high, bolts[high]);
      partition(bolts, low, high, nuts[pivotIndex]);
  
      matchPairs(nuts, bolts, low, pivotIndex - 1);
      matchPairs(nuts, bolts, pivotIndex + 1, high);
    }
  }
  
  function partition(arr, low, high, pivot) {
    let pivotIndex = low;
  
    for (let i = low; i < high; i++) {
      if (arr[i] < pivot) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      } else if (arr[i] === pivot) {
        swap(arr, i, high);
        i--;
      }
    }
  
    swap(arr, pivotIndex, high);
  
    return pivotIndex;
  }
  
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // example usage
  let nuts = [5, 2, 8, 6, 1, 9];
  let bolts = [6, 9, 1, 5, 2, 8];
  
  matchPairs(nuts, bolts, 0, nuts.length - 1);
  
  console.log(nuts);
  console.log(bolts);