### [1568\. Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)

Difficulty: **Medium**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


Given a 2D `grid` consisting of `1`s (land) and `0`s (water).  An _island_ is a maximal 4-directionally (horizontal or vertical) connected group of `1`s.

The grid is said to be **connected** if we have **exactly one island**, otherwise is said **disconnected**.

In one day, we are allowed to change **any** single land cell `(1)` into a water cell `(0)`.

Return _the minimum number of days_ to disconnect the grid.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/08/13/1926_island.png)**

```
Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
Output: 2
Explanation: We need at least 2 days to get a disconnected grid.
Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.
```

**Example 2:**

```
Input: grid = [[1,1]]
Output: 2
Explanation: Grid of full water is also disconnected ([[1,1]] -> [[0,0]]), 0 islands.
```

**Example 3:**

```
Input: grid = [[1,0,1,0]]
Output: 0
```

**Example 4:**

```
Input: grid = [[1,1,0,1,1],
               [1,1,1,1,1],
               [1,1,0,1,1],
               [1,1,0,1,1]]
Output: 1
```

**Example 5:**

```
Input: grid = [[1,1,0,1,1],
               [1,1,1,1,1],
               [1,1,0,1,1],
               [1,1,1,1,1]]
Output: 2
```

**Constraints:**

*   `1 <= grid.length, grid[i].length <= 30`
*   `grid[i][j]` is `0` or `1`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    function isDisconnected() {
        let count = 0
        const queue = []
        for (let i = 0; i < m; i += 1) {
            for (let j = 0; j < n; j += 1) {
                count += grid[i][j]
                if (grid[i][j] && !queue.length) {
                    queue.push([i, j])
                }
            }
        }
        if (count === 0) return true
        
        const dirs = [0, 1, 0, -1, 0]
        const seen = Array(m).fill().map(() => Array(n).fill(0))
        seen[queue[0][0]][queue[0][1]] = 1
        
        while (queue.length) {
            let size = queue.length
            count -= size
            while (size) {
                size -= 1
                const [x, y] = queue.pop()
                for (let d = 0; d < dirs.length - 1; d += 1) {
                    const next = [x + dirs[d], y + dirs[d + 1]]
                    if (next[0] < 0 || next[0] >= m) continue
                    if (next[1] < 0 || next[1] >= n) continue
                    if (seen[next[0]][next[1]]) continue
                    if (grid[next[0]][next[1]] === 0) continue
                    seen[next[0]][next[1]] = 1
                    queue.unshift(next)
                }
            }
        }
        return count > 0
    }
    
    if (isDisconnected()) return 0
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (grid[i][j]) {
                grid[i][j] = 0
                if (isDisconnected()) return 1
                grid[i][j] = 1
            }
        }
    }
    
    return 2
};
```