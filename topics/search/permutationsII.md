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
    const result = []
    
    function search(values, index) {
        if (values.length === nums.length) {
            return result.push([...values])
        }
        
        const used = {}
        for (let i=0; i<nums.length; i++) {
            const num = nums[i]
            if (index.indexOf(i) < 0 && !used[num]) {
                used[num] = true
                values.push(num)
                index.push(i)
                
                search(values, index)
                
                values.pop()
                index.pop()
            }
        }
    }
    
    search([], [])
    
    return result
};
```