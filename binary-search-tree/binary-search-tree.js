const buildNode = (value, bst) => {
  if (bst === null) return new BinarySearchTree(value);
  return bst.insert(value);
};

export default class BinarySearchTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
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
    if (this.left) {
      this.left.each(callback);
    }

    callback(this.data);

    if (this.right) {
      this.right.each(callback);
    }
  }
}
