// O(n)

/* ---------------------------------------------------------------------------------------- */

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }

  return -1
}

const arr = [1, 2, 3, 77, 21, 5, 10, 53, 503, 4, 82, 1024, 503, 4, 82, 20024];
console.log(linearSearch(arr, 10));
