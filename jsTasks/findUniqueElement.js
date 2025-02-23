// O(n)
function findUniqueElement(array) {
  let elementCount = {}
  
  for (let item of array) {
    if (elementCount[item]) {
      elementCount[item]++
    } else {
      elementCount[item] = 1
    }
  }
  
  for (let key in elementCount) {
    if (elementCount[key] === 1) {
      return key
    }
  }
  
  return null
}

function findUniqueElementXOR(array) {
  let uniqueElement = 0
  
  for (let item of array) {
    uniqueElement ^= item
  }
  
  return uniqueElement
}

const arrayExample = [1, 2, 3, 4, 1, 2, 3];
console.log(findUniqueElementXOR(arrayExample));
const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
console.log(findUniqueElementXOR(arrayExample2)); 