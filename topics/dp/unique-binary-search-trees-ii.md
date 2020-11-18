### [95\. Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Tree](https://leetcode.com/tag/tree/)


Given an integer `n`, generate all structurally unique **BST's** (binary search trees) that store values 1 ... _n_.

**Example:**

```
Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

**Constraints:**

*   `0 <= n <= 8`


#### Solution

Language: **JavaScript**

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return []
    
    const cache = Array(n + 1).fill().map(() => Array(n + 1).fill())
    function dfs(start, end) {
        if (start > end) return [null]
        if (cache[start][end] === undefined) {
            cache[start][end] = []
            for (let i = start; i <= end; i += 1) {
                const left = dfs(start, i - 1)
                const right = dfs(i + 1, end)
                for (const l of left) {
                    for (const r of right) {
                        cache[start][end].push(new TreeNode(i, l, r))
                    }
                }
            }
        }
        }
        return cache[start][end]
    }
    
    return dfs(1, n)
};
```