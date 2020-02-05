### [516\. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

Difficulty: **Medium**


Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

**Example 1:**  
Input:

```
"bbbab"
```

Output:

```
4
```

One possible longest palindromic subsequence is "bbbb".

**Example 2:**  
Input:

```
"cbbd"
```

Output:

```
2
```

One possible longest palindromic subsequence is "bb".

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    if (!s) return 0
    
    const dp = Array(s.length).fill()
        .map(() => Array(s.length).fill(0))
    
    for (let l = 1; l <= s.length; l += 1) {
        for (let i = 0; i < s.length; i += 1) {
            const j = i + l - 1
            if (j >= s.length) break
            if (i === j) {
                dp[i][j] = 1
            } else {
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
                }
            }
        }
    }
    
    return dp[0][s.length - 1]
};
```