### [1262\. Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three/)

Difficulty: **Medium**


Given an array `nums` of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

**Example 1:**

```
Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
```

**Example 2:**

```
Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.
```

**Example 3:**

```
Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
```

**Constraints:**

*   `1 <= nums.length <= 4 * 10^4`
*   `1 <= nums[i] <= 10^4`


#### Solution

Language: **JavaScript**

Pull
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const dp = Array(nums.length + 1).fill()
        .map(() => Array(3).fill(-Infinity))
    
    dp[0][0] = 0
    for (let i = 1; i <= nums.length; i += 1) {
        const n = nums[i - 1] % 3
        for (let j = 0; j < 3; j += 1) {
            const last = (3 - n + j) % 3
            dp[i][j] = Math.max(
                dp[i - 1][j],
                dp[i - 1][last] + nums[i - 1]
            )
        }
    }
    
    return Math.max(0, dp[nums.length][0])
};
```

Push
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const dp = Array(nums.length + 1).fill()
        .map(() => Array(3).fill(-Infinity))
    
    dp[0][0] = 0
    for (let i = 1; i <= nums.length; i += 1) {
        const n = nums[i - 1]
        for (let j = 0; j < 3; j += 1) {
            dp[i][(j + n) % 3] = Math.max(
                dp[i - 1][(j + n) % 3],
                dp[i - 1][j] + n
            )
        }
    }
    
    return Math.max(0, dp[nums.length][0])
};
```