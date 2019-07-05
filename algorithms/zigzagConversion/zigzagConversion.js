/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
       if (s.length < 3 || numRows === 1) return s
       var result = []
       
       var index = 0, step = 1
       for (var i=0; i<s.length; i++) {
           if (index === numRows-1) {
               step = -1
           } else if (index === 0) {
               step = 1
           }
           
           if (!result[index]) {
               result[index] = s[i]
           } else {
               result[index] = result[index] + s[i]
           }
               
           index += step
       }
       
       
       return result.join('')
   };