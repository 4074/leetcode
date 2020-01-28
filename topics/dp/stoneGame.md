### [877\. Stone Game](https://leetcode.com/problems/stone-game/)

Difficulty: **Medium**


Alex and Lee play a game with piles of stones.  There are an even number of piles **arranged in a row**, and each pile has a positive integer number of stones `piles[i]`.

The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alex and Lee play optimally, return `True` if and only if Alex wins the game.

**Example 1:**

```
Input: [5,3,4,5]
Output: true
Explanation: 
Alex starts first, and can only take the first 5 or the last 5.
Say he takes the first 5, so that the row becomes [3, 4, 5].
If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alex, so we return true.
```

**Note:**

1.  `2 <= piles.length <= 500`
2.  `piles.length` is even.
3.  `1 <= piles[i] <= 500`
4.  `sum(piles)` is odd.


#### Solution

Language: **JavaScript**

Up-Down
```javascript
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const cache = Array(piles.length).fill()
        .map(() => Array(piles.length).fill(null))
    
    function dp(i, j) {
        if (typeof cache[i][j] !== 'number') {
            if (i === j) {
                cache[i][j] = piles[i]
            } else {
                cache[i][j] = Math.max(
                    piles[i] - dp(i + 1, j),
                    piles[j] - dp(i, j - 1)
                )
            }
        }
        return cache[i][j]
    }
    
    return dp(0, piles.length - 1) > 0
};
```

Bottom-Up
```javascript
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const dp = Array(piles.length).fill(0)
    
    for (let l = 0; l < piles.length; l += 1) {
        for (let i = 0; i < piles.length - l; i += 1) {
            if (l === 0) {
                dp[i] = piles[i]
            } else {
                dp[i] = Math.max(
                    piles[i] - dp[i + 1],
                    piles[i + l] - dp[i]
                )
            }
        }
    }
    
    return dp[0]
};
```