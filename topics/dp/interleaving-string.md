### [97\. Interleaving String](https://leetcode.com/problems/interleaving-string/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an **interleaving** of `s1` and `s2`.

An **interleaving** of two strings `s` and `t` is a configuration where they are divided into **non-empty** substrings such that:

*   `s = s<sub style="display: inline;">1</sub> + s<sub style="display: inline;">2</sub> + ... + s<sub style="display: inline;">n</sub>`
*   `t = t<sub style="display: inline;">1</sub> + t<sub style="display: inline;">2</sub> + ... + t<sub style="display: inline;">m</sub>`
*   `|n - m| <= 1`
*   The **interleaving** is `s<sub style="display: inline;">1</sub> + t<sub style="display: inline;">1</sub> + s<sub style="display: inline;">2</sub> + t<sub style="display: inline;">2</sub> + s<sub style="display: inline;">3</sub> + t<sub style="display: inline;">3</sub> + ...` or `t<sub style="display: inline;">1</sub> + s<sub style="display: inline;">1</sub> + t<sub style="display: inline;">2</sub> + s<sub style="display: inline;">2</sub> + t<sub style="display: inline;">3</sub> + s<sub style="display: inline;">3</sub> + ...`

**Note:** `a + b` is the concatenation of strings `a` and `b`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg)

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
```

**Example 2:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
```

**Example 3:**

```
Input: s1 = "", s2 = "", s3 = ""
Output: true
```

**Constraints:**

*   `0 <= s1.length, s2.length <= 100`
*   `0 <= s3.length <= 200`
*   `s1`, `s2`, and `s3` consist of lower-case English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length
    const n = s2.length
    if (m + n !== s3.length) return false
    
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false))
    
    for (let i = 0; i <= m; i += 1) {
        for (let j = 0; j <= n; j += 1) {
            if (i === 0 && j === 0) {
                dp[i][j] = true
                continue
            }
            if (i > 0 && s3[i + j - 1] === s1[i - 1]) {
                dp[i][j] |= dp[i - 1][j]
            }
            if (j > 0 && s3[i + j - 1] === s2[j - 1]) {
                dp[i][j] |= dp[i][j - 1]
            }
        }
    }
    
    return dp[m][n]
};
```