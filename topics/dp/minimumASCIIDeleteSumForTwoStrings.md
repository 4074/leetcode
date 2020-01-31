### [712\. Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

Difficulty: **Medium**


Given two strings `s1, s2`, find the lowest ASCII sum of deleted characters to make two strings equal.

**Example 1:**  

```
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
```

**Example 2:**  

```
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
```

**Note:**

*   `0 < s1.length, s2.length <= 1000`.*   All elements of each string will have an ASCII value in `[97, 122]`.

#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const dp = Array(s1.length + 1).fill()
        .map(() => Array(s2.length + 1).fill(0))
    
    for (let i = 0; i <= s1.length; i += 1) {
        for (let j = 0; j <= s2.length; j += 1) {
            if (i === 0) {
                if (j === 0) continue
                dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1)
            } else if (j === 0) {
                dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1)
            } else {
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j] + s1.charCodeAt(i - 1),
                        dp[i][j - 1] + s2.charCodeAt(j - 1)
                    )
                }
            }
        }
    }
    
    return dp[s1.length][s2.length]
};
```