### [52\. N-Queens II](https://leetcode.com/problems/n-queens-ii/)

Difficulty: **Hard**


The _n_-queens puzzle is the problem of placing _n_ queens on an _n_×_n_ chessboard such that no two queens attack each other.

![](https://assets.leetcode.com/uploads/2018/10/12/8-queens.png)

Given an integer _n_, return the number of distinct solutions to the _n_-queens puzzle.

**Example:**

```
Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0
    
    function search(points) {
        if (points.length === n) {
            return count += 1
        }
        
        for (let i=0; i<n; i++) {
            let isAvalible = true
            for (let j=0; j<points.length; j++) {
                if (
                    i === points[j]
                    || points.length + i === j + points[j]
                    || points.length - i === j - points[j]
                ) {
                    isAvalible = false
                    break
                }
            }
           
            if (isAvalible) {
                points.push(i)
                search(points)
                points.pop()
            }
        }
    }
    
    search([])
    
    return count
};
```