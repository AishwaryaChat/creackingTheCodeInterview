function TreeNode(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

function preOrderTraversal(root, ans) {
    if(root === null) return
    ans.push(root.data)
    preOrderTraversal(root.left, ans)
    preOrderTraversal(root.right, ans)
}

function solve(root) {
    const ans = []
    preOrderTraversal(root, ans)
    return ans
}

const N1 = new TreeNode(1);
const N1Left = new TreeNode(6);
N1.left = N1Left;
const N1Right = new TreeNode(2);
const N1RightLeft = new TreeNode(3);
N1Right.left = N1RightLeft;
N1.right = N1Right

console.log(solve(N1))

function iterativePreOrder(root) {
    let ans = []
    let stack = []
    let curr = root
    while(stack.length>0 || curr!==null) {
        if(curr!==null) {
            ans.push(curr.data)
            stack.push(curr)
            curr = curr.left
        } else {
            curr = stack.pop()
            curr = curr.right
        }
    }
    return ans
}
console.log("iterative", iterativePreOrder(N1))

