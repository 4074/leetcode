### [1368\. Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)

Difficulty: **Hard**

Given a _m_ x _n_ `grid`. Each cell of the `grid` has a sign pointing to the next cell you should visit if you are currently in this cell. The sign of `grid[i][j]` can be:

*   **1** which means go to the cell to the right. (i.e go from `grid[i][j]` to `grid[i][j + 1]`)
*   **2** which means go to the cell to the left. (i.e go from `grid[i][j]` to `grid[i][j - 1]`)
*   **3** which means go to the lower cell. (i.e go from `grid[i][j]` to `grid[i + 1][j]`)
*   **4** which means go to the upper cell. (i.e go from `grid[i][j]` to `grid[i - 1][j]`)

Notice that there could be some **invalid signs** on the cells of the `grid` which points outside the `grid`.

You will initially start at the upper left cell `(0,0)`. A valid path in the grid is a path which starts from the upper left cell `(0,0)` and ends at the bottom-right cell `(m - 1, n - 1)` following the signs on the grid. The valid path **doesn't have to be the shortest**.

You can modify the sign on a cell with `cost = 1`. You can modify the sign on a cell **one time only**.

Return _the minimum cost_ to make the grid have at least one valid path.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/02/13/grid1.png)

```
Input: grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
Output: 3
Explanation: You will start at point (0, 0).
The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3) change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) change the arrow to down with cost = 1 --> (3, 3)
The total cost = 3.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/02/13/grid2.png)

```
Input: grid = [[1,1,3],[3,2,2],[1,1,4]]
Output: 0
Explanation: You can follow the path from (0, 0) to (2, 2).
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2020/02/13/grid3.png)

```
Input: grid = [[1,2],[4,3]]
Output: 1
```

**Example 4:**

```
Input: grid = [[2,2,2],[2,2,2]]
Output: 3
```

**Example 5:**

```
Input: grid = [[4]]
Output: 0
```

**Constraints:**

*   `m == grid.length`
*   `n == grid[i].length`
*   `1 <= m, n <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const cost = Array(m).fill()
        .map(() => Array(n).fill(Infinity))
    const dirs = [0, 1, 0, -1, 0]
    const dirMap = {
        1: [0, 1],
        2: [0, -1],
        3: [1, 0],
        4: [-1, 0]
    }
    
    cost[0][0] = 0
    const queue = [[0, 0]]
    while (queue.length) {
        let size = queue.length
        while (size) {
            size -= 1
            const p = queue.pop()
            const zeroCostDir = dirMap[grid[p[0]][p[1]]]
            
            for (let i = 0; i < dirs.length - 1; i += 1) {
                const nextCost = zeroCostDir[0] === dirs[i] && zeroCostDir[1] === dirs[i + 1] ? 0 : 1
                const next = [p[0] + dirs[i], p[1] + dirs[i + 1]]
                
                if (next[0] < 0 || next[0] >= m) continue
                if (next[1] < 0 || next[1] >= n) continue
                if (nextCost + cost[p[0]][p[1]] >= cost[next[0]][next[1]]) continue
                
                cost[next[0]][next[1]] = nextCost + cost[p[0]][p[1]]
                queue.unshift(next)
            }
        }
    }
    
    return cost[m - 1][n - 1]
};
```