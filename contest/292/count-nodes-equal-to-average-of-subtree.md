# [2265\. Count Nodes Equal to Average of Subtree](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/)

## Description

Difficulty: **Medium**  

Related Topics:


Given the `root` of a binary tree, return _the number of nodes where the value of the node is equal to the **average** of the values in its **subtree**_.

**Note:**

*   The **average** of `n` elements is the **sum** of the `n` elements divided by `n` and **rounded down** to the nearest integer.
*   A **subtree** of `root` is a tree consisting of `root` and all of its descendants.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/15/image-20220315203925-1.png)

```
Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/26/image-20220326133920-1.png)

```
Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.
```

**Constraints:**

*   The number of nodes in the tree is in the range `[1, 1000]`.
*   `0 <= Node.val <= 1000`


## Solution

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
var averageOfSubtree = function(root) {
  let count = 0
  const dfs = (node) => {
    if (!node) return {
      sum: 0,
      count: 0
    }
    const left = dfs(node.left)
    const right = dfs(node.right)
    const info = {
      sum: left.sum + right.sum + node.val,
      count: left.count + right.count + 1
    }
    if (!info.count || Math.floor(info.sum / info.count) === node.val) {
      count += 1
    }
    return info
  }
  dfs(root)
  return count
};
```