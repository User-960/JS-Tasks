function countCharacterFrequency(string) {
  let charFrequency = {}
  for (const char of string) {
    charFrequency[char] = (charFrequency[char] || 0) + 1
  }
  return charFrequency
}

function sortCharactersByFrequency(str) {
  const charFrequency = countCharacterFrequency(str)
  const sortedChars = Object.keys(charFrequency).sort((a, b) => {
    return charFrequency[b] - charFrequency[a]
  })
  return sortedChars.join('')
}

const example = 'Hello World';
console.log(sortCharactersByFrequency(example));