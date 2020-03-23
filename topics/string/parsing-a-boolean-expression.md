### [1106\. Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)

Difficulty: **Hard**


Return the result of evaluating a given boolean `expression`, represented as a string.

An expression can either be:

*   `"t"`, evaluating to `True`;
*   `"f"`, evaluating to `False`;
*   `"!(expr)"`, evaluating to the logical NOT of the inner expression `expr`;
*   `"&(expr1,expr2,...)"`, evaluating to the logical AND of 2 or more inner expressions `expr1, expr2, ...`;
*   `"|(expr1,expr2,...)"`, evaluating to the logical OR of 2 or more inner expressions `expr1, expr2, ...`

**Example 1:**

```
Input: expression = "!(f)"
Output: true
```

**Example 2:**

```
Input: expression = "|(f,t)"
Output: true
```

**Example 3:**

```
Input: expression = "&(t,f)"
Output: false
```

**Example 4:**

```
Input: expression = "|(&(t,f,t),!(t))"
Output: false
```

**Constraints:**

*   `1 <= expression.length <= 20000`
*   `expression[i]` consists of characters in `{'(', ')', '&', '|', '!', 't', 'f', ','}`.
*   `expression` is a valid expression representing a boolean, as given in the description.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const stack = []
    
    for (let i = 0; i < expression.length; i += 1) {
        const char = expression[i]
        if (char === 't') {
            stack.push(true)
        } else if (char === 'f') {
            stack.push(false)
        } else if (char === ')') {
            const values = []
            while (stack.length) {
                const v = stack.pop()
                if (v === '(') break
                values.push(v)
            }
            const e = stack.pop()
            
            let r
            if (e === '!') {
                r = !values[0]
            } else if (e === '|') {
                r = values.reduce((r, v) => r || v, false)
            } else {
                r = values.reduce((r, v) => r && v, true)
            }
            stack.push(r)
        } else if (char !== ',') {
            stack.push(char)
        }
    }
    
    return stack.pop()
};
```