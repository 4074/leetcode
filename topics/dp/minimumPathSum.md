### [64\. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

Difficulty: **Medium**


Given a _m_ x _n_ grid filled with non-negative numbers, find a path from top left to bottom right which _minimizes_ the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example:**

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid.length || !grid[0]) return 0
    
    const dp = Array(grid.length).fill()
        .map(() => Array(grid[0].length).fill(0))
    
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j]
            } else {
                const fromTop = i > 0 ? dp[i - 1][j] : Infinity
                const fromLeft = j > 0 ? dp[i][j - 1] : Infinity
                dp[i][j] = Math.min(fromTop, fromLeft) + grid[i][j]
            }
        }
    }
 
    return dp[grid.length - 1][grid[0].length - 1]
};
```