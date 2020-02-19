### [1263\. Minimum Moves to Move a Box to Their Target Location](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/)

Difficulty: **Hard**


Storekeeper is a game in which the player pushes boxes around in a warehouse trying to get them to target locations.

The game is represented by a `grid` of size `m x n`, where each element is a wall, floor, or a box.

Your task is move the box `'B'` to the target position `'T'` under the following rules:

*   Player is represented by character `'S'` and can move up, down, left, right in the `grid` if it is a floor (empy cell).
*   Floor is represented by character `'.'` that means free cell to walk.
*   Wall is represented by character `'#'` that means obstacle  (impossible to walk there). 
*   There is only one box `'B'` and one target cell `'T'` in the `grid`.
*   The box can be moved to an adjacent free cell by standing next to the box and then moving in the direction of the box. This is a **push**.
*   The player cannot walk through the box.

Return the minimum number of **pushes** to move the box to the target. If there is no way to reach the target, return `-1`.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/11/06/sample_1_1620.png)**

```
Input: grid = [["#","#","#","#","#","#"],
               ["#","T","#","#","#","#"],
               ["#",".",".","B",".","#"],
               ["#",".","#","#",".","#"],
               ["#",".",".",".","S","#"],
               ["#","#","#","#","#","#"]]
Output: 3
Explanation: We return only the number of times the box is pushed.
```

**Example 2:**

```
Input: grid = [["#","#","#","#","#","#"],
               ["#","T","#","#","#","#"],
               ["#",".",".","B",".","#"],
               ["#","#","#","#",".","#"],
               ["#",".",".",".","S","#"],
               ["#","#","#","#","#","#"]]
Output: -1
```

**Example 3:**

```
Input: grid = [["#","#","#","#","#","#"],
               ["#","T",".",".","#","#"],
               ["#",".","#","B",".","#"],
               ["#",".",".",".",".","#"],
               ["#",".",".",".","S","#"],
               ["#","#","#","#","#","#"]]
Output: 5
Explanation:  push the box down, left, left, up and up.
```

**Example 4:**

```
Input: grid = [["#","#","#","#","#","#","#"],
               ["#","S","#",".","B","T","#"],
               ["#","#","#","#","#","#","#"]]
Output: -1
```

**Constraints:**

*   `m == grid.length`
*   `n == grid[i].length`
*   `1 <= m <= 20`
*   `1 <= n <= 20`
*   `grid` contains only characters `'.'`, `'#'`,  `'S'` , `'T'`, or `'B'`.
*   There is only one character `'S'`, `'B'` <font face="sans-serif, Arial, Verdana, Trebuchet MS" style="display: inline;">and </font>`'T'` in the `grid`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function(grid) {
    const m = grid.length, n = grid[0].length
    let S, T, B
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (grid[i][j] === 'S') S = [i, j]
            if (grid[i][j] === 'T') T = [i, j]
            if (grid[i][j] === 'B') B = [i, j]
        }
    }
    
    const dirs = [0, 1, 0, -1, 0]
    function getNextPositions(start, box) {
        const result = []
        const ps = [start]
        const visited = Array(m).fill()
            .map(() => Array(n).fill(0))
        
        while (ps.length) {
            let size = ps.length
            while (size) {
                const p = ps.pop()
                size -= 1
                
                if (visited[p[0]][p[1]]) continue
                visited[p[0]][p[1]] = 1
                if (
                    Math.abs(p[0] - box[0]) <= 1 &&
                    Math.abs(p[1] - box[1]) <= 1 &&
                    Math.abs(p[0] + p[1] - box[0] - box[1]) === 1
                ) {
                    const t = [2 * box[0] - p[0], 2 * box[1] - p[1]]
                    if (
                        t[0] >= 0 && t[0] < m && t[1] >= 0 && t[1] < n &&
                        grid[t[0]][t[1]] !== '#'
                       ) result.push([[...box], t])
                }
                for (let i = 0; i < dirs.length - 1; i += 1) {
                    const np = [p[0] - dirs[i], p[1] - dirs[i + 1]]
                    // if (visited[np[0]][np[1]]) continue
                    if (np[0] < 0 || np[0] >= m) continue
                    if (np[1] < 0 || np[1] >= n) continue
                    if (np[0] === box[0] && np[1] === box[1]) continue
                    if (grid[np[0]][np[1]] === '#') continue
                    
                    ps.unshift(np)
                }
            }
        }
        
        return result
    }
    
    const queue = getNextPositions(S, B)
    let steps = 1
    const visited = new Set()
    while (queue.length) {
        let size = queue.length
        
        while (size) {
            const p = queue.pop()
            size -= 1
            
            const key = `${p[0][0]},${p[0][1]},${p[1][0]},${p[1][1]}`
            if (visited.has(key)) continue
            visited.add(key)
            
            if (p[1][0] === T[0] && p[1][1] === T[1]) return steps
            
            const ps = getNextPositions(p[0], p[1])
            for (const np of ps) {
                queue.unshift(np)
            }
        }
        
        steps += 1
    }
    
    return -1
};
```