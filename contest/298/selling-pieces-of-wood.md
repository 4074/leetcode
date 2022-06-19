# [2312\. Selling Pieces of Wood](https://leetcode.com/problems/selling-pieces-of-wood/submissions/)

## Description

Difficulty: **Hard**  

Related Topics: [Backtracking](https://leetcode.com/tag/backtracking/)


You are given two integers `m` and `n` that represent the height and width of a rectangular piece of wood. You are also given a 2D integer array `prices`, where prices[i] = [h<sub>i</sub>, w<sub>i</sub>, price<sub>i</sub>] indicates you can sell a rectangular piece of wood of height h<sub>i</sub> and width w<sub>i</sub> for price<sub>i</sub> dollars.

To cut a piece of wood, you must make a vertical or horizontal cut across the **entire** height or width of the piece to split it into two smaller pieces. After cutting a piece of wood into some number of smaller pieces, you can sell pieces according to `prices`. You may sell multiple pieces of the same shape, and you do not have to sell all the shapes. The grain of the wood makes a difference, so you **cannot** rotate a piece to swap its height and width.

Return _the **maximum** money you can earn after cutting an_ `m x n` _piece of wood_.

Note that you can cut the piece of wood as many times as you want.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/04/27/ex1.png)

```
Input: m = 3, n = 5, prices = [[1,4,2],[2,2,7],[2,1,3]]
Output: 19
Explanation: The diagram above shows a possible scenario. It consists of:
- 2 pieces of wood shaped 2 x 2, selling for a price of 2 * 7 = 14.
- 1 piece of wood shaped 2 x 1, selling for a price of 1 * 3 = 3.
- 1 piece of wood shaped 1 x 4, selling for a price of 1 * 2 = 2.
This obtains a total of 14 + 3 + 2 = 19 money earned.
It can be shown that 19 is the maximum amount of money that can be earned.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/04/27/ex2new.png)

```
Input: m = 4, n = 6, prices = [[3,2,10],[1,4,2],[4,1,3]]
Output: 32
Explanation: The diagram above shows a possible scenario. It consists of:
- 3 pieces of wood shaped 3 x 2, selling for a price of 3 * 10 = 30.
- 1 piece of wood shaped 1 x 4, selling for a price of 1 * 2 = 2.
This obtains a total of 30 + 2 = 32 money earned.
It can be shown that 32 is the maximum amount of money that can be earned.
Notice that we cannot rotate the 1 x 4 piece of wood to obtain a 4 x 1 piece of wood.
```

**Constraints:**

*   `1 <= m, n <= 200`
*   1 <= prices.length <= 2 * 10<sup>4</sup>
*   `prices[i].length == 3`
*   1 <= h<sub>i</sub> <= m
*   1 <= w<sub>i</sub> <= n
*   1 <= price<sub>i</sub> <= 10<sup>6</sup>
*   All the shapes of wood (h<sub>i</sub>, w<sub>i</sub>) are pairwise **distinct**.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
  for (const [h, w, p] of prices) {
    dp[h][w] = p
  }
  
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] = Math.max(dp[i][j], dp[i][j-1], dp[i-1][j])
      for (let k = 1; k <= i/2; k += 1) {
        dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j])
      }
      for (let k = 1; k <= j/2; k += 1) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j-k])
      }
    }
  }
  
  return dp[m][n]
};
```