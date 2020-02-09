### [1325\. Delete Leaves With a Given Value](https://leetcode.com/problems/delete-leaves-with-a-given-value/)

Difficulty: **Medium**


Given a binary tree `root` and an integer `target`, delete all the **leaf nodes** with value `target`.

Note that once you delete a leaf node with value `target`**, **if it's parent node becomes a leaf node and has the value `<font face="monospace" style="display: inline;">target</font>`, it should also be deleted (you need to continue doing that until you can't).

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png)**

```
Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png)**

```
Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]
```

**Example 3:**

**![](https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png)**

```
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
```

**Example 4:**

```
Input: root = [1,1,1], target = 1
Output: []
```

**Example 5:**

```
Input: root = [1,2,3], target = 1
Output: [1,2,3]
```

**Constraints:**

*   `1 <= target <= 1000`
*   Each tree has at most `3000` nodes.
*   Each node's value is between `[1, 1000]`.


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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    function remove(parent, node, key) {
        if (!node) return
        remove(node, node.left, 'left')
        remove(node, node.right, 'right')
        if (
            node.val === target
            && !node.left
            && !node.right
            && key
        ) {
            parent[key] = null
        }
    }
    
    remove(root, root.left, 'left')
    remove(root, root.right, 'right')
    
    if (root.val === target && !root.left && !root.right) return null
    
    return root
};
```