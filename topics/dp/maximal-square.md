### [221\. Maximal Square](https://leetcode.com/problems/maximal-square/)

Difficulty: **Medium**


Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

**Example:**

```
Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length
    if (!m) return 0
    const n = matrix[0].length
    
    const rowSum = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    const colSum = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    
    for (let i = 1; i <= m; i += 1) {
        for (let j = 1; j <= n; j += 1) {
            rowSum[i][j] = rowSum[i][j - 1] + parseInt(matrix[i - 1][j - 1], 10)
            colSum[i][j] = colSum[i - 1][j] + parseInt(matrix[i - 1][j - 1], 10)
        }
    }
    
    let ans = 0
    for (let i = 1; i <= m; i += 1) {
        for (let j = 1; j <= n; j += 1) {
            if (matrix[i - 1][j - 1] === '1') {
                let pre = dp[i - 1][j - 1]
                while (pre) {
                    if (
                        rowSum[i][j - 1] - rowSum[i][j - pre - 1] === pre
                        && colSum[i - 1][j] - colSum[i - pre - 1][j] === pre
                    ) {
                        break
                    }
                    pre -= 1
                }
                
                dp[i][j] = pre + 1
            }
            
            ans = Math.max(ans, dp[i][j])
        }
    }
​
    return ans * ans
};
```

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length
    const n = m ? matrix[0].length : 0
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    
    let ans = 0
    for (let i = 1; i <= m; i += 1) {
        for (let j = 1; j <= n; j += 1) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
            }
            ans = Math.max(ans, dp[i][j])
        }
    }

    return ans * ans
};
```