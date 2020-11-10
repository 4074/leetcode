### [10\. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Backtracking](https://leetcode.com/tag/backtracking/)


Given an input string (`s`) and a pattern (`p`), implement regular expression matching with support for `'.'` and `'*'` where:

*   `'.'` Matches any single character.​​​​
*   `'*'` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Example 4:**

```
Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
```

**Example 5:**

```
Input: s = "mississippi", p = "mis*is*p*."
Output: false
```

**Constraints:**

*   `0 <= s.length <= 20`
*   `0 <= p.length <= 30`
*   `s` contains only lowercase English letters.
*   `p` contains only lowercase English letters, `'.'`, and `'*'`.
*   It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length
    const n = p.length
    const cache = Array(m + 1).fill().map(() => Array(n + 1).fill())
    
    const isCharMatch = (a, b) => a === b || b === '.'
    
    function dfs(i, j) {
        if (i < 0 || j < 0) return false
        if (i === 0 && j === 0) return true
        
        if (cache[i][j] === undefined) {
            if (isCharMatch(s[i - 1], p[j - 1])) {
                cache[i][j] = dfs(i - 1, j - 1)
            } else if (p[j - 1] === '*') {
                let res = dfs(i, j - 2)
                let k = i
                while (k > 0 && isCharMatch(s[k - 1], p[j - 2])) {
                    if (res) break
                    res = dfs(k - 1, j - 2)
                    k -= 1
                }
                cache[i][j] = res
            } else {
                cache[i][j] = false
            }
        }
        
        return cache[i][j]
    }
    
    return dfs(s.length, p.length)
};
```