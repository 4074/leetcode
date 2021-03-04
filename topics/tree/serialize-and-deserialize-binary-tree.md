### [297\. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

Difficulty: **Hard**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Design](https://leetcode.com/tag/design/)


Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**Clarification:** The input/output format is the same as . You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
```

**Example 2:**

```
Input: root = []
Output: []
```

**Example 3:**

```
Input: root = [1]
Output: [1]
```

**Example 4:**

```
Input: root = [1,2]
Output: [1,2]
```

**Constraints:**

*   The number of nodes in the tree is in the range `[0, 10<sup>4</sup>]`.
*   `-1000 <= Node.val <= 1000`


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
​
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '#'
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`
};
​
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data.split(',')
  
  function dfs(s, e) {
    if (s === e) return null
    
    let diff = 0, i = s + 1
    while (diff < 1) {
      if (arr[i] === '#') {
        diff += 1
      } else {
        diff -= 1
      }
      i += 1
    }
    
    const node = new TreeNode(parseInt(arr[s]))
    node.left = dfs(s + 1, i - 1)
    node.right = dfs(i, e)
    return node
  }
  
  return dfs(0, arr.length - 1)
};
​
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```