### [1536\. Minimum Swaps to Arrange a Binary Grid](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/)

Difficulty: **Medium**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


Given an `n x n` binary `grid`, in one step you can choose two **adjacent rows** of the grid and swap them.

A grid is said to be **valid** if all the cells above the main diagonal are **zeros**.

Return _the minimum number of steps_ needed to make the grid valid, or **-1** if the grid cannot be valid.

The main diagonal of a grid is the diagonal that starts at cell `(1, 1)` and ends at cell `(n, n)`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/07/28/fw.jpg)

```
Input: grid = [[0,0,1],[1,1,0],[1,0,0]]
Output: 3
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/07/16/e2.jpg)

```
Input: grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
Output: -1
Explanation: All rows are similar, swaps have no effect on the grid.
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2020/07/16/e3.jpg)

```
Input: grid = [[1,0,0],[1,1,0],[1,1,1]]
Output: 0
```

**Constraints:**

*   `n == grid.length`
*   `n == grid[i].length`
*   `1 <= n <= 200`
*   `grid[i][j]` is `0` or `1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    const n = grid.length
    const zeros = Array(n).fill(0)
    
    for (let i = 0; i < n; i += 1) {
        for (let j = n - 1; j >= 0; j -= 1) {
            if (grid[i][j] === 0) {
                zeros[i] += 1
            } else {
                break
            }
        }
    }
    
    let count = 0
    for (let i = 0; i < n - 1; i += 1) {
        const need = n - i - 1
        if (zeros[i] >= need) {
            continue
        }
        for (let j = i + 1; j < n; j += 1) {
            if (zeros[j] >= need) {
                for (let k = j; k > i; k -= 1) {
                    count += 1
                    const num = zeros[k - 1]
                    zeros[k - 1] = zeros[k]
                    zeros[k] = num
                }
                break
            }
        }
        if (zeros[i] < need) return -1
    }
    return count
};
```