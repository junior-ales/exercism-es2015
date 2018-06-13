const isSorted = node => node.join('') === node.sort((x, y) => x - y).join('');

const middleIndex = node => Math.ceil(node.length / 2) - 1;
const nodeMiddleValue = node => node[middleIndex(node)];
const rightNode = node => node.slice(middleIndex(node));
const leftNode = node => node.slice(0, middleIndex(node));

const search = (value, node) => {
  const middleValue = nodeMiddleValue(node);

  if (node.length === 0) return -1;
  if (value < middleValue) return search(value, leftNode(node));
  if (value > middleValue) return search(value, rightNode(node));
  return middleIndex(node);
};

export default function BinarySearch(input) {
  const sortedArray = isSorted(input) ? input : void 0;
  const indexOf = value => search(value, sortedArray);

  return sortedArray ? { indexOf, array: sortedArray } : { indexOf: () => -1 };
}
