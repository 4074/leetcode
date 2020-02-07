### [1339\. Maximum Product of Splitted Binary Tree](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/)

Difficulty: **Medium**


Given a binary tree `root`. Split the binary tree into two subtrees by removing 1 edge such that the product of the sums of the subtrees are maximized.

Since the answer may be too large, return it modulo 10^9 + 7.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/01/21/sample_1_1699.png)**

```
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10\. Their product is 110 (11*10)
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/01/21/sample_2_1699.png)

```
Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation:  Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
```

**Example 3:**

```
Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025
```

**Example 4:**

```
Input: root = [1,1]
Output: 1
```

**Constraints:**

*   Each tree has at most `50000` nodes and at least `2` nodes.
*   Each node's value is between `[1, 10000]`.


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
var maxProduct = function(root) {
    const sums = []
    
    function dp(node) {
        if (!node) return 0
        const sum = node.val + dp(node.left) + dp(node.right)
        sums.push(sum)
        return sum
    }
    
    const total = dp(root)
    
    let max = 0
    for (const sum of sums) {
        max = Math.max(max, sum * (total - sum))
    }
    
    return max % (Math.pow(10, 9) + 7)
};
```