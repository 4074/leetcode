/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
       var store = {}
       
       function f(rest) {
           const key = rest.join(',')
           if (store[key]) return store[key]
   ​
           var r = [], l = rest.length
           for (var i=0; i<l; i++) {
               var surfix = f(
                   rest.slice(0, i).concat(
                       rest.slice(i+1, l+1)
                   )
               )
               
               if (surfix.length) {
                   for (var j=0; j<surfix.length; j++) {
                       r.push([rest[i]].concat(surfix[j]))
                   }
               } else {
                   r.push([rest[i]])
               }
           }
   ​
           store[key] = r
   ​
           return r
       }
       
       return f(nums)
   };