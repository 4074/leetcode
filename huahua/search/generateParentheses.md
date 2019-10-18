### [22\. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

Difficulty: **Medium**


Given _n_ pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given _n_ = 3, a solution set is:

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    
    function search(chars, left, right) {
        if (chars.length === n * 2) {
            return result.push(chars.join(''))
        }
        
        if (left < n) {
            chars.push('(')
            search(chars, left + 1, right)
            chars.pop()
        }
        if (right < left) {
            chars.push(')')
            search(chars, left, right + 1)
            chars.pop()
        }
    }
    
    search([], 0, 0)
    
    return result
};
```