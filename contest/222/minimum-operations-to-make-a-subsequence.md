### [1713\. Minimum Operations to Make a Subsequence](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/)

Difficulty: **Hard**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


You are given an array `target` that consists of **distinct** integers and another integer array `arr` that **can** have duplicates.

In one operation, you can insert any integer at any position in `arr`. For example, if `arr = [1,4,1,2]`, you can add `3` in the middle and make it `[1,4,<u style="display: inline;">3</u>,1,2]`. Note that you can insert the integer at the very beginning or end of the array.

Return _the **minimum** number of operations needed to make_ `target` _a **subsequence** of_ `arr`_._

A **subsequence** of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, `[2,7,4]` is a subsequence of `[4,<u style="display: inline;">2</u>,3,<u style="display: inline;">7</u>,2,1,<u style="display: inline;">4</u>]` (the underlined elements), while `[2,4,2]` is not.

**Example 1:**

```
Input: target = [5,1,3], arr = [9,4,2,3,4]
Output: 2
Explanation: You can add 5 and 1 in such a way that makes arr = [5,9,4,1,2,3,4], then target will be a subsequence of arr.
```

**Example 2:**

```
Input: target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1]
Output: 3
```

**Constraints:**

*   `1 <= target.length, arr.length <= 10<sup>5</sup>`
*   `1 <= target[i], arr[i] <= 10<sup>9</sup>`
*   `target` contains no duplicates.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
    const map = new Map()
    for (let i = 0; i < target.length; i += 1) {
        map.set(target[i], i)
    }
    
    const indexes = []
    for (const item of arr) {
        if (map.has(item)) {
            indexes.push(map.get(item))
        }
    }
    
    const lis = (nums) => {
        const n = nums.length
        const dp = []
        
        for (let i = 0; i < n; i += 1) {
            if (!dp.length || nums[i] > dp[dp.length - 1]) {
                dp.push(nums[i])
                continue
            }
            
            let l = 0
            let r = dp.length - 1
            while (l < r) {
                const m = Math.floor((l + r) / 2)
                if (dp[m] < nums[i]) {
                    l = m + 1
                } else {
                    r = m
                }
            }
            dp[l] = nums[i]
        }
        
        return dp.length
    }
    
    return target.length - lis(indexes)
};
```