# [2328\. Number of Increasing Paths in a Grid](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)

## Description

Difficulty: **Hard**  

Related Topics:


You are given an `m x n` integer matrix `grid`, where you can move from a cell to any adjacent cell in all `4` directions.

Return _the number of **strictly** **increasing** paths in the grid such that you can start from **any** cell and end at **any** cell._ Since the answer may be very large, return it **modulo** 10<sup>9</sup> + 7.

Two paths are considered different if they do not have exactly the same sequence of visited cells.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/05/10/griddrawio-4.png)

```
Input: grid = [[1,1],[3,4]]
Output: 8
Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [1], [3], [4].
- Paths with length 2: [1 -> 3], [1 -> 4], [3 -> 4].
- Paths with length 3: [1 -> 3 -> 4].
The total number of paths is 4 + 3 + 1 = 8.
```

**Example 2:**

```
Input: grid = [[1],[2]]
Output: 3
Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [2].
- Paths with length 2: [1 -> 2].
The total number of paths is 2 + 1 = 3.
```

**Constraints:**

*   `m == grid.length`
*   `n == grid[i].length`
*   `1 <= m, n <= 1000`
*   1 <= m * n <= 10<sup>5</sup>
*   1 <= grid[i][j] <= 10<sup>5</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array(m).fill().map(() => Array(n).fill(1))
  
  const nums = []
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      nums.push([i, j, grid[i][j]])
    }
  }
  nums.sort((a, b) => a[2] - b[2])
  
  const mod = 1e9 + 7
  let ans = 0
  const dirs = [0, 1, 0, -1, 0]
  for (const [i, j, v] of nums) {
    for (let d = 0; d < dirs.length - 1; d += 1) {
      const ni = i + dirs[d]
      const nj = j + dirs[d + 1]
      if (ni < 0 || ni === m || nj < 0 || nj === n || grid[ni][nj] >= v) continue
      dp[i][j] = (dp[i][j] + dp[ni][nj]) % mod
    }
    ans = (ans + dp[i][j]) % mod
  }
  
  return ans
};
```