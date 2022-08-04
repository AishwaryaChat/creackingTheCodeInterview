  function merge(A, l, m, r) {
    let i = l;
    let j = m + 1;
    let left = [];
    let right = [];
    while (i <= m) {
      left.push(A[i]);
      i++;
    }
    while (j <= r) {
      right.push(A[j]);
      j++;
    }
    i = 0;
    j = 0;
    let k = l;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        A[k] = left[i];
        i++;
      } else {
        A[k] = right[j];
        j++;
      }
      k++;
    }
    while (i < left.length) {
      A[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {
      A[k] = right[j];
      j++;
      k++;
    }
  }
  
  function mergeSort(A, l, r) {
    let invCount = 0;
    if (l < r) {
      let mid = Math.floor((l + r) / 2);
      invCount += mergeSort(A, l, mid);
      invCount += mergeSort(A, mid + 1, r);
      let j = mid;
      for (let i = l; i <= mid; i++) {
          while(j<r && ((A[j+1]*2) < A[i])) {
              j++
          }
          invCount += j - (mid + 1) + 1;
        //   if((A[j + 1] * 2) < A[i]) {
        //     invCount += 1
        //     // break
        // };
      }
      merge(A, l, mid, r);
    }
    return invCount;
  }
  
  function solve(A) {
    return mergeSort(A, 0, A.length - 1);
  }

//   const A = [1, 3, 2, 3, 1]
  const A = [ 14046, 57239, 78362, 99387, 27609, 55100, 65536, 62099, 40820, 33056, 88380, 78549, 57512, 33137, 81212, 32365, 42276, 65368, 52459, 74924, 25355, 76044, 78056, 45190, 94365, 58869, 20611 ]

  console.log(solve(A))