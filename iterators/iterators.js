const randomNums = () => Math.floor(Math.random() * 1000001);

const defaultSort = (x, y) => x - y;
const sort = (xs, fn = defaultSort) => [].slice.call(xs).sort(fn);

const sortTuples = tps => sort(tps, (t1, t2) => t1[0].value - t2[0].value);

function* getValuesGenerator(its) {
  let tuples = its.map(i => [i.next(), i]).filter(([i, _]) => !i.done);

  while (tuples.length > 0) {
    const [head, ...rest] = sortTuples(tuples);
    const [itVal, iterator] = head;

    yield itVal.value;

    const nextVal = iterator.next();
    tuples = nextVal.done ? rest : rest.concat([[nextVal, iterator]]);
  }
}

function getValuesList(lists) {
  return sort(lists.reduce((acc, curr) => acc.concat(curr), []));
}

const xs = sort(
  Array(1000000)
    .fill('')
    .map(_ => randomNums())
);
const ys = sort(
  Array(1000000)
    .fill('')
    .map(_ => randomNums())
);

const r1 = () => getValuesList([xs, ys]);

const xIt = xs[Symbol.iterator]();
const yIt = ys[Symbol.iterator]();

const r2 = () => getValuesGenerator([xIt, yIt]);
