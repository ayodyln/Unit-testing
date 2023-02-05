const Numbers = require("./index")

test("Sum an Array of numbers -> [20, 19, 11, 19, 1]", () => {
  expect(Numbers([20, 19, 11, 19, 1])).toBe(70)
})
