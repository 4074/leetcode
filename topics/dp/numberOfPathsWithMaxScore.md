### [1301\. Number of Paths with Max Score](https://leetcode.com/problems/number-of-paths-with-max-score/)

Difficulty: **Hard**


You are given a square `board` of characters. You can move on the board starting at the bottom right square marked with the character `'S'`.

You need to reach the top left square marked with the character `'E'`. The rest of the squares are labeled either with a numeric character `1, 2, ..., 9` or with an obstacle `'X'`. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.

Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, **taken modulo `10^9 + 7`**.

In case there is no path, return `[0, 0]`.

**Example 1:**

```
Input: board = ["E23","2X2","12S"]
Output: [7,1]
```

**Example 2:**

```
Input: board = ["E12","1X1","21S"]
Output: [4,2]
```

**Example 3:**

```
Input: board = ["E11","XXX","11S"]
Output: [0,0]
```

**Constraints:**

*   `2 <= board.length == board[i].length <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const dp = Array(board.length).fill().
        map(() => Array(board[0].length).fill().map(() => [0, 0]))
    const mod = Math.pow(10, 9) + 7
    
    dp[0][0][1] = 1
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length; j += 1) {
            const char = board[i][j]
            if (char === 'E' || char === 'X') continue
            
            const values = []
            if (i > 0 && dp[i - 1][j][1] > 0) values.push(dp[i - 1][j])
            if (j > 0 && dp[i][j - 1][1] > 0) values.push(dp[i][j - 1])
            if (i > 0 && j > 0 && dp[i - 1][j - 1][1] > 0)
                values.push(dp[i - 1][j - 1])
            
            if (!values.length) continue
            const max = Math.max(...values.map(v => v[0]))
            const step = values.filter(v => v[0] === max)
                .reduce((s, v) => s + v[1], 0)
            
            dp[i][j][0] = ((char === 'S' ? 0 : parseInt(char)) + max) % mod
            dp[i][j][1] = step % mod
        }
    }
    
    return dp[board.length - 1][board[0].length - 1]
};
```

Split Sub Problems
```javascript
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const dp = Array(board.length + 1).fill().
        map(() => Array(board[0].length + 1).fill(0))
    const steps = Array(board.length + 1).fill().
        map(() => Array(board[0].length + 1).fill(0))
    const mod = Math.pow(10, 9) + 7
    
    steps[board.length - 1][board[0].length - 1] = 1
    for (let i = board.length - 1; i >= 0; i -= 1) {
        for (let j = board[0].length - 1; j >= 0; j -= 1) {
            const char = board[i][j]
            if (char === 'S' || char === 'X') continue
            const max = Math.max(
                dp[i + 1][j],
                dp[i][j + 1],
                dp[i + 1][j + 1]
            )
            
            if (dp[i + 1][j] === max) {
                steps[i][j] = (steps[i][j] + steps[i + 1][j]) % mod
            }
            if (dp[i][j + 1] === max) {
                steps[i][j] = (steps[i][j] + steps[i][j + 1]) % mod
            }
            if (dp[i + 1][j + 1] === max) {
                steps[i][j] = (steps[i][j] + steps[i + 1][j + 1]) % mod
            }
            if (steps[i][j])
                dp[i][j] = ((char === 'E' ? 0 : parseInt(char)) + max) % mod
        }
    }
    
    return [dp[0][0], steps[0][0]]
};
```