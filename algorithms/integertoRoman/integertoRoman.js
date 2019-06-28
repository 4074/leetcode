/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
       var symbols = [
           {s: 'M', v: 1000},
           {s: 'D', v: 500},
           {s: 'C', v: 100},
           {s: 'L', v: 50},
           {s: 'X', v: 10},
           {s: 'V', v: 5},
           {s: 'I', v: 1}
       ]
       
       var roman = '', item
       for (var i=0; i<symbols.length; i++) {
           item = symbols[i]
           if (num < item.v) continue;
           var n = parseInt(num/item.v), t = ''
           if (n === 4) {
               if (roman.length && roman[roman.length-1] === symbols[i-1].s) {
                   roman = roman.substr(0, roman.length-1)
                   t = item.s + symbols[i-2].s
               } else {
                   t = item.s + symbols[i-1].s
               }
           } else {
               t = item.s.repeat(n)
           }
           
           roman += t
           num = num % item.v
       }
       
       return roman
   };