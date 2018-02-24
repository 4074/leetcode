/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    let start = 0, result = 0

    for (let i=0; i<len; i++) {
        for (let j=start; j<i; j++) {
            if (s[j] === s[i]) {
                result = Math.max(i - start, result)
                start = j + 1
                break
            } 
        }
    }

    result = Math.max(len - start, result)

    return result
};

/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function(s) {
   const n = s.length
   let start = 0, ans = 0, map = {}

   for (let i=0; i<n; i++) {
       if (map[s[i]] !== undefined && map[s[i]] >= start) {
           ans = Math.max(i - start, ans)
           start = map[s[i]] + 1
       }
       map[s[i]] = i
   }
   ans = Math.max(n - start, ans)

   return ans
};