// const x = {}
// x["foo"] = "bar"
// x.bar = {
//     "first": 200,
//     "second": 300
// }
// console.log(x.bar["first"] + x.bar["second"])

// function a(x) {
//     let ret = ""
//     try {
//         if(x=="foo") {
//             throw new error("yooo")
//         }
//         ret = "try"
//     } catch (err) {
//         ret = "err"
//     } finally {
//         ret = "finalyy"
//     }
//     return ret
// }

// console.log(a("zzz"))

// const a = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("prom")
//         }, 1000)
//         setTimeout(() => {
//             reject(new Error("!errrr"))
//         }, 5000)
//     })

// a.then((data) => {
//     console.log("dataaa", data)
//     return new Promise((resolve, rej) => {
//         rej(new Error("oyee error"))
//     }).catch(err => {
//         console.log("bhaiya error")
//     })
// })
// .catch((error)=> {

//     console.log("bhaiya main error")
// })

// function get(object, path, defaultValue) {
//   let keys = path.split(".");
//   console.log("keys", keys)
//   let val = object;
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     if (val[key]!==undefined) {
//       val = val[key];
//       if (i == keys.length - 1) {
//         return val;
//       }
//     } else {
//       return defaultValue;
//     }
//     console.log("val", val)
//   }
// }
// console.log(get({ a: { b: 2, c: { d: 0 } }, c: 1 }, 'a.c.d'))
// console.log(get({ a: { b: 2 }, c: 1 }, "a.c.e.f"));
// expect(get({ a: { b: 2, c: { d: 0 } }, c: 1 }, "a.c.d")).toEqual(0);
// expect(get({ a: { b: 2 }, c: 1 }, "a.c.e.f")).toEqual(undefined);
// expect(
//   get({ a: { b: 2, c: { d: { e: { foo: 3 } } } }, c: 1 }, "a.c.d.e")
// ).toEqual({ foo: 3 });

// console.log("this in global scope", this)
// this.b = "yoooo"

// let a = () => {
//     console.log("this inside arrow function", this)
// }
// a()

// function debounce(fun) {
//     return function () {
//         console.log("this inside returned function", this)
//         fun()
//     }
// }

// function sayHello() {
//     console.log("hello")
// }

// const debounced = debounce(sayHello)
// debounced()

// function solve(A, pattern) {
//   let i = 0;
//   let j = 0;
//   const indices = [];
//   let startIndex = -1;
//   while (j < pattern.length && i < A.length) {
//       if (j === 0) startIndex = i;
//     if (A[i] === pattern[j]) {
//       i++;
//       j++;
//     } else {
//       j = 0;
//       i++;
//     }
//     if (j === pattern.length) {
//       indices.push(startIndex);
//       j = 0;
//       i++;
//     }
//   }
//   return indices;
// }

// const a = "achajkdacbhdkuiacbe";
// const pattern = "acb";
// console.log(solve(a, pattern));

// (function () {
//   let promise = null;

//   function fetchAllFeatures() {
//     // in reality, this would have been a `fetch` call:
//     // `fetch("/api/features/all")`
//     if (promise) {
//       return promise;
//     }
//     promise = new Promise((resolve) => {
//       console.log("fetchAllFeatures...");
//       const sampleFeatures = {
//         "extended-summary": true,
//         "feedback-dialog": false,
//         "feature-1": undefined,
//       };

//       setTimeout(resolve, 100, sampleFeatures);
//     });
//     return promise;
//   }

//   const cache = new Map();

//   const getFeatureState = async (featureName, defaultReturnValue = false) => {
//     try {
//       if (cache.has(featureName)) {
//         console.log(`Using cache for ${featureName}`);
//         return cache.get(featureName);
//       }
//       const allFeatures = await fetchAllFeatures();
//       // updating cache
//       // setTimeout(() => updateCache(allFeatures, defaultReturnValue));
//       updateCache(allFeatures, defaultReturnValue);
//       return getIsEnabled(allFeatures, featureName, defaultReturnValue);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const getIsEnabled = (allFeatures, featureName, defaultReturnValue) =>
//     allFeatures[featureName] === undefined
//       ? defaultReturnValue
//       : allFeatures[featureName];

//   const updateCache = (updatedFeatureFlags, defaultReturnValue) => {
//     console.log("calling updateCache");
//     for (let feature in updatedFeatureFlags) {
//       const isEnabled = getIsEnabled(
//         updatedFeatureFlags,
//         feature,
//         defaultReturnValue
//       );
//       cache.set(feature, isEnabled);
//     }
//   };
//   return getFeatureState;
// })()("extended-summary", false).then(console.log);

// function currying(func) {
//   function curriedfunc(...args) {
//     console.log("args", args, "func.length", func.length);
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         console.log("next", next);
//         return curriedfunc(...args, ...next);
//       };
//     }
//   }
//   return curriedfunc;
// }

// function multiply(a, b, c) {
//   return a * b * c;
// }

// let curried = currying(multiply);
// console.log(curried(2)(3)(4));

// function fixCurry(fn, totalArgs){
//   totalArgs = totalArgs ||fn.length
//       return function recursor(){
//         console.log("arguments", arguments)
//           return arguments.length<totalArgs?recursor.bind(this, ...arguments): fn.call(this, ...arguments);
//       }
// }

// var add = fixCurry((a,b,c) => a+b+c); //fn = summation function
//  console.log(add(1,2, 3))  // output: 6
//  console.log(add(1)(2,3)) // output: 6
//  console.log(add(1)(3)(2)) // output: 6
//  console.log(add(1,2)(3)) // output: 6
// console.log("add", add)
// const result = add(1)(2)(4);
// console.log(result);

// function curry(func) {
//   return function curried(...args) {
//       console.log("args", args)
//     if(args.length >= func.length) {

//       return func.apply(this, args)
//     }
//     return function (...args2) {
//         console.log("args2", args2, "args", args)
//         // console.log("curried", curried)
//       return curried.apply(this, [...args, ...args2])
//     }
//   }
// }

// function addTwo(a, b) {
//   return a + b
// }

// const curried = curry(addTwo)
// console.log("curried", curried)
// const one = curried(3, 2, 6)
// console.log("one", one)
// const two = one(2)
// console.log("two", two)
// console.log("curries", two(1)(1))

// function curry(func) {
//   return function curried(...args) {
//     function fn(...args2) {
//       return curried.apply(this, [...args, ...args2]);
//     }
//     // Define using an arrow function to preserve `this`.
//     fn[Symbol.toPrimitive] = () => {
//       return func.apply(this, args);
//     };
//     return fn;
//   };
// }

// function addNums(...numbers) {
//   return numbers.reduce((a, b) => a + b, 1);
// }

// console.log("one", two)

// const curried = curry(addNums);
// expect(+)
// console.log(+curried(7, 3, 2));

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     else return a;
//   };
// }

// console.log(add(1)(2)(3)(4)())

function log() {
  setTimeout(() => console.log(1))
  setTimeout(() => console.log(2),0)
  Promise.resolve().then(() => console.log(3))
}

log()
