const arr = [true, true, true, false, true, false, null, false, undefined, true, true, undefined, false, false, true, true, true, false, undefined, true, true, false, null]

let p = 0

const counterSheep = (array) => {
  array.filter(item => {
    if (item === true) {
      p++
    } else if (item === null) {
      console.log(`Find ${item}`)
    } else if (item === undefined) {
      console.log(`Find ${item}`)
    }
  })
}

counterSheep(arr)
console.log(p)