### [646\. Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)

Difficulty: **Medium**


You are given `n` pairs of numbers. In every pair, the first number is always smaller than the second number.

Now, we define a pair `(c, d)` can follow another pair `(a, b)` if and only if `b < c`. Chain of pairs can be formed in this fashion.

Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

**Example 1:**  

```
Input: [[1,2], [2,3], [3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4]
```

**Note:**  

1.  The number of given pairs will be in the range [1, 1000].


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if (!pairs.length) return 0
    const dp = []
    pairs.sort((a, b) => a[0] <= b[0] ? -1 : 1)
    
    for (let i = 0; i < pairs.length; i += 1) {
        let count = 0
        for (let j = 0; j < i; j += 1) {
            if (pairs[i][0] > pairs[j][1]) {
                count = Math.max(count, dp[j])
            }
        }
        dp[i] = count + 1
    }
    
    return dp[dp.length - 1]
};
```