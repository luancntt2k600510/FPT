let fibMap = new Map();

function fibonaci(n) {
  if (n <= 1) {
    return 1;
  }

  // Check if Fibonacci for n has already been computed and return from the map
  if (fibMap.has(n)) {
    return fibMap.get(n);
  }

  // Compute Fibonacci for n and store in the map before returning
  let fib = fibonaci(n - 1) + fibonaci(n - 2);
  fibMap.set(n, fib);
  return fib;
}

console.log(fibonaci(5));
