### [1275\. Find Winner on a Tic Tac Toe Game](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/)

Difficulty: **Easy**


Tic-tac-toe is played by two players _A_ and _B_ on a _3_ x _3_ grid.

Here are the rules of Tic-Tac-Toe:

*   Players take turns placing characters into empty squares (" ").
*   The first player _A_ always places "X" characters, while the second player _B_ always places "O" characters.
*   "X" and "O" characters are always placed into empty squares, never on filled ones.
*   The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
*   The game also ends if all squares are non-empty.
*   No more moves can be played if the game is over.

Given an array `moves` where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which _A_ and _B_ play.

Return the winner of the game if it exists (_A_ or _B_), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that `moves` is **valid** (It follows the rules of Tic-Tac-Toe), the grid is initially empty and _A_ will play **first**.

**Example 1:**

```
Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: "A" wins, he always plays first.
"X  "    "X  "    "X  "    "X  "    "X  "
"   " -> "   " -> " X " -> " X " -> " X "
"   "    "O  "    "O  "    "OO "    "OOX"
```

**Example 2:**

```
Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
Output: "B"
Explanation: "B" wins.
"X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
"   " -> " O " -> " O " -> " O " -> "XO " -> "XO " 
"   "    "   "    "   "    "   "    "   "    "O  "
```

**Example 3:**

```
Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
Output: "Draw"
Explanation: The game ends in a draw since there are no moves to make.
"XXO"
"OOX"
"XOX"
```

**Example 4:**

```
Input: moves = [[0,0],[1,1]]
Output: "Pending"
Explanation: The game has not finished yet.
"X  "
" O "
"   "
```

**Constraints:**

*   `1 <= moves.length <= 9`
*   `moves[i].length == 2`
*   `0 <= moves[i][j] <= 2`
*   There are no repeated elements on `moves`.
*   `moves` follow the rules of tic tac toe.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const graph = Array(3).fill('').map(i => Array(3).fill(''))
    const rowResult = Array(3).fill('')
    const colResult = Array(3).fill('')
    const diaResult = Array(2).fill('')
    
    for (let i=0; i<moves.length; i++) {
        graph[moves[i][0]][moves[i][1]] = i % 2 ? 'O' : 'X'
    }
    
    for (let i=0; i<graph.length; i++) {
        const row = graph[i]
        for (let j=0; j<row.length; j++) {
            const char = graph[i][j]
            if (!rowResult[i] || rowResult[i][0] === char) {
                rowResult[i] += char
                if (rowResult[i].length === 3) {
                    return char === 'X' ? 'A' : 'B'
                }
            }
            if (!colResult[j] || colResult[j][0] === char) {
                colResult[j] += char
                if (colResult[j].length === 3) {
                    return char === 'X' ? 'A' : 'B'
                }
            }
            if (i === j && (!diaResult[0] || diaResult[0][0] === char)) {
                diaResult[0] += char
                if (diaResult[0].length === 3) {
                    return char === 'X' ? 'A' : 'B'
                }
            }
            if (i + j === (row.length - 1) && (!diaResult[1] || diaResult[1][0] === char)) {
                diaResult[1] += char
                if (diaResult[1].length === 3) {
                    return char === 'X' ? 'A' : 'B'
                }
            }
        }
    }
    
    return moves.length === 9 ? 'Draw' : 'Pending'
};
```