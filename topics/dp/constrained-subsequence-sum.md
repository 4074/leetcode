### [1425\. Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

Difficulty: **Hard**


Given an integer array `nums` and an integer `k`, return the maximum sum of a **non-empty** subsequence of that array such that for every two **consecutive** integers in the subsequence, `nums[i]` and `nums[j]`, where `i < j`, the condition `j - i <= k` is satisfied.

A _subsequence_ of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.

**Example 1:**

```
Input: nums = [10,2,-10,5,20], k = 2
Output: 37
Explanation: The subsequence is [10, 2, 5, 20].
```

**Example 2:**

```
Input: nums = [-1,-2,-3], k = 1
Output: -1
Explanation: The subsequence must be non-empty, so we choose the largest number.
```

**Example 3:**

```
Input: nums = [10,-2,-10,-5,20], k = 2
Output: 23
Explanation: The subsequence is [10, -2, -5, 20].
```

**Constraints:**

*   `1 <= k <= nums.length <= 10^5`
*   `-10^4 <= nums[i] <= 10^4`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    const n = nums.length
    const dp = Array(n).fill(-Infinity)
    const queue = []
    let ans = -Infinity
    
    for (let i = 0; i < n; i += 1) {
        dp[i] = nums[i]
        
        // out
        if (i - k - 1 >= 0 && queue.length) {
            if (dp[i - k - 1] === queue[0]) queue.shift()
        }
        
        // max
        if (queue.length) {
            dp[i] = Math.max(dp[i], queue[0] + nums[i])
        }
        
        // in
        while (queue.length) {
            if (queue[queue.length - 1] < dp[i]) {
                queue.pop()
            } else {
                break
            }
        }
        queue.push(dp[i])
        
        ans = Math.max(ans, dp[i])
    }
    
    return ans
};
```