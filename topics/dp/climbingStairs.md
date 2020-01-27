### [70\. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

Difficulty: **Easy**


You are climbing a stair case. It takes _n_ steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given _n_ will be a positive integer.

**Example 1:**

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1\. 1 step + 1 step
2\. 2 steps
```

**Example 2:**

```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1\. 1 step + 1 step + 1 step
2\. 1 step + 2 steps
3\. 2 steps + 1 step
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [1, 2]
    for (let i = 2; i < n; i += 1) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    return dp[n - 1]
};
```