// Merge Intervals

// Problem Description
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Problem Constraints
// 0 <= |intervals| <= 10^5

// Input Format
// First argument is the vector of intervals

// second argument is the new interval to be merged

// Output Format
// Return the vector of intervals after merging

// Example Input
// Input 1:

// Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
// Input 2:

// Given intervals [1, 3], [6, 9] insert and merge [2, 6] .

// Example Output
// Output 1:

//  [ [1, 5], [6, 9] ]
// Output 2:

//  [ [1, 9] ]

// Example Explanation
// Explanation 1:

// (2,5) does not completely merge the given intervals
// Explanation 2:

// (2,6) completely merges the given intervals

// **************** Solution *******************

// There can be 2 solution for this problem
// The first one has TC - O(N)

function solve(A, B) {
  B.sort((a, b) => a - b);
  let N = A.length;
  let ans = [];
  if (N == 0) {
    ans.push(B);
    return ans;
  }
  let L1 = B[0];
  let R1 = B[1];
  //   When starting index of B is greater than ending index of last interval of A
  if (L1 > A[N - 1][1]) {
    A.push(B);
    return A;
  }
//   first is keeping track of pushing the merged interval
  let first = false;
//   change is keeping track of, if the invervals ever merged or not
  let changed = false;
  for (let i = 0; i < A.length; i++) {
    const L = A[i][0];
    const R = A[i][1];
    if (L1 <= R) {
      if (R1 >= L) {
        changed = true;
        L1 = Math.min(L1, L);
        R1 = Math.max(R1, R);
      } else {
        // push merged interval only once
        if (!first) {
          ans.push([L1, R1]);
          first = true;
        }
        ans.push([L, R]);
      }
    } else {
      ans.push([L, R]);
    }
  }
  if (changed && !first) ans.push([L1, R1]);
  return ans;
}

// Below one has TC - O(NlogN)
// this solution is an extension of merge overlapping intervals
// just push B to the array A
// Sort A w.r.t starting index of each intervals and do the same
function solveNlogN(A, B) {
  B.sort((a, b) => a - b);
  A.push(B);
  A.sort((a, b) => a[0] - b[0]);
  let merged = [];
  let prevStart = A[0][0],
    prevEnd = A[0][1];
  for (let i = 1; i < A.length; i++) {
    const start = A[i][0];
    const end = A[i][1];
    if (start <= prevEnd) {
      prevEnd = Math.max(end, prevEnd);
    } else {
      merged.push([prevStart, prevEnd]);
      prevStart = start;
      prevEnd = end;
    }
  }
  merged.push([prevStart, prevEnd]);
  return merged;
}

// const A = [
//   [1, 3],
//   [6, 9],
// ];
// const B = [2, 5];
//  [ [1, 5], [6, 9] ]

// const A = [[1, 3], [6, 9]]
// const B = [2, 6]
//  [ [1, 9] ]

// const A = [
//   [0, 2],
//   [4, 7],
//   [8, 9],
//   [10, 12],
//   [14, 16],
// ];
// const B = [5, 10];

// const A = [
//   [6037774, 6198243],
//   [6726550, 7004541],
//   [8842554, 10866536],
//   [11027721, 11341296],
//   [11972532, 14746848],
//   [16374805, 16706396],
//   [17557262, 20518214],
//   [22139780, 22379559],
//   [27212352, 28404611],
//   [28921768, 29621583],
//   [29823256, 32060921],
//   [33950165, 36418956],
//   [37225039, 37785557],
//   [40087908, 41184444],
//   [41922814, 45297414],
//   [48142402, 48244133],
//   [48622983, 50443163],
//   [50898369, 55612831],
//   [57030757, 58120901],
//   [59772759, 59943999],
//   [61141939, 64859907],
//   [65277782, 65296274],
//   [67497842, 68386607],
//   [70414085, 73339545],
//   [73896106, 75605861],
//   [79672668, 84539434],
//   [84821550, 86558001],
//   [91116470, 92198054],
//   [96147808, 98979097],
// ];
// const B = [36210193, 61984219];

// const A = [
//   [1, 2],
//   [3, 6],
// ];
// const B = [10, 8];

// const A = []
// const B = [1,1]

const A = [
  [3, 5],
  [8, 10],
];
const B = [1, 12];

// const A = [
//   [137207, 1734370],
//   [5057723, 5365773],
//   [6997657, 7282669],
//   [7992707, 8945780],
//   [13205169, 13286380],
//   [13478080, 14361199],
//   [14648047, 16875188],
//   [17296166, 19089625],
//   [20424412, 20617334],
//   [21947854, 23077086],
//   [24901000, 26346402],
//   [26650724, 27196856],
//   [28896156, 29975691],
//   [30071726, 31373629],
//   [32397799, 33159528],
//   [33305337, 35470848],
//   [35720431, 37452993],
//   [39147629, 40818780],
//   [40930468, 41652526],
//   [41938404, 44430212],
//   [48114813, 48611161],
//   [50335149, 51023917],
//   [51878891, 52987379],
//   [53902725, 54359910],
//   [56661881, 58671175],
//   [59326619, 61927945],
//   [63215257, 63817507],
//   [64968095, 65653303],
//   [66634969, 67941460],
//   [69980615, 71436951],
//   [71564309, 74681566],
//   [75530199, 76592769],
//   [76988511, 77454928],
//   [77665838, 78087358],
//   [78229841, 79535243],
//   [81250676, 82624050],
//   [83142364, 84255671],
//   [84379892, 84668384],
//   [84954893, 85392199],
//   [87804458, 90457067],
//   [90760520, 91607160],
//   [92361716, 92692045],
//   [95399553, 97983139],
//   [99776803, 99818745],
// ];
// const B = [16197462, 108785977];

console.log(solve(A, B));
// (137207, 1734370) (5057723, 5365773) (6997657, 7282669) (7992707, 8945780) (13205169, 13286380) (13478080, 14361199) (14648047, 108785977)
