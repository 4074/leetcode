### [688\. Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)

Difficulty: **Medium**


On an `N`x`N` chessboard, a knight starts at the `r`-th row and `c`-th column and attempts to make exactly `K` moves. The rows and columns are 0 indexed, so the top-left square is `(0, 0)`, and the bottom-right square is `(N-1, N-1)`.

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

![](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly `K` moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

**Example:**

```
Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.
```

**Note:**

*   `N` will be between 1 and 25.
*   `K` will be between 0 and 100.
*   The knight always initially starts on the board.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
    const diffs = [
        [-1, -2], [-2, -1], [-2, 1], [-1, 2],
        [1, 2], [2, 1], [2, -1], [1, -2]
    ]
    
    const positions = Array(N).fill()
        .map(() => Array(N).fill(0))
    
    for (let i = 0; i < N; i += 1) {
        for (let j = 0; j < N; j += 1) {
            positions[i][j] = []
            for (const diff of diffs) {
                const nr = i + diff[0]
                const nc = j + diff[1]

                if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
                    positions[i][j].push([nr, nc])
                }
            }
        }
    }
    
    const cache = {}
    
    function dp(k, r, c) {
        if (!k) return 1
        const key = `${k}-${r}-${c}`
        
        if (!cache[key]) {
            let sum = 0
            for (const g of positions[r][c]) {
                sum += dp(k - 1, g[0], g[1]) / diffs.length
            }
            cache[key] = sum
        }
        
        return cache[key]
    }
    
    return dp(K, r, c)
};
```
[花花酱 LeetCode 688. Knight Probability in Chessboard](https://www.bilibili.com/video/av35541898)
```javascript
/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
    const diffs = [
        [-1, -2], [-2, -1], [-2, 1], [-1, 2],
        [1, 2], [2, 1], [2, -1], [1, -2]
    ]
    let dp = Array(N).fill()
        .map(() => Array(N).fill(0))
    dp[r][c] = 1
    
    for (let k = 0; k < K; k += 1) {
        const dp1 = Array(N).fill()
            .map(() => Array(N).fill(0))
        
        for (let i = 0; i < N; i += 1) {
            for (let j = 0; j < N; j += 1) {
                for (const diff of diffs) {
                    const ni = i + diff[0]
                    const nj = j + diff[1]
                    if (ni >=0 && ni < N && nj >= 0 && nj < N) {
                        dp1[ni][nj] += dp[i][j]
                    }
                }
            }
        }
        
        dp = dp1
    }
    
    let sum = 0
    for (let i = 0; i < N; i += 1) {
        for (let j = 0; j < N; j += 1) {
            sum += dp[i][j]
        }
    }
    
    return sum / Math.pow(8, K)
};
```