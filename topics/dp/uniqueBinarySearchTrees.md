### [96\. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)

Difficulty: **Medium**


Given _n_, how many structurally unique **BST's** (binary search trees) that store values 1 ... _n_?

**Example:**

```
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (!n) return 1
    const dp = Array(n + 1).fill(0)
    dp[0] = 1
    
    for (let i = 1; i <= n; i += 1) {
        for (let j = 0; j < i; j += 1) {
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    
    return dp[n]
};
```