class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function getInOutTime(root) {
  let map = {};
  let t = 0
  function inOut(root, map) {
    if (root === null) return;
    map[root.data] = {
      in: t++,
    };
    inOut(root.left, map);
    inOut(root.right, map);
    map[root.data]["out"] = t++;
  }
  inOut(root, map);
  return map;
}

// const N9 = new TreeNode(9);
// const N8 = new TreeNode(8);
// const N7 = new TreeNode(7, N8);
// const N6 = new TreeNode(6);
// const N5 = new TreeNode(5, null, N9);
// const N4 = new TreeNode(4);
// const N3 = new TreeNode(3, N6, N7);
// const N2 = new TreeNode(2, N4, N5);
// const N1 = new TreeNode(1, N2, N3);

// console.log(solve(N1));

module.exports = getInOutTime
