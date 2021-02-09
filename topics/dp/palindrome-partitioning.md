### [131\. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Backtracking](https://leetcode.com/tag/backtracking/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)


Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return all possible palindrome partitioning of `s`.

A **palindrome** string is a string that reads the same backward as forward.

**Example 1:**

```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

**Example 2:**

```
Input: s = "a"
Output: [["a"]]
```

**Constraints:**

*   `1 <= s.length <= 16`
*   `s` contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length
    const isPalindrome = Array(n).fill().map(() => Array(n).fill(0))
    
    for (let l = 1; l <= n; l += 1) {
        for (let i = 0; i <= n - l; i += 1) {
            const j = i + l - 1
            if (s[i] === s[j]) {
                isPalindrome[i][j] = l <= 2 ? 1 : isPalindrome[i + 1][j - 1]
            }
        }
    }
    
    const ans = []
    function dfs(index, arr) {
        if (index === n) return ans.push([...arr])
        
        let str = ''
        for (let i = index; i < n; i += 1) {
            str += s[i]
            if (isPalindrome[index][i]) {
                arr.push(str)
                dfs(i + 1, arr)
                arr.pop()
            }
        }
    }
    
    dfs(0, [])
    
    return ans
};
```