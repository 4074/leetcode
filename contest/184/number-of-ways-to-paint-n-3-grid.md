### [1411\. Number of Ways to Paint N × 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)

Difficulty: **Hard**


You have a `grid` of size `n x 3` and you want to paint each cell of the grid with exactly one of the three colours: **Red**, **Yellow** or **Green** while making sure that no two adjacent cells have the same colour (i.e no two cells that share vertical or horizontal sides have the same colour).

You are given `n` the number of rows of the grid.

Return _the number of ways_ you can paint this `grid`. As the answer may grow large, the answer **must be** computed modulo `10^9 + 7`.

**Example 1:**

```
Input: n = 1
Output: 12
Explanation: There are 12 possible way to paint the grid as shown:

```

**Example 2:**

```
Input: n = 2
Output: 54
```

**Example 3:**

```
Input: n = 3
Output: 246
```

**Example 4:**

```
Input: n = 7
Output: 106494
```

**Example 5:**

```
Input: n = 5000
Output: 30228214
```

**Constraints:**

*   `n == grid.length`
*   `grid[i].length == 3`
*   `1 <= n <= 5000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const colors = [0, 1, 2]
    const conditions = [
        [0, 1, 2], [0, 1, 0], [0, 2, 1], [0, 2, 0],
        [1, 0, 2], [1, 0, 1], [1, 2, 0], [1, 2, 1],
        [2, 1, 0], [2, 1, 2], [2, 0, 1], [2, 0, 2]
    ]
    const nextConditions = conditions.map(item => {
        let last = []
        for (let j = 0; j < conditions.length; j += 1) {
            let available = true
            for (let i = 0; i <= 2; i += 1) {
                if (item[i] === conditions[j][i]) {
                    available = false
                    break
                }
            }
            if (available) last.push(j)
        }
        return last
    })
    
    const mod = 10 ** 9 + 7
    const dp = Array(n).fill().map(() => Array(conditions.length).fill(0))
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < conditions.length; j += 1) {
            if (i === 0) {
                dp[i][j] = 1
                continue
            }
            
            for (const k of nextConditions[j]) {
                dp[i][j] = (dp[i][j] + dp[i - 1][k]) % mod
            }
        }
    }
    
    let ans = 0
    for (let i = 0; i < conditions.length; i += 1) {
        ans = (ans + dp[n - 1][i]) % mod
    }
    return ans
};
```