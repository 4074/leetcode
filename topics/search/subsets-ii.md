### [90\. Subsets II](https://leetcode.com/problems/subsets-ii/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Backtracking](https://leetcode.com/tag/backtracking/)


Given a collection of integers that might contain duplicates, **_nums_**, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const ans = []
    
    function dfs(arr, index) {
        if (index === n) {
            ans.push([...arr])
            return
        }
        
        arr.push(nums[index])
        index += 1
        dfs(arr, index)
        arr.pop()
        
        while (index < n && nums[index] === nums[index - 1]) {
            index += 1
        }
        dfs(arr, index)
    }
    
    dfs([], 0)
    
    return ans
};
```