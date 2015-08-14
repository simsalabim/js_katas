// http://www.codewars.com/kata/54ca3e777120b56cb6000710/train/javascript
function chained(functions) {
  return function(arg) {
    return functions.reduce(function(arg, fn) {
      return fn(arg);
    }, arg);
  }
}
