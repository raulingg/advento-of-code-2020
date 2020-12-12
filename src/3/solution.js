function countTrees(path, dx, dy) {
  let y = 0;
  let x = 0;
  let trees = 0;

  while (y < path.length) {
    if (path[y][x] === '#') {
      trees++;
    }

    x = (x + dx) % path[y].length;
    y += dy;
  }

  return trees;
}

exports.solvePart1 = (input) => {
  input = input.split('\n');
  return countTrees(input, 3, 1);
};

exports.solvePart2 = (input) => {
  input = input.split('\n');
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  return slopes.reduce((acc, [dx, dy]) => acc * countTrees(input, dx, dy), 1);
};
