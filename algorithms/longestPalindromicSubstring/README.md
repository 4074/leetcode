### [5\. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

Difficulty: **Medium**


Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

**Example 1:**

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

**Example 2:**

```
Input: "cbbd"
Output: "bb"
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length
    let start = 0, max = 0
    
    function findMaxLength(l, r) {
        while (l >= 0 && r < n && s[l] === s[r]) {
            l -= 1
            r += 1
        }
        return r - l - 1
    }
    
    for (let i = 0; i < n; i += 1) {
        const m = Math.max(
            findMaxLength(i, i),
            findMaxLength(i, i + 1)
        )
        if (m > max) {
            max = m
            start = i - Math.floor((m - 1) / 2)
        }
    }
    
    return s.substr(start, max)
};
```

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = Array(s.length).fill()
        .map(() => Array(s.length).fill(0))
    let length = 0, start = 0
    
    for (let l = 1; l <= s.length; l += 1) {
        for (let i = 0; i + l - 1 < s.length; i += 1) {
            const j = i + l - 1
            if (i === j) {
                dp[i][j] = 1
            } else {
                if (s[i] === s[j]) {
                    if (dp[i + 1][j - 1] || i + 1 > j - 1) {
                        dp[i][j] = (dp[i + 1][j - 1] + 2)
                    }
                }
            }
            if (dp[i][j] > length) {
                length = dp[i][j]
                start = i
            }
        }
    }
    
    return s.substr(start, length)
};
```