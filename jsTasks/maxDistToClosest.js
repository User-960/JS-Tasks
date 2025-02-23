// O(n)
const input1 = [1, 0, 0, 0, 1, 0, 1] // 2
const input2 = [1, 0, 0, 0] // 3
const input3 = [1, 0, 0, 0, 1, 0, 0, 0] // 3
const input4 = [0, 0, 0, 1, 0, 0, 0, 1] // 3
const input5 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0] // 4
  
const maxDistToClosest = function (seats) {
  let max = 0
  let count = 0
  let i = 0

  if (seats[i] === 0) {
    while(seats[i] === 0) {
      i++
      count += 1
    }

    max = count
    count = 0
  }

  for ( ; i < seats.length; i++) {
    let current = seats[i]

    if (i === seats.length - 1 && current === 0) {
      count += 1
      max = Math.max(max, count)
      break
    }

    if (current === 1) {
      count = 0
    } else {
      count += 1
      max = Math.max(max, Math.ceil(count / 2))
    }
  } 

  return max
}

console.log(maxDistToClosest(input1))
console.log(maxDistToClosest(input2))
console.log(maxDistToClosest(input3))
console.log(maxDistToClosest(input4))
console.log(maxDistToClosest(input5))