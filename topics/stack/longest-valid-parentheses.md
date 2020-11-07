### [32\. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)

Difficulty: **Hard**  

Related Topics: [String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

**Example 1:**

```
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

**Example 2:**

```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

**Example 3:**

```
Input: s = ""
Output: 0
```

**Constraints:**

*   `0 <= s.length <= 3 * 10<sup>4</sup>`
*   `s[i]` is `'('`, or `')'`.


#### Solution

Language: **JavaScript**

Stack
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [0]
    let ans = 0
    
    for (let i = 0; i < s.length; i += 1) {
        // console.log(stack)
        const char = s[i]
        let last = stack.pop()
        
        if (last === char || char === '(') {
            stack.push(last)
            stack.push(char)
        } else if (last !== '(' && last !== ')') {
            if (stack.length) {
                let count = last
                last = stack.pop()
                if (last !== char) {
                    count += 2
                    
                    if (stack.length) {
                        const lastCCount = stack.pop()
                        if (lastCCount !== '(' && lastCCount !== ')') {
                            count += lastCCount
                        } else {
                            stack.push(lastCCount)
                        }
                    }
                    
                    stack.push(count)
                    if (count > ans) ans = count
                } else {
                    stack.push(last)
                    stack.push(count)
                    stack.push(char)
                }
            } else {
                stack.push(last)
                stack.push(char)
            }
        } else {
            let count = stack.pop()
            if (count !== '(' && count !== ')') {
                count += 2
                stack.push(count)
                if (count > ans) ans = count
            } else {
                stack.push(count)
                stack.push(2)
                if (!ans) ans = 2
            }
        }
        
    }
    
    return ans
};
```

Stack
https://www.bilibili.com/video/BV1yi4y1G74d?from=search&seid=12749774687150605086
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1]
    let ans = 0
    
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (!stack.length) {
                stack.push(i)
            } else {
                const l = i - stack[stack.length - 1]
                if (l > ans) ans = l
            }
        }
    }
    
    return ans
};
```

DP
https://www.bilibili.com/video/BV1yi4y1G74d?from=search&seid=12749774687150605086
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (!s) return 0
    const n = s.length
    const dp = Array(n).fill(0)
    
    for (let i = 1; i < n; i += 1) {
        if (s[i] === '(') continue
        const last = i - 1 - dp[i - 1]
        if (s[last] === '(') {
            dp[i] = dp[i - 1] + 2 + (last > 0 ? dp[last - 1] : 0)
        }
    }
    
    return Math.max(...dp)
};
```