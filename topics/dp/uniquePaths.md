### [62\. Unique Paths](https://leetcode.com/problems/unique-paths/)

Difficulty: **Medium**


A robot is located at the top-left corner of a _m_ x _n_ grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)  
<small style="display: inline;">Above is a 7 x 3 grid. How many possible unique paths are there?</small>

**Note:** _m_ and _n_ will be at most 100.

**Example 1:**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1\. Right -> Right -> Down
2\. Right -> Down -> Right
3\. Down -> Right -> Right
```

**Example 2:**

```
Input: m = 7, n = 3
Output: 28
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array(m).fill()
        .map(() => Array(n).fill(0))
    
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (i === 0 && j === 0) {
                dp[i][j] = 1
            } else {
                dp[i][j] = (i > 0 ? dp[i - 1][j] : 0)
                    + (j > 0 ? dp[i][j - 1] : 0)
            }
        }
    }
    
    return dp[m-1][n-1]
};
```