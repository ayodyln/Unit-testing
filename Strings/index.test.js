const { reverseString, uppercaseString, vowels } = require("./index")

test(`Reversing the string "Hello World!"`, () => {
  expect(reverseString("Hello World!")).toBe("!dlroW olleH")
})

test("Uppercasing characters in a string", () => {
  expect(uppercaseString("string")).toBe("STRING")
})

test(`Removing all vowels from the word "AUDIO"`, () => {
  // a, e, i, o, u
  expect(vowels("AUDIO")).toBe("D")
})
