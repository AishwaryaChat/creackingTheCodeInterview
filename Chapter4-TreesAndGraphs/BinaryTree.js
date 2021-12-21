class BinaryTree {
  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  insertChild(question, side) {
    const newQues = new BinaryTree(question);
    this[side] = newQues;
    return newQues;
  }

  traverse() {}

  contains(question) {
    if (this.question == question) return true;
    return (
      (this.yes && this.yes.contains(question)) ||
      (this.no && this.no.contains(question))
    );
  }
}

const BT1 = new BinaryTree("Do you feel like cooking?");
const BT2YES = BT1.insertChild("Do you have milk?", "yes");
const BT2NO = BT1.insertChild("Do you have toast?", "no");
BT2NO.insertChild("Do you like Butter?", "yes");
console.log(
  "Does tree contain the question Do you like Butter?",
  BT1.contains("Do you like Butter?")
);
// console.log("BT1: ", BT1);

// count leaf nodes
function countRecommendations(node) {
  if (node === null) return 0;
  if (!node.yes && !node.no) {
    return 1;
  }
  return countRecommendations(node.yes) + countRecommendations(node.no);
}
console.log("BT1", BT1);
console.log("countRecommendations: ", countRecommendations(BT1));
