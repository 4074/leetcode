### [1249\. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

Difficulty: **Medium**


Given a string <font face="monospace" style="display: inline;">s</font> of `'('` , `')'` and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting _parentheses string_ is valid and return **any** valid string.

Formally, a _parentheses string_ is valid if and only if:

*   It is the empty string, contains only lowercase characters, or
*   It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
*   It can be written as `(A)`, where `A` is a valid string.

**Example 1:**

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
```

**Example 2:**

```
Input: s = "a)b(c)d"
Output: "ab(c)d"
```

**Example 3:**

```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
```

**Example 4:**

```
Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
```

**Constraints:**

*   `1 <= s.length <= 10^5`
*   `s[i]` is one of  `'('` , `')'` and lowercase English letters`.`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [], arr = s.split('')
    
    for (let i=0; i<s.length; i++) {
        const char = s[i]
        if (char === '(') {
            stack.push(i)
        } else if (char === ')') {
            if (stack.length) {
                stack.pop()
            } else {
                arr[i] = ''
            }
        }
    }
    
    for (const i of stack) {
        arr[i] = ''
    }
    
    return arr.join('')
};
```