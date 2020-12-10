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
