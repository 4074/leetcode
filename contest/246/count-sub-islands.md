### [1905\. Count Sub Islands](https://leetcode.com/problems/count-sub-islands/)

Difficulty: **Medium**  

Related Topics: [Depth-first Search](https://leetcode.com/tag/depth-first-search/), [Union Find](https://leetcode.com/tag/union-find/)


You are given two `m x n` binary matrices `grid1` and `grid2` containing only `0`'s (representing water) and `1`'s (representing land). An **island** is a group of `1`'s connected **4-directionally** (horizontal or vertical). Any cells outside of the grid are considered water cells.

An island in `grid2` is considered a **sub-island** if there is an island in `grid1` that contains **all** the cells that make up **this** island in `grid2`.

Return the _**number** of islands in_ `grid2` _that are considered **sub-islands**_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/06/10/test1.png)

```
Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/06/03/testcasex2.png)

```
Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
```

**Constraints:**

*   `m == grid1.length == grid2.length`
*   `n == grid1[i].length == grid2[i].length`
*   `1 <= m, n <= 500`
*   `grid1[i][j]` and `grid2[i][j]` are either `0` or `1`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const m = grid1.length
  const n = grid1[0].length
  
  let queue = []
  
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid1[i][j] === 0 && grid2[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }
  
  walk(queue, grid2)
  
  let ans = 0
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid2[i][j] === 0) continue
      ans += 1
      queue = [[i, j]]
      walk(queue, grid2)
    }
  }
  
  return ans
};
​
function walk(queue, grid) {
  const m = grid.length
  const n = grid[0].length
  const dirs = [0, 1, 0, -1, 0]
  while (queue.length) {
    let size = queue.length
    while (size) {
      size -= 1
      const [i, j] = queue.pop()
      grid[i][j] = 0
      for (let d = 0; d < dirs.length - 1; d += 1) {
        const ni = i + dirs[d]
        const nj = j + dirs[d + 1]
        if (ni < 0 || ni === m) continue
        if (nj < 0 || nj === n) continue
        if (grid[ni][nj] === 0) continue
        queue.push([ni, nj])
      }
    }
  }
}
```