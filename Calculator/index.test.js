const {
  Sum,
  Subtract,
  Mulitply,
  Divide,
  Squared,
  CubedRoot,
} = require("./index")

test("Finding the Sum of 5 + 10", () => {
  expect(Sum([5, 10])).toBe(15)
})

test("Finding the Difference between 10 and 7", () => {
  expect(Subtract(10, 7)).toBe(2)
})

test("Finding the Product of 20 and 3", () => {
  expect(Mulitply(20, 3)).toBe(60)
})

test("Finding the Quotient of 35 by 5", () => {
  expect(Divide(35, 5)).toBe(7)
})

test("Finding the Square Root of 16", () => {
  expect(Squared(16)).toBe(4)
})

test("Finding the Cubed Root of 64", () => {
  expect(CubedRoot(64)).toBe(4)
})
