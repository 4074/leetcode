### [1072\. Flip Columns For Maximum Number of Equal Rows](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/)

Difficulty: **Medium**


Given a `matrix` consisting of 0s and 1s, we may choose any number of columns in the matrix and flip **every** cell in that column.  Flipping a cell changes the value of that cell from 0 to 1 or from 1 to 0.

Return the maximum number of rows that have all values equal after some number of flips.


**Example 1:**

```
Input: [[0,1],[1,1]]
Output: 1
Explanation: After flipping no values, 1 row has all values equal.
```


**Example 2:**

```
Input: [[0,1],[1,0]]
Output: 2
Explanation: After flipping values in the first column, both rows have equal values.
```


**Example 3:**

```
Input: [[0,0,0],[0,0,1],[1,1,0]]
Output: 2
Explanation: After flipping values in the first two columns, the last two rows have equal values.
```

**Note:**

1.  `1 <= matrix.length <= 300`
2.  `1 <= matrix[i].length <= 300`
3.  All `matrix[i].length`'s are equal
4.  `matrix[i][j]` is `0` or `1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const map = new Map()
    
    let ans = 0
    for (const row of matrix) {
        const rowKey = row.join('')
        const flipedKey = row.map(i => i === 0 ? 1 : 0).join('')
        map.set(rowKey, (map.get(rowKey) || 0) + 1)
        map.set(flipedKey, (map.get(flipedKey) || 0) + 1)
        
        ans = Math.max(ans, map.get(rowKey), map.get(flipedKey))
    }
    
    return ans
};
```

Bit
```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const map = new Map()
    
    let ans = 0
    for (const row of matrix) {
        let s = ''
        for (let item of row) {
            s += item ^ row[0]
        }
        map.set(s, (map.get(s) || 0) + 1)
        ans = Math.max(ans, map.get(s))
    }
    
    return ans
};
```