### [222\. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

Difficulty: **Medium**  

Related Topics: [Binary Search](https://leetcode.com/tag/binary-search/), [Tree](https://leetcode.com/tag/tree/)


Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

According to , every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and `2<sup>h</sup>` nodes inclusive at the last level `h`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/14/complete.jpg)

```
Input: root = [1,2,3,4,5,6]
Output: 6
```

**Example 2:**

```
Input: root = []
Output: 0
```

**Example 3:**

```
Input: root = [1]
Output: 1
```

**Constraints:**

*   The number of nodes in the tree is in the range `[0, 5 * 10<sup>4</sup>]`.
*   `0 <= Node.val <= 5 * 10<sup>4</sup>`
*   The tree is guaranteed to be **complete**.

**Follow up:** Traversing the tree to count the number of nodes in the tree is an easy solution but with `O(n)` complexity. Could you find a faster algorithm?

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
 * @return {number}
 */
var countNodes = function(root) {
    function getHeight(node) {
        return node ? getHeight(node.left) + 1 : 0
    }
    
    let h = getHeight(root)
    let ans = 0
    while (root) {
        const rh = getHeight(root.right)
        if (rh === h - 2) {
            ans += (1 << rh)
            root = root.left
        } else {
            ans += (1 << (h - 1))
            root = root.right
        }
        h -= 1
    }
    
    return ans
};
```