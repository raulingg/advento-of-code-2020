module.exports.multiplyEntries = (expenses) => {
  const diffs = expenses
    .map((expense) => 2020 - expense)
    .filter((diff) => diff > 0);

  let index2;
  const index1 = expenses.findIndex((expense) => {
    index2 = diffs.indexOf(expense);
    return index2 !== -1;
  });

  return expenses[index1] * expenses[index2];
};
