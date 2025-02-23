const object = {
  a: {
    d: {
      h: 4
    },
    e: 2
  },
  b: 1,
  c: {
    f: {
      g: 3,
      k: {}
    }
  }
};

const addLevels = (object) => {
  // const newObj = JSON.parse(JSON.stringify(obj))
  const newObj = Object.assign({}, object)
  const stack = [{ obj: newObj, 'level': 0 }]
  
  while (stack.length > 0) {
    const { obj, level } = stack.pop()

    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        obj[key].level = level + 1
        stack.push({ obj: obj[key], level: level + 1 })
      }
    }
  }

  newObj.level = 0

  return newObj
}

console.log(addLevels(object))

// Output
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }