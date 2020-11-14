### [78\. Subsets](https://leetcode.com/problems/subsets/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Backtracking](https://leetcode.com/tag/backtracking/), [Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)


Given an integer array `nums`, return _all possible subsets (the power set)_.

The solution set must not contain duplicate subsets.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**Example 2:**

```
Input: nums = [0]
Output: [[],[0]]
```

**Constraints:**

*   `1 <= nums.length <= 10`
*   `-10 <= nums[i] <= 10`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length
    const ans = []
    
    function dfs(arr, index) {
        if (index === n) {
            ans.push([...arr])
            return
        }
        dfs(arr, index + 1)
        arr.push(nums[index])
        dfs(arr, index + 1)
        arr.pop()
    }
    
    dfs([], 0)
    
    return ans
};
```