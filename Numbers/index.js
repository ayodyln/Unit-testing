const Numbers = (numbers = [20, 19, 11, 19, 1]) =>
  numbers.reduce((prev, curr) => prev + curr, 0)

module.exports = Numbers
