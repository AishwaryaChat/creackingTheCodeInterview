// Given Inorder (A) and Preorder(B) of a tree, construct the original tree.

// TC - O(N)
// SC - O(H) - stack space, height of tree

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function constructTree(inOrd, st, end, preorder, start) {
  if (st > end) return null;
  let root = new TreeNode(preorder[start]);
  let rootIndex = inOrd.indexOf(preorder[start]);
  root.left = constructTree(inOrd, st, rootIndex - 1, preorder, start + 1);
  const stEle = inOrd[rootIndex - 1];
  const indexinPre = preorder.indexOf(stEle) + 1;
  
  root.right = constructTree(
    inOrd,
    rootIndex + 1,
    end,
    preorder,
    indexinPre
  );
  return root;
}

// We can also use map to get index
function getIndex(inOrd) {
  let map = {};
  for (let i = 0; i < inOrd.length; i++) {
    map[inOrd[i]] = i;
  }
  return map;
}

function solve(A, B) {
  return constructTree(A, 0, A.length - 1, B, 0);
}

// const A = [2, 1, 3];
// const B = [2, 3, 1];

// const A = [6, 1, 3, 2];
// const B = [6, 3, 2, 1];

const A = [4, 2, 5, 1, 6, 3, 7];
const B = [1, 2, 4, 5, 3, 6, 7];

console.log(solve(A, B));
