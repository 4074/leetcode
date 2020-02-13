### [1302\. Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)

Difficulty: **Medium**

Given a binary tree, return the sum of values of its deepest leaves.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png)**

```
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
```

**Constraints:**

*   The number of nodes in the tree is between `1` and `10^4`.
*   The value of nodes is between `1` and `100`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let deepest = 0
    let values = []
    
    function dfs(node, level) {
        if (!node) return
        if (!node.left && !node.right) {
            if (level > deepest) {
                deepest = level
                values = [node.val]
            } else if (level === deepest) {
                values.push(node.val)
            }
        } else {
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
        }
    }
    dfs(root, 0)
    
    return values.reduce((s, v) => s + v, 0)
};
```