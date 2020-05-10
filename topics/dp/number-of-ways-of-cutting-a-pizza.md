### [1444\. Number of Ways of Cutting a Pizza](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/)

Difficulty: **Hard**


Given a rectangular pizza represented as a `rows x cols` matrix containing the following characters: `'A'` (an apple) and `'.'` (empty cell) and given the integer `k`. You have to cut the pizza into `k` pieces using `k-1` cuts. 

For each cut you choose the direction: vertical or horizontal, then you choose a cut position at the cell boundary and cut the pizza into two pieces. If you cut the pizza vertically, give the left part of the pizza to a person. If you cut the pizza horizontally, give the upper part of the pizza to a person. Give the last piece of pizza to the last person.

_Return the number of ways of cutting the pizza such that each piece contains **at least** one apple. _Since the answer can be a huge number, return this modulo 10^9 + 7.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/04/23/ways_to_cut_apple_1.png)**

```
Input: pizza = ["A..","AAA","..."], k = 3
Output: 3 
Explanation: The figure above shows the three ways to cut the pizza. Note that pieces must contain at least one apple.
```

**Example 2:**

```
Input: pizza = ["A..","AA.","..."], k = 3
Output: 1
```

**Example 3:**

```
Input: pizza = ["A..","A..","..."], k = 1
Output: 1
```

**Constraints:**

*   `1 <= rows, cols <= 50`
*   `rows == pizza.length`
*   `cols == pizza[i].length`
*   `1 <= k <= 10`
*   `pizza` consists of characters `'A'` and `'.'` only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
    const m = pizza.length, n = pizza[0].length
    const mod = 10 ** 9 + 7
    
    const appleSum = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    for (let i = 1; i <= m; i += 1) {
        for (let j = 1; j <= n; j += 1) {
            appleSum[i][j] = appleSum[i][j - 1] + appleSum[i - 1][j] 
                - appleSum[i - 1][j - 1] + (pizza[i - 1][j - 1] === 'A' ? 1 : 0)
        }
    }
    
    function getApples(start, end) {
        return appleSum[end[0] + 1][end[1] + 1] - appleSum[end[0] + 1][start[1]]
            - appleSum[start[0]][end[1] + 1] + appleSum[start[0]][start[1]]
    }
    
    const cache = Array(m + 1).fill().map(() => Array(n + 1).fill().map(() => Array(k + 1).fill()))
    function dp(row, col, k) {
        if (cache[row][col][k] === undefined) {
            if (getApples([row, col], [m - 1, n - 1]) < k) return 0
            if (k === 1) return 1
            let count = 0
            for (let i = row + 1; i < m; i += 1) {
                if (getApples([row, col], [i - 1, n - 1])) {
                    count = (count + dp(i, col, k - 1)) % mod
                }
            }
            for (let j = col + 1; j < n; j += 1) {
                if (getApples([row, col], [m - 1, j - 1])) {
                    count = (count + dp(row, j, k - 1)) % mod
                }
            }
            cache[row][col][k] = count
        }
        return cache[row][col][k]
    }
    
    return dp(0, 0, k)
};
```