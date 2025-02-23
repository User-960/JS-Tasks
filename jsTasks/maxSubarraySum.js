// Kadane's algorithm
// O(n)
function maxSubarraySum(array) {
  let maxEndingHere = array[0]
  let maxSoFar = array[0]
  for (let i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(array[i], maxEndingHere + array[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

const arrayExample = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arrayExample));