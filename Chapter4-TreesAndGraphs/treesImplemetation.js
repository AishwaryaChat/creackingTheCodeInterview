class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  traverse() {
    console.log(this.value);
    this.children.forEach((child) => this.traverse.apply(child));
  }
}

const newTree1 = new Tree("Suresh");
const c1 = newTree1.insertChild("Hamesh");
c1.insertChild("Shruti");
c1.insertChild("Manish");
const c2 = newTree1.insertChild("Mukesh");
c2.insertChild("Tanvi");
c2.insertChild("Juhi");
c2.insertChild("Iti");
const c3 = newTree1.insertChild("Janmesh");
c3.insertChild("Raini");
c3.insertChild("Deep");

newTree1.traverse();
