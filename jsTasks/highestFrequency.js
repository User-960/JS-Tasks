function highestFrequency(array) {
	const obj = {}
  let maxFreq = 0
  let maxFreqStr = array[0]

  for (let i = 0; i < array.length; i++) {
    const current = array[i]

    if (obj[current]) {
      obj[current]++
    } else {
      obj[current] = 1
    }

    if (obj[current] > maxFreq) {
      maxFreq = obj[current]
      maxFreqStr = current
    }
  }

   return maxFreqStr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi