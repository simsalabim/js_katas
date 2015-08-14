// http://www.codewars.com/kata/513e08acc600c94f01000001
// Additional restriction: don't use toString(16)

function rgb(r, g, b){
  var args = Array.prototype.slice.call(arguments);
  var alphabet = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var map = {}, key = 0;
  for(var i = 0; i < 16; i++) {
    for(var j = 0; j < 16; j++) {
      map[key++] = alphabet[i] + alphabet[j];
    }
  }

  return args.map(function(arg) {
    if (arg < 0) arg = 0;
      arg = Math.min(255, arg);
      return map[arg];
  }).reduce(function(prev, curr) {
    return prev + curr;
  });
}
