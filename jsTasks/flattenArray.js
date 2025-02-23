function flattenArray(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length > 0) {
    const element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      result.unshift(element);
    }
  }

  return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]