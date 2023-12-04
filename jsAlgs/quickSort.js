// O(logn * n)

/* ---------------------------------------------------------------------------------------- */

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const arr = [146, 22, 3, 423, 53, 106, 15, 23, 57, 6, 738, 126, 1, 27, 10, 17, 1738, 222, 178, 16, 47];
console.log(quickSort(arr));
