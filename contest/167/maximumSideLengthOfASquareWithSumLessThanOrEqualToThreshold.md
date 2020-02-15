### [1292\. Maximum Side Length of a Square with Sum Less than or Equal to Threshold](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/)

Difficulty: **Medium**


Given a `m x n` matrix `mat` and an integer `threshold`. Return the maximum side-length of a square with a sum less than or equal to `threshold` or return **0** if there is no such square.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/12/05/e1.png)

```
Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
Output: 2
Explanation: The maximum side length of square with sum less than 4 is 2 as shown.
```

**Example 2:**

```
Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
Output: 0
```

**Example 3:**

```
Input: mat = [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]], threshold = 6
Output: 3
```

**Example 4:**

```
Input: mat = [[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], threshold = 40184
Output: 2
```

**Constraints:**

*   `1 <= m, n <= 300`
*   `m == mat.length`
*   `n == mat[i].length`
*   `0 <= mat[i][j] <= 10000`
*   `0 <= threshold <= 10^5`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const m = mat.length, n = mat[0].length
    const sums = Array(m + 1).fill()
        .map(() => Array(n + 1).fill(0))
    
    for (let i = 1; i <= m; i += 1) {
        let jSum = 0
        for (let j = 1; j <= n; j += 1) {
            jSum += mat[i - 1][j - 1]
            sums[i][j] = (i > 0 ? sums[i - 1][j] : 0) + jSum
        }
    }
    
    let l = Math.min(m, n)
    while (l > 0) {
        for (let i = 0; i <= m - l; i += 1) {
            for (let j = 0; j <= n - l; j += 1) {
                const x2 = j + l, y2 = i + l
                const sum = sums[y2][x2] - sums[y2][j] - sums[i][x2] + sums[i][j]
                if (sum <= threshold) return l
            }
        }
        l -= 1
    }
    
    return 0
};
```