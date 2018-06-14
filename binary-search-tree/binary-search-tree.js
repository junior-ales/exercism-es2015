const buildNode = (value, bst) => {
  if (bst === null) return new BinarySearchTree(value);
  return bst.insert(value);
};

const callValuesInAscendingOrder = (fn, bst) => {
  if (bst === null) return;

  if (bst.left) {
    callValuesInAscendingOrder(fn, bst.left);
  }

  fn(bst.data);

  if (bst.right) {
    callValuesInAscendingOrder(fn, bst.right);
  }
};

// testing purposes only
const collectValuesInAscendingOrder = bst => {
  if (bst === null) return [];

  let leftResult = [];
  let rightResult = [];

  if (bst.left) {
    leftResult = collectValuesInAscendingOrder(bst.left);
  }

  if (bst.right) {
    rightResult = collectValuesInAscendingOrder(bst.right);
  }

  return [...leftResult, bst.data, ...rightResult];
};

export default class BinarySearchTree {
  constructor(data, left = null, right = null, pointer) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.pointer = pointer;
  }

  insert(value) {
    if (value > this.data) {
      this.right = buildNode(value, this.right);
    } else {
      this.left = buildNode(value, this.left);
    }

    return this;
  }

  each(callback) {
    callValuesInAscendingOrder(callback, this);
  }

  // testing purposes only
  collectValuesInAscendingOrder() {
    return collectValuesInAscendingOrder(this);
  }

  // testing purposes only
  toString() {
    return `${this.data}, left: [${this.left}], right: [${this.right}]`;
  }

  // testing purposes only
  inspect() {
    return `${this.data}, left: [${this.left}], right: [${this.right}]`;
  }
}
