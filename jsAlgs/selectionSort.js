// O(n^2)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    
    for (let j =  i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

const arr = [146, 22, 3, 423, 53, 106, 15, 23, 6, 738, 126, 1, 27, 10, 11, 1022, 1738, 222, 178, 16, 47];
console.log(selectionSort(arr));