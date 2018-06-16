class Node {
  constructor(value, prevNode = null) {
    this.value = value;
    this.prevNode = prevNode;
  }
}

export default class LinkedList {
  constructor() {
    this.refNode = null;
  }

  push(value) {
    this.refNode = new Node(value, this.refNode);
  }

  pop() {
    const { value } = this.refNode;
    this.refNode = this.refNode.prevNode;

    return value;
  }
}
