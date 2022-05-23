# [2245\. Maximum Trailing Zeros in a Cornered Path](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Matrix](https://leetcode.com/tag/matrix/), [Prefix Sum](https://leetcode.com/tag/prefix-sum/)


You are given a 2D integer array `grid` of size `m x n`, where each cell contains a positive integer.

A **cornered path** is defined as a set of adjacent cells with **at most** one turn. More specifically, the path should exclusively move either **horizontally** or **vertically** up to the turn (if there is one), without returning to a previously visited cell. After the turn, the path will then move exclusively in the **alternate** direction: move vertically if it moved horizontally, and vice versa, also without returning to a previously visited cell.

The **product** of a path is defined as the product of all the values in the path.

Return _the **maximum** number of **trailing zeros** in the product of a cornered path found in_ `grid`.

Note:

*   **Horizontal** movement means moving in either the left or right direction.
*   **Vertical** movement means moving in either the up or down direction.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/23/ex1new2.jpg)

```
Input: grid = [[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]]
Output: 3
Explanation: The grid on the left shows a valid cornered path.
It has a product of 15 * 20 * 6 * 1 * 10 = 18000 which has 3 trailing zeros.
It can be shown that this is the maximum trailing zeros in the product of a cornered path.

The grid in the middle is not a cornered path as it has more than one turn.
The grid on the right is not a cornered path as it requires a return to a previously visited cell.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/25/ex2.jpg)

```
Input: grid = [[4,3,2],[7,6,1],[8,8,8]]
Output: 0
Explanation: The grid is shown in the figure above.
There are no cornered paths in the grid that result in a product with a trailing zero.
```

**Constraints:**

*   `m == grid.length`
*   `n == grid[i].length`
*   1 <= m, n <= 10<sup>5</sup>
*   1 <= m * n <= 10<sup>5</sup>
*   `1 <= grid[i][j] <= 1000`


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function(grid) {
  const m = grid.length
  const n = grid[0].length
  
  const leftRight = Array(m + 1).fill().map(() => Array(n + 1).fill().map(() => [0, 0]))
  const topDown = Array(m + 1).fill().map(() => Array(n + 1).fill().map(() => [0, 0]))
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      leftRight[i][j] = [...leftRight[i][j-1]]
      topDown[i][j] = [...topDown[i-1][j]]
      let num = grid[i-1][j-1]
      while (num % 2 === 0 || num % 5 === 0) {
        if (num % 2 === 0) {
          leftRight[i][j][0] += 1
          topDown[i][j][0] += 1
          num /= 2
        }
        if (num % 5 === 0) {
          leftRight[i][j][1] += 1
          topDown[i][j][1] += 1
          num /= 5
        }
      }
      
    }
  }
  
  let ans = 0
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const lr = Math.min(leftRight[i][n][0], leftRight[i][n][1])
      const td = Math.min(topDown[m][j][0], topDown[m][j][1])
      const ld = Math.min(
        leftRight[i][j][0] + (topDown[m][j][0] - topDown[i][j][0]),
        leftRight[i][j][1] + (topDown[m][j][1] - topDown[i][j][1])
      )
      const lu = Math.min(
        leftRight[i][j][0] + topDown[i-1][j][0],
        leftRight[i][j][1] + topDown[i-1][j][1]
      )
      const tr = Math.min(
        topDown[i][j][0] + (leftRight[i][n][0] - leftRight[i][j][0]),
        topDown[i][j][1] + (leftRight[i][n][1] - leftRight[i][j][1])
      )
      const br = Math.min(
        (topDown[m][j][0] - topDown[i-1][j][0]) + (leftRight[i][n][0] - leftRight[i][j][0]),
        (topDown[m][j][1] - topDown[i-1][j][1]) + (leftRight[i][n][1] - leftRight[i][j][1])
      )
      ans = Math.max(ans, lr, td, ld, lu, tr, br)
    }
  }
  
  return ans
};
```