const sentence = 'JavaScript is an amazing programming language'

function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce((longest, word) => {
      return word.length > longest.length ? word : longest
    }, '')
}

console.log(findLongestWord(sentence))