# [2326\. Spiral Matrix IV](https://leetcode.com/problems/spiral-matrix-iv/)

## Description

Difficulty: **Medium**  

Related Topics:


You are given two integers `m` and `n`, which represent the dimensions of a matrix.

You are also given the `head` of a linked list of integers.

Generate an `m x n` matrix that contains the integers in the linked list presented in **spiral** order **(clockwise)**, starting from the **top-left** of the matrix. If there are remaining empty spaces, fill them with `-1`.

Return _the generated matrix_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/05/09/ex1new.jpg)

```
Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/05/11/ex2.jpg)

```
Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.
```

**Constraints:**

*   1 <= m, n <= 10<sup>5</sup>
*   1 <= m * n <= 10<sup>5</sup>
*   The number of nodes in the list is in the range `[1, m * n]`.
*   `0 <= Node.val <= 1000`


## Solution

Language: **JavaScript**

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  let r = 0, c = -1
  const grid = Array(m).fill().map(() => Array(n).fill(-1))
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let i = 0
  while (head) {
    const nr = r + dirs[i][0]
    const nc = c + dirs[i][1]
    if (nr === m || nr < 0 || nc === n || nc < 0 || grid[nr][nc] >= 0) {
      i = (i + 1) % dirs.length
      continue
    }
    grid[nr][nc] = head.val
    r = nr
    c = nc
    head = head.next
  }
  return grid
};
```