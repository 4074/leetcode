### [1143\. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

Difficulty: **Medium**


Given two strings `text1` and `text2`, return the length of their longest common subsequence.

A _subsequence_ of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A _common subsequence_ of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

**Example 1:**

```
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

**Example 2:**

```
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

**Example 3:**

```
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```

**Constraints:**

*   `1 <= text1.length <= 1000`
*   `1 <= text2.length <= 1000`
*   The input strings consist of lowercase English characters only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text1.length + 1).fill()
        .map(() => Array(text2.length + 1).fill(0))
    
    for (let i = 0; i <= text1.length; i += 1) {
        for (let j = 0; j <= text2.length; j += 1) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            } else if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                )
            }
        }
    }
    
    return dp[text1.length][text2.length]
};
```