# [2267\. Check if There Is a Valid Parentheses String Path](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/)

## Description

Difficulty: **Hard**  

Related Topics:


A parentheses string is a **non-empty** string consisting only of `'('` and `')'`. It is **valid** if **any** of the following conditions is **true**:

*   It is `()`.
*   It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid parentheses strings.
*   It can be written as `(A)`, where `A` is a valid parentheses string.

You are given an `m x n` matrix of parentheses `grid`. A **valid parentheses string path** in the grid is a path satisfying **all** of the following conditions:

*   The path starts from the upper left cell `(0, 0)`.
*   The path ends at the bottom-right cell `(m - 1, n - 1)`.
*   The path only ever moves **down** or **right**.
*   The resulting parentheses string formed by the path is **valid**.

Return `true` _if there exists a **valid parentheses string path** in the grid._ Otherwise, return `false`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/15/example1drawio.png)

```
Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string "()(())".
The second path shown results in the valid parentheses string "((()))".
Note that there may be other valid parentheses string paths.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/15/example2drawio.png)

```
Input: grid = [[")",")"],["(","("]]
Output: false
Explanation: The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false.
```

**Constraints:**

*   `m == grid.length`
*   `n == grid[i].length`
*   `1 <= m, n <= 100`
*   `grid[i][j]` is either `'('` or `')'`.


## Solution

Language: **JavaScript**


**Bottom-Up**
```javascript
const MutilpleArray = (sizes, value) => {
  if (!sizes.length) return value
  return Array(sizes[0]).fill().map(() => MutilpleArray(sizes.slice(1), value))
}
​
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const cache = MutilpleArray([m, n, m + n], -1)
  
  const dfs = (row, col, num) => {
    if (num < 0 || num > m + n || row === m || col === n) return false
    if (cache[row][col][num] === -1) {
      const count = grid[row][col] === '(' ? (num + 1) : (num - 1)
      if (row === m - 1 && col === n - 1) {
        cache[row][col][num] = count === 0 ? 1 : 0
      } else {
        cache[row][col][num] = dfs(row + 1, col, count) || dfs(row, col + 1, count)
      }
    }
    return cache[row][col][num]
  }
​
  return dfs(0, 0, 0)
};
```

**Top-Down**
```javascript
const MutilpleArray = (sizes, value) => {
  if (!sizes.length) return value
  return Array(sizes[0]).fill().map(() => MutilpleArray(sizes.slice(1), value))
}

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = MutilpleArray([m, n, m + n], 0)
  if (grid[0][0] !== '(' || grid[m-1][n-1] !== ')') return false
  dp[0][0][1] = 1
  
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 && j === 0) continue
      for (let k = 0; k < m + n; k += 1) {
        if (grid[i][j] === '(') {
          if (k > 0) dp[i][j][k] = dp[i-1]?.[j]?.[k-1] || dp[i]?.[j-1]?.[k-1]
        } else {
          dp[i][j][k] = dp[i-1]?.[j]?.[k+1] || dp[i]?.[j-1]?.[k+1]
        }
      }
    }
  }

  return !!dp[m-1][n-1][0]
};
```