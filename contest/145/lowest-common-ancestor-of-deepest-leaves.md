### [1123\. Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/)

Difficulty: **Medium**


Given a rooted binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

*   The node of a binary tree is a _leaf_ if and only if it has no children
*   The _depth_ of the root of the tree is 0, and if the depth of a node is `d`, the depth of each of its children is `d+1`.
*   The _lowest common ancestor_ of a set `S` of nodes is the node `A` with the largest depth such that every node in S is in the subtree with root `A`.

**Example 1:**

```
Input: root = [1,2,3]
Output: [1,2,3]
Explanation: 
The deepest leaves are the nodes with values 2 and 3.
The lowest common ancestor of these leaves is the node with value 1.
The answer returned is a TreeNode object (not an array) with serialization "[1,2,3]".
```

**Example 2:**

```
Input: root = [1,2,3,4]
Output: [4]
```

**Example 3:**

```
Input: root = [1,2,3,4,5]
Output: [2,4,5]
```

**Constraints:**

*   The given tree will have between 1 and 1000 nodes.
*   Each node of the tree will have a distinct value between 1 and 1000.


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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    if (!root) return root;
    var depth = []
    var parents = {}
    
    find(root, 0)
    
    function find(node, d) {
        if (node) {
            if (!depth[d]) {
                depth[d] = [node]
            } else {
                depth[d].push(node)
            }
            
            find(node.left, d+1)
            find(node.right, d+1)
            
            if (node.left) {
                parents[node.left.val] = node
            }
            if (node.right) {
                parents[node.right.val] = node
            }
        }
    }
    
    var leaves = depth[depth.length - 1]
    var result, index = depth.length - 1
    
    while (leaves.length > 1) {
        var ps = {}
        leaves = leaves.map(function(n) {
            var p = parents[n.val]
            if (ps[p.val]) {
                return null
            } else {
                ps[p.val] = true
                return p
            }
        }).filter(function (n) {
            return !!n
        })
    }
    
    return leaves[0]
};
```