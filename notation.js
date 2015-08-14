// Notation with base of 36, maximum encoded number length of 5 digits: 36^5 - 1 = 60466175.
function encode(number) {
  var a, b, c, d, e, counter = 0, alphabet = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h',
                                              'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var max = Math.pow(alphabet.length, 5) - 1;
  if (typeof number !== 'number' || (number < 0 || number > max)) {
    throw Error("Input value must be a number that is greater than 0 and less than " + max);
  }

  for(a = 0; a < alphabet.length; a++) {
    for(b = 0; b < alphabet.length; b++) {
      for(c = 0; c < alphabet.length; c++) {
        for(d = 0; d < alphabet.length; d++) {
          for(e = 0; e < alphabet.length; e++) {
            if (counter === number) {
              return (alphabet[a] + alphabet[b] + alphabet[c] + alphabet[d] + alphabet[e]);
            }
            counter++;
          }
        }
      }
    }
  }
}

console.log(encode(Math.pow(alphabet.length, 5) - 1));
// 'zzzzz'
