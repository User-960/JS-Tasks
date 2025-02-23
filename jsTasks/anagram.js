const buildCharObject = str => {
  const charObj = {}
  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    if (charObj[char]) {
      charObj[char] = charObj[char] + 1
    } else {
      charObj[char] = 1
    }
  }
  return charObj
}

const anagram = (strA, strB) => {
  const aCharObject = buildCharObject(strA)
  const bCharObject = buildCharObject(strB)

  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false
  }

  for(let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false
    }
  }

  return true
}

console.log(anagram('finder', 'Friend'))
console.log(anagram('hello', 'bye'))