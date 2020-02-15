### [1293\. Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)

Difficulty: **Hard**


Given a `m * n` grid, where each cell is either `0` (empty) or `1` (obstacle). In one step, you can move up, down, left or right from and to an empty cell.

Return the minimum number of steps to walk from the upper left corner `(0, 0)` to the lower right corner `(m-1, n-1)` given that you can eliminate **at most** `k` obstacles. If it is not possible to find such walk return -1.

**Example 1:**

```
Input: 
grid = 
[[0,0,0],
 [1,1,0],
 [0,0,0],
 [0,1,1],
 [0,0,0]], 
k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10. 
The shortest path with one obstacle elimination at position (3,2) is 6\. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
```

**Example 2:**

```
Input: 
grid = 
[[0,1,1],
 [1,1,1],
 [1,0,0]], 
k = 1
Output: -1
Explanation: 
We need to eliminate at least two obstacles to find such a walk.
```

**Constraints:**

*   `grid.length == m`
*   `grid[0].length == n`
*   `1 <= m, n <= 40`
*   `1 <= k <= m*n`
*   `grid[i][j] == 0 **or** 1`
*   `grid[0][0] == grid[m-1][n-1] == 0`


#### Solution

Language: **JavaScript**

BFS
```javascript
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length, n = grid[0].length
    const directions = [0, 1, 0, -1, 0]
    const seen = Array(grid.length).fill().map(() => Array(n).fill(Infinity))
    let queue = [[0, 0, 0]]
    let step = 0
    
    while (queue.length) {
        const nextQueue = []
        while(queue.length) {
            const current = queue.pop()
            if (current[0] === m - 1 && current[1] === n - 1) return step
            
            for (let d = 0; d < directions.length - 1; d += 1) {
                const x = current[0] + directions[d]
                const y = current[1] + directions[d + 1]
                if (x < 0 || y < 0 || x >= m || y >= n) continue
                
                const o = current[2] + grid[x][y]
                if (o >= seen[x][y] || o > k) continue
                
                seen[x][y] = o
                nextQueue.push([x, y, o])
            }
        }
        step += 1
        queue = nextQueue
    }
    
    return -1
};
```
DP + DFS
```javascript
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length, n = grid[0].length
    const dirs = [0, 1, 0, -1, 0]
    
    const mem = Array(m).fill().map(
        () => Array(n).fill().map(
            () => Array(k).fill(0)
        )
    )
    const seen = Array(m).fill().map(
        () => Array(n).fill(0)
    )
    
    function dp(x, y, k) {
        if (x < 0 || x >= m || y < 0 || y >= n || k < grid[x][y])
            return Infinity
        if (seen[x][y]) return Infinity
        if (x === m - 1 && y === n - 1) return 0
        
        const nk = k - grid[x][y]
        seen[x][y] = 1
        if (!mem[x][y][k]) {
            let min = Infinity
            for (let d = 0; d < dirs.length - 1; d += 1) {
                min = Math.min(min, dp(x + dirs[d], y + dirs[d + 1], nk))
            }
            mem[x][y][k] = min + 1
        }
        seen[x][y] = 0
        
        return mem[x][y][k]
    }
    
    const step = dp(0, 0, k)
    return step === Infinity ? -1 : step
};
```