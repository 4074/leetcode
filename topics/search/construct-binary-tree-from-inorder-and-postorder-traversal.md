### [106\. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Tree](https://leetcode.com/tag/tree/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)


Given inorder and postorder traversal of a tree, construct the binary tree.

**Note:**  
You may assume that duplicates do not exist in the tree.

For example, given

```
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
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
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const n = inorder.length
    const index = new Map()
    for (let i = 0; i < n; i += 1) {
        index.set(inorder[i], i)
    }
    
    const dfs = (i, j, l) => {
        if (l === 0) return null
        const rootIndex = index.get(postorder[j + l - 1])
        const node = new TreeNode(inorder[rootIndex])
        
        const leftLength = Math.max(0, rootIndex - i)
        node.left = dfs(i, j, leftLength)
        node.right = dfs(rootIndex + 1, j + leftLength, l - leftLength - 1)
        
        return node
    }
    
    return dfs(0, 0, n)
};
```