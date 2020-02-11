### [1315\. Sum of Nodes with Even-Valued Grandparent](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/)

Difficulty: **Medium**


Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A _grandparent_ of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return `0`.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/07/24/1473_ex1.png)**

```
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
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
var sumEvenGrandparent = function(root) {
    function dfs(node, path) {
        let sum = 0
        if (path.length >= 3 && path[path.length - 3] % 2 === 0) {
            sum += node.val
        }
        
        if (node.left) {
            path.push(node.left.val)
            sum += dfs(node.left, path)
            path.pop()
        }
        if (node.right) {
            path.push(node.right.val)
            sum += dfs(node.right, path)
            path.pop()
        }
        
        return sum
    }
    
    return dfs(root, [root.val])
};
```