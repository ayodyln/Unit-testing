const reverseString = (str = "Hello World!") => str.split("").reverse().join("")

const uppercaseString = (str = "string") => str.toUpperCase()

const vowels = (str = "AUDIO") => {
  const vowels = ["a", "e", "i", "o", "u"]
  const splitStr = str
    .split("")
    .map((char) => {
      const vowel = vowels.find((el) => el === char.toLowerCase())
      if (!vowel) return char
    })
    .join("")

  return splitStr
}

module.exports = {
  reverseString,
  uppercaseString,
  vowels,
}
