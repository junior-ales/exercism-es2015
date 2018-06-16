class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const addInTheEnd = (value, nodes) => {
  if (!nodes) {
    return new Node(value);
  }

  if (nodes.nextNode) {
    const newNode = addInTheEnd(value, nodes.nextNode);
    return new Node(nodes.value, newNode);
  }

  return new Node(nodes.value, new Node(value));
};

const getFromTheEnd = nodes => {
  if (!nodes) {
    throw Error('Get from the end of null nodes');
  }

  if (nodes.nextNode) {
    const [value, newNode] = getFromTheEnd(nodes.nextNode);
    return [value, new Node(nodes.value, newNode)];
  }

  return [nodes.value, null];
};

const countNodes = (nodes, count = 0) => {
  if (!nodes) return count;
  if (nodes.nextNode) return countNodes(nodes.nextNode, count + 1);
  return count + 1;
};

// TODO
const deleteValue = (value, nodes) => nodes;

export default class LinkedList {
  constructor() {
    this.nodes = null;
  }

  push(value) {
    this.nodes = addInTheEnd(value, this.nodes);
  }

  unshift(value) {
    this.nodes = new Node(value, this.nodes);
  }

  pop() {
    const [value, nodes] = getFromTheEnd(this.nodes);
    this.nodes = nodes;

    return value;
  }

  shift() {
    const { value, nextNode } = this.nodes;
    this.nodes = nextNode;

    return value;
  }

  count() {
    return countNodes(this.nodes);
  }

  delete(value) {
    this.nodes = deleteValue(value, this.nodes);
  }
}
