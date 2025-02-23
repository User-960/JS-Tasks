const obj = {
  a: {
    b: {
      c: 1,
      d: 2
    },
    e: 3
  },
  f: 4
};

const flattenObject = (object) => {
  const flattened = {}
  const stack = []

  stack.push({ obj: object,  prefix: ''})

  while (stack.length > 0) {
    const { obj, prefix } = stack.pop()

    for (let key in obj) {
      const value = obj[key]
      const newKey = prefix + key

      if (typeof value === 'object' && value !== null) {
        stack.push({ obj: value, prefix: newKey + '.' })
      } else {
        flattened[newKey] = value
      }
    }
  }

  return flattened
}

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }