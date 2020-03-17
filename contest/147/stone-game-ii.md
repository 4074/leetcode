### [1140\. Stone Game II](https://leetcode.com/problems/stone-game-ii/)

Difficulty: **Medium**


Alex and Lee continue their games with piles of stones.  There are a number of piles **arranged in a row**, and each pile has a positive integer number of stones `piles[i]`.  The objective of the game is to end with the most stones. 

Alex and Lee take turns, with Alex starting first.  Initially, `M = 1`.

On each player's turn, that player can take **all the stones** in the **first** `X` remaining piles, where `1 <= X <= 2M`.  Then, we set `M = max(M, X)`.

The game continues until all the stones have been taken.

Assuming Alex and Lee play optimally, return the maximum number of stones Alex can get.

**Example 1:**

```
Input: piles = [2,7,9,4,4]
Output: 10
Explanation:  If Alex takes one pile at the beginning, Lee takes two piles, then Alex takes 2 piles again. Alex can get 2 + 4 + 4 = 10 piles in total. If Alex takes two piles at the beginning, then Lee can take all three piles left. In this case, Alex get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 
```

**Constraints:**

*   `1 <= piles.length <= 100`
*   `1 <= piles[i] <= 10 ^ 4`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const mem = Array(piles.length).fill().map(() => Array(piles.length).fill())
    
    function dp(start, m) {
        if (start >= piles.length) return 0
        if (mem[start][m] === undefined) {
            let max = -Infinity, stones = 0
            for (let i = 1; i <= 2 * m; i += 1) {
                stones += piles[start + i - 1] || 0
                max = Math.max(max, stones - dp(start + i, Math.max(m, i)))
                if (!start) {
                    console.log(max)
                }
            }
            mem[start][m] = max
        }
        return mem[start][m]
    }
    
    const maxWin = dp(0, 1)
    return (piles.reduce((sum, v) => sum + v, 0) + maxWin) / 2
};
```