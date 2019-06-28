/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
       var result = 0
       var symbols = {
           I: 1,
           V: 5,
           X: 10,
           L: 50,
           C: 100,
           D: 500,
           M: 1000
       }
       
       s = s.split('')
       for (var i=0; i<s.length; i++) {
           var n = symbols[s[i]]
           var afterN = s[i+1] && symbols[s[i+1]]
           result += n * ((afterN && n < afterN) ? -1 : 1)
       }
       
       return result
   };