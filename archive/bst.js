class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
  insert = function (value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left) current = current.left;
        else {
          current.left = newNode;
          return this;
        }
      } else if (value > current.value) {
        if (current.right) current = current.right;
        else {
          current.right = newNode;
          return this;
        }
      } else return undefined;
    }
  };
  search = function (x) {
    if (!this.root) return undefined;
    let current = this.root;
    while (tree) {
      if (x === current.value) return current;
      if (x < current.value) {
        if (current.left) current = current.left;
        else return undefined;
      } else if (x > current.value) {
        if (current.right) current = current.right;
        else return undefined;
      }
    }
  };
  bfs = function () {
    if (!this.root) return [];
    let queue = [this.root];
    let data = [];
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  };
  preOrder() {
    let data = [];
    if (!this.root) return data;
    let traverse = function (node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
  postOrder() {
    let data = [];
    if (!this.root) return data;
    let traverse = function (node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(this.root);
    return data;
  }
  inOrder() {
    let data = [];
    if (!this.root) return data;
    let traverse = function (node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
}

let tree = [45, 40, 55, 30, 49, 58];
let bst = new Bst();
for (let i = 0; i < tree.length; i++) {
  bst.insert(tree[i]);
}
console.log("Pre Order");
console.log(bst.preOrder());
console.log("Post Order");
console.log(bst.postOrder());
console.log("Post Order");
console.log(bst.inOrder());
