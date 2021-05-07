### [329\. Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

Difficulty: **Hard**  

Related Topics: [Depth-first Search](https://leetcode.com/tag/depth-first-search/), [Topological Sort](https://leetcode.com/tag/topological-sort/), [Memoization](https://leetcode.com/tag/memoization/)


Given an `m x n` integers `matrix`, return _the length of the longest increasing path in_ `matrix`.

From each cell, you can either move in four directions: left, right, up, or down. You **may not** move **diagonally** or move **outside the boundary** (i.e., wrap-around is not allowed).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg)

```
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg)

```
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
```

**Example 3:**

```
Input: matrix = [[1]]
Output: 1
```

**Constraints:**

*   `m == matrix.length`
*   `n == matrix[i].length`
*   `1 <= m, n <= 200`
*   `0 <= matrix[i][j] <= 2<sup>31</sup> - 1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  
  const dp = Array(m).fill().map(() => Array(n).fill(-Infinity))
  const dirs = [-1, 0, 1, 0, -1]
  
  let ans = 1
  const dfs = (i, j) => {
    if (dp[i][j] === -Infinity) {
      dp[i][j] = 1
      for (let d = 0; d < dirs.length - 1; d += 1) {
        const ni = i + dirs[d]
        const nj = j + dirs[d + 1]
        if (ni < 0 || ni === m) continue
        if (nj < 0 || nj === n) continue
        if (matrix[ni][nj] <= matrix[i][j]) continue
        dp[i][j] = Math.max(dp[i][j], dfs(ni, nj) + 1)
      }
      ans = Math.max(ans, dp[i][j])
    }
    return dp[i][j]
  }
  
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      dfs(i, j)
    }
  }
  
  return ans
};
```