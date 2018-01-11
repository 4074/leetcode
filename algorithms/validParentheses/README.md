### [20\. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

Difficulty: **Easy**

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

The brackets must close in the correct order, `"()"` and `"()[]{}"` are all valid but `"(]"` and `"([)]"` are not.

#### Solution
```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let chars = []
    const rightForLeft = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
​
    for (const c of s) {
        if (rightForLeft[c]) {
            if (chars.pop() !== rightForLeft[c]) {
                return false
            }
        } else {
            chars.push(c)
        }
    }
​
    return !chars.length
};
```