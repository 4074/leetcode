### [1130\. Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/)

Difficulty: **Medium**


Given an array `arr` of positive integers, consider all binary trees such that:

*   Each node has either 0 or 2 children;
*   The values of `arr` correspond to the values of each **leaf** in an in-order traversal of the tree.  _(Recall that a node is a leaf if and only if it has 0 children.)_
*   The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.

Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.

**Example 1:**

```
Input: arr = [6,2,4]
Output: 32
Explanation:
There are two possible trees.  The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4
```

**Constraints:**

*   `2 <= arr.length <= 40`
*   `1 <= arr[i] <= 15`
*   It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less than `2^31`).


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    const dp = Array(arr.length).fill()
        .map(() => Array(arr.length).fill(Infinity))
    
    const max = Array(arr.length).fill()
        .map(() => Array(arr.length).fill(0))
    
    for (let i = 0; i < arr.length; i += 1) {
        let m = 0
        for (let j = i; j < arr.length; j += 1) {
            m = Math.max(m, arr[j])
            max[i][j] = m
        }
    }
    
    for (let l = 1; l <= arr.length; l += 1) {
        for (let i = 0; i <= arr.length - l; i += 1) {
            const j = i + l - 1
            if (l === 1) {
                dp[i][j] = 0
            } else {
                for (let k = i; k < j; k += 1) {
                    dp[i][j] = Math.min(
                        dp[i][j],
                        dp[i][k] + dp[k+1][j] + max[i][k] * max[k+1][j]
                    )
                }
            }
        }
    }
​
    return dp[0][arr.length - 1]
};
```