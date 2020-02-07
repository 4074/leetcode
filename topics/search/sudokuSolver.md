### [37\. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

Difficulty: **Hard**


Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules**:

1.  Each of the digits `1-9` must occur exactly once in each row.
2.  Each of the digits `1-9` must occur exactly once in each column.
3.  Each of the the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.

Empty cells are indicated by the character `'.'`.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)  
<small style="display: inline;">A sudoku puzzle...</small>

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)  
<small style="display: inline;">...and its solution numbers marked in red.</small>

**Note:**

*   The given board contain only digits `1-9` and the character `'.'`.
*   You may assume that the given Sudoku puzzle will have a single unique solution.
*   The given board size is always `9x9`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows = Array(9).fill(0).map(i => ({}))
    const cols = Array(9).fill(0).map(i => ({}))
    const boxs = Array(9).fill(0).map(i => ({}))
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            const n = board[i][j]
            const b = parseInt(i/3) * 3 + parseInt(j/3)
            
            if (n !== '.') {
                rows[i][n] = 1
                cols[j][n] = 1
                boxs[b][n] = 1
            }
        }
    }
    
    fill(0, 0)
    
    function fill(row, col) {
        if (row >= 9) return true
        
        const nextCol = (col + 1) % 9, nextRow = row + (nextCol === 0 ? 1 : 0)
        
        if (board[row][col] !== '.') return fill(nextRow, nextCol)
        
        const box = parseInt(row/3) * 3 + parseInt(col/3)
        for (let i=1; i<=9; i++) {
            if (
                !rows[row][i]
                && !cols[col][i]
                && !boxs[box][i]
            ) {
                rows[row][i] = 1
                cols[col][i] = 1
                boxs[box][i] = 1
                board[row][col] = i + ''
                
                if (fill(nextRow, nextCol)) return true
                
                board[row][col] = '.'
                rows[row][i] = 0
                cols[col][i] = 0
                boxs[box][i] = 0
            }
        }
        
        return false
    }
};
```