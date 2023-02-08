class SegmentTree {
    constructor(
      { arr = [], factor = Math.min, defaultVal = Number.MAX_SAFE_INTEGER } = {
        arr: [],
        factor: Math.min,
        defaultVal: Number.MAX_SAFE_INTEGER,
      }
    ) {
      this.decidingFactor = factor;
      this.defaultVal = defaultVal;
      this.tree = this.buildTree(arr, [], 0, arr.length - 1, 0);
    }
  
    buildTree(arr, tree, st, end, index) {
      if (st === end) {
        tree[index] = arr[st];
        return;
      }
      const mid = Math.floor((st + end) / 2);
      const LC = 2 * index + 1;
      const RC = 2 * index + 2;
      this.buildTree(arr, tree, st, mid, LC);
      this.buildTree(arr, tree, mid + 1, end, RC);
      tree[index] = this.decidingFactor(tree[LC], tree[RC]);
      return tree;
    }
  
    searchTree(st, end, l, r, index) {
      if (st >= l && end <= r) return this.tree[index];
      if (l > end || r < st) return this.defaultVal;
      const mid = Math.floor((st + end) / 2);
      const LC = 2 * index + 1;
      const RC = 2 * index + 2;
      return this.decidingFactor(
        this.searchTree(st, mid, l, r, LC),
        this.searchTree(mid + 1, end, l, r, RC)
      );
    }
  
    updateTree(st, end, updateIndex, val, index) {
      if (st === end) {
        this.tree[index] = val;
        return;
      }
      const mid = Math.floor((st + end) / 2);
      const LC = 2 * index + 1;
      const RC = 2 * index + 2;
      if (updateIndex <= mid) {
        this.updateTree(st, mid, updateIndex, val, LC);
      } else {
        this.updateTree(mid + 1, end, updateIndex, val, RC);
      }
      this.tree[index] = this.decidingFactor(this.tree[LC], this.tree[RC]);
    }
  }

// const A = [10, 2, 6, -3, 5, 8, 1, 15];
// const A = [1, 4, 1];

// const segmentTree = new SegmentTree({
//   arr: A,
//   factor: Math.min,
//   defaultVal: Number.MAX_SAFE_INTEGER,
// });
// console.log(segmentTree);
// segmentTree.updateTree(0, A.length-1, 0, 5, 0)
// console.log("after", segmentTree);
// console.log(segmentTree.searchTree(0, A.length - 1, 0, 1, 0))

module.exports = SegmentTree;
