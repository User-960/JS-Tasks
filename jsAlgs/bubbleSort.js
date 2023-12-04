// O(n^2)

/* ---------------------------------------------------------------------------------------- */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

const arr = [146, 22, 3, 423, 53, 106, 15, 23, 57, 6, 738, 1, 1022, 25, 1562, 222, 178, 16, 47];
console.log(bubbleSort(arr));


/* ---------------------------------------------------------------------------------------- */


// function bubbleSortOptimized(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let tmp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = tmp;
//       }
//     }
//   }
//   return array;
// }

// const arr = [146, 22, 3, 423, 53, 106, 15, 23, 57, 6, 738, 1, 1022, 25, 1562, 222, 178, 16, 47];
// console.log(bubbleSortOptimized(arr));