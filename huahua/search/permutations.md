### [46\. Permutations](https://leetcode.com/problems/permutations/)

Difficulty: **Medium**


Given a collection of **distinct** integers, return all possible permutations.

**Example:**

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    
    function search(current) {
        if (current.length === nums.length) {
            return result.push([...current])
        }
        
        for (const num of nums) {
            if (current.indexOf(num) < 0) {
                current.push(num)
                search(current)
                current.pop()
            }
        }
    }
    
    search([])
    
    return result
};
```