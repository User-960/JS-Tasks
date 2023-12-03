// Найти наибольшее значение в массиве чисел с помощью цикла JavaScript

const arr = [1, 44, 66, 23, 356, 234, 76, 0, -5, 2435, 2]

const findMax = (array) => {
  let max = array[0]

  for (const num of array) {
    if (max < num) {
      max = num
    }
  }

  return max
}

console.log(findMax(arr))