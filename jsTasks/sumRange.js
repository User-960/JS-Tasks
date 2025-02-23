function sumRange(start, end) {
  const count = end - start + 1;
  const sum = (count * (start + end)) / 2;
  return sum;
}

console.log(sumRange(1, 5)); // 15
console.log(sumRange(0, 10)); // 55
console.log(sumRange(-3, 3)); // 0