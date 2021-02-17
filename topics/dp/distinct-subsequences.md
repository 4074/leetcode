### [115\. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given two strings `s` and `t`, return _the number of distinct subsequences of `s` which equals `t`_.

A string's **subsequence** is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ACE"` is a subsequence of `"ABCDE"` while `"AEC"` is not).

It's guaranteed the answer fits on a 32-bit signed integer.

**Example 1:**

```
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
rabbbit
rabbbit
rabbbit
```

**Example 2:**

```
Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
babgbag
babgbag
babgbag
babgbag
babgbag
```

**Constraints:**

*   `0 <= s.length, t.length <= 1000`
*   `s` and `t` consist of English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const n = s.length
    const m = t.length
    const dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0))
    
    for (let i = 0; i <= n; i += 1) {
        for (let j = 0; j <= m; j += 1) {
            if (j === 0) {
                dp[i][j] = 1
                continue
            }
            if (i === 0) continue
            dp[i][j] = dp[i - 1][j]
            if (s[i - 1] === t[j - 1]) dp[i][j] += dp[i - 1][j - 1]
        }
    }
    
    return dp[n][m]
};
```