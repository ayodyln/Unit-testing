const objectValidator = require("./index")

test(`Checking if the string "Foo" is a key of an object: { Foo: "Barr" }`, () => {
  expect(objectValidator({ Foo: "Bar" }, "Foo")).toBe(true)
})
