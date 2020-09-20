### [1594\. Maximum Non Negative Product in a Matrix](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Greedy](https://leetcode.com/tag/greedy/)


You are given a `rows x cols` matrix `grid`. Initially, you are located at the top-left corner `(0, 0)`, and in each step, you can only **move right or down** in the matrix.

Among all possible paths starting from the top-left corner `(0, 0)` and ending in the bottom-right corner `(rows - 1, cols - 1)`, find the path with the **maximum non-negative product**. The product of a path is the product of all integers in the grid cells visited along the path.

Return the _maximum non-negative product **modulo** _`10<sup>9</sup> + 7`. _If the maximum product is **negative** return _`-1`.

**Notice that the modulo is performed after getting the maximum product.**

**Example 1:**

```
Input: grid = [[-1,-2,-3],
               [-2,-3,-3],
               [-3,-3,-2]]
Output: -1
Explanation: It's not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.
```

**Example 2:**

```
Input: grid = [[1,-2,1],
               [1,-2,1],
               [3,-4,1]]
Output: 8
Explanation: Maximum non-negative product is in bold (1 * 1 * -2 * -4 * 1 = 8).
```

**Example 3:**

```
Input: grid = [[1, 3],
               [0,-4]]
Output: 0
Explanation: Maximum non-negative product is in bold (1 * 0 * -4 = 0).
```

**Example 4:**

```
Input: grid = [[ 1, 4,4,0],
               [-2, 0,0,1],
               [ 1,-1,1,1]]
Output: 2
Explanation: Maximum non-negative product is in bold (1 * -2 * 1 * -1 * 1 * 1 = 2).
```

**Constraints:**

*   `1 <= rows, cols <= 15`
*   `-4 <= grid[i][j] <= 4`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const mod = 10 ** 9 + 7
    
    const dp = Array(m).fill().map(
        () => Array(n).fill()
    )
    
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (i === 0 && j === 0) {
                dp[i][j] = [grid[0][0], grid[0][0]]
                continue
            }
            
            const num = grid[i][j]
            let min = Infinity, max = -Infinity
            if (i > 0) {
                min = Math.min(min, dp[i - 1][j][0] * num, dp[i - 1][j][1] * num)
                max = Math.max(max, dp[i - 1][j][0] * num, dp[i - 1][j][1] * num)
            }
            if (j > 0) {
                min = Math.min(min, dp[i][j - 1][0] * num, dp[i][j - 1][1] * num)
                max = Math.max(max, dp[i][j - 1][0] * num, dp[i][j - 1][1] * num)
            }
            
            dp[i][j] = [min, max]
        }
    }
    
    return Math.max(dp[m - 1][n - 1][1] % mod, -1)
};
```