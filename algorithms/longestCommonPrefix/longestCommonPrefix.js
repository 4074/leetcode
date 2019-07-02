/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
       if (strs.length === 0) return '';
       
       var prefix = strs[0]
       var index = 1
       while (prefix.length && index < strs.length) {
           var s = strs[index]
           for (var i=prefix.length; i>0; i--) {
               if (s.indexOf(prefix.substr(0, i)) === 0) {
                   prefix = prefix.substr(0, i)
                   break
               } else if (i === 1) {
                   prefix = ''
               }
           }
           index ++
       }
       
       return prefix
   };