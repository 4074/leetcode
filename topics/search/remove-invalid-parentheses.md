### [301\. Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Backtracking](https://leetcode.com/tag/backtracking/), [Breadth-First Search](https://leetcode.com/tag/breadth-first-search/)


Given a string `s` that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return _all the possible results_. You may return the answer in **any order**.

**Example 1:**

```
Input: s = "()())()"
Output: ["(())()","()()()"]
```

**Example 2:**

```
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]
```

**Example 3:**

```
Input: s = ")("
Output: [""]
```

**Constraints:**

*   `1 <= s.length <= 25`
*   `s` consists of lowercase English letters and parentheses `'('` and `')'`.
*   There will be at most `20` parentheses in `s`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      left += 1
    } else if (s[i] === ')') {
      if (left) {
        left -= 1
      } else {
        right += 1
      }
    }
  }
  
  const ans = new Set()
  function dfs(i, l, r, str, count) {
    if (l < 0 || r < 0) return
    if (i === s.length) {
      if (l === 0 && r === 0) {
        ans.add(str)
      }
      return
    }
    
    if (s[i] === '(') {
      dfs(i + 1, l, r, str + s[i], count + 1)
      dfs(i + 1, l - 1, r, str , count)
    } else if (s[i] === ')') {
      dfs(i + 1, l, r - 1, str, count)
      if (count) dfs(i + 1, l, r, str + s[i], count - 1)
    } else {
      dfs(i + 1, l, r, str + s[i], count)
    }
  }
  
  dfs(0, left, right, '', 0)
  
  return [...ans]
};
```