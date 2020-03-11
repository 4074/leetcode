### [1161\. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

Difficulty: **Medium**


Given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on.

Return the **smallest** level `X` such that the sum of all the values of nodes at level `X` is **maximal**.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/05/03/capture.JPG)**

```
Input: [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
```

**Note:**

1.  The number of nodes in the given tree is between `1` and `10^4`.
2.  `-10^5 <= node.val <= 10^5`


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
var maxLevelSum = function(root) {
    var nodes = [root], level = 1, max = root.val, result = 1
    while(nodes.length) {
        var children = [], sum = 0
        for (var i=0; i<nodes.length; i++) {
            sum += nodes[i].val
            if (nodes[i].left) {
                children.push(nodes[i].left)
            }
            if (nodes[i].right) {
                children.push(nodes[i].right)
            }
        }
        if (sum > max) {
            result = level
            max = sum
        }
        
        nodes = children
        level += 1
    }
    
    return result
};
```