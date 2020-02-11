### [1314\. Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/)

Difficulty: **Medium**

Given a `m * n` matrix `mat` and an integer `K`, return a matrix `answer` where each `answer[i][j]` is the sum of all elements `mat[r][c]` for `i - K <= r <= i + K, j - K <= c <= j + K`, and `(r, c)` is a valid position in the matrix.

**Example 1:**

```
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]
```

**Example 2:**

```
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
Output: [[45,45,45],[45,45,45],[45,45,45]]
```

**Constraints:**

*   `m == mat.length`
*   `n == mat[i].length`
*   `1 <= m, n, K <= 100`
*   `1 <= mat[i][j] <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    if (!mat.length) return []
    
    const sumFromZero = Array(mat.length).fill()
        .map((_, index) => mat[index].slice(0))
    const result = Array(mat.length).fill()
        .map(() => Array(mat[0].length).fill(0))
    
    for (let i = 0; i < mat.length; i += 1) {
        let jSum = 0
        for (let j = 0; j < mat[i].length; j += 1) {
            jSum += mat[i][j]
            sumFromZero[i][j] = jSum + (i > 0 ? sumFromZero[i - 1][j] : 0)
        }
    }
    
    for (let i = 0; i < mat.length; i += 1) {
        for (let j = 0; j < mat[i].length; j += 1) {
            const x1 = i - K - 1
            const y1 = j - K - 1
            const x2 = Math.min(mat.length - 1, i + K)
            const y2 = Math.min(mat[i].length - 1, j + K)
            
            result[i][j] = sumFromZero[x2][y2]
                - (x1 >= 0 ? sumFromZero[x1][y2] : 0)
                - (y1 >= 0 ? sumFromZero[x2][y1] : 0)
                + (x1 >= 0 && y1 >= 0 ? sumFromZero[x1][y1] : 0)
        }
    }
    
    return result
};
```