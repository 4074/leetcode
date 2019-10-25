### [79\. Word Search](https://leetcode.com/problems/word-search/)

Difficulty: **Medium**


Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example:**

```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (search(i, j, 0)) return true
        }
    }
    return false
    
    function search(row, col, index) {
        if (index === word.length) {
            return true
        } else if (
            row < 0 || row >= board.length || col < 0 || col >= board[row].length
            || board[row][col] === '.'
        ) {
            return false
        }
        
        if (board[row][col] === word[index]) {
            const prev = board[row][col]
            board[row][col] = '.'
            
            for (const d of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                const x = row + d[0], y = col + d[1]
                if (search(x, y, index + 1)) return true
            }
            
            board[row][col] = prev
        }
        
        return false
    }
};
```