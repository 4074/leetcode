### [1138\. Alphabet Board Path](https://leetcode.com/problems/alphabet-board-path/)

Difficulty: **Medium**


On an alphabet board, we start at position `(0, 0)`, corresponding to character `board[0][0]`.

Here, `board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]`, as shown in the diagram below.

![](https://assets.leetcode.com/uploads/2019/07/28/azboard.png)

We may make the following moves:

*   `'U'` moves our position up one row, if the position exists on the board;
*   `'D'` moves our position down one row, if the position exists on the board;
*   `'L'` moves our position left one column, if the position exists on the board;
*   `'R'` moves our position right one column, if the position exists on the board;
*   `'!'` adds the character `board[r][c]` at our current position `(r, c)` to the answer.

(Here, the only positions that exist on the board are positions with letters on them.)

Return a sequence of moves that makes our answer equal to `target` in the minimum number of moves.  You may return any path that does so.

**Example 1:**

```
Input: target = "leet"
Output: "DDR!UURRR!!DDD!"
```

**Example 2:**

```
Input: target = "code"
Output: "RR!DDRR!UUL!R!"
```

**Constraints:**

*   `1 <= target.length <= 100`
*   `target` consists only of English lowercase letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    var board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
    var map = {}
    for (var i=0; i<board.length; i++) {
        for (var j=0; j<board[i].length; j++) {
            map[board[i][j]] = [i, j]
        }
    }
    
    var position = [0, 0]
    var result = ''
    for (var k=0; k<target.length; k++) {
        var p = map[target[k]]
        var diff = [position[0] - p[0], position[1] - p[1]]
        var row = (diff[0] > 0 ? 'U' : 'D').repeat(Math.abs(diff[0]))
        var col = (diff[1] > 0 ? 'L' : 'R').repeat(Math.abs(diff[1]))
        if (p[0] === board.length - 1) {
            result += col + row + '!'
        } else {
            result += row + col + '!'
        }
        position = p
    }
    
    return result
};
```