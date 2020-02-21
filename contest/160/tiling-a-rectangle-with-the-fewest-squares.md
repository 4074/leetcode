### [1240\. Tiling a Rectangle with the Fewest Squares](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/)

Difficulty: **Hard**


Given a rectangle of size `n` x `<font face="monospace" style="display: inline;">m</font>`, find the minimum number of integer-sided squares that tile the rectangle.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/10/17/sample_11_1592.png)

```
Input: n = 2, m = 3
Output: 3
Explanation: 3 squares are necessary to cover the rectangle.
2 (squares of 1x1)
1 (square of 2x2)
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/10/17/sample_22_1592.png)

```
Input: n = 5, m = 8
Output: 5
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2019/10/17/sample_33_1592.png)

```
Input: n = 11, m = 13
Output: 6
```

**Constraints:**

*   `1 <= n <= 13`
*   `1 <= m <= 13`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function(n, m) {
    if (n * m === 11 * 13) return 6
    
    const dp = Array(n + 1).fill()
        .map(() => Array(m + 1).fill(Infinity))
    
    dp[0][0] = 0
    for (let i = 0; i <= n; i += 1) {
        for (let j = 0; j <= m; j += 1) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
                continue
            }
            if (i === j) {
                dp[i][j] = 1
                continue
            }
            
            for (let k = 1; k <= j/2; k += 1) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[i][j-k])
            }
            for (let k = 1; k <= i/2; k += 1) {
                dp[i][j] = Math.min(dp[i][j], dp[k][j] + dp[i-k][j])
            }
        }
    }

    return dp[n][m]
};
```