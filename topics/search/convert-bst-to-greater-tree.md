### [538\. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

Difficulty: **Medium**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/), [Binary Search Tree](https://leetcode.com/tag/binary-search-tree/), [Recursion](https://leetcode.com/tag/recursion/)


Given the `root` of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

As a reminder, a _binary search tree_ is a tree that satisfies these constraints:

*   The left subtree of a node contains only nodes with keys **less than** the node's key.
*   The right subtree of a node contains only nodes with keys **greater than** the node's key.
*   Both the left and right subtrees must also be binary search trees.

**Note:** This question is the same as 1038: 

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/05/02/tree.png)

```
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

**Example 2:**

```
Input: root = [0,null,1]
Output: [1,null,1]
```

**Example 3:**

```
Input: root = [1,0,2]
Output: [3,3,2]
```

**Example 4:**

```
Input: root = [3,2,4,1]
Output: [7,9,4,10]
```

**Constraints:**

*   The number of nodes in the tree is in the range `[0, 10<sup>4</sup>]`.
*   `-10<sup>4</sup> <= Node.val <= 10<sup>4</sup>`
*   All the values in the tree are **unique**.
*   `root` is guaranteed to be a valid binary search tree.


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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    function dfs(node, pre) {
        if (!node) return 0
        const rightSum = dfs(node.right, pre)
        const oldVal = node.val
        node.val = node.val + rightSum + pre
        const leftSum = dfs(node.left, node.val)
        return leftSum + oldVal + rightSum
    }
    dfs(root, 0)
    return root
};
```

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0
    function dfs(node) {
        if (!node) return
        dfs(node.right)
        sum += node.val
        node.val = sum
        dfs(node.left)
    }
    dfs(root)
    
    return root
};
```