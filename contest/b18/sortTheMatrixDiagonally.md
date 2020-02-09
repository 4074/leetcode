### [1329\. Sort the Matrix Diagonally](https://leetcode.com/problems/sort-the-matrix-diagonally/)

Difficulty: **Medium**


Given a `m * n` matrix `mat` of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/01/21/1482_example_1_2.png)

```
Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
```

**Constraints:**

*   `m == mat.length`
*   `n == mat[i].length`
*   `1 <= m, n <= 100`
*   `1 <= mat[i][j] <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const arrs = {}
    
    for (let i = 0; i < mat.length; i += 1) {
        for (let j = 0; j < mat[i].length; j += 1) {
            const k = i - j
            if (!arrs[k]) arrs[k] = []
            arrs[k].push(mat[i][j])
        }
    }
    
    for (const k of Object.keys(arrs)) {
        arrs[k].sort((a, b) => a - b)
    }
    
    for (let i = 0; i < mat.length; i += 1) {
        for (let j = 0; j < mat[i].length; j += 1) {
            const k = i - j
            mat[i][j] = arrs[k].shift()
        }
    }
    
    return mat
};
```