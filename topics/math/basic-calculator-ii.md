### [227\. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)

Difficulty: **Medium**  

Related Topics: [String](https://leetcode.com/tag/string/), [Stack](https://leetcode.com/tag/stack/)


Given a string `s` which represents an expression, _evaluate this expression and return its value_. 

The integer division should truncate toward zero.

**Example 1:**

```
Input: s = "3+2*2"
Output: 7
```

**Example 2:**

```
Input: s = " 3/2 "
Output: 1
```

**Example 3:**

```
Input: s = " 3+5 / 2 "
Output: 5
```

**Constraints:**

*   `1 <= s.length <= 3 * 10<sup>5</sup>`
*   `s` consists of integers and operators `('+', '-', '*', '/')` separated by some number of spaces.
*   `s` represents **a valid expression**.
*   All the integers in the expression are non-negative integers in the range `[0, 2<sup>31</sup> - 1]`.
*   The answer is **guaranteed** to fit in a **32-bit integer**.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const n = s.length
    const stack = []
    
    const isDigit = (c) => c >= '0' && c <= '9'
    
    let i = 0
    while (i < n) {
        const c = s[i]
        if (c !== ' ') {
            if (!isDigit(c)) {
                if (c !== '+') stack.push(c)
            } else {
                let str = s[i]
                while (i < n - 1 && isDigit(s[i + 1])) {
                    str += s[i + 1]
                    i += 1
                }
                let num = parseInt(str)
                if (stack.length && typeof stack[stack.length - 1] === 'string') {
                    const op = stack.pop()
                    if (op === '-') {
                        num = -num
                    } else if (op === '*') {
                        num = stack.pop() * num
                    } else {
                        const left = stack.pop()
                        num = Math.floor(Math.abs(left / num))
                        if (left < 0) num = -num 
                    }
                }
                stack.push(num)
            }
        }
        i += 1
    }
    
    return stack.reduce((sum, v) => sum + v, 0)
};
```