### [139\. Word Break](https://leetcode.com/problems/word-break/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given a **non-empty** string _s_ and a dictionary _wordDict_ containing a list of **non-empty** words, determine if _s_ can be segmented into a space-separated sequence of one or more dictionary words.

**Note:**

*   The same word in the dictionary may be reused multiple times in the segmentation.
*   You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

**Example 2:**

```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict)
    const n = s.length
    
    const inDict = Array(n).fill().map(() => Array(n + 1).fill(false))
    for (let i = 0; i < n; i += 1) {
        let str = ''
        for (let j = i; j < n; j += 1) {
            str += s[j]
            inDict[i][str.length] = set.has(str)
        }
    }
    
    const dp = Array(n + 1).fill().map(() => Array(n + 1).fill(false))
    for (let l = 0; l <= n; l += 1) {
        for (let i = 0; i <= n - l; i += 1) {
            if (l === 0) {
                dp[i][l] = true
                continue
            }
            for (let k = 0; k < l; k += 1) {
                dp[i][l] = inDict[i + k][l - k] && dp[i][k]
                if (dp[i][l]) break
            }
        }
    }
    return dp[0][n]
};
```