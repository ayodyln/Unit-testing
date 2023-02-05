const objectValidator = (obj = { Foo: "Bar" }, str = "Foo") =>
  obj.hasOwnProperty(str)

module.exports = objectValidator
