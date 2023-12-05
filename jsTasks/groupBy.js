function groupBy(array, fn) {
  const res = {}

  for (let i = 0; i < array.length; i++) {
    const char = array[i]
    const key = typeof fn === 'function' ? fn(char) : char[fn]

    if (!res[key]) {
      res[key] = []
    }

    res[key].push(char)
  }

  return res
}

// function groupBy(array, fn) {
//   return array.reduce((res, char) => {
//     const key = typeof fn === 'function' ? fn(char) : char[fn]

//     if (!res[key]) {
//       res[key] = []
//     }

//     res[key].push(char)

//     return res
//   }, {})
// }

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // -> { '3': ['one', 'two'], '5': ['three'] }