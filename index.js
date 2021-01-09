function main(num, list = []) {
  let init = true;

  let currentInds = [];
  let test0Inds = [];
  let test1Inds = [];
  let test2Inds = [];

  let current = [];
  let test0 = [];
  let test1 = [];
  let test2 = [];

  let summCurrent = 0;
  let summTest0 = 0;
  let summTest1 = 0;
  let summTest2 = 0;

  let items = [0, 1, 2];

  for (let index = 0; index < list.length; index += 1) {
    items = [0 + index, 1 + index, 2 + index];

    if (items[1] >= list.length) {
      items[1] = items[1] - list.length;
    }

    if (items[2] >= list.length) {
      items[2] = items[2] - list.length;
    }


    const baseInds = [items[0], items[1], items[2]];
    const base = [list[baseInds[0]], list[baseInds[1]], list[baseInds[2]]];
    const summBase = base[0] + base[1] + base[2];

    if (Math.abs(summBase - num) < Math.abs(summCurrent - num) || init) {
      init = false;

      currentInds = baseInds;
      test0Inds = baseInds;
      test1Inds = baseInds;
      test2Inds = baseInds;

      current = base;
      test0 = base;
      test1 = base;
      test2 = base;

      summCurrent = summBase;
      summTest0 = summBase;
      summTest1 = summBase;
      summTest2 = summBase;
    }

    // console.log(items, base, current);

    list.forEach((value, indexValue) => {
      if (currentInds.includes(indexValue) === false) {
        // console.log(value, indexValue, items.includes(indexValue))

        test0Inds = [indexValue, test0Inds[1], test0Inds[2]];
        test1Inds = [test1Inds[0], indexValue, test1Inds[2]];
        test2Inds = [test2Inds[0], test2Inds[1], indexValue];

        test0 = [value, test0[1], test0[2]];
        test1 = [test1[0], value, test1[2]];
        test2 = [test2[0], test2[1], value];

        summTest0 = test0[0] + test0[1] + test0[2];
        summTest1 = test1[0] + test1[1] + test1[2];
        summTest2 = test2[0] + test2[1] + test2[2];

        let byTextIndex = -1;
        let diff = Math.abs(summCurrent - num);

        let nextDiff = Math.abs(summTest0 - num);
        if (nextDiff < diff) {
          diff = nextDiff;
          byTextIndex = 0;
        }

        nextDiff = Math.abs(summTest1 - num);
        if (nextDiff < diff) {
          diff = nextDiff;
          byTextIndex = 1;
        }

        nextDiff = Math.abs(summTest2 - num);
        if (nextDiff < diff) {
          diff = nextDiff;
          byTextIndex = 2;
        }

        if (byTextIndex === 0) {
          currentInds = test0Inds;
          test1Inds = test0Inds;
          test2Inds = test0Inds;

          current = test0;
          test1 = test0;
          test2 = test0;

          summCurrent = summTest0;
          summTest1 = summTest0;
          summTest2 = summTest0;
        } else if (byTextIndex === 1) {
          currentInds = test1Inds;
          test0Inds = test1Inds;
          test2Inds = test1Inds;

          current = test1;
          test0 = test1;
          test2 = test1;

          summCurrent = summTest1;
          summTest0 = summTest1;
          summTest2 = summTest1;
        } else if (byTextIndex === 2) {
          currentInds = test2Inds;
          test0Inds = test2Inds;
          test1Inds = test2Inds;

          current = test2;
          test0 = test2;
          test1 = test2;

          summCurrent = summTest2;
          summTest0 = summTest2;
          summTest1 = summTest2;
        }
      }
    });
  }

  // console.log(current)

  return summCurrent;
}

[
  { num: 6, list: [-1, -1, -9, -7, 3, -6]},
  { num: 5, list: [7, -8, 2, -8, -3] },
  { num: 8, list: [6, 2, 8, -3, 1, 1, 6, 10] }
].forEach((params) => {
  console.log(`num: ${params.num};`, `list: ${params.list};`, `result: ${main(params.num, params.list)}`);
})