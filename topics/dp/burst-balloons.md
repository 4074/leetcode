### [312\. Burst Balloons](https://leetcode.com/problems/burst-balloons/)

Difficulty: **Hard**  

Related Topics: [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given `n` balloons, indexed from `0` to `n-1`. Each balloon is painted with a number on it represented by array `nums`. You are asked to burst all the balloons. If the you burst balloon `i` you will get `nums[left] * nums[i] * nums[right]` coins. Here `left` and `right` are adjacent indices of `i`. After the burst, the `left` and `right` then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

**Note:**

*   You may imagine `nums[-1] = nums[n] = 1`. They are not real therefore you can not burst them.
*   0 ≤ `n` ≤ 500, 0 ≤ `nums[i]` ≤ 100

**Example:**

```
Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length
    nums.unshift(1)
    nums.push(1)
    
    const dp = Array(n + 2).fill().map(() => Array(n + 2).fill(0))
    
    for (let l = 1; l <= n; l += 1) {
        for (let i = 1; i <= n - l + 1; i += 1) {
            const j = i + l - 1
            for (let k = i; k <= j; k += 1) {
               dp[i][j] = Math.max(
                   dp[i][j],
                   dp[i][k - 1] + dp[k + 1][j] + nums[k] * nums[i - 1] * nums[j + 1]
               ) 
            }
            
        }
    }
    return dp[1][n]
};
```