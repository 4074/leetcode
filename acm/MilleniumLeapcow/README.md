# [Millenium Leapcow](http://poj.org/problem?id=2111)

**Problem Description**

The cows have revised their game of leapcow. They now play in the middle of a huge pasture upon which they have marked a grid that bears a remarkable resemblance to a chessboard of N rows and N columns (3 <= N <= 365). 

Here's how they set up the board for the new leapcow game: 

* First, the cows obtain N x N squares of paper. They write the integers from 1 through N x N, one number on each piece of paper. 

* Second, the 'number cow' places the papers on the N x N squares in an order of her choosing. 

Each of the remaining cows then tries to maximize her score in the game. 

* First, she chooses a starting square and notes its number. 

* Then, she makes a 'knight' move (like the knight on a chess board) to a square with a higher number. If she's particularly strong, she leaps to the that square; otherwise she walks. 

* She continues to make 'knight' moves to higher numbered squares until no more moves are possible. 

Each square visited by the 'knight' earns the competitor a single point. The cow with the most points wins the game. 

Help the cows figure out the best possible way to play the game.

**Input**

* Line 1: A single integer: the size of the board 

* Lines 2.. ...: These lines contain space-separated integers that tell the contents of the chessboard. The first set of lines (starting at the second line of the input file) represents the first row on the chessboard; the next set of lines represents the next row, and so on. To keep the input lines of reasonable length, when N > 15, a row is broken into successive lines of 15 numbers and a potentially shorter line to finish up a row. Each new row begins on its own line. 

**Output**

* Line 1: A single integer that is the winning cow's score; call it W. 

* Lines 2..W+1: Output, one per line, the integers that are the starting square, the next square the winning cow visits, and so on through the last square. If a winning cow can choose more than one path, show the path that would be the 'smallest' if the paths were sorted by comparing their respective 'square numbers'.

**Sample Input**

4<br>
1 3 2 16<br>
4 10 6 7<br>
8 11 5 12<br>
9 13 14 15

**Sample Output**

7<br>
2<br>
4<br>
5<br>
9<br>
10<br>
12<br>
13

**Resolution**

```js
function get(boards) {
    const store = {}

    function f(i, j) {
        const key = i + '-' + j
        if (store[key]) return store[key];

        const number = boards[i][j]
        let max = []
        for (let n=0; n<boards.length; n++) {
            for (let m=0; m<boards.length; m++) {
                if (
                    boards[n][m] > number && (
                        (Math.abs(n-i) === 1 && Math.abs(m-j) === 2) ||
                        (Math.abs(n-i) === 2 && Math.abs(m-j) === 1)
                    )
                ) {
                    const r = f(n, m)
                    if (r.length > max.length) {
                        max = r
                    }
                }
            }
        }

        max = [boards[i][j]].concat(max)
        store[key] = max

        return max
    }

    let result = []
    for (let i=0; i<boards.length; i++) {
        for (let j=0; j<boards.length; j++) {
            const r = f(i, j)
            if (r.length > result.length) {
                result = r
            }
        }
    }

    return result
}
```