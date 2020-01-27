### [53\. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

Difficulty: **Easy**


Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Follow up:**

If you have figured out the O(_n_) solution, try coding another solution using the divide and conquer approach, which is more subtle.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [nums[0]]
    let sum = nums[0]
    
    for (let i = 1; i < nums.length; i += 1) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        sum = Math.max(sum, dp[i])
    }
    
    return sum
};
```