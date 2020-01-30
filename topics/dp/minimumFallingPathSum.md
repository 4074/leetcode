### [931\. Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)

Difficulty: **Medium**


Given a **square** array of integers `A`, we want the **minimum** sum of a _falling path_ through `A`.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.

**Example 1:**

```
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: 12
Explanation: 
The possible falling paths are:
```

*   `[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]`
*   `[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]`
*   `[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]`

The falling path with the smallest sum is `[1,4,7]`, so the answer is `12`.

**Note:**

1.  `1 <= A.length == A[0].length <= 100`
2.  `-100 <= A[i][j] <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    const dp = Array(A.length).fill()
        .map(() => Array(A.length).fill(0))
    
    let result = Infinity
    for (let row = 0; row < A.length; row += 1) {
        for (let col = 0; col < A.length; col += 1) {
            if (row === 0) {
                dp[row][col] = A[row][col]
            } else {
                const values = [dp[row - 1][col]]
                if (col > 0) {
                    values.push(dp[row - 1][col - 1])
                }
                if (col < A.length - 1) {
                    values.push(dp[row - 1][col + 1])
                }
                dp[row][col] = Math.min.apply(null, values) + A[row][col]
            }
            if (row === A.length - 1) {
                result = Math.min(result, dp[row][col])
            }
        }
    }
    
    return result
};
```