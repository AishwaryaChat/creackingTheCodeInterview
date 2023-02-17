// Design Phone Directory
// Medium
// company
// Google
// Dropbox
// Amazon
// Design a phone directory that initially has maxNumbers empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

// Implement the PhoneDirectory class:

// PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
// int get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
// bool check(int number) Returns true if the slot number is available and false otherwise.
// void release(int number) Recycles or releases the slot number.

// Example 1:

// Input
// ["PhoneDirectory", "get", "get", "check", "get", "check", "release", "check"]
// [[3], [], [], [2], [], [2], [2], [2]]
// Output
// [null, 0, 1, true, 2, false, null, true]

// Explanation
// PhoneDirectory phoneDirectory = new PhoneDirectory(3);
// phoneDirectory.get();      // It can return any available phone number. Here we assume it returns 0.
// phoneDirectory.get();      // Assume it returns 1.
// phoneDirectory.check(2);   // The number 2 is available, so return true.
// phoneDirectory.get();      // It returns 2, the only number that is left.
// phoneDirectory.check(2);   // The number 2 is no longer available, so return false.
// phoneDirectory.release(2); // Release number 2 back to the pool.
// phoneDirectory.check(2);   // Number 2 is available again, return true.

// Constraints:

// 1 <= maxNumbers <= 10^4
// 0 <= number < maxNumbers
// At most 2 * 10^4 calls will be made to get, check, and release.

/**
 * @param {number} maxNumbers
 */
// TC - O(N), where N is number of queries
var PhoneDirectory = function (maxNumbers) {
  this.available = initializeAvailable();
  function initializeAvailable() {
    let available = {};
    for (let i = 0; i < maxNumbers; i++) {
      available[i] = true;
    }
    return available;
  }
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  for (let [key] of Object.entries(this.available)) {
    delete this.available[key]
    return Number(key);
  }
  return -1
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  if (this.available[number]) {
     this.available[number];
    return true;
  }
  return false;
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  this.available[number] = true;
  return null;
};

function solve(operations, inputs) {
  const phoneDirectory = new PhoneDirectory(inputs[0]);
  const output = [null];
  for (let i = 1; i < inputs.length; i++) {
    switch (operations[i]) {
      case "get":
        output.push(phoneDirectory.get());
        continue;
      case "check":
        output.push(phoneDirectory.check(inputs[i]));
        continue;
      case "release":
        output.push(phoneDirectory.release(inputs[i]));
        continue;
      default:
        continue;
    }
  }
  return output;
}

// const operations = [
//   "PhoneDirectory",
//   "get",
//   "get",
//   "check",
//   "get",
//   "check",
//   "release",
//   "check",
// ];
// const inputs = [[3], [], [], [2], [], [2], [2], [2]];
// Output
// [null, 0, 1, true, 2, false, null, true]

const operations = ["PhoneDirectory","check","get","check","get"]
const inputs = [[1],[0],[],[0],[]]

console.log(solve(operations, inputs));
