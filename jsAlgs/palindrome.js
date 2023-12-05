// O(n)

/* ---------------------------------------------------------------------------------------- */

function isEquals(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase()
}

function isPalindrome(value) {
  let start = 0
  let end = value.length - 1

  while (start < end) {
    const startChar = value[start]
    const endChar = value[end]

    if (!isLetter(startChar)) {
      start += 1
      continue
    }

    if (!isLetter(endChar)) {
      end -= 1
      continue
    }

    if (!isEquals(startChar, endChar)) {
      return false
    }

    start += 1
    end -= 1
  }

  return true
}

console.log(isPalindrome('Казак'))
console.log(isPalindrome('А роза упала на лапу Азора'))
console.log(isPalindrome('Do geese see God?'))
console.log(isPalindrome('Madam, I`m Adam'))
