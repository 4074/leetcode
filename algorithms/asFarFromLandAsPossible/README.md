### [1162\. As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)

Difficulty: **Medium**


Given an N x N `grid` containing only values `0` and `1`, where `0` represents water and `1` represents land, find a water cell such that its distance to the nearest land cell is maximized and return the distance.

The distance used in this problem is the _Manhattan distance_: the distance between two cells `(x0, y0)` and `(x1, y1)` is `|x0 - x1| + |y0 - y1|`.

If no land or water exists in the grid, return `-1`.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/05/03/1336_ex1.JPG)**

```
Input: [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: 
The cell (1, 1) is as far as possible from all the land with distance 2.
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2019/05/03/1336_ex2.JPG)**

```
Input: [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: 
The cell (2, 2) is as far as possible from all the land with distance 4.
```

**Note:**

1.  <span style="display: inline;">`1 <= grid.length == grid[0].length <= 100`</span>
2.  <span style="display: inline;">`grid[i][j]` is `0` or `1`</span>


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let queue = []
    const visited = Array(grid.length).fill()
        .map(() => Array(grid[0].length).fill(false))
    const diffs = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ]
    
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
                visited[i][j] = true
            }
        }
    }
    
    let step = -1
    while(queue.length) {
        const next = []
        
        for (const p of queue) {
            for (const d of diffs) {
                const x = p[0] + d[0]
                const y = p[1] + d[1]
                
                if (x >= 0 && x < grid.length
                    && y >= 0 && y < grid[x].length
                    && !visited[x][y]
                   ) {
                    visited[x][y] = true
                    next.push([x, y])
                }
            }
        }
        
        queue = next
        step += 1
    }
    
    return step || -1
};
```