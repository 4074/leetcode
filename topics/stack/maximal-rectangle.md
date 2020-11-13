### [85\. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Stack](https://leetcode.com/tag/stack/)


Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return _its area_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg)

```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
```

**Example 2:**

```
Input: matrix = []
Output: 0
```

**Example 3:**

```
Input: matrix = [["0"]]
Output: 0
```

**Example 4:**

```
Input: matrix = [["1"]]
Output: 1
```

**Example 5:**

```
Input: matrix = [["0","0"]]
Output: 0
```

**Constraints:**

*   `rows == matrix.length`
*   `cols == matrix.length`
*   `0 <= row, cols <= 200`
*   `matrix[i][j]` is `'0'` or `'1'`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const m = matrix.length
    if (!m) return 0
    const n = matrix[0].length
    
    let ans = 0
    const heights = Array(n).fill(0)
    
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (matrix[i][j] === '0') {
                heights[j] = 0
            } else {
                heights[j] += 1
            }
        }
        ans = Math.max(ans, getMaxArea(heights))
    }
    
    return ans
};
​
function getMaxArea(heights) {
    let ans = 0
    const n = heights.length
    const stack = []
    
    for (let i = 0; i <= n; i += 1) {
        const currentHeight = i === n ? -1 : heights[i]
        while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()]
            const start = stack.length ? stack[stack.length - 1] : -1
            const area = (i - start - 1) * height
            if (area > ans) ans = area
        }
        stack.push(i)
    }
    
    return ans
}
```