function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


/* -------------------------------------------------------------------------------- */


function fibonachi(n) {
  return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}


/* -------------------------------------------------------------------------------- */


console.log('Factorial: ' + factorial(5));
console.log('Fibonachi: ' + fibonachi(8));
