// Serialize and Deserialize N-ary Tree
// https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/description/
// Topics
// Companies
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// For example, you may serialize the following 3-ary tree

// as [1 [3[5 6] 2 4]]. Note that this is just an example, you do not necessarily need to follow this format.

// Or you can follow LeetCode's level order traversal serialization format, where each group of children is separated by the null value.

// For example, the above tree may be serialized as [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14].

// You do not necessarily need to follow the above-suggested formats, there are many more different formats that work so please be creative and come up with different approaches yourself.

// Example 1:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Example 2:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,null,3,2,4,null,5,6]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000
// Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.

class Codec {
  constructor() {
    let tree = [];
  }

  traverseTree(root, parent) {
    if (root === null) return;
    console.log("children of ", root.val);
    console.log(root.children);
    for (let child of root.children) {
      // console.log(child.val)
      this.traverseTree(child, root.val);
    }
  }

  serializeRoot(root, str) {
    // We are putting a k here because we are storing final result in a string and if we dont put a delimiter then if we have node with value 14 then it will be considered 1 and 4
    str = str + root.val + "k";
    for (let child of root.children) {
      str = str + this.serializeRoot(child, "");
    }
    //   for every node when children are over put #, to identify that a parent's children is over
    str = str + "#";
    return str;
  }

  /**
   * @param {Node|null} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    if (root === null) return "";
    this.traverseTree(root);
    return this.serializeRoot(root, "");
  };

  deserializeTree(s, i, root) {
    if (s[i] === "#") return [root, i + 1];
    let j = 0;
    root.children = [];
    while (s[i] !== "#") {
      [root.children[j], i] = this.deserializeTree(s, i + 1, new Node(s[i]));
      j++;
    }
    return [root, i];
  }

  /**
   * @param {string} data
   * @return {Node|null}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    if (data === "") return null;
    data = data.split("k");
    let i = 0;
    let stack = [];
    let ans;
    while (i < data.length) {
      let num = "";
      for (let ch of data[i]) {
        // if we are encountering a # that means its a leaf node 
        if (ch === "#") {
          if (stack.length > 0) {
            //  add this leaf node its parent's children which(parent) will be the second node from stack top
            const popped = stack.pop();
            if (stack.length > 0) {
              const top = stack[stack.length - 1];
              if (top.children === null) top.children = [];
              top.children.push(popped);
            //   if stack is empty that means all the string is procced and last popped node is root node
            } else ans = popped;
          }
        } else {
          num = num + ch + "";
        }
      }
      if (!isNaN(num)) {
        const newNode = new Node(num, []);
        stack.push(newNode);
      }
      i++;
    }
    return ans;
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
