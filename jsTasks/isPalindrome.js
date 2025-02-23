const isEqual = (str1 = '', str2 = '') => {
  return str1.toLowerCase() === str2.toLowerCase()
}

const isLetter = (char) => {
  return char.toLowerCase() !== char.toUpperCase()
}

const isPalindrome = (str = '') => {
  let start = 0
  let end = str.length - 1

  while(start < end) {
    const firstChar = str[start]
    const endChar = str[end]

    if (!isLetter(firstChar)) {
      start += 1;
      continue;
    }

    if (!isLetter(endChar)) {
      end -= 1;
      continue;
    }

    if (!isEqual(firstChar, endChar)) {
      return false
    }

    start += 1
    end -= 1
  }

  return  true
}

console.log(isPalindrome('Казак'));
console.log(isPalindrome(`Madam, I'm Adam`));
console.log(isPalindrome('А в Енисее - синева'));
console.log(isPalindrome('О, духи, от уборки микробу-то и худо'));
console.log(isPalindrome('Не палиндром'));

//----------------------------

// function isPalindrome(string) {
//   const reversedStr = string.split('').reverse().join('')
//   return string === reversedStr
// }

// console.log(isPalindrome('level'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('hello')); 