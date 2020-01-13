### [1312\. Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

Difficulty: **Hard**


Given a string `s`. In one step you can insert any character at any index of the string.

Return _the minimum number of steps_ to make `s` palindrome.

A **Palindrome String** is one that reads the same backward as well as forward.

**Example 1:**

```
Input: s = "zzazz"
Output: 0
Explanation: The string "zzazz" is already palindrome we don't need any insertions.
```

**Example 2:**

```
Input: s = "mbadm"
Output: 2
Explanation: String can be "mbdadbm" or "mdbabdm".
```

**Example 3:**

```
Input: s = "leetcode"
Output: 5
Explanation: Inserting 5 characters the string becomes "leetcodocteel".
```

**Example 4:**

```
Input: s = "g"
Output: 0
```

**Example 5:**

```
Input: s = "no"
Output: 1
```

**Constraints:**

*   `1 <= s.length <= 500`
*   All characters of `s` are lower case English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const n = s.length
    const dp = Array(s.length).fill().map(_ => Array(s.length).fill(0))
    for (let l = 2; l <= n; l += 1) {
        for (let i = 0; i < n; i += 1) {
            const j = l + i - 1
            if (j < n) {
                dp[i][j] = s[i] === s[j] ? dp[i+1][j-1] : (Math.min(dp[i+1][j], dp[i][j-1]) + 1)
            } else {
                break
            }
        }
    }
    return dp[0][n-1]
};
```