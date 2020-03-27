### [1092\. Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)

Difficulty: **Hard**


Given two strings `str1` and `str2`, return the shortest string that has both `str1` and `str2` as subsequences.  If multiple answers exist, you may return any of them.

_(A string S is a subsequence of string T if deleting some number of characters from T (possibly 0, and the characters are chosen <u style="display: inline;">anywhere</u> from T) results in the string S.)_

**Example 1:**

```
Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.
```

**Note:**

1.  `1 <= str1.length, str2.length <= 1000`
2.  `str1` and `str2` consist of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const dp = Array(str1.length + 1).fill()
        .map(() => Array(str2.length + 1).fill(0))
    const indexs = Array(str1.length + 1).fill()
        .map(() => Array(str2.length + 1).fill().map(() => []))
    
    for (let i = 1; i <= str1.length; i += 1) {
        for (let j = 1; j <= str2.length; j += 1) {
            const s1 = str1[i - 1]
            const s2 = str2[j - 1]
            if (s1 === s2) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                indexs[i][j] = [...indexs[i - 1][j - 1]]
                indexs[i][j].push([i - 1, j - 1])
            } else {
                if (dp[i][j - 1] > dp[i - 1][j]) {
                    dp[i][j] = dp[i][j - 1]
                    indexs[i][j] = indexs[i][j - 1]
                } else {
                    dp[i][j] = dp[i - 1][j]
                    indexs[i][j] = indexs[i - 1][j]
                }
            }
        }
    }
    
    if (!indexs.length) return str1 + str2
    
    let index1 = 0, index2 = 0
    const ans = []
    for (const [i, j] of indexs[str1.length][str2.length]) {
        while (index1 < i) {
            ans.push(str1[index1])
            index1 += 1
        }
        while (index2 < j) {
            ans.push(str2[index2])
            index2 += 1
        }
        index1 += 1
        index2 += 1
        ans.push(str1[i])
    }
    while (index1 < str1.length) {
        ans.push(str1[index1])
        index1 += 1
    }
    while (index2 < str2.length) {
        ans.push(str2[index2])
        index2 += 1
    }

    return ans.join('')  
};
```
Recover by dp
```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    let l1 = str1.length
    let l2 = str2.length
    const dp = Array(l1 + 1).fill()
        .map(() => Array(l2 + 1).fill(0))
    
    for (let i = 1; i <= l1; i += 1) {
        for (let j = 1; j <= l2; j += 1) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }

    const ans = []
    while (l1 || l2) {
        if (l1 === 0) {
            l2 -= 1
            ans.unshift(str2[l2])
        } else if (l2 === 0) {
            l1 -= 1
            ans.unshift(str1[l1])
        } else if (str1[l1 - 1] === str2[l2 - 1]) {
            l1 -= 1
            l2 -= 1
            ans.unshift(str1[l1])
        } else if (dp[l1][l2] === dp[l1][l2 - 1]) {
            l2 -= 1
            ans.unshift(str2[l2])
        } else {
            l1 -= 1
            ans.unshift(str1[l1])
        }
    }
    
    return ans.join('')
};
```