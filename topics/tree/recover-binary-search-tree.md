### [99\. Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)

Difficulty: **Hard**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)


You are given the `root` of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. _Recover the tree without changing its structure_.

**Follow up:** A solution using `O(n)` space is pretty straight forward. Could you devise a constant space solution?

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/28/recover1.jpg)

```
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1\. Swapping 1 and 3 makes the BST valid.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/28/recover2.jpg)

```
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3\. Swapping 2 and 3 makes the BST valid.
```

**Constraints:**

*   The number of nodes in the tree is in the range `[2, 1000]`.
*   `-2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1`


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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let pre = null
    let error1 = null, error2 = null
    
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        if (pre && node.val < pre.val) {
            error2 = node
            if (!error1) {
                error1 = pre
            } else {
                return
            }
        }
        pre = node
        dfs(node.right)
    }
    dfs(root)
    
    const temp = error1.val
    error1.val = error2.val
    error2.val = temp
};
```