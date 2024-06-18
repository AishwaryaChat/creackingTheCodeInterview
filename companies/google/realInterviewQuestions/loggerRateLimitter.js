const Queue = require("../../../PracticeQuestions/Queues/deQueueArrayImplementation");

function flushMessages(queue, time, conflictingMap) {
  while (!queue.isEmpty() && time - queue.getFrontElement().time >= 10) {
    const ele = queue.dequeueFront();
    if (
      !conflictingMap[ele.message] ||
      !conflictingMap[ele.message][ele.time]
    ) {
      console.log(ele.message, ele.time);
    }
  }
}

// function solve(input) {
//   let map = {};
//   let conflictingMap = {};
//   let queue = new Queue();
//   let currT = 0;
//   const n = input.length;
//   for (let i = 0; i < n; i++) {
//     const [time, message] = input[i];
//     const prevTime = map[message];
//     if (prevTime !== undefined && time - prevTime < 10) {
//       if (conflictingMap[message] === undefined) conflictingMap[message] = {};
//       conflictingMap[message] = {
//         ...conflictingMap[message],
//         [prevTime]: true,
//         [time]: true,
//       };
//     }
//     flushMessages(queue, time, conflictingMap);
//     currT = time;
//     map[message] = time;
//     queue.enqueueRear({ time, message });
//   }
//   flushMessages(queue, input[n - 1][0] + 10, conflictingMap);
// }

function solve(input) {
  let map = {};
  let conflictingMap = {};
  let queue = new Queue();
  let currT = 0;
  const n = input.length;
  for (let i = 0; i < n; i++) {
    const [time, message] = input[i];
    const prevTime = map[message];
    while (!queue.isEmpty() && time-queue.getFrontElement().time >= 10) {
      const ele = queue.dequeueFront();
      if (
        !conflictingMap[ele.message] ||
        !conflictingMap[ele.message][ele.time]
      ) {
        console.log(ele.message, ele.time);
        if (time - map[message] >= 10) delete map[message];
      }
    }
    if (prevTime && time - prevTime < 10) {
      if (conflictingMap[message] === undefined) conflictingMap[message] = {};
      conflictingMap[message] = {
        ...conflictingMap[message],
        [prevTime]: true,
        [time]: true,
      };
    }
    queue.enqueueRear({ time, message });
    map[message] = time;
  }
  flushMessages(queue, input[n - 1][0] + 10, conflictingMap);
}

const input = [
  [1, "a"],
  [1, "b"],
  [9, "c"],
  [10, "a"],
  [12, "b"],
  [20, "a"],
  [21, "b"],
  [31, "a"],
  [32, "a"],
];
solve(input);
