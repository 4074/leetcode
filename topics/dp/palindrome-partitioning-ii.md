### [132\. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)

Difficulty: **Hard**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return _the minimum cuts needed_ for a palindrome partitioning of `s`.

**Example 1:**

```
Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
```

**Example 2:**

```
Input: s = "a"
Output: 0
```

**Example 3:**

```
Input: s = "ab"
Output: 1
```

**Constraints:**

*   `1 <= s.length <= 2000`
*   `s` consists of lower-case English letters only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length
    const valid = Array(n).fill().map(() => Array(n).fill(0))
    for (let l = 1; l <= n; l += 1) {
        for (let i = 0; i <= n - l; i += 1) {
            const j = i + l - 1
            valid[i][j] = s[i] === s[j] && (l <= 2 || valid[i+1][j-1])
        }
    }
    
    const dp = Array(n).fill(Infinity)
    for (let i = 0; i < n; i += 1) {
        if (valid[0][i]) {
            dp[i] = 0
            continue
        }
        for (let j = 1; j <= i; j += 1) {
            if (valid[j][i]) {
                dp[i] = Math.min(dp[i], dp[j - 1] + 1)
            }
        }
    }
    
    return dp[n - 1]
};
```