let arr = [1, 2, 3, 4, 5]

let result = arr.reduce((sum, char) => {
  return sum + char
}, 0)

console.log(result)