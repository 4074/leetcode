### [44\. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Backtracking](https://leetcode.com/tag/backtracking/), [Greedy](https://leetcode.com/tag/greedy/)


Given an input string (`s`) and a pattern (`p`), implement wildcard pattern matching with support for `'?'` and `'*'` where:

*   `'?'` Matches any single character.
*   `'*'` Matches any sequence of characters (including the empty sequence).

The matching should cover the **entire** input string (not partial).

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
```

**Example 3:**

```
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
```

**Example 4:**

```
Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
```

**Example 5:**

```
Input: s = "acdcb", p = "a*c?b"
Output: false
```

**Constraints:**

*   `0 <= s.length, p.length <= 2000`
*   `s` contains only lowercase English letters.
*   `p` contains only lowercase English letters, `'?'` or `'*'`.


#### Solution

Language: **JavaScript**

DP Bottom-Up

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length
    const n = p.length
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false))
    
    dp[0][0] = true
    for (let i = 1; i <= n; i += 1) {
        dp[0][i] = p[i - 1] === '*' ? dp[0][i - 1] : false
    }
    
    for (let i = 1; i <= m; i += 1) {
        for (let j = 1; j <= n; j += 1) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            }
        }
    }
    
    return dp[m][n]
};
```

DP Top-Down

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const cache = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill())
    
    function dfs(i, j) {
        if (i < 0 || j < 0) return false
        if (i === 0 && j === 0) return i === j
        if (cache[i][j] === undefined) {
            cache[i][j] = false
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') cache[i][j] = dfs(i - 1, j - 1)
            if (p[j - 1] === '*') cache[i][j] = dfs(i, j - 1) || dfs(i - 1, j)
        }
        return cache[i][j]
    }
    
    return dfs(s.length, p.length)
};
```

Greedy

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length
    const n = p.length    
    let i = 0
    let j = 0
    let starIndex = -1
    let starMatchEnd = -1
    
    while (i < m) {
        if (s[i] === p[j] || p[j] === '?') {
            i += 1
            j += 1
        } else if (p[j] === '*') {
            starIndex = j
            starMatchEnd = i
            j += 1
        } else if (starIndex >= 0) {
            j = starIndex + 1
            starMatchEnd += 1
            i = starMatchEnd
        } else {
            return false
        }
    }
    
    while (j < n && p[j] === '*') {
        j += 1
    }
    
    return j === n
};
```