### [1457\. Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/)

Difficulty: **Medium**


Given a binary tree where node values are digits from 1 to 9\. A path in the binary tree is said to be **pseudo-palindromic** if at least one permutation of the node values in the path is a palindrome.

_Return the number of **pseudo-palindromic** paths going from the root node to leaf nodes._

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/05/06/palindromic_paths_1.png)

```
Input: root = [2,3,1,3,1,null,1]
Output: 2 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/05/07/palindromic_paths_2.png)**

```
Input: root = [2,1,1,1,3,null,null,null,null,null,1]
Output: 1 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).
```

**Example 3:**

```
Input: root = [9]
Output: 1
```

**Constraints:**

*   The given binary tree will have between `1` and `10^5` nodes.
*   Node values are digits from `1` to `9`.


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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let ans = 0
    function dfs(node, count) {
        if (!node) return
        count ^= (1 << (node.val - 1))
        if (!node.left && !node.right) {
            if (count === 0) {
                ans += 1
            } else {
                let k = count
                while (k) {
                    if (k & 1) {
                        if (k === 1) ans += 1
                        break
                    }
                    k >>= 1
                }
            }
        } else {
            dfs(node.left, count)
            dfs(node.right, count)
        }
    }
    dfs(root, 0)
    return ans
};
```