### [1254\. Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)

Difficulty: **Medium**


Given a 2D `grid` consists of `0s` (land) and `1s` (water).  An _island_ is a maximal 4-directionally connected group of `<font face="monospace" style="display: inline;">0</font>s` and a _closed island_ is an island **totally** (all left, top, right, bottom) surrounded by `1s.`

Return the number of _closed islands_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/10/31/sample_3_1610.png)

```
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/10/31/sample_4_1610.png)

```
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
```

**Example 3:**

```
Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
```

**Constraints:**

*   `1 <= grid.length, grid[0].length <= 100`
*   `0 <= grid[i][j] <=1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const seen = Array(grid.length).fill()
        .map(() => Array(grid[0].length).fill(0))
    
    function bfs(i, j) {
        const dirs = [0, -1, 0, 1, 0]
        const queue = [[i, j]]
        let closed = 1
        while (queue.length) {
            let size = queue.length
            while (size) {
                size -= 1
                const p = queue.pop()
                if (seen[p[0]][p[1]]) continue
                seen[p[0]][p[1]] = 1
                
                for (let i = 0; i < dirs.length - 1; i += 1) {
                    const np = [p[0] + dirs[i], p[1] + dirs[i + 1]]
                    if (np[0] < 0 || np[0] >= grid.length
                        || np[1] < 0 || np[1] >= grid[0].length
                       ) {
                        closed = 0
                        continue
                    }
                    
                    if (grid[np[0]][np[1]] === 0) {
                        queue.unshift(np)
                    }
                }
                
            }
        }
        return closed
    }
    
    let count = 0
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j] === 0 && !seen[i][j]) {
                count += bfs(i, j)
            }
        }
    }
    
    return count
};
```