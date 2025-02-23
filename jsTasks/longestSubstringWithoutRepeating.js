// O(n)
function longestSubstringWithoutRepeating(string) {
  let leftPointer = 0
  let maxLength = 0
  const charIndexMap = new Map()
  for (let rightPointer = 0; rightPointer < string.length; rightPointer++) {
    const currentChar = string[rightPointer]

    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= leftPointer) {
      leftPointer = charIndexMap.get(currentChar) + 1
    }

    charIndexMap.set(currentChar, rightPointer)

    maxLength = Math.max(maxLength, rightPointer - leftPointer + 1)
  }
  charIndexMap.clear()
  return maxLength
}

const strExample = 'abcabcbb';
console.log(longestSubstringWithoutRepeating(strExample));