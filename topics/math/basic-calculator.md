### [224\. Basic Calculator](https://leetcode.com/problems/basic-calculator/)

Difficulty: **Hard**  

Related Topics: [Math](https://leetcode.com/tag/math/), [Stack](https://leetcode.com/tag/stack/)


Given a string `s` representing an expression, implement a basic calculator to evaluate it.

**Example 1:**

```
Input: s = "1 + 1"
Output: 2
```

**Example 2:**

```
Input: s = " 2-1 + 2 "
Output: 3
```

**Example 3:**

```
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

**Constraints:**

*   `1 <= s.length <= 3 * 10<sup>5</sup>`
*   `s` consists of digits, `'+'`, `'-'`, `'('`, `')'`, and `' '`.
*   `s` represents a valid expression.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = []
    for (const c of s) {
        if (c === ' ') continue
        if (c === '(' || c === "+" || c === "-") {
            stack.push(c)
            continue
        }
        
        let num
        if (c === ')') {
            num = 0
            while (stack.length) {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                    break
                } else {
                    num += stack.pop()
                }
            }
        } else {
            num = parseInt(c)
        }
        
        if (stack.length) {
            if (typeof stack[stack.length - 1] === 'number') {
                const pre = stack.pop() * 10
                if (pre > 0) {
                    num += pre
                } else {
                    num = -1 * num + pre
                }
            } else if (stack[stack.length - 1] === '+') {
                stack.pop()
            } else if (stack[stack.length - 1] === '-') {
                stack.pop()
                num *= -1
            }
        }
        
        stack.push(num)
    }
    
    return stack.reduce((sum, v) => sum + v, 0)
};
```

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const ops = []
    const nums = []
    
    const digits = new Set('0123456789'.split(''))
    
    let level = 0
    let i = 0
    while (i < s.length) {
        const c = s[i]
        switch (c) {
            case ' ': break
            case '(': {
                level += 1
                break
            }
            case ')': {
                level -= 1
                break
            }
            case '+': 
            case '-': {
                if (c === '-') {
                    if (i === 0 || s[i - 1] === '(') {
                        let numStr = '-'
                        while (digits.has(s[i + 1])) {
                            numStr += s[i + 1]
                            i += 1
                        }
                        if (numStr !== '-') {
                            nums.push(parseInt(numStr))
                            break
                        }
                    }
                    
                }
                
                while (ops.length && level <= ops[ops.length - 1][1]) {
                    const op = ops.pop()[0]
                    const right = nums.pop()
                    const left = nums.pop()
                    const res = op === '+' ? left + right : left - right
                    nums.push(res)
                }
                ops.push([c, level])
                break
            }
            default: {
                let numStr = c
                while (i < s.length - 1 && digits.has(s[i + 1])) {
                    numStr += s[i + 1]
                    i += 1
                }
                nums.push(parseInt(numStr))
                break
            }
        }
        i += 1
    }
    
    while (ops.length) {
        const op = ops.pop()[0]
        const right = nums.pop()
        const left = nums.pop() || 0
        const res = op === '+' ? left + right : left - right
        nums.push(res)
    }
    
    return nums[0]
};
```