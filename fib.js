// Returns n-th Fibonacci number for n in range [-75, 75]
function fib_to_75(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return Math.round((Math.pow(phi, n) - Math.pow(-1, n) / Math.pow(phi, n)) / Math.sqrt(5));
}

console.log(fib_to_75(75));
// 2111485077978050
