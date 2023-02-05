//? FizzBuzz
const { fizzbuzz } = require("./index")

test("Testing number input 9", () => {
  expect(fizzbuzz(9)).toStrictEqual([
    0,
    1,
    2,
    "fizz",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
  ])
})

test("Testing number input 15", () => {
  expect(fizzbuzz(15)).toStrictEqual([
    0,
    1,
    2,
    "fizz",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
    "buzz",
    11,
    "fizz",
    13,
    14,
    "fizzbuzz",
  ])
})
