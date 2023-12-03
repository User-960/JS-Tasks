const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate90(source) {
  const rotated = source[0].map(_ => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[j][source.length - 1 - i] = source[i][j]
    }
  }

  return rotated
}

function rotate180(source) {
  return rotate90(rotate90(source))
}

function rotate270(source) {
  return rotate90(rotate180(source))
}

function rotate360(source) {
  return rotate90(rotate270(source))
}

function print(array) {
  array.forEach(i => console.log(i))
}

print(rotate90(matrix))
console.log('-------')
print(rotate180(matrix))
console.log('-------')
print(rotate270(matrix))
console.log('-------')
print(rotate360(matrix))