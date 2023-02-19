function addBinary(A, B) {
  let i = A.length - 1;
  let j = B.length - 1;
  let result = "";
  let carry = 0;
  while (i >= 0 || j >= 0 || carry === 1) {
    let sum = carry;
    if (A[i]) sum += Number(A[i]);
    if (B[j]) sum += Number(B[j]);
    let ans = sum % 2;
    carry = Math.floor(sum / 2);

    result += ans;
    i--;
    j--;
  }
  let finalResult = "";
  for (let j = result.length - 1; j >= 0; j--) {
    finalResult += result[j];
  }
  return finalResult;
}

const A = "1010110111001101101000";
const B = "1000011011000000111100110";

// const A = "1111";
// const B = "11";

console.log(addBinary(A, B));
