function fibonacci(n, cache = {}) {
  if (n in cache) {
    return cache[n];
  }

  if (n <= 1) {
    return n;
  }

  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  cache[n] = result;
  return result;
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610
