const fizzbuzz = (num) => {
  let fizzArray = []

  for (let i = 0; i <= num; i++) {
    let evaluatedNumber = i
    if (i % 3 == 0 && i % 5 != 0) evaluatedNumber = "fizz"
    if (i % 3 != 0 && i % 5 == 0) evaluatedNumber = "buzz"
    if (i % 3 == 0 && i % 5 == 0 && i !== 0) evaluatedNumber = "fizzbuzz"
    fizzArray.push(evaluatedNumber)
  }

  return fizzArray
}

module.exports = {
  fizzbuzz,
}
