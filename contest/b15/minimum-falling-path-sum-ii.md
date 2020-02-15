### [1289\. Minimum Falling Path Sum II](https://leetcode.com/problems/minimum-falling-path-sum-ii/)

Difficulty: **Hard**


Given a square grid of integers `arr`, a _falling path with non-zero shifts_ is a choice of exactly one element from each row of `arr`, such that no two elements chosen in adjacent rows are in the same column.

Return the minimum sum of a falling path with non-zero shifts.

**Example 1:**

```
Input: arr = [[1,2,3],[4,5,6],[7,8,9]]
Output: 13
Explanation: 
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is [1,5,7], so the answer is 13.
```

**Constraints:**

*   `1 <= arr.length == arr[i].length <= 200`
*   `-99 <= arr[i][j] <= 99`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    const m = arr.length, n = arr[0].length
    const dp = Array(m).fill()
        .map(() => Array(n).fill(Infinity))
    const minIndex = Array(m).fill(0)
    
    for (let i = 0; i < m; i += 1) {
        let rowMin = Infinity
        for (let j = 0; j < n; j += 1) {
            if (i === 0) {
                dp[i][j] = arr[i][j]
            } else {
                let min = Infinity
                if (j !== minIndex[i - 1]) {
                    min = dp[i - 1][minIndex[i - 1]]
                } else {
                    for (let k = 0; k < n; k += 1) {
                        if (k != j) {
                            min = Math.min(min, dp[i - 1][k])
                        }
                    }
                }
                
                dp[i][j] = arr[i][j] + min
            }
            
            if (dp[i][j] < rowMin) {
                rowMin = dp[i][j]
                minIndex[i] = j
            }
        }
    }
    
    return dp[m - 1].reduce((m, v) => Math.min(m, v), Infinity)
};
```