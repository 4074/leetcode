### [343\. Integer Break](https://leetcode.com/problems/integer-break/)

Difficulty: **Medium**


Given a positive integer _n_, break it into the sum of **at least** two positive integers and maximize the product of those integers. Return the maximum product you can get.

**Example 1:**


```
Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
```


**Example 2:**

```
Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
```

**Note**: You may assume that _n_ is not less than 2 and not larger than 58.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = Array(n + 1).fill(0)
    
    dp[1] = 1
    for (let i = 2; i <= n; i += 1) {
        for (let j = 1; j <= i / 2; j += 1) {
            dp[i] = Math.max(
                dp[i],
                dp[j] * (i - j),
                j * dp[i - j],
                j * (i - j)
            )
        }
    }
    
    return dp[n]
};
```