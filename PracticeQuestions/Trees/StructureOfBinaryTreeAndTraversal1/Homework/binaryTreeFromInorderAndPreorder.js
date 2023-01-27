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

// TC - O(N)
// SC - O(H) - height of tree
function constructTree(inOrd, st, end, preorder, start, map) {
  if (st > end) return null;
  const root = new TreeNode(preorder[start]);
  let inOrderRootIndex = map[preorder[start]];
  const righTreePreOrderStart = start + 1 + inOrderRootIndex - st;
    root.left = constructTree(
      inOrd,
      st,
      inOrderRootIndex - 1,
      preorder,
      start + 1,
      map
    );
  root.right = constructTree(
    inOrd,
    inOrderRootIndex + 1,
    end,
    preorder,
    righTreePreOrderStart,
    map
  );
  return root;
}

function buildTree(preorder, inorder) {
  const map = {};
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }
  return constructTree(inorder, 0, inorder.length - 1, preorder, 0, map);
}

// const preorder = [2, 1, 3];
// const inorder = [2, 3, 1];

// const preorder = [6, 1, 3, 2];
// const inorder = [6, 3, 2, 1];

// const preorder = [4, 2, 5, 1, 6, 3, 7];
// const inorder = [1, 2, 4, 5, 3, 6, 7];

// const preorder = [5, 6, 1, 2, 3, 4];
// const inorder = [2, 1, 6, 5, 3, 4];

// const preorder = [4, 2, 7, 5, 1, 3, 6];
// const inorder = [1, 2, 4, 5, 7, 3, 6];

// const preorder = [1, 2, 3, 4, 5];
// const inorder = [3, 2, 4, 1, 5];

const preorder =[3,9,20,15,7]
const inorder =[9,3,15,20,7]

console.log(buildTree(preorder, inorder));
