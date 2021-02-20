### [140\. Word Break II](https://leetcode.com/problems/word-break-ii/)

Difficulty: **Hard**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Backtracking](https://leetcode.com/tag/backtracking/)


Given a **non-empty** string _s_ and a dictionary _wordDict_ containing a list of **non-empty** words, add spaces in _s_ to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

**Note:**

*   The same word in the dictionary may be reused multiple times in the segmentation.
*   You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
```

**Example 2:**

```
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict)
    const n = s.length
    
    const inDict = Array(n).fill().map(() => Array(n + 1).fill(false))
    for (let i = 0; i < n; i += 1) {
        let str = ''
        for (let j = i; j < n; j += 1) {
            str += s[j]
            inDict[i][str.length] = set.has(str) && str
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
                if (inDict[i + k][l - k] && dp[i][k]) {
                    if (!dp[i][l]) dp[i][l] = []
                    dp[i][l].push(i + k)
                }
            }
        }
    }
    
    let ans = []
    function dfs(index, words) {
        if (index === 0) {
            return ans.push(words.join(' '))
        }
        for (let pre of dp[0][index]) {
            words.unshift(inDict[pre][index - pre])
            dfs(pre, words)
            words.shift()
        }
    }
    
    if (dp[0][n]) dfs(n, [])
    
    return ans
};
```