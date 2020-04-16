### [678\. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)

Difficulty: **Medium**


Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

1.  Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
2.  Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
3.  Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
4.  `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string.
5.  An empty string is also valid.

**Example 1:**  

```
Input: "()"
Output: True
```

**Example 2:**  

```
Input: "(*)"
Output: True
```

**Example 3:**  

```
Input: "(*))"
Output: True
```

**Note:**  

1.  The string size will be in the range [1, 100].


#### Solution

Language: **JavaScript**

DP
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const n = s.length
    const mem = Array(n).fill().map(() => Array(n).fill())
    function dfs(index, count) {
        if (count < 0) return false
        if (index === n) return count === 0
        if (mem[index][count] === undefined) {
            if (s[index] === '(') {
                mem[index][count] = dfs(index + 1, count + 1)
            } else if (s[index] === ')') {
                mem[index][count] = dfs(index + 1, count - 1)
            } else {
                mem[index][count] = dfs(index + 1, count) || dfs(index + 1, count + 1) || dfs(index + 1, count - 1)
            }
        }
        
        return mem[index][count]
    }
    return dfs(0, 0)
};
```

Greedy
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo = 0, hi = 0
    for (let i = 0; i < s.length; i += 1) {
        lo += s[i] === '(' ? 1 : -1
        hi += s[i] === ')' ? -1 : 1
        if (hi < 0) return false
        lo = Math.max(lo, 0)
    }
    return lo === 0
};
```