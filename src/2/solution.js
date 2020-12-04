const puzzle = require('./puzzle.json');

module.exports.isPasswordValid = (password, policy) => {
  const [range, character] = policy.split(' ');
  const [min, max] = range.split('-');
  const occurrences = (password.match(new RegExp(character, 'g')) || []).length;

  return occurrences >= Number(min) && occurrences <= Number(max);
};

const validPasswordCount = Object.entries(puzzle).reduce(
  (acc, [policy, password]) =>
    exports.isPasswordValid(password, policy) ? acc + 1 : acc,
  0
);
