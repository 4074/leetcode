### [1277\. Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)

Difficulty: **Medium**


Given a `m * n` matrix of ones and zeros, return how many **square** submatrices have all ones.

**Example 1:**

```
Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
```

**Example 2:**

```
Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1\.  
There is 1 square of side 2\. 
Total number of squares = 6 + 1 = 7.
```

**Constraints:**

*   `1 <= arr.length <= 300`
*   `1 <= arr[0].length <= 300`
*   `0 <= arr[i][j] <= 1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let result = 0
    
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            result += countForStart(i, j)            
        }
    } 
        
    function countForStart(x, y) {
        let size = 1
        while(x + size <= matrix.length && y + size <= matrix[x].length) {
            let row = x + size - 1
            let col = y + size - 1
            for (let i=0; i<size; i++) {
                if (matrix[row][i + y] !== 1) return size - 1
                if (matrix[i + x][col] !== 1) return size - 1
            }
            size += 1
        }
        
        return size - 1
    }
    
    return result
};
```

Dynamic programming
```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const store = Array(matrix.length).fill().map(
        _ => Array(matrix[0].length).fill(0)
    )
    let result = 0
    
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                let n = 1
                if (i > 0 && j > 0) {
                    n += Math.min(store[i-1][j], store[i-1][j-1], store[i][j-1])
                }
                store[i][j] = n
                result += n
            }
        }
    }
    
    return result
};
```