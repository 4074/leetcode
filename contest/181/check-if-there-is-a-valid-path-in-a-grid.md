### [1391\. Check if There is a Valid Path in a Grid](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/)

Difficulty: **Medium**

Given a _m_ x _n_ `grid`. Each cell of the `grid` represents a street. The street of `grid[i][j]` can be:

*   **1** which means a street connecting the left cell and the right cell.
*   **2** which means a street connecting the upper cell and the lower cell.
*   **3** which means a street connecting the left cell and the lower cell.
*   **4** which means a street connecting the right cell and the lower cell.
*   **5** which means a street connecting the left cell and the upper cell.
*   **6** which means a street connecting the right cell and the upper cell.

![](https://assets.leetcode.com/uploads/2020/03/05/main.png)

You will initially start at the street of the upper-left cell `(0,0)`. A valid path in the grid is a path which starts from the upper left cell `(0,0)` and ends at the bottom-right cell `(m - 1, n - 1)`. **The path should only follow the streets**.

**Notice** that you are **not allowed** to change any street.

Return _true_ if there is a valid path in the grid or _false_ otherwise.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/03/05/e1.png)

```
Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/03/05/e2.png)

```
Input: grid = [[1,2,1],[1,2,1]]
Output: false
Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)
```

**Example 3:**

```
Input: grid = [[1,1,2]]
Output: false
Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).
```

**Example 4:**

```
Input: grid = [[1,1,1,1,1,1,3]]
Output: true
```

**Example 5:**

```
Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
Output: true
```

**Constraints:**

*   `m == grid.length`
*   `n == grid[i].length`
*   `1 <= m, n <= 300`
*   `1 <= grid[i][j] <= 6`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    const seen = Array(m).fill().map(() => Array(n).fill(0))
    seen[0][0] = 1
    let queue = [[0, 0]]
    
    const leftNums = [1, 4, 6]
    const rightNums = [1, 3, 5]
    const upNums = [2, 3, 4]
    const downNums = [2, 5, 6]
    
    while (queue.length) {
        let size = queue.length
        while (size) {
            size -= 1
            const current = queue.pop()
            if (current[0] === m - 1 && current[1] === n - 1) return true
            const num = grid[current[0]][current[1]]
            
            let left = [current[0], current[1] - 1]
            let right = [current[0], current[1] + 1]
            let up = [current[0] - 1, current[1]]
            let down = [current[0] + 1, current[1]]
​
            if (left[1] < 0 || !leftNums.includes(grid[left[0]][left[1]])) left = null
            if (right[1] >= n || !rightNums.includes(grid[right[0]][right[1]])) right = null
            if (up[0] < 0 || !upNums.includes(grid[up[0]][up[1]])) up = null
            if (down[0] >= m || !downNums.includes(grid[down[0]][down[1]])) down = null
​
            let steps
            
            if (num === 1) {
                steps = [left, right]
            } else if (num === 2) {
                steps = [up, down]
            } else if (num === 3) {
                steps = [left, down]
            } else if (num === 4) {
                steps = [right, down]
            } else if (num === 5) {
                steps = [left, up]
            } else if (num === 6) {
                steps = [right, left]
            }
            
            for (const step of steps) {
                if (step && !seen[step[0]][step[1]]) {
                    seen[step[0]][step[1]] = 1
                    queue.unshift(step)
                }
            }
        }
    }
    
    return false
};
```