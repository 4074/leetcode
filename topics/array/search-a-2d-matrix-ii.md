### [240\. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/)


Write an efficient algorithm that searches for a `target` value in an `m x n` integer `matrix`. The `matrix` has the following properties:

*   Integers in each row are sorted in ascending from left to right.
*   Integers in each column are sorted in ascending from top to bottom.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg)

```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/11/24/searchgrid.jpg)

```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
```

**Constraints:**

*   `m == matrix.length`
*   `n == matrix[i].length`
*   `1 <= n, m <= 300`
*   `-10<sup>9</sup> <= matix[i][j] <= 10<sup>9</sup>`
*   All the integers in each row are **sorted** in ascending order.
*   All the integers in each column are **sorted** in ascending order.
*   `-10<sup>9</sup> <= target <= 10<sup>9</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    
    let i = 0
    let j = n - 1
    while (i < m && j >= 0) {
        if (matrix[i][j] === target) return true
        if (matrix[i][j] > target) {
            j -= 1
        } else {
            i += 1
        }
    }
    
    return false
};
```