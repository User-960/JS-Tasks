function findMinMax(array) {
  let min = array[0]
  let max = array[0]

  for (let i = 1; i < array.length; i++) {
    let number = array[i]
    if (number < min) {
      min = number
    } else if (number > max) {
      max = number
    }
  }

  return { min, max }
}

const numbers = [5, 1, 3, 514, 412, 12, 512, 73, 5, 1, 512];
const result = findMinMax(numbers);

console.log(`Min: ${result.min}`);
console.log(`Max: ${result.max}`);