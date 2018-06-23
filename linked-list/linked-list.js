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

const takeFromTheEnd = nodes => {
  if (!nodes) {
    throw Error('Get from the end of null nodes');
  }

  if (nodes.nextNode) {
    const [value, newNode] = takeFromTheEnd(nodes.nextNode);
    return [value, new Node(nodes.value, newNode)];
  }

  return [nodes.value, null];
};

const countNodes = (nodes, count = 0) => {
  if (!nodes) return count;
  if (nodes.nextNode) return countNodes(nodes.nextNode, count + 1);
  return count + 1;
};

const deleteValue = (value, nodes) => {
  if (!nodes) return null;
  if (nodes.value === value) return nodes.nextNode;
  return new Node(nodes.value, deleteValue(value, nodes.nextNode));
};

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
    const [value, nodes] = takeFromTheEnd(this.nodes);
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
