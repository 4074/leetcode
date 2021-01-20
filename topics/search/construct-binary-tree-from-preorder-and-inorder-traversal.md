### [105\. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Tree](https://leetcode.com/tag/tree/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)


Given preorder and inorder traversal of a tree, construct the binary tree.

**Note:**  
You may assume that duplicates do not exist in the tree.

For example, given

```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```


#### Solution

Language: **JavaScript**

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const n = preorder.length
    const index = new Map()
    for (let i = 0; i < n; i += 1) {
        index.set(inorder[i], i)
    }
    
    const dfs = (i, j, l) => {
        if (l === 0) return null
        const root = new TreeNode(preorder[i])
        const rootIndex = index.get(preorder[i])
        
        const leftLength = rootIndex - j
        root.left = dfs(i + 1, j, leftLength)
        root.right = dfs(i + 1 + leftLength, rootIndex + 1, l - leftLength - 1)
        
        return root
    }
    
    return dfs(0, 0, n)
};
```