Array.prototype.myFilter = function(callback) {
  const result = []

  for (let index = 0; index < this.length; index++) {
    const isTrue = callback(this[index], index, this)

    if (!isTrue) continue

    result.push(this[index]);
  }

  return result;
}

const arrForFilter = [4, 5, 6]
const arrFilter = arrForFilter.myFilter((item) => item <= 5)

console.log(arrFilter);


Array.prototype.myMap = function(callback) {
  const result = []

  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
}


const arrForMap = [1, 2, 3]
const arrMap = arrForMap.myMap((a) => a + 5)
console.log(arrMap);

Array.prototype.myReduce = function(callback, initialValue) {
  const isExistInitialValue = initialValue !== undefined
  let result = isExistInitialValue ? initialValue : this[0];

  for (let index = 0; index < this.length; index++) {
    if (!isExistInitialValue && index === 0) continue;
    result = callback(result, this[index], index , this);
  }

  return result;
}

const arrForReduce = [1, 2, 3]
const arrReduce = arrForReduce.myReduce((a, b, index, array) => a + b)
const arrReduceWithInitial = arrForReduce.myReduce((a, b, index, array) => a + b, 5)
console.log(arrReduce, arrReduceWithInitial);



