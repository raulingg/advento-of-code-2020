exports.isPasswordValidPart1 = (text) => {
  const [policy, password] = text.split(':');
  const [range, character] = policy.split(' ');
  const [min, max] = range.split('-');
  const matches = (password.trim().match(new RegExp(character, 'g')) || [])
    .length;

  return matches >= Number(min) && matches <= Number(max);
};

exports.isPasswordValidPart2 = (text) => {
  const [policy, password] = text.split(':');
  const [range, character] = policy.split(' ');
  const [min, max] = range.split('-');
  const trimmedPassword = password.trim();
  const firstMatch = trimmedPassword[min - 1] === character;
  const secondMatch = trimmedPassword[max - 1] === character;

  return (firstMatch && !secondMatch) || (!firstMatch && secondMatch);
};
