function fn() {
  return this
}

const obj = { name: 'Max', age: '30' }
const newFn = fn.bind(obj)

console.log(newFn())