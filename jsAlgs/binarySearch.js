// O(log(n))

/* ---------------------------------------------------------------------------------------- */

function binarySearch(array, target) {
 let start = 0
 let end = array.length - 1

 if (target < array[start] || target > array[end]) {
  return -1
 }

 while (true) {
  if (target === array[start]) {
    return start
  }

  if (target === array[end]) {
    return end
  }

  if (end - start <= 1) {
    return -1
  }

  const middle = Math.floor((start + end) / 2)

  if (target > array[middle]) {
    start = middle + 1
  } else if (target < array[middle]) {
    end = middle - 1
  } else {
    return middle
  }
 }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(binarySearch(arr, 17))
console.log(binarySearch(arr, 9))


/* ---------------------------------------------------------------------------------------- */


// function binarySearchRecursion(array, target, start, end) {
//   let middle = Math.floor((start + end) / 2);

//   if (array.length === 0) {
//      return false;
//    }

//   if (target === array[middle]) {
//     return middle;
//   }

//   if (target < array[middle]) {
//     return binarySearchRecursion(array, target, start, middle - 1);
//   } else {
//     return binarySearchRecursion(array, target, middle + 1, end);
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(binarySearchRecursion(arr, 17, 0, arr.length));


/* ---------------------------------------------------------------------------------------- */


// function binarySearch(array, target) {
//   let start = 0;
//   let end = array.length;
//   let middle;
//   let found = false;
//   let position = -1;

//   while (found === false && start <= end) {

//     middle = Math.floor((start + end) / 2)

//     if (array[middle] === target) {
//       found = true;
//       position = middle;
//       return position;
//     }

//     if (target < array[middle]) {
//       end = middle - 1
//     } else {
//       start = middle + 1
//     }
//   }

//   return position;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(binarySearch(arr, 17))
// console.log(binarySearch(arr, 9))