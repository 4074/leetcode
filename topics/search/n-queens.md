### [51\. N-Queens](https://leetcode.com/problems/n-queens/)

Difficulty: **Hard**


The _n_-queens puzzle is the problem of placing _n_ queens on an _n_×_n_ chessboard such that no two queens attack each other.

![](https://assets.leetcode.com/uploads/2018/10/12/8-queens.png)

Given an integer _n_, return all distinct solutions to the _n_-queens puzzle.

Each solution contains a distinct board configuration of the _n_-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space respectively.

**Example:**

```
Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = []
    const board = Array(n).fill(0).map(i => Array(n).fill('.'))
    
    fill(0)
    
    function fill(row) {
        if (row === n) {
            return result.push(board.map(i => i.join('')))
        }
        
        for (let i=0; i<n; i++) {
            let isAvalible = true
            for (let j=0; j<row; j++) {
                const col = board[j].indexOf('Q')
                if (
                    i === col
                    || (row - i) === (j - col)
                    || (row + i) === (j + col)
                ) {
                    isAvalible = false
                    break
                }
            }
            
            if (isAvalible) {
                board[row][i] = 'Q'
                fill(row + 1)
                board[row][i] = '.'
            }
        }
    }
​
    return result
};
```