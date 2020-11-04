### [1504\. Count Submatrices With All Ones](https://leetcode.com/problems/count-submatrices-with-all-ones/)

Difficulty: **Medium**


Given a `rows * columns` matrix `mat` of ones and zeros, return how many **submatrices** have all ones.

**Example 1:**

```
Input: mat = [[1,0,1],
              [1,1,0],
              [1,1,0]]
Output: 13
Explanation:
There are 6 rectangles of side 1x1.
There are 2 rectangles of side 1x2.
There are 3 rectangles of side 2x1.
There is 1 rectangle of side 2x2\. 
There is 1 rectangle of side 3x1.
Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
```

**Example 2:**

```
Input: mat = [[0,1,1,0],
              [0,1,1,1],
              [1,1,1,0]]
Output: 24
Explanation:
There are 8 rectangles of side 1x1.
There are 5 rectangles of side 1x2.
There are 2 rectangles of side 1x3\. 
There are 4 rectangles of side 2x1.
There are 2 rectangles of side 2x2\. 
There are 2 rectangles of side 3x1\. 
There is 1 rectangle of side 3x2\. 
Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.
```

**Example 3:**

```
Input: mat = [[1,1,1,1,1,1]]
Output: 21
```

**Example 4:**

```
Input: mat = [[1,0,1],[0,1,0],[1,0,1]]
Output: 5
```

**Constraints:**

*   `1 <= rows <= 150`
*   `1 <= columns <= 150`
*   `0 <= mat[i][j] <= 1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const m = mat.length
    const n = mat[0].length
    
    const rowOnes = Array(m).fill().map(() => Array(n).fill(0))
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (!mat[i][j]) continue
            if (i === 0) {
                rowOnes[i][j] = 1
            } else {
                rowOnes[i][j] = rowOnes[i - 1][j] + 1
            }
        }
    }
    
    let count = 0
    const colOnes = Array(m).fill().map(() => Array(n).fill(0))
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (!mat[i][j]) continue
            if (j === 0) {
                colOnes[i][j] = 1
            } else {
                colOnes[i][j] = colOnes[i][j - 1] + 1
            }
            
            let r = rowOnes[i][j]
            for (let k = 1; k <= colOnes[i][j]; k += 1) {
                r = Math.min(r, rowOnes[i][j - k + 1])
                count += r
            }
        }
    }
    
    return count
};
```