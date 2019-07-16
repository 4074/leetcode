### [47\. Permutations II](https://leetcode.com/problems/permutations-ii/)

Difficulty: **Medium**


Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = []
    
    function f(prefix, rest) {
        if (!rest.length) return result.push(prefix);
        var has = {}
        
        for (var i=0; i<rest.length; i++) {
            if (!has[rest[i]]) {
                has[rest[i]] = true
                
                var newPrefix = prefix.slice()
                newPrefix.push(rest[i])
                
                var newRest = rest.slice(0, i).concat(rest.slice(i+1, rest.length))
                
                f(newPrefix, newRest)
            }
        }
    }
    
    f([], nums)
    
    return result
};
```