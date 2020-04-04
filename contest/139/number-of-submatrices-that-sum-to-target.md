### [1074\. Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)

Difficulty: **Hard**


Given a `matrix`, and a `target`, return the number of non-empty submatrices that sum to <font face="monospace" style="display: inline;">target</font>.

A submatrix `x1, y1, x2, y2` is the set of all cells `matrix[x][y]` with `x1 <= x <= x2` and `y1 <= y <= y2`.

Two submatrices `(x1, y1, x2, y2)` and `(x1', y1', x2', y2')` are different if they have some coordinate that is different: for example, if `x1 != x1'`.

**Example 1:**

```
Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.
```


**Example 2:**

```
Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5
Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
```


****Note:****

1.  `1 <= matrix.length <= 300`
2.  `1 <= matrix[0].length <= 300`
3.  `-1000 <= matrix[i] <= 1000`
4.  `-10^8 <= target <= 10^8`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const n = matrix.length
    const m = matrix[0].length
    const rowSums = Array(n + 1).fill().map(() => Array(m + 1).fill(0))
    let result = 0
    
    for (let j = 1; j <= m; j += 1) {
        for (let i = 1; i <= n; i += 1){
            rowSums[i][j] = rowSums[i - 1][j] + matrix[i - 1][j - 1]
        }
    }
    
    for (let i = 1; i <= n; i += 1) {
        for (let r = 0; r < i; r += 1) {
            const countMap = new Map()
            countMap.set(0, 1)
            let sum = Array(m + 1).fill(0)
            for (let k = 1; k <= m; k += 1) {
                const s = sum[k - 1] + rowSums[i][k] - rowSums[r][k]
                result += countMap.get(s - target) || 0
                countMap.set(s, (countMap.get(s) || 0) + 1)
                sum[k] = s
            }
        }
    }
    
    return result
};
```