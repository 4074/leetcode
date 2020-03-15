### [1382\. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)

Difficulty: **Medium**


Given a binary search tree, return a **balanced** binary search tree with the same node values.

A binary search tree is _balanced_ if and only if the depth of the two subtrees of every node never differ by more than 1.

If there is more than one answer, return any of them.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/08/22/1515_ex1.png)![](https://assets.leetcode.com/uploads/2019/08/22/1515_ex1_out.png)**

```
Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2,null,null] is also correct.
```

**Constraints:**

*   The number of nodes in the tree is between `1` and `10^4`.
*   The tree nodes will have distinct values between `1` and `10^5`.


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
var balanceBST = function(root) {
    const values = []
    let newRoot = null
    
    function search(node) {
        if (!node) return
        search(node.left)
        values.push(node.val)
        search(node.right)
    }
    
    function insertVal(val) {
        const current = new TreeNode(val)
        let parent = null
        let node = newRoot
        
        while (node) {
            parent = node
            if (val < node.val) {
                node = node.left
            } else {
                node = node.right
            }
        }
        
        if (parent) {
            if (val < parent.val) {
                parent.left = current
            } else {
                parent.right = current
            }
        } else {
            newRoot = current
        }
    }
    
    function insert(start, end) {
        if (start > end) return
        if (start === end) {
            return insertVal(values[start])
        }
        const mid = Math.floor((start + end) / 2)
        insertVal(values[mid])
        insert(start, mid - 1)
        insert(mid + 1, end)
    }
    
    search(root)
    insert(0, values.length - 1)
    
    return newRoot
};
```